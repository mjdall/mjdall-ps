const HEADER_FONT_COLOUR = 'headerFontColour'
const BG_COLOUR = 'backgroundColour'

const NEEDED_KEYS = [HEADER_FONT_COLOUR, BG_COLOUR]

module.exports = {
  /**
   * The standard that any component which uses multiple
   * themes to create effects is expecting.
   *
   * @param {dict} theme - Dict representing a theme.
   */
  IsValidTheme(theme) {
    // I really need to start using typescript ...
    if (theme.constructor !== Object) {
      return false
    }

    // check for any keys that should be in the theme
    const missingKeys = NEEDED_KEYS.filter(themeKey => !(themeKey in theme))
    if (missingKeys) {
      // should really do this elsewhere but eh
      console.log('missing: ' + missingKeys)
      return false
    }
    return true
  },
}
