import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import ResetForm from '@/app/components/ResetForm'

export default async function ResetPassword({ searchParams }) {
  const headersList = headers()
  const host = headersList.get('host')
  const protocol = headersList.get('x-forwarded-proto') || 'http'
  const origin = `${protocol}://${host}`
  const code = searchParams['code'] ?? false

  if (!code) {
    return redirect(`${origin}/auth-error`)
  }

  return <ResetForm />
}
