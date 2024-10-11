import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        xlarge: '0.625rem',
      },
      fontSize: {
        xlarge: '1.5rem',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {
        dividerWeight: '1px', // h-divider the default height applied to the divider component
        disabledOpacity: 1, // this value is applied as opacity-[value] when the component is disabled
        fontSize: {
          tiny: '0.75rem',
          small: '0.875rem',
          medium: '1rem',
          large: '1.125rem',
        },
        lineHeight: {
          tiny: '1rem', // text-tiny
          small: '1.25rem', // text-small
          medium: '1.5rem', // text-medium
          large: '1.75rem', // text-large
        },
        radius: {
          small: '4px', // rounded-small
          medium: '6px', // rounded-medium
          large: '8px', // rounded-large
          xlarge: '10px', // rounded-xlarge
        },
        borderWidth: {
          small: '1px', // border-small
          medium: '2px', // border-medium (default)
          large: '3px', // border-large
        },
      },
      themes: {
        light: {
          colors: {
            background: '#FFFFFF',
            foreground: '#2D2D2E',
            // https://uicolors.app/create используем для генерации палитры цветов
            primary: {
              '100': '#d1fae1',
              '200': '#a7f3c9',
              '300': '#6de8ab',
              '400': '#33d489',
              '500': '#0ead69',
              '600': '#04975b',
              '700': '#03794c',
              '800': '#064e34',
              foreground: '#FFFFFF',
              DEFAULT: '#0ead69',
            },
            secondary: {
              '50': '#f5f5f6',
              '100': '#e6e6e7',
              '200': '#cacaca',
              '300': '#878889',
              '400': '#5c5d5e',
              '500': '#444446',
              foreground: '#FFFFFF',
              DEFAULT: '#2d2d2e',
            },
            danger: {
              '500': '#ea4f57',
              foreground: '#FFFFFF',
              DEFAULT: '#EA4F57',
            },
          },
          layout: {
            hoverOpacity: 1, //  this value is applied as opacity-[value] when the component is hovered
            boxShadow: {
              // shadow-small
              small:
                '0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
              // shadow-medium
              medium:
                '0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
              // shadow-large
              large:
                '0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
            },
          },
        },
      },
    }),
  ],
}
