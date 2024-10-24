import Image from 'next/image'
import Link from 'next/link'

export const LogOut = () => (
  <Link
    href="/api/auth/logout"
    className="flex items-center gap-3 p-2 text-sm font-medium text-black-950"
  >
    <Image src="/icons/logout.svg" alt="logout" width={18} height={18} />
    <span>Log out</span>
  </Link>
)
