import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Noto Sans',
      styles: ['100', '300', '400', '700'],
    },
  ],
  baseFontSize: '16px',
  baseLineHeight: 1.333,
  headerFontFamily: ['Noto Sans'],
  bodyFontFamily: ['Noto Sans'],
})

export default typography
