'use client'

import { useState } from 'react'

import { CustomButton } from '../components/CustomButton'
import { Modal } from '../components/Modal'

const Page: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <main className="mx-auto w-full max-w-[1806px] flex-auto px-6 md:px-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <CustomButton isLoading>CustomButton primary</CustomButton>
          <CustomButton>CustomButton primary</CustomButton>
          <CustomButton isDisabled>CustomButton primary disabled</CustomButton>
          <CustomButton color="secondary">CustomButton secondary</CustomButton>
          <CustomButton color="secondary" isDisabled>
            CustomButton secondary disabled
          </CustomButton>
          <CustomButton color="primary" variant="bordered">
            CustomButton bordered primary
          </CustomButton>
          <CustomButton color="primary" variant="bordered" isDisabled>
            CustomButton bordered primary disabled
          </CustomButton>
          <CustomButton isIconOnly>
            <div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                className="h-5 w-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="9"
                  cy="9"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </CustomButton>

          <CustomButton onClick={() => setIsModalOpen(true)}>Translate</CustomButton>

          {isModalOpen && (
            <Modal closeModal={closeModal}>
              <div className="text-semixlarge rounded-xlarge bg-background p-10 font-medium">
                <p>Are you sure you want to cancel?</p>
                <div className="mt-12 flex justify-center gap-2"></div>
              </div>
            </Modal>
          )}
        </div>
      </main>
    </>
  )
}

export default Page
