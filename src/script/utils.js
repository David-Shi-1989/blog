var utils = {
  screenSize: {
    map: [
      {min: 900, max: 1199, value: 12},
      {min: 1200, max: 1499, value: 16},
      {min: 1500, max: 1899, value: 20},
      {min: 1900, max: 2199, value: 26},
      {min: 2200, max: 2799, value: 36},
      {min: 2800, max: 3799, value: 50},
      {min: 3800, max: 4199, value: 56}
    ],
    screenWidth () {
      return parseInt(document.body.clientWidth)
    },
    getCurrentSizeHtmlFontSize (val) {
      let width = val || this.screenWidth()
      let result = 10
      for (let i = 0; i < this.map.length; i++) {
        if (width >= this.map[i].min && width <= this.map[i].max) {
          result = this.map[i].value
          break
        }
      }
      return result
    },
    remToPx (remSize) {
      if (remSize && !isNaN(parseFloat(remSize))) {
        return this.getCurrentSizeHtmlFontSize() * parseFloat(remSize)
      } else {
        throw new Error('function remToPx only accept number as paramter.')
      }
    }
  }
}
export default utils
