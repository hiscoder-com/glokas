import { NextRequest, NextResponse } from 'next/server'

import { createClient } from '@/app/supabase/server'
import { supabaseService } from '@/app/supabase/service'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = request.nextUrl
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/'
  if (code) {
    const supabase = createClient()
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error && data.user.id) {
      const { data: currentUser, error: userError } = await supabase
        .from('users')
        .select('username')
        .eq('id', data.user.id)
        .maybeSingle()

      if (currentUser?.username || userError) {
        return NextResponse.redirect(origin + next)
      }

      let username = (data.user.email || '').split('@')[0]
      username = username.replace(/[^A-Za-z0-9_]/g, '')
      if (username.length < 5) {
        username = username.padStart(5, '0')
      } else if (username.length > 20) {
        username = username.slice(0, 20)
      }

      let dataUser = await supabaseService
        .from('users')
        .select('username')
        .eq('username', username)
        .maybeSingle()

      while (dataUser.data) {
        username = username.slice(0, 15) + '_' + Math.random().toString(36).slice(2, 6)

        dataUser = await supabaseService
          .from('users')
          .select('username')
          .eq('username', username)
          .maybeSingle()
      }

      await supabaseService.from('users').update({ username }).eq('id', data.user.id)

      return NextResponse.redirect(`${origin}${next}`)
    } else {
      return NextResponse.redirect(`${origin}/auth-error`)
    }
  }

  return NextResponse.redirect(`${origin}/auth-error`)
}
