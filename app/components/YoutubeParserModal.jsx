import { useState } from 'react'

import Image from 'next/image'

import { CustomButton } from './CustomButton'

const YoutubeParserModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [youtubeUrl, setYoutubeUrl] = useState('')

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const handleParseClick = () => {
    console.log(`Parsed URL: ${youtubeUrl}`)
  }

  return (
    <div>
      <button
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
        onClick={openModal}
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-primary-foreground px-16 pb-16 pt-[52px]">
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
            <div className="mb-1 flex items-center gap-3">
              <input
                type="text"
                className="h-[57px] w-full rounded-md border border-gray-200 px-4 py-2 opacity-100"
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
              />
              <CustomButton onClick={handleParseClick}>Parse</CustomButton>
            </div>
            <p className="mb-12 text-xs text-black-300">
              Example https://www.youtube.com/watch?v=9eHseYggb-I
            </p>

            <div
              className="max-h-32 overflow-y-auto rounded-xlarge bg-tertiary-100 p-4 text-medium text-tertiary-700 md:text-large" //prettier-ignore
            >
              Helper text: Lorem ipsum dolor sit amet consectetur. Id enim eu maecenas at.
              Tortor diam nisl eu suspendisse eros scelerisque. Elementum et neque viverra
              ipsum faucibus. Porttitor et nisi aenean id dui risus quis nunc ut.
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default YoutubeParserModal
