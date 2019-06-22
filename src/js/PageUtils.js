module.exports = {
  /**
   * Gets the percentage until the next page is at
   * the top of the clients screen.
   * @param {int} currentPageTop - Where the top of the screen is.
   * @param {int} pageHeight - The height of the clients browser.
   */
  GetPercentToNextPage(currentPageTop, pageHeight) {
    if (isNan(currentPageTop) || isNaN(pageHeight)) {
      return null
    }

    // the number of pixels down from the top of the
    // previous page block the client is
    const currentPageScroll = currentPageTop % pageHeight
    return currentPageScroll / pageHeight
  },
}
