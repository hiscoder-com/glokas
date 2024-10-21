import { useState } from 'react'

import Image from 'next/image'

export default function VideoCard() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fullText = `Jesus Film Project is working on a new, animated family film called JESUS.
  The film will be anchored in the Christian Gospels. It will re-imagine the original "JESUS" film, 
  using much of its dialogue but in a refreshed script. This means that this new animated film will 
  eventually be available in 2,000+ heart languages! 2,000+ heart languages! 2,000+ heart languages! Jesus Film Project is working on a new, animated family film called JESUS.
  The film will be anchored in the Christian Gospels. It will re-imagine the original "JESUS" film, 
  using much of its dialogue but in a refreshed script. This means that this new animated film will 
  eventually be available in 2,000+ heart languages! 2,000+ heart languages! 2,000+ heart languages!
  Jesus Film Project is working on a new, animated family film called JESUS.
  The film will be anchored in the Christian Gospels. It will re-imagine the original "JESUS" film, 
  using much of its dialogue but in a refreshed script. This means that this new animated film will 
  eventually be available in 2,000+ heart languages! 2,000+ heart languages! 2,000+ heart languages! 
  Jesus Film Project is working on a new, animated family film called JESUS.
  The film will be anchored in the Christian Gospels. It will re-imagine the original "JESUS" film, 
  using much of its dialogue but in a refreshed script. This means that this new animated film will 
  eventually be available in 2,000+ heart languages! 2,000+ heart languages! 2,000+ heart languages!
  Jesus Film Project is working on a new, animated family film called JESUS.
  The film will be anchored in the Christian Gospels. It will re-imagine the original "JESUS" film, 
  using much of its dialogue but in a refreshed script. This means that this new animated film will 
  eventually be available in 2,000+ heart languages! 2,000+ heart languages! 2,000+ heart languages!
  Jesus Film Project is working on a new, animated family film called JESUS.
  The film will be anchored in the Christian Gospels. It will re-imagine the original "JESUS" film, 
  using much of its dialogue but in a refreshed script. This means that this new animated film will 
  eventually be available in 2,000+ heart languages! 2,000+ heart languages! 2,000+ heart languages!
  Jesus Film Project is working on a new, animated family film called JESUS.
  The film will be anchored in the Christian Gospels. It will re-imagine the original "JESUS" film, 
  using much of its dialogue but in a refreshed script. This means that this new animated film will 
  eventually be available in 2,000+ heart languages! 2,000+ heart languages! 2,000+ heart languages!`

  const maxChars = 400

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div>
      <div
        className="flex flex-col rounded-xxxxlarge border bg-tertiary-50 border-tertiary-300 px-[26px] py-6 shadow-md md:flex-row" // prettier-ignore
      >
        <div className="md:w-[50%]">
          <Image
            src="/preview.png"
            alt="Film Image"
            width={288}
            height={180}
            className="rounded-large"
          />
        </div>
        <div className="flex flex-col justify-between pl-2">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="w-[30%]">
              <h2 className="mb-1 text-3xl font-bold text-black-950">
                Introducing JESUS: A new, animated family film
              </h2>
              <p className="mb-1 text-lg text-black-900">Language: English</p>
              <div className="mt-5 flex items-center gap-1">
                <Image
                  src="icons/youtube.svg"
                  alt="YouTube"
                  width={32}
                  height={23}
                  className="text-red-600"
                />
                <span className="text-2xl font-medium text-black-950">YouTube</span>
              </div>
            </div>
            <div className="w-[45%]">
              <p className="gap-1 text-base text-black-950">
                {fullText.slice(0, maxChars) + '...'}
              </p>
              <button
                onClick={toggleModal}
                className="mt-2 text-tertiary-700 underline focus:outline-none"
              >
                View All
              </button>
            </div>

            <div className="w-[20%] flex-1">
              <div className="gap-3 text-lg text-black-950">
                <p>Words: 88</p>
                <p>Languages: 0</p>
                <p>Last update: 12.12.2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative h-[780px] max-h-[780px] min-h-[500px] w-[800px] overflow-y-auto rounded-large bg-white px-16 py-[52px] shadow-lg md:w-1/2">
            <button
              onClick={toggleModal}
              className="absolute right-4 top-4 focus:outline-none"
            >
              <Image
                src="icons/close.svg"
                alt="Close"
                width={24}
                height={24}
                className="text-black-700"
              />
            </button>
            <h3 className="mb-[38px] text-center text-[42px] font-bold">
              Video Description in English
            </h3>
            <p className="mb-4 text-medium text-black-950">{fullText}</p>
          </div>
        </div>
      )}
    </div>
  )
}
