import { getUser } from '@/app/actions/getUser'

import Email from './components/Email'
import PasswordRestore from './components/PasswordRestore'
import UsernameEdit from './components/UsernameEdit'

export const dynamic = 'force-dynamic'

export default async function EditUser() {
  let user = null

  try {
    const result = await getUser()
    if (result.error) throw result.error
    user = result.user
  } catch (err) {
    console.error(err)
  }

  return (
    <div className="mx-auto mt-5 w-full max-w-5xl">
      <PasswordRestore userInfo={user} />
      <hr className="my-6" />
      <Email userInfo={user} />
      <hr className="my-6" />
      <UsernameEdit userInfo={user} />
    </div>
  )
}
