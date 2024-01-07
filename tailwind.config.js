/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
      height: {
        header: '120px',
        'mobile-header': '60px',
        hero: 'calc(100svh - 160px)',
        'mobile-hero': 'calc(100svh - 80px)',
      },
      gridTemplateColumns: {
        'sneaker-list': 'repeat(auto-fit,minmax(240px,1fr))',
      },
    },
  },
  plugins: [],
}
