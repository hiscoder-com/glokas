'use client'

import { useState } from 'react'

import { CustomButton } from '../components/CustomButton'
import { TranslationModal } from '../components/TranslationModal'
import YouTubeCard from '../components/YouTubeCard'
import YouTubeParser from '../components/YouTubeParser'

const Page: React.FC = () => {
  const [isTranslationModalOpen, setIsTranslationModalOpen] = useState(false)
  const [isYouTubeParserOpen, setIsYouTubeParserOpen] = useState(false)

  const handleTranslate = () => {
    console.log('Starting translation...')
    setIsTranslationModalOpen(false)
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

          <CustomButton color="secondary" onClick={() => setIsTranslationModalOpen(true)}>
            Translate
          </CustomButton>

          {isTranslationModalOpen && (
            <TranslationModal
              onClose={() => setIsTranslationModalOpen(false)}
              onTranslate={handleTranslate}
            />
          )}

          <YouTubeCard />
          <CustomButton onClick={() => setIsYouTubeParserOpen(true)}>
            Open YouTube Parser
          </CustomButton>
          {isYouTubeParserOpen && (
            <YouTubeParser onClose={() => setIsYouTubeParserOpen(false)} />
          )}
        </div>
      </main>
    </>
  )
}

export default Page
