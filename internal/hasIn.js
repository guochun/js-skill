/**
 * Checks if `path` is a direct of inherited property of `object`
 * 
 * @catergory Object
 * @param {Object} object The object to query
 * @param {string} key The key to check
 * @returns {boolean} Returns `true` if `key` exists, else `false`
 * 
 */

 function hasIn(object, key) {
   return object != null && key in Object(object)
 }

 export default hasIn