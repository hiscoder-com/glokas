import { useState } from 'react'

import Image from 'next/image'

export default function VideoCard() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fullText = `Jesus Film Project is working on a new, animated family film called JESUS.
  The film will be anchored in the Christian Gospels. It will re-imagine the original "JESUS" film, 
  using much of its dialogue but in a refreshed script. This means that this new animated film will 
  eventually be available in 2,000+ heart languages! 2,000+ heart languages! 2,000+ heart languages!`

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  return (
    <div className="mx-auto max-h-[230px] max-w-[1600px]">
      <div
        className="flex flex-col rounded-2xl border bg-breakerBay-50 border-breakerBay-300 p-4 shadow-md md:flex-row" // prettier-ignore
      >
        <div className="md:w-[50%]">
          <Image
            src="/preview.png"
            alt="Film Image"
            width={288}
            height={180}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-between pl-2">
          <div className="ml-5 flex flex-col gap-8 md:flex-row">
            <div className="w-[30%]">
              <h2 className="mb-1 text-3xl font-bold">
                Introducing JESUS: A new, animated family film
              </h2>
              <p className="mb-1 text-lg text-gray-600">Language: English</p>
              <div className="mt-10 flex items-center gap-1">
                <Image
                  src="icons/youtube.svg"
                  alt="YouTube"
                  width={32}
                  height={23}
                  className="text-red-600"
                />
                <span className="text-2xl font-medium text-gray-700">YouTube</span>
              </div>
            </div>

            <div className="w-[45%]">
              <p className="gap-1 text-base text-black">
                Jesus Film Project is working on a new, animated family film called JESUS.
                The film will be anchored in the Christian Gospels. It will re-imagine the
                original JESUS film, using much of its dialogue but in a refreshed script.
                This means that this new animated film will eventually be available in
                2,000+ heart languages! 2,000+ heart languages 2,000+ heart languages
                2,000+ heart languages!2,...
              </p>
              <button
                onClick={toggleModal}
                className="mt-2 text-breakerBay-700 underline focus:outline-none"
              >
                View All
              </button>
            </div>

            <div className="w-[20%] flex-1">
              <div className="gap-3 text-lg text-black">
                <p>Words: 88</p>
                <p>Languages: 0</p>
                <p>Last update: 12.12.2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center gap-10 bg-black bg-opacity-50">
          <div className="relative h-[780px] w-[800px] overflow-y-auto rounded-lg bg-white p-14 shadow-lg md:w-1/2">
            <button
              onClick={toggleModal}
              className="absolute right-4 top-4 focus:outline-none"
            >
              <Image
                src="icons/close.svg"
                alt="Close"
                width={24}
                height={24}
                className="text-gray-700"
              />
            </button>
            <h3 className="mb-4 text-center text-4xl font-bold">
              Video Description in English
            </h3>
            <p className="mb-4 text-base text-gray-700">{fullText}</p>
            <p className="mb-4 text-base text-gray-700">{fullText}</p>
            <p className="mb-4 text-base text-gray-700">{fullText}</p>
            <p className="mb-4 text-base text-gray-700">{fullText}</p>
            <p className="mb-4 text-base text-gray-700">{fullText}</p>
            <p className="mb-4 text-base text-gray-700">{fullText}</p>
            <p className="mb-4 text-base text-gray-700">{fullText}</p>
            <p className="mb-4 text-base text-gray-700">{fullText}</p>
            <p className="mb-4 text-base text-gray-700">{fullText}</p>
            <p className="mb-4 text-base text-gray-700">{fullText}</p>
            <p className="mb-4 text-base text-gray-700">{fullText}</p>
            <p className="mb-4 text-base text-gray-700">{fullText}</p>
          </div>
        </div>
      )}
    </div>
  )
}
