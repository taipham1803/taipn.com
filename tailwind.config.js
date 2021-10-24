module.exports = {
    purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    mode: 'jit',
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'gray-1': '#7F7F7F',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
