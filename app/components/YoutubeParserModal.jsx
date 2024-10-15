import { useState } from 'react'

import Image from 'next/image'

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
          <div className="relative h-[46vh] w-[40vw] rounded-2xl bg-primary-foreground p-[52px]">
            <button
              className="text-gray-500 hover:text-gray-700 absolute right-4 top-4" // prettier-ignore
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

            <div className="mb-14 flex items-center justify-center gap-3 space-x-4">
              <Image
                src="/icons/youtube.svg"
                alt="YouTube"
                width={100}
                height={100}
                priority={true}
              />
              <h2 className="font-roboto text-4xl">YouTube</h2>
            </div>
            <div className="mb-2 mt-0 flex items-center gap-3">
              <input
                type="text"
                className="h-[48px] w-[40vw] rounded-md border border-gray-200 px-4 py-2 opacity-100"
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
              />
              <button
                onClick={handleParseClick}
                className="hover:bg-gray-400 h-[48px] w-[8vw] rounded-md bg-gray-300 px-4 text-gray-100" // prettier-ignore
              >
                Parse
              </button>
            </div>
            <p className="mb-8 mt-2 text-xs text-gray-300">
              Example https://www.youtube.com/watch?v=9eHseYggb-I
            </p>
            <div className="mt-6 rounded-md bg-[#D6F7F7] p-4 text-base text-[#20737E]">
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
