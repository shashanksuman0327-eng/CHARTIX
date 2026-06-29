import type { Config } from 'tailwindcss';
const config: Config = { darkMode: 'class', content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'], theme: { extend: { colors: { railway: { blue: '#005BAC', navy: '#07131F', orange: '#FF9933', green: '#138808', bg: '#081420', card: '#132237' } }, fontFamily: { sans: ['Inter','sans-serif'] }, boxShadow: { glow: '0 24px 80px rgba(0,91,172,.28)' } } }, plugins: [] };
export default config;
