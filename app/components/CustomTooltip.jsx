import { useRef } from 'react'

import { WarningIcon } from './WarningIcon'

export default function CustomTooltip({ isVisible, toggleTooltip, message }) {
  const tooltipRef = useRef(null)

  return (
    <div
      className="relative"
      onMouseEnter={() => toggleTooltip(true)}
      onMouseLeave={() => toggleTooltip(false)}
    >
      <div className="cursor-pointer">
        <WarningIcon />
      </div>
      {isVisible && (
        <div
          ref={tooltipRef}
          className="absolute bottom-full left-1/2 z-10 mb-2 w-80 -translate-x-1/2 rounded-md bg-primary-50 p-4 text-center text-sm shadow-medium"
        >
          {message}
          <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-primary-50" />
        </div>
      )}
    </div>
  )
}
