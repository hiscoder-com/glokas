import Image from 'next/image'

const VideoDescription = ({ fullText }) => {
  return (
    <div className="relative h-[780px] max-h-[780px] min-h-[500px] w-[800px] overflow-y-auto rounded-large bg-white px-16 py-[52px] shadow-lg md:w-1/2">
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
