module.exports = {
    plugins: {
        'postcss-px-to-viewport': {
            unitToConvert: 'px',
            viewportWidth: 375, // 设计稿宽度
            viewportUnit: 'vw',
            minPixelValue: 1,
            mediaQuery: false,
        },
    },
};