'use client'

import { useState } from 'react'

import { CustomButton } from '@/app/components/CustomButton'
import { CustomInput } from '@/app/components/CustomInput'
import EyePassword from '@/app/components/EyePassword'
import PasswordStrengthMeter from '@/app/components/PasswordStrengthMeter'
import { useToast } from '@/app/components/ToastProvider'

export default function PasswordRestore({ userInfo }) {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [isVisibleNew, setIsVisibleNew] = useState(false)
  const [isVisibleConfirm, setIsVisibleConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const { success: toastSuccess, error: toastError } = useToast()

  const toggleVisibility = () => setIsVisible((prev) => !prev)
  const toggleVisibilityNew = () => setIsVisibleNew((prev) => !prev)
  const toggleVisibilityConfirm = () => setIsVisibleConfirm((prev) => !prev)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (newPassword !== confirmPassword) {
      toastError('Passwords do not match.')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userInfo.email,
          oldPassword: currentPassword,
          newPassword: newPassword,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        toastError(data.error || 'Something went wrong.')
      } else {
        toastSuccess(data.message || 'Password updated successfully.')
        setCurrentPassword('')
        setNewPassword('')
        setConfirmPassword('')
      }
    } catch (error) {
      console.error('Request error:', error)
      toastError('Failed to update password.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="flex max-w-96 flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="currentPassword" className="mb-2 text-medium font-medium">
          Current Password
        </label>
        <CustomInput
          variant="bordered"
          size="sm"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          endContent={
            <EyePassword isVisible={isVisible} toggleVisibility={toggleVisibility} />
          }
          type={isVisible ? 'text' : 'password'}
          id="currentPassword"
          isRequired
        />
      </div>
      <div>
        <label htmlFor="newPassword" className="mb-2 text-medium font-medium">
          New Password
        </label>
        <CustomInput
          variant="bordered"
          size="sm"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          endContent={
            <EyePassword
              isVisible={isVisibleNew}
              toggleVisibility={toggleVisibilityNew}
            />
          }
          type={isVisibleNew ? 'text' : 'password'}
          id="newPassword"
          isRequired
        />
      </div>
      <PasswordStrengthMeter password={newPassword} />

      <div>
        <label htmlFor="confirmPassword" className="mb-2 text-medium font-medium">
          Confirm Password
        </label>
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
          id="confirmPassword"
          isRequired
        />
      </div>
      <CustomButton type="submit" isLoading={loading}>
        Save
      </CustomButton>
    </form>
  )
}
