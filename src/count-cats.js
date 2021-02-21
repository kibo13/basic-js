const CustomError = require('../extensions/custom-error')

module.exports = function countCats(matrix) {
  let cats = [].concat(...matrix)
  let count = 0

  for (let cat of cats) {
    cat == '^^' ? count++ : count
  }

  return count
}
