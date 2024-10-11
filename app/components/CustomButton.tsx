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
        'text-primary-800 bg-primary-100 hover:bg-primary-200 focus:bg-primary-300 disabled:bg-neutral-400 disabled:text-neutral-200',
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
        'border-primary-500 text-primary-500 hover:border-primary-600 hover:text-primary-600 focus:border-primary-700 focus:text-primary-700 disabled:border-neutral-400 disabled:text-neutral-400',
    },
    {
      color: 'primary',
      variant: 'solid',
      class:
        'bg-primary-500 hover:bg-primary-600 focus:bg-primary-700 disabled:bg-neutral-400 disabled:text-neutral-200',
    },
  ],
})
