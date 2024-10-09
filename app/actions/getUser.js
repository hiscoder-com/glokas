import { createClient } from '@/app/supabase/server'

export async function getUser() {
  const supabase = createClient()
  try {
    const { data, error } = await supabase.auth.getUser()

    if (error || !data?.user) {
      return { user: null, error: error || new Error('The user was not found') }
    }

    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('id', data.user.id)
      .single()

    if (userError) {
      return { user: null, error: userError }
    }

    const user = {
      ...userData,
      provider: data.user.app_metadata.provider,
    }
    return { user, error: null }
  } catch (error) {
    return { user: null, error }
  }
}
