'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { Tab, Tabs } from '@nextui-org/tabs'

import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import SuccessSignUpForm from './SuccessSignUp'

function AuthForm() {
  const searchParams = useSearchParams()

  const [isSignupSuccess, setIsSignupSuccess] = useState(false)

  if (isSignupSuccess) {
    return <SuccessSignUpForm />
  }

  return (
    <div className="flex min-h-screen w-full bg-primary-900">
      <div className="ml-auto flex w-full flex-col justify-center bg-background xl:w-[44%]">
        <div className="mx-auto mt-20 flex h-full w-full flex-col items-center overflow-hidden px-5 md:mt-48 md:w-[54%] md:px-0">
          <Link href="/" className="mb-20">
            <Image
              src="/images/glokas-logo.svg"
              alt="glokas logo"
              width={341}
              height={59}
            />
          </Link>
          <div className="flex w-full flex-grow flex-col overflow-hidden">
            <Tabs
              variant="underlined"
              classNames={{
                tabList:
                  'w-full flex-shrink-0 flex-grow-0 gap-0 basis-auto p-0 shadow-[inset_0px_-1px_0px_0px_hsl(var(--nextui-secondary-100))]',
                cursor: 'bg-primary w-full h-px',
                tab: 'pb-2 font-medium text-small h-auto data-[focus-visible=true]:outline-0',
                tabContent: 'text-[#888888] group-data-[selected=true]:text-primary',
                panel: 'shadow-none px-0 scroll-gutter flex-auto pt-10 pb-16',
                base: '',
              }}
            >
              <Tab key="log-in" title="Log in">
                <LoginForm redirectedFrom={searchParams.get('redirectedFrom')} />
              </Tab>
              <Tab key="sign-up" title="Sign up">
                <SignUpForm setIsSignupSuccess={setIsSignupSuccess} />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
