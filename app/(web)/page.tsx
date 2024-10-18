'use client'

import { CustomButton } from '../components/CustomButton'
import LanguageSelector from '../components/LanguageSelector'

const Page: React.FC = () => {
  const languages = [
    { id: 1, name: 'English' },
    { id: 2, name: 'Spanish' },
    { id: 3, name: 'French' },
    { id: 4, name: 'German' },
    { id: 5, name: 'Italian' },
    { id: 6, name: 'Portuguese' },
    { id: 7, name: 'Russian' },
    { id: 8, name: 'Chinese' },
    { id: 9, name: 'Japanese' },
    { id: 10, name: 'Korean' },
  ]
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

          <LanguageSelector languages={languages} />
        </div>
      </main>
    </>
  )
}

export default Page
