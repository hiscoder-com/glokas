'use client'

import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

import { CustomButton } from './CustomButton'
import { CustomLink } from './CustomLink'
import PasswordInput from './PasswordInput'
import PasswordStrengthMeter from './PasswordStrengthMeter'

interface ErrorField {
  field: string
  message: string
}

interface ResetErrors {
  message: string
  fields: ErrorField[]
}

export default function ResetForm(): JSX.Element {
  const router = useRouter()
  const searchParams = useSearchParams()
  const code = searchParams.get('code')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [resetErrors, setResetErrors] = useState<ResetErrors>({
    message: '',
    fields: [],
  })

  const handleReset = async () => {
    setResetErrors({ message: '', fields: [] })
    const errors: ErrorField[] = []
    if (!password) {
      errors.push({ field: 'password', message: 'Password is required' })
    }
    if (!confirmPassword) {
      errors.push({ field: 'confirmPassword', message: 'Confirm Password is required' })
    }
    if (errors.length > 0) {
      setResetErrors({
        message: 'Validation errors occurred',
        fields: errors,
      })
      return
    }

    if (password.length < 6) {
      errors.push({
        field: 'password',
        message: 'The password must be at least 6 characters',
      })
    }

    let validGroups = 0
    if (/\d/.test(password)) validGroups++
    if (/[a-z]/.test(password)) validGroups++
    if (/[A-Z]/.test(password)) validGroups++
    if (/[^\w]/.test(password)) validGroups++

    if (validGroups < 2) {
      errors.push({
        field: 'password',
        message:
          'The password must contain at least 2 groups: digits, lowercase letters, uppercase letters, special characters',
      })
    }

    if (password !== confirmPassword) {
      errors.push({ field: 'confirmPassword', message: 'Passwords do not match' })
    }
    if (errors.length > 0) {
      setResetErrors({
        message: 'Validation errors occurred',
        fields: errors,
      })
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password,
          confirmPassword,
          code,
        }),
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        setResetErrors({
          message: errorResponse.message,
          fields: errorResponse?.errors || [],
        })
        setLoading(false)
        return
      }
      setLoading(false)
      router.push('/')
    } catch (error) {
      console.log({ error })
      setResetErrors({
        message: error instanceof Error ? error.message : 'An unknown error occurred.',
        fields: [],
      })
      setLoading(false)
    }
  }

  const getFieldError = (field: string): string | undefined =>
    resetErrors.fields.find((error) => error.field === field)?.message

  return (
    <div className="flex min-h-screen w-full bg-secondary-900">
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

          <div className="w-full">
            <PasswordInput
              label="New Password"
              value={password}
              onChange={setPassword}
              error={getFieldError('password')}
            />

            <PasswordInput
              label="Repeat new password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              error={getFieldError('confirmPassword')}
            />

            {password.length > 0 && (
              <div className="py-1.5">
                <PasswordStrengthMeter password={password} />
              </div>
            )}

            {resetErrors?.message && (
              <p className="my-4 text-small text-red-500">{resetErrors.message}</p>
            )}

            <CustomButton
              fullWidth
              onClick={handleReset}
              isDisabled={password === '' || confirmPassword === '' || loading}
              color="primary"
              className="mt-3"
            >
              Change Password
            </CustomButton>

            <CustomLink
              as={Link}
              color="primary"
              size="md"
              className="mt-7 flex justify-center font-medium"
              href="/"
            >
              Cancel
            </CustomLink>
          </div>
        </div>
      </div>
    </div>
  )
}
