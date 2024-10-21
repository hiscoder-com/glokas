import { useState } from 'react'

import Image from 'next/image'

import { CustomButton } from './CustomButton'
import { CustomInput } from './CustomInput'
import { Modal } from './Modal'

interface YoutubeParser {
  isOpen: boolean
  closeModal: () => void
}

const YoutubeParserModal = ({ isOpen, closeModal }: YoutubeParser) => {
  const [youtubeUrl, setYoutubeUrl] = useState('')
  const [error, setError] = useState('')

  const extractVideoId = (url: string) => {
    const regex =
      /^https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})$/
    const match = url.match(regex)
    return match ? match[1] : null
  }

  const handleParseClick = () => {
    const videoId = extractVideoId(youtubeUrl)
    if (videoId) {
      console.log(`Parsed Video ID: ${videoId}`)
      setError('')
    } else {
      setError('Incorrect link. Example: https://www.youtube.com/watch?v=Dl56yoDQAJc')
    }
  }

  return (
    <>
      {isOpen && (
        <Modal closeModal={closeModal}>
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-secondary-foreground px-16 pb-16 pt-[52px]">
            <div className="mb-12 flex items-center justify-center gap-3">
              <Image
                src="/icons/youtube.svg"
                alt="YouTube"
                width={93}
                height={67}
                priority={true}
              />
              <h2 className="font-roboto text-[42px]">YouTube</h2>
            </div>
            <div className="mb-12">
              <div className="flex items-center gap-3">
                <CustomInput
                  className="mb-3 mt-9"
                  variant="bordered"
                  size="sm"
                  value={youtubeUrl}
                  onChange={(e) => {
                    setYoutubeUrl(e.target.value)
                    setError('')
                  }}
                  isInvalid={!!error}
                  description="Example:https://www.youtube.com/watch?v=Dl56yoDQAJc"
                  errorMessage={error}
                />
                <CustomButton className="w-28" color="primary" onClick={handleParseClick}>
                  Parse
                </CustomButton>
              </div>
            </div>

            <div className="max-h-32 overflow-y-auto rounded-xlarge bg-tertiary-100 p-4 text-medium text-tertiary-700 md:text-large">
              Helper text: Lorem ipsum dolor sit amet consectetur. Id enim eu maecenas at.
              Tortor diam nisl eu suspendisse eros scelerisque. Elementum et neque viverra
              ipsum faucibus. Porttitor et nisi aenean id dui risus quis nunc ut.
            </div>
          </div>

          <button
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            onClick={closeModal}
          >
            <Image
              src="/icons/close.svg"
              alt="Close"
              width={24}
              height={24}
              priority={true}
            />
          </button>
        </Modal>
      )}
    </>
  )
}

export default YoutubeParserModal
