'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { forgotPassword } from '@/app/actions/authActions'
import { CustomButton } from '@/app/components/CustomButton'
import { CustomInput } from '@/app/components/CustomInput'

import { CustomLink } from './CustomLink'

export default function ForgotForm() {
  const [email, setEmail] = useState('')
  const [data, setData] = useState(null)
  const [errors, setErrors] = useState(null)
  const [loading, setLoading] = useState(false)

  const emailPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/

  const handle = async (event) => {
    setLoading(true)
    setErrors(null)
    event.preventDefault()
    const errors = []
    if (!email) {
      errors.push({ field: 'email', message: 'Email is required' })
      setErrors({
        message: '',
        fields: errors,
      })
      setLoading(false)
      return
    }

    if (!emailPattern.test(email)) {
      errors.push({ field: 'email', message: 'Unsupported email format' })
      setErrors({
        message: '',
        fields: errors,
      })
      setLoading(false)
      return
    }

    const response = await forgotPassword({ email })
    if (response.status === 'error') {
      setErrors({
        message: response.message,
        fields: response?.errors || [],
      })
    } else {
      setData(response.data)
    }
    setLoading(false)
  }

  return (
    <div className="flex h-screen w-full bg-tertiary-500">
      <div className="ml-auto flex w-full flex-col items-center justify-center bg-background xl:w-[44%]">
        <div className="mx-auto flex w-full flex-col items-center px-5 md:w-[54%] md:px-0">
          <Link href="/" className="mb-20">
            <Image
              src="/images/glokas-logo.svg"
              alt="Glokas logo"
              width={341}
              height={59}
            />
          </Link>
          {data ? (
            <div className="mt-16 flex w-full flex-col items-center">
              <Image
                src="/icons/email.svg"
                alt="Confirmation Mail Icon"
                width={106}
                height={106}
              />
              <p className="my-6 max-w-96 text-center text-xxlarge font-medium">
                We have sent an email to your address. Please check your inbox and follow
                the instructions to reset your password.
              </p>
            </div>
          ) : (
            <div>
              {/* TODO: add Helper text here */}
              <p className="mb-6 w-full rounded-xlarge bg-tertiary-100 p-4 text-small font-medium text-tertiary-700">
                Helper text: Lorem ipsum dolor sit amet consectetur. Id enim eu maecenas
                at. Tortor diam nisl eu suspendisse eros scelerisque. Elementum et neque
                viverra ipsum faucibus. Porttitor et nisi aenean id dui risus quis nunc
                ut.
              </p>
              <label
                htmlFor="email"
                className={`text-medium font-medium ${errors?.fields.some((error) => error.field === 'email') ? 'text-red-500' : ''}`}
              >
                Write your email
              </label>
              <CustomInput
                type="email"
                variant="bordered"
                size="sm"
                isRequired
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={errors?.fields.some((error) => error.field === 'email')}
                errorMessage={errors?.fields
                  .filter((error) => error.field === 'email')
                  .map((error) => <p key={error.message}>{error.message}</p>)}
              />
              {errors?.message && (
                <p className="text-small text-red-500">{errors.message}</p>
              )}
              <CustomButton
                fullWidth
                onClick={handle}
                isDisabled={!emailPattern.test(email)}
                isLoading={loading}
                color="primary"
                className="mb-6 mt-4"
              >
                Reset my password
              </CustomButton>
              <CustomLink
                as={Link}
                color="primary"
                size="md"
                className="mb-3 flex justify-center font-medium"
                href="/login"
              >
                Cancel
              </CustomLink>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
