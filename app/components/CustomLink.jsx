import { Link } from '@nextui-org/link'
import { extendVariants } from '@nextui-org/system'

export const CustomLink = extendVariants(Link, {
  variants: {
    color: {
      primary: 'text-secondary-700',
    },
    size: {
      sm: 'text-small',
      md: 'text-medium font-[600]',
      lg: 'text-large',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
    isBlock: false,
    underline: 'none',
    isDisabled: false,
  },
})
