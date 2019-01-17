/** used to check objects for own properties */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * checks if `key` is a direct property of `object`
 * 
 * @param {Object} object The object to query
 * @param {string} key The key to check
 * @returns {boolean} Returns `true` if `key` exists, else `false`
 * 
 */

 function has(object, key) {
   return object != null && hasOwnProperty.call(object, key)
 }

 export default has