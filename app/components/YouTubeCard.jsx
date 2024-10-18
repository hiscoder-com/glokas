import Image from 'next/image'

const YouTubeCard = () => {
  return (
    <button className="flex h-64 w-64 cursor-pointer flex-col items-center justify-center rounded-mega border border-primary-200 bg-primary-50 transition-colors duration-300 hover:bg-primary-100 focus:outline-none active:bg-primary-200">
      <div className="flex flex-col items-center justify-center gap-6">
        <Image
          src="/icons/youtube.svg"
          alt="YouTube"
          width={65}
          height={47}
          priority={true}
        />
        <p className="font-roboto text-3xl font-normal">YouTube</p>
      </div>
    </button>
  )
}

export default YouTubeCard
