import { Button } from '@nextui-org/button'
import { extendVariants } from '@nextui-org/system'

export const CustomButton = extendVariants(Button, {
  variants: {
    variant: {
      solid: '',
      bordered: 'border-small bg-background',
    },
    color: {
      primary: 'text-white',
      secondary:
        'text-secondary-800 bg-secondary-100 hover:bg-secondary-200 focus:bg-secondary-300 disabled:bg-neutral-400 disabled:text-neutral-200',
    },
    isDisabled: {
      true: 'cursor-not-allowed',
    },
    size: {
      md: 'h-auto px-8 py-4 text-medium font-semibold',
    },
  },
  defaultVariants: {
    color: 'primary',
    variant: 'solid',
    size: 'md',
    radius: 'lg',
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: 'bordered',
      class:
        'border-secondary-500 text-secondary-500 hover:border-secondary-600 hover:text-secondary-600 focus:border-secondary-700 focus:text-secondary-700 disabled:border-neutral-400 disabled:text-neutral-400',
    },
    {
      color: 'primary',
      variant: 'solid',
      class:
        'bg-secondary-500 hover:bg-secondary-600 focus:bg-secondary-700 disabled:bg-neutral-400 disabled:text-neutral-200',
    },
  ],
})
