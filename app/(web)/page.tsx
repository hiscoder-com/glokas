'use client'

import { useState } from 'react'

import { CustomButton } from '../components/CustomButton'
import { Modal } from '../components/Modal'
import { WarningIcon } from '../components/WarningIcon'

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

          <CustomButton color="secondary" onClick={() => setIsModalOpen(true)}>
            Translate
          </CustomButton>

          {isModalOpen && (
            <Modal closeModal={closeModal}>
              <div className="flex flex-col gap-8 bg-background px-16 py-12">
                <div className="mx-auto w-3/4 text-center">
                  <h2 className="mb-3 text-4xl font-semibold">Translate</h2>
                  <p>
                    Please note that if you click translate, it will use the available
                    translation words in your package
                  </p>
                </div>

                <div>
                  <p>6 languages:</p>
                  <div>tagsArray</div>

                  <p>Words in source language:</p>
                  <p>88</p>

                  <div className="">
                    <p>Words for translation in total:</p>

                    <WarningIcon />
                  </div>
                  <p>88 x 6 = 528</p>
                </div>

                <div className="bg-tertiary-100">
                  <p> Total number of words to be translated</p>
                  <p>528</p>

                  <p> Remaining word available</p>
                  <p>42 654</p>
                </div>

                <div>
                  <CustomButton variant="bordered" color="danger" className="">
                    Cancel
                  </CustomButton>
                  <CustomButton>Yes, translate</CustomButton>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </main>
    </>
  )
}

export default Page
