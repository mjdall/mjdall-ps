// for retreiving colours from an rgb var
const COL_BIT_MASK = 0xff

// for checking if a string is hex
const HEX_PATTERN = '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$'

// for converting a hex string to rgb
const HEX_TO_RGB = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i

module.exports = {
  /**
   * Parses a hex colour to rgb.
   *
   * @param {string} hexColour - Hex representation of a colour.
   */
  HexToRGB(hexColour) {
    if (!HEX_PATTERN.match(hexColour)) {
      console.log('invalid hex pattern in hexToRGB')
      return null
    }

    // parse hex to rgb with regexp
    const result = HEX_TO_RGB.exec(hex)
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null
  },

  /**
   * Converts rgb channels to a hex string.
   *
   * @param {int} r - red int.
   * @param {int} g  - green int.
   * @param {int} b - blue int.
   */
  RGBToHex(r, g, b) {
    const channelToHex = colourChannel => {
      const hex = colourChannel.toString(16)
      return hex.length === 1 ? '0' + hex : hex
    }
    return '#' + channelToHex(r) + channelToHex(g) + channelToHex(b)
  },

  /**
   * Returns a dict containing the red, blue and green colour
   * channels.
   *
   * keys are: r, g, b
   *
   * @param {int} colour - Int representation of a colour to
   * extract each channel from.
   *
   * Returns null if colour is not a number.
   */
  GetRGBChannels(colour) {
    if (isNaN(colour)) {
      return null
    }
    return {
      r: (colour >> 16) & COL_BIT_MASK,
      g: (colour >> 8) & COL_BIT_MASK,
      b: colour & COL_BIT_MASK,
    }
  },

  GetColourChannels(colour) {
    if (HEX_PATTERN.match(colour)) {
      return this.HexToRGB(colour)
    } else if (!isNaN(colour)) {
      return this.GetRGBChannels(colour)
    }
    return null
  },

  /**
   * Mixes two colours together with a percent indicating
   * how much of a mix the two colours are.
   *
   * @param {colour} colourOne - Colour to blend with colourTwo.
   * @param {colour} colourTwo - Other colour to blend with.
   * @param {colour} percentMix - The amount of colourOne's colour channels
   *  that will be apart of the resultant colour.
   *  i.e. 0.9 would indicate 90% of the resultant colour is made from
   *  colourOne's colour channels.
   */
  TransitionColours(colourOne, colourTwo, percentMix) {
    // make sure the colour is between 0.0 and 1.0
    const clampedPercent =
      percentMix > 1.0 ? 1.0 : percentMix < 0.0 ? 0.0 : percentMix

    const rgbColourOne = this.GetColourChannels(colourOne)
    const rgbColourTwo = this.GetColourChannels(colourTwo)

    // invalid input
    if (rgbColourOne === null || rgbColourTwo === null) {
      return null
    }

    // for mixing two colour channels together
    const mixChannel = (channelOne, channelTwo, percentMix) => {
      const inverseMixRatio = 1.0 - percentMix
      return channelOne * percentMix + channelTwo * inverseMixRatio
    }

    // for extracting and mixing the colours
    const colourKeys = ['r', 'g', 'b']
    const resultant = { r: 0, g: 0, b: 0 }

    colourKeys.map(key => {
      // probably should handle this but alles gut
      if (!(key in rgbColourOne) || !(key in rgbColourTwo)) {
        console.log('expected keys not in dict')
        return null
      }

      // get each of the colours
      const channelOne = rgbColourOne[key]
      const channelTwo = rgbColourTwo[key]

      // get the resultant colour
      resultant[key] = mixChannel(channelOne, channelTwo, percentMix)
    })

    // return back as hex
    return this.RGBToHex(resultant.r, resultant.g, resultant.b)
  },
}
