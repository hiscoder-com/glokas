// import { headers } from 'next/headers'

import ResetForm from '@/app/components/ResetForm'

// import { redirect } from 'next/navigation'

export default async function ResetPassword() {
  // export default async function ResetPassword({ searchParams }) {
  // const headersList = headers()
  // const host = headersList.get('host')
  // const protocol = headersList.get('x-forwarded-proto') || 'http'
  // const origin = `${protocol}://${host}`
  // const code = searchParams['code'] ?? false

  // if (!code) {
  //   return redirect(`${origin}/auth-error`)
  // }

  return <ResetForm />
}
