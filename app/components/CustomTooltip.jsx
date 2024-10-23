import { useEffect, useRef } from 'react'

import Image from 'next/image'

export default function CustomTooltip({ isVisible, toggleTooltip, message }) {
  const tooltipRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        toggleTooltip(false)
      }
    }

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isVisible, toggleTooltip])

  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => toggleTooltip(!isVisible)}>
        <Image
          src="icons/exclamation.svg"
          alt="Exclamation Icon"
          width={20}
          height={20}
        />
      </div>
      {isVisible && (
        <div
          ref={tooltipRef}
          className="absolute bottom-full left-[-150px] z-10 mb-2 h-[68px] w-[320px] translate-x-0 rounded-md bg-primary-50 px-[18px] py-[14px] text-center text-sm text-primary-950 shadow-medium"
        >
          {message}
          <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-primary-50" />
        </div>
      )}
    </div>
  )
}
