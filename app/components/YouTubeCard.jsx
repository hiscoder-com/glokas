import Image from 'next/image'

const YouTubeCard = () => {
  return (
    <div className="flex h-64 w-64 flex-col items-center justify-center rounded-3xl border border-[#C9DFFC] bg-[#EFF5FE] shadow-lg">
      <div className="flex flex-col items-center justify-center gap-2">
        <Image
          src="/icons/youtube.svg"
          alt="YouTube"
          width={77}
          height={77}
          priority={true}
        />
        <p
          className="mt-4 font-roboto text-3xl font-normal" // prettier-ignore
        >
          YouTube
        </p>
      </div>
    </div>
  )
}

export default YouTubeCard
