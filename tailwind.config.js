/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
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
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1b1b1b",

          "black": "#1b1b1b",

          secondary: "#EADABF",

          white: "#f5f5f5",

          accent: "#f3cc30",

          neutral: "#221551",

          "base-100": "#1a103c",

          info: "#53c0f3",

          success: "#71ead2",

          warning: "#f3cc30",

          error: "#e24056",
        },
      },
    ],
  },
  plugins: [
    require("daisyui")
  ],
}
