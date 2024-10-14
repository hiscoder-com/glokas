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
    <div>
      <div className="flex flex-col rounded-lg bg-blue-50 p-4 shadow-md md:flex-row">
        <div className="md:w-1/3">
          <Image
            src="/preview.png"
            alt="Film Image"
            width={288}
            height={180}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-between pl-4 md:w-2/3">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex-1">
              <h2 className="mb-2 text-3xl font-bold">
                Introducing JESUS: A new, animated family film
              </h2>
              <p className="mb-2 text-lg text-gray-600">Language: English</p>
              <div className="flex items-center gap-1 space-x-2">
                <Image
                  src="icons/youtube.svg"
                  alt="YouTube"
                  width={38}
                  height={38}
                  className="text-red-600"
                />
                <span className="text-2xl font-medium text-gray-700">YouTube</span>
              </div>
            </div>

            <div className="flex-1">
              <p className="mt-2 text-gray-500">
                Jesus Film Project is working on a new, animated family film called
                JESUS...
              </p>
              <button
                onClick={toggleModal}
                className="mt-2 text-blue-500 hover:underline focus:outline-none"
              >
                View All
              </button>
            </div>

            <div className="flex-1">
              <div className="mt-4 text-gray-500">
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
          <div className="relative max-h-[190vh] w-1/12 overflow-y-auto rounded-lg bg-white p-6 shadow-lg md:w-1/2">
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
            <h3 className="mb-4 text-center text-2xl font-bold">
              Video Description in English
            </h3>
            <p className="mb-4 text-gray-700">{fullText}</p>
            <p className="mb-4 text-gray-700">{fullText}</p>
            <p className="mb-4 text-gray-700">{fullText}</p>{' '}
          </div>
        </div>
      )}
    </div>
  )
}
