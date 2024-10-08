'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

import { CustomButton } from './CustomButton'
import { CustomInput } from './CustomInput'
import { CustomLink } from './CustomLink'
import EyePassword from './EyePassword'
import PasswordStrengthMeter from './PasswordStrengthMeter'

export default function ResetForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const code = searchParams.get('code')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isVisibleConfirm, setIsVisibleConfirm] = useState(false)
  const [resetErrors, setResetErrors] = useState({
    message: '',
    fields: [],
  })

  const toggleVisibility = () => setIsVisible((prev) => !prev)
  const toggleVisibilityConfirm = () => setIsVisibleConfirm((prev) => !prev)

  const handleReset = async (e) => {
    e.preventDefault()
    setResetErrors({ message: '', fields: [] })
    const errors = []
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
        message: error.message || 'An unknown error occurred.',
        fields: [],
      })
      setLoading(false)
    }
  }

  return (
    <>
      <div className="z-50 flex h-[90vh] w-[90vw] flex-row overflow-hidden rounded-medium">
        <div className="flex h-full w-full shrink-0 flex-col items-center bg-background px-14 pb-0 pt-5 md:w-[400px] lg:w-[480px]">
          <Link href="/" className="mb-10">
            <Image
              src="/images/glokas-logo.svg"
              alt="glokas logo"
              width={181}
              height={45}
            />
          </Link>
          <div className="flex w-full flex-col gap-7">
            <div>
              <label
                className={`mb-2 text-medium font-medium ${resetErrors?.fields.some((error) => error.field === 'password') ? 'text-danger' : ''}`}
              >
                *New Password
                <CustomInput
                  variant="bordered"
                  size="sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  endContent={
                    <EyePassword
                      isVisible={isVisible}
                      toggleVisibility={toggleVisibility}
                    />
                  }
                  type={isVisible ? 'text' : 'password'}
                  isRequired
                  isInvalid={resetErrors?.fields.some(
                    (error) => error.field === 'password'
                  )}
                  errorMessage={resetErrors?.fields
                    .filter((error) => error.field === 'password')
                    .map((error) => <p key={error.message}>{error.message}</p>)}
                />
              </label>
              <label
                className={`mb-2 text-medium font-medium ${resetErrors?.fields.some((error) => error.field === 'confirmPassword') ? 'text-danger' : ''}`}
              >
                *Enter New Password Again
                <CustomInput
                  variant="bordered"
                  size="sm"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  endContent={
                    <EyePassword
                      isVisible={isVisibleConfirm}
                      toggleVisibility={toggleVisibilityConfirm}
                    />
                  }
                  type={isVisibleConfirm ? 'text' : 'password'}
                  isRequired
                  isInvalid={resetErrors?.fields.some(
                    (error) => error.field === 'confirmPassword'
                  )}
                  errorMessage={resetErrors?.fields
                    .filter((error) => error.field === 'confirmPassword')
                    .map((error) => <p key={error.message}>{error.message}</p>)}
                />
              </label>
              <PasswordStrengthMeter password={password} />
            </div>
            <div>
              {resetErrors?.message && (
                <p className="mb-2 text-small text-danger">{resetErrors.message}</p>
              )}
              <CustomButton
                fullWidth
                onClick={handleReset}
                isDisabled={password === '' || confirmPassword === '' || loading}
                color="primary"
              >
                Change Password
              </CustomButton>
            </div>
            <CustomLink
              as={Link}
              color="primary"
              size="md"
              className="flex justify-center font-[500]"
              href="/"
            >
              Cancel
            </CustomLink>
          </div>
        </div>
        <div
          className="hidden h-full w-full bg-cover bg-center md:block"
          style={{ backgroundImage: 'url(/ship.webp)' }}
        ></div>
      </div>
    </>
  )
}
