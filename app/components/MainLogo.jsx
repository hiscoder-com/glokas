'use client'

import { Image } from '@nextui-org/image'

import { CustomLink } from './CustomLink'

export const MainLogo = () => (
  <CustomLink href="/" className="hover:opacity-100">
    <Image
      removeWrapper
      height={45}
      width={180}
      src="/images/glokas-logo.svg"
      alt="Glokas Logo"
      radius="none"
    />
  </CustomLink>
)
