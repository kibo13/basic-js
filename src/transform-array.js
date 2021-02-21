const CustomError = require('../extensions/custom-error')

module.exports = function transform(arr) {
  const discardNext = '--discard-next'
  const discardPrev = '--discard-prev'
  const doubleNext = '--double-next'
  const doublePrev = '--double-prev'

  let newArr = arr.slice()

  for (let i = 0; i < newArr.length; i++) {
    // the case for '--discard-next'
    if (newArr[i] == discardNext) {
      if (i == newArr.length - 1) {
        newArr[i] = 'deleted'
      } else {
        newArr[i] = 'deleted'
        newArr[i + 1] = 'deleted'
      }
    }

    // the case for '--discard-prev'
    if (newArr[i] == discardPrev) {
      if (i == 0) {
        newArr[i] = 'deleted'
      } else {
        newArr[i] = 'deleted'
        newArr[i - 1] = 'deleted'
      }
    }

    // the case for '--double-next'
    if (newArr[i] == doubleNext) {
      if (i == newArr.length - 1) {
        newArr[i] = 'deleted'
      } else {
        newArr[i] = newArr[i + 1]
      }
    }

    // the case for '--double-prev'
    if (newArr[i] == doublePrev) {
      if (i == 0) {
        newArr[i] = 'deleted'
      } else {
        newArr[i] = newArr[i - 1]
      }
    }
  }

  return Array.isArray(newArr) ? newArr.filter((el) => el != 'deleted') : false
}
