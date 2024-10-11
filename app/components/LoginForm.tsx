import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Checkbox } from '@nextui-org/react'

import { ApiResponse, errorField } from '@/app/types/api'

import { login } from '../actions/authActions'
import { CustomButton } from './CustomButton'
import { CustomInput } from './CustomInput'
import { CustomLink } from './CustomLink'
import EyePassword from './EyePassword'

interface LoginFormProps {
  redirectedFrom?: string | null
}

const LoginForm: React.FC<LoginFormProps> = ({ redirectedFrom }) => {
  const [isLoginPasswordVisible, setIsLoginPasswordVisible] = useState(false)
  const [loginErrors, setLoginErrors] = useState<{
    message: string
    fields: errorField[]
  }>({
    message: '',
    fields: [],
  })
  const [emailLogin, setEmailLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const toggleLoginPasswordVisibility = () => setIsLoginPasswordVisible((prev) => !prev)

  const handleLogin = async () => {
    setLoginErrors({ message: '', fields: [] })
    const errors: errorField[] = []

    if (!emailLogin) {
      errors.push({ field: 'email', message: 'Email is required' })
    }

    if (!passwordLogin) {
      errors.push({ field: 'password', message: 'Password is required' })
    }

    if (errors.length > 0) {
      setLoginErrors({ message: 'Validation errors occurred', fields: errors })
      return
    }

    setLoading(true)

    try {
      const response: ApiResponse<unknown> = await login(emailLogin, passwordLogin)

      if (response.status === 'error') {
        setLoginErrors({
          message: response.message,
          fields: response?.errors || [],
        })
      } else {
        router.push(redirectedFrom ?? '/')
        router.refresh()
      }
    } catch (error) {
      console.error(error)
      setLoginErrors({ message: 'Something went wrong. Please try again.', fields: [] })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <label
        className={`mb-2 text-medium font-medium ${loginErrors?.fields.some((error) => error.field === 'email') ? 'text-danger' : ''}`}
      >
        Username or email
      </label>
      <CustomInput
        type="email"
        variant="bordered"
        size="sm"
        autoComplete="email"
        value={emailLogin}
        onChange={(e) => setEmailLogin(e.target.value)}
        isRequired
        isInvalid={loginErrors?.fields.some((error) => error.field === 'email')}
        errorMessage={loginErrors?.fields
          .filter((error) => error.field === 'email')
          .map((error) => <p key={error.message}>{error.message}</p>)}
        endContent={
          loginErrors?.fields.some((error) => error.field === 'email') && (
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
        className={`mb-2 text-medium font-medium ${loginErrors?.fields.some((error) => error.field === 'password') ? 'text-danger' : ''}`}
      >
        Password
      </label>
      <CustomInput
        variant="bordered"
        size="sm"
        value={passwordLogin}
        onChange={(e) => setPasswordLogin(e.target.value)}
        endContent={
          <>
            <EyePassword
              isVisible={isLoginPasswordVisible}
              toggleVisibility={toggleLoginPasswordVisibility}
            />
            {loginErrors?.fields.some((error) => error.field === 'password') && (
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
        type={isLoginPasswordVisible ? 'text' : 'password'}
        isRequired
        isInvalid={loginErrors?.fields.some((error) => error.field === 'password')}
        errorMessage={loginErrors?.fields
          .filter((error) => error.field === 'password')
          .map((error) => <p key={error.message}>{error.message}</p>)}
      />

      {loginErrors?.message && (
        <p className="my-4 text-small text-danger">{loginErrors.message}</p>
      )}

      <Checkbox
        size="sm"
        radius="lg"
        className="mb-4 font-medium"
        classNames={{ label: 'text-medium' }}
      >
        Remember me
      </Checkbox>

      <CustomButton fullWidth onClick={handleLogin} isLoading={loading}>
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
