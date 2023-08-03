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
            'rich-black': '#000A10'
        },
        gridTemplateColumns: {
            'auto-fill': 'repeat(auto-fit,minmax(300px,1fr))'
        },
        backgroundImage: {
            'clothes': "url('../public/clothes.jpg')",
            'clothes1': "url('../public/clothes1.jpg')",
            'clothes2': "url('../public/clothes2.jpg')",
            'dark': "linear-gradient(rgba(200, 200, 200), rgba(120, 120, 120) )",
        },
        height: {
            'fill': 'calc(100vh - 80px)'
        },
        minHeight: {
            'fill': 'calc(100vh - 80px)'
        }
    },
  },
  plugins: [],
}
