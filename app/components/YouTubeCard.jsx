import Image from 'next/image'

const YouTubeCard = () => {
  return (
    <div
      className="flex h-64 w-64 flex-col items-center justify-center rounded-mega border border-cornflowerBlue-200 bg-cornflowerBlue-50" // prettier-ignore
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <Image
          src="/icons/youtube.svg"
          alt="YouTube"
          width={65}
          height={47}
          priority={true}
        />
        <p
          className="font-roboto text-xxxxlarge font-normal" // prettier-ignore
        >
          YouTube
        </p>
      </div>
    </div>
  )
}

export default YouTubeCard
