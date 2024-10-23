import { Button } from '@nextui-org/button'
import { extendVariants } from '@nextui-org/system'

export const CustomButton = extendVariants(Button, {
  variants: {
    variant: {
      solid: 'h-12',
      bordered: 'h-12 border-small bg-background',
    },
    color: {
      primary: 'text-white',
      secondary:
        'text-secondary-900 bg-secondary-100 hover:bg-secondary-200 focus:bg-secondary-300 disabled:bg-black-300 disabled:text-black-100',
      danger:
        'border-darger text-darger hover:border-darger-700 hover:text-darger-700 focus:border-darger-800 focus:text-darger-800 disabled:border-black-400 disabled:text-black-400',
    },
    isDisabled: {
      true: 'cursor-not-allowed',
    },
    size: {
      md: 'px-8 py-4 text-medium leading-4 font-semibold',
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
        'border-secondary-600 text-secondary-500 hover:border-secondary-700 hover:text-secondary-700 focus:border-secondary-800 focus:text-secondary-800 disabled:border-black-400 disabled:text-black-400',
    },
    {
      color: 'primary',
      variant: 'solid',
      class:
        'bg-secondary-500 hover:bg-secondary-600 focus:bg-secondary-700 disabled:bg-black-300 disabled:text-black-100',
    },
  ],
})
