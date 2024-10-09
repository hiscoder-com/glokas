'use client'

import NextImage from 'next/image'
import Link from 'next/link'

import { Image } from '@nextui-org/image'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar'

import { CustomButton } from './CustomButton'
import { CustomLink } from './CustomLink'

function Navigation({ user }) {
  return (
    <Navbar
      isBordered
      maxWidth="full"
      classNames={{
        wrapper: 'mx-auto w-full max-w-[1806px] px-6 md:px-12',
        base: 'md:py-2',
      }}
    >
      <NavbarContent as="div">
        <NavbarBrand className="mr-0 h-[20px] w-[26px] grow-0 basis-7 md:h-[45px] md:w-[180px] md:basis-48 lg:mr-14">
          <Link href="/">
            <Image
              removeWrapper
              as={NextImage}
              height={45}
              width={180}
              src="/images/glokas-logo.svg"
              alt="Glokas Logo"
              priority
              radius="none"
            />
          </Link>
        </NavbarBrand>

        <NavbarContent className="flex-grow"></NavbarContent>
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <NavbarItem>{user.username}</NavbarItem>
              <NavbarItem>
                <CustomLink href="/api/auth/logout">Logout</CustomLink>
              </NavbarItem>
            </>
          ) : (
            <>
              <NavbarItem>
                <CustomButton as={Link} href={`/login`}>
                  Login
                </CustomButton>
              </NavbarItem>
            </>
          )}
        </div>
      </NavbarContent>
    </Navbar>
  )
}

export default Navigation
