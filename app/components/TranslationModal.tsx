import { useState } from 'react'

import { CustomButton } from './CustomButton'
import { Modal } from './Modal'
import { WarningIcon } from './WarningIcon'

interface LanguageTagProps {
  language: string
  onDelete: (language: string) => void
}

const LanguageTag: React.FC<LanguageTagProps> = ({ language, onDelete }) => (
  <div className="flex items-center gap-2.5 rounded-medium bg-tertiary-100 px-3 py-1.5 text-medium leading-4">
    <span>{language}</span>
    <button
      aria-label={`delete ${language}`}
      className="flex items-center justify-center leading-none hover:opacity-hover"
      onClick={() => onDelete(language)}
    >
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4.5L12 12.5"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 4.5L4 12.5"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </div>
)

interface TranslationModalProps {
  isOpen: boolean
  onClose: () => void
  onTranslate: () => void
}

export const TranslationModal: React.FC<TranslationModalProps> = ({
  isOpen,
  onClose,
  onTranslate,
}) => {
  const [languages, setLanguages] = useState([
    'Spanish',
    'French',
    'German',
    'Portuguese',
    'Russian',
    'Chinese',
  ])

  const handleDeleteLanguage = (languageToDelete: string) => {
    setLanguages(languages.filter((lang) => lang !== languageToDelete))
  }

  const remainingWordAvailable = 500
  const numberOfLanguages = languages.length
  const wordsInSourceLanguage = 88
  const totalWords = numberOfLanguages * wordsInSourceLanguage
  const formula = `${wordsInSourceLanguage} x ${numberOfLanguages} = ${totalWords}`
  const hasEnoughWords = totalWords <= remainingWordAvailable

  if (!isOpen) return null

  return (
    <Modal onClose={onClose}>
      <div className="flex flex-col gap-10 bg-background">
        <div className="mx-auto text-center md:w-3/4">
          <h2 className="mb-3 text-4xl font-semibold">Translate</h2>
          <p>
            Please note that if you click translate, it will use the available translation
            words in your package
          </p>
        </div>

        <div className="flex flex-col gap-4 text-lg">
          <div>
            <h4 className="mb-2 text-xl font-semibold">{numberOfLanguages} languages:</h4>
            <div className="flex flex-wrap gap-2">
              {languages.map((language) => (
                <LanguageTag
                  key={language}
                  language={language}
                  onDelete={handleDeleteLanguage}
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-xl font-semibold">Words in source language:</h4>
            {wordsInSourceLanguage}
          </div>

          <div>
            <div className="mb-2 flex gap-2">
              <h4 className="text-xl font-semibold">Words for translation in total:</h4>
              {/* TODO: add hint */}
              <WarningIcon />
            </div>
            {formula}
          </div>
        </div>

        <div className="font-medium">
          <div
            className={`rounded-large p-5 text-xl ${hasEnoughWords ? 'bg-tertiary-100' : 'bg-danger-50'}`}
          >
            <div
              className={`mb-10 flex items-center justify-between md:mb-3 ${!hasEnoughWords ? 'text-danger-800' : ''}`}
            >
              <p>Total number of words to be translated</p>
              <p className="ml-5 font-bold">{totalWords}</p>
            </div>

            <div className="flex items-center justify-between">
              <p className={`${!hasEnoughWords ? 'text-danger-800' : ''}`}>
                Remaining word available
              </p>
              <p className={`ml-5 font-bold ${!hasEnoughWords ? 'text-danger-500' : ''}`}>
                {remainingWordAvailable}
              </p>
            </div>
          </div>

          {!hasEnoughWords && (
            <div className="mx-1 mt-2 text-xl text-danger-800">
              You don&apos;t have enough words to translate. Remove a language or{' '}
              <a href="#" className="text-danger-500 underline">
                update the plan
              </a>
              .
            </div>
          )}
        </div>

        <div className="flex justify-between md:self-end">
          <CustomButton variant="bordered" className="mr-4" onClick={onClose}>
            Cancel
          </CustomButton>
          <CustomButton disabled={!hasEnoughWords} onClick={onTranslate}>
            Yes, translate
          </CustomButton>
        </div>
      </div>
    </Modal>
  )
}
