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
                    light: '#94a3b8', // slate-400
                    accent: '#38bdf8', // sky-400
                    success: '#10b981', // emerald-500
                    surface: '#1e293b', // slate-800
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
