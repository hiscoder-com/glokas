'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

import { Checkbox } from '@nextui-org/react'
import { Tab, Tabs } from '@nextui-org/tabs'

import { ApiResponse, errorField } from '@/app/types/api'

import { login, signup } from '../actions/authActions'
import { CustomButton } from './CustomButton'
import { CustomInput } from './CustomInput'
import { CustomLink } from './CustomLink'
import EyePassword from './EyePassword'
import PasswordStrengthMeter from './PasswordStrengthMeter'
import SuccessSignUpForm from './SuccessSignUp'

function AuthForm() {
  const searchParams = useSearchParams()
  const [isSignupPasswordVisible, setIsSignupPasswordVisible] = useState(false)
  const [isSignupRepeatPasswordVisible, setIsSignupRepeatPasswordVisible] =
    useState(false)
  const [isLoginPasswordVisible, setIsLoginPasswordVisible] = useState(false)

  const toggleSignupVisibility = () => setIsSignupPasswordVisible((prev) => !prev)

  const toggleSignupRepeatPasswordVisibility = () =>
    setIsSignupRepeatPasswordVisible((prev) => !prev)

  const toggleLoginPasswordVisibility = () => setIsLoginPasswordVisible((prev) => !prev)

  const [loginErrors, setLoginErrors] = useState<{
    message: string
    fields: errorField[]
  }>({
    message: '',
    fields: [],
  })
  const [signupErrors, setSignupErrors] = useState<{
    message: string
    fields: errorField[]
  }>({
    message: '',
    fields: [],
  })
  const [emailLogin, setEmailLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')

  const [emailSignup, setEmailSignup] = useState('')
  const [passwordSignup, setPasswordSignup] = useState('')
  const [usernameSignup, setUsernameSignup] = useState('')
  const [loading, setLoading] = useState(false)

  const { push, refresh } = useRouter()
  const [isSignupSuccess, setIsSignupSuccess] = useState(false)
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [passwordsMatch, setPasswordsMatch] = useState(true)

  const handleSignup = async () => {
    setSignupErrors({ message: '', fields: [] })
    const errors: { field?: string; message: string }[] = []
    if (!emailSignup) {
      errors.push({ field: 'email', message: 'Email is required' })
    }

    if (!passwordSignup) {
      errors.push({ field: 'password', message: 'Password is required' })
    }

    if (!usernameSignup) {
      errors.push({ field: 'username', message: 'Username is required' })
    }

    if (passwordSignup !== passwordRepeat) {
      errors.push({
        field: 'passwordRepeat',
        message: 'Passwords do not match',
      })
      setPasswordsMatch(false)
    } else {
      setPasswordsMatch(true)
    }

    if (errors.length > 0) {
      setSignupErrors({
        message: 'Validation errors occurred',
        fields: errors,
      })
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
      setSignupErrors({
        message: 'Validation errors occurred',
        fields: errors,
      })
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

  const handleLogin = async () => {
    setLoginErrors({ message: '', fields: [] })
    const errors: { field?: string; message: string }[] = []

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
        push(searchParams.get('redirectedFrom') ?? '/')
        refresh()
      }
    } catch (error) {
      console.error(error)
      setLoginErrors({ message: 'Something went wrong. Please try again.', fields: [] })
    } finally {
      setLoading(false)
    }
  }

  if (isSignupSuccess) {
    return <SuccessSignUpForm />
  }

  return (
    <div className="flex min-h-screen w-full bg-[#21A5AC]">
      <div className="ml-auto flex w-full flex-col justify-center bg-background md:w-[44%]">
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
              <Tab key="sign-up" title="Sign up">
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
                  isInvalid={signupErrors?.fields.some(
                    (error) => error.field === 'username'
                  )}
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
                  isInvalid={signupErrors?.fields.some(
                    (error) => error.field === 'email'
                  )}
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
                      {signupErrors?.fields.some(
                        (error) => error.field === 'password'
                      ) && (
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
                  isInvalid={signupErrors?.fields.some(
                    (error) => error.field === 'password'
                  )}
                  errorMessage={signupErrors?.fields
                    .filter((error) => error.field === 'password')
                    .map((error) => <p key={error.message}>{error.message}</p>)}
                />

                <label
                  className={`mb-2 text-medium font-medium ${
                    !passwordsMatch ||
                    signupErrors?.fields.some((error) => error.field === 'passwordRepeat')
                      ? 'text-danger'
                      : ''
                  }`}
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
                        signupErrors?.fields.some(
                          (error) => error.field === 'passwordRepeat'
                        )) && (
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
                  {'Sign up'}
                </CustomButton>
              </Tab>
              <Tab key="log-in" title="Log in">
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
                      {loginErrors?.fields.some(
                        (error) => error.field === 'password'
                      ) && (
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
                  isInvalid={loginErrors?.fields.some(
                    (error) => error.field === 'password'
                  )}
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
                  className="mb-6 font-medium"
                  classNames={{ label: 'text-medium' }}
                >
                  Remember me
                </Checkbox>

                <CustomButton fullWidth onClick={handleLogin} isLoading={loading}>
                  {'Sign up'}
                </CustomButton>

                <CustomLink
                  as={Link}
                  color="primary"
                  size="md"
                  className="mt-8 flex justify-center font-[500]"
                  href="/forgot-password"
                >
                  Forgot password?
                </CustomLink>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
