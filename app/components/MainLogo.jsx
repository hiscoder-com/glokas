import Image from 'next/image'
import Link from 'next/link'

export const MainLogo = () => (
  <Link href="/" className="hover:opacity-100">
    <Image
      removeWrapper
      height={45}
      width={180}
      src="/images/glokas-logo.svg"
      alt="Glokas Logo"
      radius="none"
    />
  </Link>
)
