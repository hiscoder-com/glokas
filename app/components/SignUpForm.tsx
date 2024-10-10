import React, { useState } from 'react'

import Image from 'next/image'

import { ApiResponse, errorField } from '@/app/types/api'

import { signup } from '../actions/authActions'
import { CustomButton } from './CustomButton'
import { CustomInput } from './CustomInput'
import EyePassword from './EyePassword'
import PasswordStrengthMeter from './PasswordStrengthMeter'

interface SignUpFormProps {
  setIsSignupSuccess: (value: boolean) => void
}

const SignUpForm: React.FC<SignUpFormProps> = ({ setIsSignupSuccess }) => {
  const [isSignupPasswordVisible, setIsSignupPasswordVisible] = useState(false)
  const [isSignupRepeatPasswordVisible, setIsSignupRepeatPasswordVisible] =
    useState(false)
  const [signupErrors, setSignupErrors] = useState<{
    message: string
    fields: errorField[]
  }>({
    message: '',
    fields: [],
  })
  const [emailSignup, setEmailSignup] = useState('')
  const [passwordSignup, setPasswordSignup] = useState('')
  const [usernameSignup, setUsernameSignup] = useState('')
  const [loading, setLoading] = useState(false)
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [passwordsMatch, setPasswordsMatch] = useState(true)

  const toggleSignupVisibility = () => setIsSignupPasswordVisible((prev) => !prev)
  const toggleSignupRepeatPasswordVisibility = () =>
    setIsSignupRepeatPasswordVisible((prev) => !prev)

  const handleSignup = async () => {
    setSignupErrors({ message: '', fields: [] })
    const errors: errorField[] = []

    if (!emailSignup) errors.push({ field: 'email', message: 'Email is required' })
    if (!passwordSignup)
      errors.push({ field: 'password', message: 'Password is required' })
    if (!usernameSignup)
      errors.push({ field: 'username', message: 'Username is required' })
    if (passwordSignup !== passwordRepeat) {
      errors.push({ field: 'passwordRepeat', message: 'Passwords do not match' })
      setPasswordsMatch(false)
    } else {
      setPasswordsMatch(true)
    }

    if (errors.length > 0) {
      setSignupErrors({ message: 'Validation errors occurred', fields: errors })
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailSignup)) {
      errors.push({ field: 'email', message: 'Unsupported email format' })
    }
    if (!/^[a-zA-Z0-9_]+$/.test(usernameSignup)) {
      errors.push({
        field: 'username',
        message:
          'Only letters A-Z, a-z, numbers or underscore please (no spaces or special characters).',
      })
    }
    if (usernameSignup.length < 5 || usernameSignup.length > 20) {
      errors.push({
        field: 'username',
        message: 'Username must be between 5 and 20 characters long.',
      })
    }
    if (passwordSignup.length < 6) {
      errors.push({
        field: 'password',
        message: 'The password must be at least 6 characters',
      })
    }

    let validGroups = 0
    if (/\d/.test(passwordSignup)) validGroups++
    if (/[a-z]/.test(passwordSignup)) validGroups++
    if (/[A-Z]/.test(passwordSignup)) validGroups++
    if (/[^\w]/.test(passwordSignup)) validGroups++

    if (validGroups < 2) {
      errors.push({
        field: 'password',
        message:
          'The password must contain at least 2 groups: digits, lowercase letters, uppercase letters, special characters',
      })
    }

    if (errors.length > 0) {
      setSignupErrors({ message: 'Validation errors occurred', fields: errors })
      return
    }

    setLoading(true)
    try {
      const response: ApiResponse<unknown> = await signup(
        emailSignup,
        passwordSignup,
        usernameSignup
      )

      if (response.status === 'error') {
        setSignupErrors({
          message: response.message,
          fields: response?.errors || [],
        })
      } else {
        setIsSignupSuccess(true)
      }
    } catch (error) {
      console.error(error)
      setSignupErrors({ message: 'Something went wrong. Please try again.', fields: [] })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <label
        className={`mb-2 text-medium font-medium ${signupErrors?.fields.some((error) => error.field === 'username') ? 'text-danger' : ''}`}
      >
        Username
      </label>
      <CustomInput
        variant="bordered"
        size="sm"
        isRequired
        autoComplete="username"
        value={usernameSignup}
        onChange={(e) => setUsernameSignup(e.target.value)}
        isInvalid={signupErrors?.fields.some((error) => error.field === 'username')}
        errorMessage={signupErrors?.fields
          .filter((error) => error.field === 'username')
          .map((error) => <p key={error.message}>{error.message}</p>)}
        endContent={
          signupErrors?.fields.some((error) => error.field === 'username') && (
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
        className={`mb-2 text-medium font-medium ${signupErrors?.fields.some((error) => error.field === 'email') ? 'text-danger' : ''}`}
      >
        Email
      </label>
      <CustomInput
        type="email"
        variant="bordered"
        size="sm"
        autoComplete="email"
        isRequired
        value={emailSignup}
        onChange={(e) => setEmailSignup(e.target.value)}
        isInvalid={signupErrors?.fields.some((error) => error.field === 'email')}
        errorMessage={signupErrors?.fields
          .filter((error) => error.field === 'email')
          .map((error) => <p key={error.message}>{error.message}</p>)}
        endContent={
          signupErrors?.fields.some((error) => error.field === 'email') && (
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
        className={`mb-2 text-medium font-medium ${signupErrors?.fields.some((error) => error.field === 'password') ? 'text-danger' : ''}`}
      >
        Password
      </label>
      <CustomInput
        variant="bordered"
        size="sm"
        value={passwordSignup}
        onChange={(e) => setPasswordSignup(e.target.value)}
        endContent={
          <>
            <EyePassword
              isVisible={isSignupPasswordVisible}
              toggleVisibility={toggleSignupVisibility}
            />
            {signupErrors?.fields.some((error) => error.field === 'password') && (
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
        type={isSignupPasswordVisible ? 'text' : 'password'}
        isRequired
        isInvalid={signupErrors?.fields.some((error) => error.field === 'password')}
        errorMessage={signupErrors?.fields
          .filter((error) => error.field === 'password')
          .map((error) => <p key={error.message}>{error.message}</p>)}
      />

      <label
        className={`mb-2 text-medium font-medium ${!passwordsMatch || signupErrors?.fields.some((error) => error.field === 'passwordRepeat') ? 'text-danger' : ''}`}
      >
        Repeat Password
      </label>
      <CustomInput
        variant="bordered"
        size="sm"
        value={passwordRepeat}
        onChange={(e) => setPasswordRepeat(e.target.value)}
        endContent={
          <>
            <EyePassword
              isVisible={isSignupRepeatPasswordVisible}
              toggleVisibility={toggleSignupRepeatPasswordVisibility}
            />
            {(!passwordsMatch ||
              signupErrors?.fields.some((error) => error.field === 'passwordRepeat')) && (
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
        type={isSignupRepeatPasswordVisible ? 'text' : 'password'}
        isRequired
        isInvalid={
          !passwordsMatch ||
          signupErrors?.fields.some((error) => error.field === 'passwordRepeat')
        }
        errorMessage={
          !passwordsMatch
            ? 'Passwords do not match'
            : signupErrors?.fields
                .filter((error) => error.field === 'passwordRepeat')
                .map((error) => <p key={error.message}>{error.message}</p>)
        }
      />

      {passwordSignup.length > 0 && (
        <div className="mb-5">
          <PasswordStrengthMeter password={passwordSignup} />
        </div>
      )}

      {signupErrors?.message && (
        <p className="my-4 text-small text-danger">{signupErrors.message}</p>
      )}

      <CustomButton fullWidth onClick={handleSignup} isLoading={loading}>
        Sign up
      </CustomButton>
    </>
  )
}

export default SignUpForm
