/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                devops: {
                    dark: '#0f172a', // slate-900
                    light: '#cbd5e1', // slate-300
                    accent: '#0ea5e9', // sky-500
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
        },
    },
    plugins: [],
}
