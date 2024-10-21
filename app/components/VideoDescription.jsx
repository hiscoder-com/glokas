import Image from 'next/image'

const VideoDescription = ({ fullText, closeModal }) => {
  return (
    <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-secondary-foreground px-16 pb-16 pt-[52px]">
      <button onClick={closeModal} className="absolute right-4 top-4 focus:outline-none">
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
  )
}

export default VideoDescription
