/** @type {import('tailwindcss').Config} */

module.exports = {
    purge: ['./src/**/*.tsx'],
    darkMode: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            gridTemplateColumns: {
                'header': 'auto 1fr auto'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}