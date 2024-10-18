import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { ApiResponse, errorField } from '@/app/types/api'

import { login } from '../actions/authActions'
import { CustomButton } from './CustomButton'
import { CustomInput } from './CustomInput'
import { CustomLink } from './CustomLink'
import EyePassword from './EyePassword'

interface FormProps {
  redirectedFrom?: string | null
}

const LoginForm: React.FC<FormProps> = ({ redirectedFrom }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [validationState, setValidationState] = useState<{
    message: string
    fields: errorField[]
  }>({
    message: '',
    fields: [],
  })
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const togglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev)

  const handleLogin = async () => {
    setValidationState({ message: '', fields: [] })
    const errors: errorField[] = []

    if (!mail) {
      errors.push({ field: 'email', message: 'Email is required' })
    }

    if (!password) {
      errors.push({ field: 'password', message: 'Password is required' })
    }

    if (errors.length > 0) {
      setValidationState({ message: 'Validation errors occurred', fields: errors })
      return
    }

    setLoading(true)

    try {
      const response: ApiResponse<unknown> = await login(mail, password)

      if (response.status === 'error') {
        setValidationState({
          message: response.message,
          fields: response?.errors || [],
        })
      } else {
        router.push(redirectedFrom ?? '/')
        router.refresh()
      }
    } catch (error) {
      console.error(error)
      setValidationState({
        message: 'Something went wrong. Please try again.',
        fields: [],
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <label
        className={`mb-2 text-medium font-medium ${validationState?.fields.some((error) => error.field === 'email') ? 'text-red-500' : ''}`}
      >
        Email
      </label>
      <CustomInput
        type="email"
        variant="bordered"
        size="sm"
        autoComplete="email"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        isRequired
        isInvalid={validationState?.fields.some((error) => error.field === 'email')}
        errorMessage={validationState?.fields
          .filter((error) => error.field === 'email')
          .map((error) => <p key={error.message}>{error.message}</p>)}
        endContent={
          validationState?.fields.some((error) => error.field === 'email') && (
            <Image
              src={'/icons/warning.svg'}
              alt="warning"
              width={18}
              height={18}
              className="mr-2 h-[38px] w-[38px] p-2"
            />
          )
        }
      />

      <label
        className={`mb-2 text-medium font-medium ${validationState?.fields.some((error) => error.field === 'password') ? 'text-red-500' : ''}`}
      >
        Password
      </label>
      <CustomInput
        variant="bordered"
        size="sm"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        endContent={
          <>
            <EyePassword
              isVisible={isPasswordVisible}
              toggleVisibility={togglePasswordVisibility}
            />
            {validationState?.fields.some((error) => error.field === 'password') && (
              <Image
                src={'/icons/warning.svg'}
                alt="warning"
                width={18}
                height={18}
                className="mr-2 h-[38px] w-[38px] p-2 pl-0"
              />
            )}
          </>
        }
        type={isPasswordVisible ? 'text' : 'password'}
        isRequired
        isInvalid={validationState?.fields.some((error) => error.field === 'password')}
        errorMessage={validationState?.fields
          .filter((error) => error.field === 'password')
          .map((error) => <p key={error.message}>{error.message}</p>)}
      />

      {validationState?.message && (
        <p className="my-4 text-small text-red-500">{validationState.message}</p>
      )}

      <CustomButton fullWidth onClick={handleLogin} isLoading={loading} className="mt-3">
        Log in
      </CustomButton>

      <CustomLink
        as={Link}
        color="primary"
        size="md"
        className="mt-7 flex justify-center font-medium"
        href="/forgot-password"
      >
        Forgot password?
      </CustomLink>
    </>
  )
}

export default LoginForm
