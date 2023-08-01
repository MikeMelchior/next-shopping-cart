/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
        colors: {
            'steel-blue': '#3F7CAC',
            'platinum': '#E7E7E7',
            'rich-black': '#0F1A20'
        },
        gridTemplateColumns: {
            'auto-fill': 'repeat(auto-fill,minmax(300px,1fr))'
        }
    },
  },
  plugins: [],
}
