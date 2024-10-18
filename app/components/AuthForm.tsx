'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { Tab, Tabs } from '@nextui-org/tabs'

import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

function AuthForm() {
  const searchParams = useSearchParams()
  const [isSignupSuccess, setIsSignupSuccess] = useState(false)

  return (
    <div className="flex min-h-screen w-full bg-tertiary-500">
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
            {isSignupSuccess ? (
              <div className="mt-16 flex w-full flex-col items-center">
                <Image
                  src="/icons/email.svg"
                  alt="Confirmation Mail Icon"
                  width={106}
                  height={106}
                />
                <p className="my-6 max-w-96 text-center text-xxlarge font-medium">
                  Thank you for signing up! We have sent a confirmation email to the
                  address you provided. To complete your registration, please check your
                  inbox and click on the verification link in the email. This step is
                  necessary to verify your account and activate your profile. If you do
                  not receive the email within a few minutes, please check your spam or
                  junk folder. For further assistance, you can contact our support team.
                </p>
              </div>
            ) : (
              <Tabs
                variant="underlined"
                classNames={{
                  tabList:
                    'w-full flex-shrink-0 flex-grow-0 gap-0 basis-auto p-0 shadow-[inset_0px_-1px_0px_0px_hsl(var(--nextui-black-100))]',
                  cursor: 'bg-secondary-500 w-full h-px',
                  tab: 'pb-2 font-medium text-small h-auto data-[focus-visible=true]:outline-0',
                  tabContent:
                    'text-black-400 group-data-[selected=true]:text-secondary-500',
                  panel: 'shadow-none px-0 scroll-gutter flex-auto pt-10 pb-16',
                }}
              >
                <Tab key="log-in" title="Log in">
                  <LoginForm redirectedFrom={searchParams.get('redirectedFrom')} />
                </Tab>
                <Tab key="sign-up" title="Sign up">
                  <SignUpForm setIsSignupSuccess={setIsSignupSuccess} />
                </Tab>
              </Tabs>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
