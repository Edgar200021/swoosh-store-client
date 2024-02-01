/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      height: {
        header: '105px',
        'mobile-header': '60px',
        hero: 'calc(100svh - 145px)',
        'mobile-hero': 'calc(100svh - 80px)',
      },
      screens: {
        'lg-desktop': { max: '1400px' },
        'md-desktop': { max: '1360px' },
        desktop: { max: '1279px' },
        'lg-tablet': { max: '1024px' },
        'md-tablet': { max: '800px' },
        tablet: { max: '772px' },
        'lg-phone': { max: '639px' },
        'md-phone': { max: '460px' },
        phone: { max: '400px' },
        'mini-phone': { max: '360px' },
      },
      gridTemplateColumns: {
        'sneaker-list': 'repeat(auto-fill,minmax(240px,1fr))',
        'sneaker-list-horizontal': 'repeat(auto-fill,minmax(400px,1fr))',
        }
    },
  },
  plugins: [require("tailwindcss-animate")],
}