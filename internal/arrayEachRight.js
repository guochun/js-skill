/**
 * A specialized version of `forEachRight` for arrays.
 * 
 * @private
 * @param {Array} [arrays] The array to iterate over
 * @param {Function} iteratee The function invoked per iteration
 * @returns {Array} Return `array`
 */

 function forEachRight(array, iteratee) {
  let length = array == null ? 0 : array.length
  while (length --) {
    if (iteratee(array[length], length, array) === false) {
      break
    }
  }
  return array
 }

 export default forEachRight