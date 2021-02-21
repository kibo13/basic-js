const CustomError = require('../extensions/custom-error')

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity || !parseInt(sampleActivity)) {
    return false
  }

  let N0 = MODERN_ACTIVITY
  let N = parseInt(sampleActivity)
  let k = 0.693 / HALF_LIFE_PERIOD
  let t = Math.log(N0 / N) / k

  return Math.ceil(t)
}
