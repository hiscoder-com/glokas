import React, { forwardRef, SVGProps } from 'react'

interface WarningIconProps extends SVGProps<SVGSVGElement> {
  fill?: string
}

export const WarningIcon = forwardRef<SVGSVGElement, WarningIconProps>(
  ({ fill = '#454545', className = '', ...props }, ref) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        className={className}
        {...props}
      >
        <path
          d="M12 7V13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="16.5" r="1" fill={fill} />
      </svg>
    )
  }
)

WarningIcon.displayName = 'WarningIcon'

export default WarningIcon