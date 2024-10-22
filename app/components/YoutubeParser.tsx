'use client'

import { useState } from 'react'

import Image from 'next/image'

import { CustomButton } from './CustomButton'
import { CustomInput } from './CustomInput'
import { Modal } from './Modal'

interface YoutubeParserProps {
  closeModal: () => void
}

const YoutubeParser = ({ closeModal }: YoutubeParserProps) => {
  const [youtubeUrl, setYoutubeUrl] = useState<string>('')
  const [isInvalid, setIsInvalid] = useState<boolean>(false)

  const extractVideoId = (url: string): string | null => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|live\/|playlist\?list=.*&v=)|youtu\.be\/)([\w-]{11})(?:[\?\&\#]\S*)?/
    const match = url.match(regex)
    return match ? match[1] : null
  }

  const handleParseClick = () => {
    const videoId = extractVideoId(youtubeUrl)
    setIsInvalid(!videoId)
    if (videoId) {
      console.log(`Parsed Video ID: ${videoId}`)
    }
  }

  return (
    <>
      <Modal closeModal={closeModal}>
        <div>
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
                  setIsInvalid(false)
                }}
                isInvalid={isInvalid}
                description="Example: https://www.youtube.com/watch?v=Dl56yoDQAJc"
                errorMessage={
                  isInvalid && (
                    <p>
                      Incorrect link. Example: https://www.youtube.com/watch?v=Dl56yoDQAJc
                    </p>
                  )
                }
                endContent={
                  isInvalid && (
                    <Image
                      src="/icons/warning.svg"
                      alt="warning"
                      width={18}
                      height={18}
                      className="mr-2 h-[38px] w-[38px] p-2"
                    />
                  )
                }
              />
              <CustomButton color="primary" onClick={handleParseClick}>
                Parse
              </CustomButton>
            </div>
          </div>

          <div className="rounded-xl bg-tertiary-100 p-4 text-medium text-tertiary-700 md:text-large">
            {/* TODO: Replace the text below with the correct text */}
            Helper text: Lorem ipsum dolor sit amet consectetur. Id enim eu maecenas at.
            Tortor diam nisl eu suspendisse eros scelerisque. Elementum et neque viverra
            ipsum faucibus. Porttitor et nisi aenean id dui risus quis nunc ut.
          </div>
        </div>
      </Modal>
    </>
  )
}

export default YoutubeParser
