const CustomError = require('../extensions/custom-error')

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1

    for (let el of arr) {
      let tempDepth = 1

      if (Array.isArray(el)) {
        tempDepth = tempDepth + this.calculateDepth(el)

        if (tempDepth > depth) depth = tempDepth
      }
    }

    return depth
  }
}
