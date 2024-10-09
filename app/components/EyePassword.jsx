import Image from 'next/image'

function EyePassword({ isVisible, toggleVisibility }) {
  return (
    <>
      <div className="cursor-pointer" onClick={toggleVisibility}>
        {isVisible ? (
          <Image
            src={'/icons/eye-open.svg'}
            alt="eye open"
            width={18}
            height={18}
            className="mr-4 h-[38px] w-[38px] p-2"
          />
        ) : (
          <Image
            src={'/icons/eye-close.svg'}
            alt="eye close"
            width={18}
            height={18}
            className="mr-4 h-[38px] w-[38px] p-2"
          />
        )}
      </div>
    </>
  )
}

export default EyePassword
