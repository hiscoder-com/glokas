import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'

import { Tooltip } from '@nextui-org/react'

import { Modal } from './Modal'

export default function VideoCard() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isTruncated, setIsTruncated] = useState(false)

  const descriptionContainer = useRef(null)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const isTextTruncated = () => {
    if (!descriptionContainer.current) return false
    return (
      descriptionContainer.current.scrollHeight >
      descriptionContainer.current.clientHeight
    )
  }

  useEffect(() => {
    setIsTruncated(isTextTruncated())

    const handleResize = () => setIsTruncated(isTextTruncated())
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex w-full flex-col gap-6 rounded-2xl border border-tertiary-300 bg-tertiary-50 px-7 py-6 md:flex-row">
      <div className="block shrink-0 md:hidden lg:block">
        <Image
          src="/preview.png"
          alt="Film Image"
          width={288}
          height={180}
          className="h-full rounded-large object-cover"
        />
      </div>
      <div className="flex w-full flex-col justify-between self-stretch">
        <div className="mr-4 flex h-full flex-col gap-8 py-2 md:flex-row">
          <div className="flex basis-full flex-col justify-between">
            <div>
              <h2
                title="Introducing JESUS: A new, animated family film"
                className="mb-1 line-clamp-2 text-3xl font-semibold text-black-950"
              >
                Introducing JESUS: A new, animated family film
              </h2>
              <p className="text-lg text-black-900">Language: English</p>
            </div>
            <div className="flex items-center gap-1">
              <Image src="icons/youtube.svg" alt="YouTube" width={32} height={23} />
              <span className="text-2xl font-medium text-black-950">YouTube</span>
            </div>
          </div>
          <div className="w-full shrink-0 md:w-72 xl:w-96 2xl:w-[31.25rem]">
            <p
              ref={descriptionContainer}
              className="line-clamp-6 text-base text-black-950"
            >
              {fullText}
            </p>
            {isTruncated && (
              <button
                onClick={toggleModal}
                className="text-tertiary-700 underline focus:outline-none"
              >
                View All
              </button>
            )}
          </div>
          <div className="relative w-56 shrink-0 text-lg text-black-950">
            <div className="flex items-center gap-1">
              <p>Words: 88</p>
              <Tooltip
                showArrow
                placement="top"
                content="The total word count number includes title and description"
                classNames={{
                  base: [
                    'rounded-medium shadow-medium',
                    'before:bg-primary-50 rounded-medium shadow-medium',
                  ],
                  content: [
                    'max-w-64',
                    'shadow-none',
                    'py-4 px-5 text-center',
                    'text-black-950 bg-primary-50',
                  ],
                }}
              >
                <Image
                  src="icons/exclamation.svg"
                  alt="Exclamation Icon"
                  width={20}
                  height={20}
                />
              </Tooltip>
            </div>
            <p>Languages: 0</p>
            <p>Last update: 12.12.2024</p>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <h3 className="mb-10 text-center text-4xl font-medium">
            Video Description in English
          </h3>
          <p className="text-medium text-black-950">{fullText}</p>
        </Modal>
      )}
    </div>
  )
}

const fullText = `Jesus Film Project is working on a new, animated family film called JESUS.
  The film will be anchored in the Christian Gospels. It will re-imagine the original "JESUS" film,
  using much of its dialogue but in a refreshed script. This means that this new animated film will
  using much of its dialogue but in a refreshed script. This means that this new animated film will
  eventually be available in 2,000+ heart languages! 2,000+ heart languages! 2,000+ heart languages! Jesus Film Project is working on a new, animated family film called JESUS.
  eventually be available in 2,000+ heart languages! 2,000+ heart languages! 2,000+ heart languages!`
