import React, { useState } from 'react'

import Image from 'next/image'

import { CustomInput } from './CustomInput'
import EyePassword from './EyePassword'

interface PasswordInputProps {
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  value,
  onChange,
  error,
}) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible((prev) => !prev)

  return (
    <>
      <label className={`mb-2 text-medium font-medium ${error ? 'text-danger' : ''}`}>
        {label}
      </label>
      <CustomInput
        variant="bordered"
        size="sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        endContent={
          <>
            <EyePassword isVisible={isVisible} toggleVisibility={toggleVisibility} />
            {error && (
              <Image
                src="/icons/warning.svg"
                alt="warning"
                width={18}
                height={18}
                className="mr-2 h-[38px] w-[38px] p-2 pl-0"
              />
            )}
          </>
        }
        type={isVisible ? 'text' : 'password'}
        isRequired
        isInvalid={!!error}
        errorMessage={error && <p>{error}</p>}
      />
    </>
  )
}

export default PasswordInput
