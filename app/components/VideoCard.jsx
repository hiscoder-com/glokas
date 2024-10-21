import { useState } from 'react'

import Image from 'next/image'

import { Modal } from './Modal'
import VideoDescription from './VideoDescription'

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
              <p
                className="overflow-hidden text-ellipsis text-base text-black-950"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 6,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {fullText}
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
        <Modal closeModal={toggleModal}>
          <VideoDescription fullText={fullText} closeModal={toggleModal} />
        </Modal>
      )}
    </div>
  )
}
