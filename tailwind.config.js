/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyBgColor: 'hsl(30, 54%, 90%)',
        recipeBgColor: 'hsl(0, 0%, 100%)',
        recipeTitleColor: 'hsl(24, 5%, 18%)',
        recipeSubtitleColor: 'hsl(14, 45%, 36%)',
        recipePColor: 'hsl(30, 10%, 34%)',
        recipePreparationBackgroundColor: 'hsl(330, 100%, 98%)',
        recipePreparationTitleColor: 'hsl(332, 51%, 32%)',
        recipeLineColor: 'hsl(30, 18%, 87%)',
        footerColor: 'hsl(228, 45%, 44%)',
      },
      fontFamily: {
        bodyFontFamily: ['Outfit', 'sans-serif'],
        recipeTitleFontFamily: ['Young Serif', 'serif'],
      },
      fontSize: {
        bodyFontSize: '16px',
        recipePFontSize: '16px',
      },
      width: {
        'full-minus-4rem': 'calc(100% - 4rem)',
      },
      screens: {
        'custom': '769px',
      },
    },
  },
  plugins: [],
}