import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        green: '#093545',
        white: '#fff',
        blue: '#224957',
        lightGreen: '#2BD17E',
        red: '#FF0000',
        bgMovie: '#092C39'
      },
      fontSize: {
        16: '16px',
        32: '32px',
        48: '48px',
        lg: '64px'
      },
      lineHeight: {
        24: '24px',
        56: '56px',
        lg: '80px'
      },
      gap: {
        lg: '40px'
      },
      borderRadius: {
        10: '10px',
        12: '12px'
      },
      width: {
        300: '300px'
      },
      maxHeight: {
        504: '504px',
        400: '400px'
      },
      
    },
  },
  plugins: [],
}
export default config
