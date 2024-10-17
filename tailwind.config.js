import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        xlarge: '1.25rem', // text-xlarge (20px)
        xxlarge: '1.5rem', // text-xxlarge (24px)
        xxxlarge: '1.75rem', // text-xxxlarge (28px)
        xxxxlarge: '2rem', // text-xxxxlarge (32px)
        mega: '2.625rem', // text-mega (42px)
      },
      borderRadius: {
        xlarge: '0.625rem', // rounded-xlarge
        xxxxlarge: '1,125rem', // rounded-xxxxlarge
        mega: '2rem', // rounded-mega
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
          tiny: '0.75rem', // text-tiny
          small: '0.875rem', // text-small
          medium: '1rem', // text-medium
          large: '1.125rem', // text-large
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
              '50': '#EFF5FE',
              '100': '#E1EFFE',
              '200': '#C9DFFC',
              '300': '#a0c0f0',
              '400': '#739fe7',
              '500': '#527ddf',
              '600': '#3d61d3',
              '700': '#344fc1',
              '800': '#30419d',
              '900': '#2b3a7d',
              '950': '#1d2449',
              foreground: '#FFFFFF',
              DEFAULT: '#527ddf',
            },
            secondary: {
              '50': '#ecfdf3',
              '100': '#d1fae1',
              '200': '#a7f3c9',
              '300': '#6de8ab',
              '400': '#33d489',
              '500': '#0ead69',
              '600': '#04975b',
              '700': '#03794c',
              '800': '#05603d',
              '900': '#064e34',
              '950': '#022c1e',
              foreground: '#FFFFFF',
              DEFAULT: '#0ead69',
            },
            tertiary: {
              '50': '#effcfb',
              '100': '#d6f7f7',
              '200': '#b1eff0',
              '300': '#7ce2e4',
              '400': '#3fccd1',
              '500': '#21a5ac',
              '600': '#208e9a',
              '700': '#20737e',
              '800': '#235d67',
              '900': '#214e58',
              '950': '#10333c',
              foreground: '#FFFFFF',
              DEFAULT: '#21a5ac',
            },
            black: {
              '00': '#FFFFFF',
              '50': '#f6f6f6',
              '100': '#e7e7e7',
              '200': '#d1d1d1',
              '300': '#b0b0b0',
              '400': '#888888',
              '500': '#6d6d6d',
              '600': '#5d5d5d',
              '700': '#4f4f4f',
              '800': '#454545',
              '900': '#3d3d3d',
              '950': '#000000',
              foreground: '#FFFFFF',
              DEFAULT: '#6d6d6d',
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
