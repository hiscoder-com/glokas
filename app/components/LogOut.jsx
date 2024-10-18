'use client'

import { Image } from '@nextui-org/image'

import { CustomLink } from './CustomLink'

export const LogOut = () => (
  <CustomLink
    href="/api/auth/logout"
    className="flex items-center gap-3 text-sm font-medium text-black-950"
  >
    <Image src="/icons/logout.svg" alt="logout" width={18} height={18} radius="none" />
    <span>Log out</span>
  </CustomLink>
)
