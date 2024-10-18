import React, { useState } from 'react'

import Image from 'next/image'

import { ApiResponse, errorField } from '@/app/types/api'

import { signup } from '../actions/authActions'
import { CustomButton } from './CustomButton'
import { CustomInput } from './CustomInput'
import PasswordInput from './PasswordInput'
import PasswordStrengthMeter from './PasswordStrengthMeter'

interface FormProps {
  setIsSignupSuccess: (value: boolean) => void
}

const SignUpForm: React.FC<FormProps> = ({ setIsSignupSuccess }) => {
  const [validationState, setValidationState] = useState<{
    message: string
    fields: errorField[]
  }>({
    message: '',
    fields: [],
  })
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)
  const [passwordRepeat, setPasswordRepeat] = useState('')

  const handleSignup = async () => {
    setValidationState({ message: '', fields: [] })
    const errors: errorField[] = []

    if (!mail) errors.push({ field: 'email', message: 'Email is required' })
    if (!password) errors.push({ field: 'password', message: 'Password is required' })
    if (!username) errors.push({ field: 'username', message: 'Username is required' })
    if (password !== passwordRepeat) {
      errors.push({ field: 'passwordRepeat', message: 'Passwords do not match' })
    }

    if (errors.length > 0) {
      setValidationState({ message: 'Validation errors occurred', fields: errors })
      return
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(mail)) {
      errors.push({ field: 'email', message: 'Unsupported email format' })
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      errors.push({
        field: 'username',
        message:
          'Only letters A-Z, a-z, numbers or underscore please (no spaces or special characters)',
      })
    }
    if (username.length < 5 || username.length > 20) {
      errors.push({
        field: 'username',
        message: 'Username must be between 5 and 20 characters long',
      })
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

    if (errors.length > 0) {
      setValidationState({ message: 'Validation errors occurred', fields: errors })
      return
    }

    setLoading(true)
    try {
      const response: ApiResponse<unknown> = await signup(mail, password, username)

      if (response.status === 'error') {
        setValidationState({
          message: response.message,
          fields: response?.errors || [],
        })
      } else {
        setIsSignupSuccess(true)
      }
    } catch (error) {
      console.error(error)
      setValidationState({
        message: 'Something went wrong. Please try again',
        fields: [],
      })
    } finally {
      setLoading(false)
    }
  }

  const getFieldError = (field: string) =>
    validationState.fields.find((error) => error.field === field)?.message

  return (
    <>
      <label
        className={`mb-2 text-medium font-medium ${validationState?.fields.some((error) => error.field === 'username') ? 'text-red-500' : ''}`}
      >
        Username
      </label>
      <CustomInput
        variant="bordered"
        size="sm"
        isRequired
        autoComplete="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        isInvalid={validationState?.fields.some((error) => error.field === 'username')}
        errorMessage={validationState?.fields
          .filter((error) => error.field === 'username')
          .map((error) => <p key={error.message}>{error.message}</p>)}
        endContent={
          validationState?.fields.some((error) => error.field === 'username') && (
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
        className={`mb-2 text-medium font-medium ${validationState?.fields.some((error) => error.field === 'email') ? 'text-red-500' : ''}`}
      >
        Email
      </label>
      <CustomInput
        type="email"
        variant="bordered"
        size="sm"
        autoComplete="email"
        isRequired
        value={mail}
        onChange={(e) => setMail(e.target.value)}
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

      <PasswordInput
        label="Password"
        value={password}
        onChange={setPassword}
        error={getFieldError('password')}
      />

      <PasswordInput
        label="Confirm Password"
        value={passwordRepeat}
        onChange={setPasswordRepeat}
        error={getFieldError('passwordRepeat')}
      />

      {password.length > 0 && (
        <div className="py-1.5">
          <PasswordStrengthMeter password={password} />
        </div>
      )}

      {validationState?.message && (
        <p className="my-4 text-small text-red-500">{validationState.message}</p>
      )}

      <CustomButton fullWidth onClick={handleSignup} isLoading={loading} className="mt-3">
        Sign up
      </CustomButton>
    </>
  )
}

export default SignUpForm
