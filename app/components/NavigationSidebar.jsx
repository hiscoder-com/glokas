'use client'

import NextImage from 'next/image'
import Link from 'next/link'

// import { useRouter } from 'next/navigation'

import { Accordion, AccordionItem, Image } from '@nextui-org/react'

// import { CustomButton } from './CustomButton'
import { CustomLink } from './CustomLink'

export const NavigationSidebar = ({ user }) => {
  // const { push } = useRouter()
  const isCurrentPage = 'settings'
  return (
    <nav className="text-black-950 fixed left-0 flex h-[100vh] w-64 flex-col justify-between border border-primary-100 bg-primary-50 px-2 pb-6 pt-8">
      <div className="flex flex-col gap-8">
        <div className="mx-auto">
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
        </div>
        <ul className="flex flex-col text-small">
          <li
            className={`rounded-medium ${isCurrentPage === 'yotube' ? 'bg-primary-200' : ''}`}
          >
            <Accordion
              className="px-0"
              itemClasses={{
                base: 'data-[open=true]:bg-primary-100 rounded-medium px-0 py-2',
              }}
            >
              <AccordionItem
                classNames={{
                  indicator: 'text-large',
                  trigger: 'gap-1 w-full p-2',
                  content: 'p-2 bg-primary-200',
                }}
                key="1"
                aria-label="Accordion 1"
                startContent={
                  <div
                    // onClick={() => {
                    //   push('/youtube')
                    // }}
                    className="text-black-950 flex w-fit items-center gap-3 font-[600]"
                  >
                    <Image
                      src={'/icons/youtube.svg'}
                      alt="youtube"
                      width={18}
                      height={18}
                    />
                    <span>YouTube Automatization</span>
                  </div>
                }
              >
                <CustomLink
                  href="/youtube"
                  className="text-black-950 flex gap-3 text-small"
                >
                  <Image src={'/icons/time.svg'} alt="youtube" width={18} height={18} />
                  <span>All video</span>
                </CustomLink>
              </AccordionItem>
            </Accordion>
          </li>
          <li
            className={`rounded-medium ${isCurrentPage === 'settings' ? 'bg-primary-200' : ''} p-2`}
          >
            <CustomLink href="/settings" className="text-black-950 flex gap-3 text-small">
              <Image src={'/icons/settings.svg'} alt="settings" width={18} height={18} />
              <span>Settings</span>
            </CustomLink>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-9">
        <div className="w-full rounded-large bg-primary-200 px-3 py-3.5">
          <ul>
            <li className="flex items-center justify-between">
              <span className="text-tiny text-primary-900">Used</span>
              <span className="text-small font-bold">267</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-tiny text-primary-900">Remaining</span>
              <span className="text-small font-bold">49733</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-tiny text-primary-900">Days left</span>
              <span className="text-small font-bold">23</span>
            </li>
          </ul>
        </div>
        {user && (
          <CustomLink
            href="/api/auth/logout"
            className="text-black-950 flex items-center gap-3"
          >
            <Image src={'/icons/logout.svg'} alt="youtube" width={18} height={18} />
            <span>Log out</span>
          </CustomLink>
        )}
      </div>
    </nav>
  )
}
