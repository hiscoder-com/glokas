'use client'

import { useState } from 'react'

import { CustomButton } from '@/app/components/CustomButton'
import { CustomInput } from '@/app/components/CustomInput'
import { useToast } from '@/app/components/ToastProvider'

import { updateUsername } from '../actions/updateUsername'

function UsernameEdit({ userInfo }) {
  const [username, setUsername] = useState(userInfo.username)
  const [loading, setLoading] = useState(false)
  const { success, error: toastError } = useToast()

  const handleSave = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { error } = await updateUsername(username)
      if (error) {
        toastError(error)
      } else {
        success('Username updated successfully!')
      }
    } catch (error) {
      const errorMessage = 'An unexpected error occurred. Please try again later.'
      console.error('Error updating username:', error)
      toastError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="flex flex-col sm:gap-4" onSubmit={handleSave}>
      <div>
        <label htmlFor="username" className="mb-2 text-medium font-medium">
          *Username
        </label>
        <CustomInput
          variant="bordered"
          size="sm"
          isRequired
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <CustomButton type="submit" isLoading={loading}>
        Save
      </CustomButton>
    </form>
  )
}

export default UsernameEdit
