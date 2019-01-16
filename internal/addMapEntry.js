/**
 * Adds the key-value `pair` to `map`(在字典里添加一个键值对)
 * 
 * @private 
 * @param {Object} map The map to modify
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} returns `map`
 */

function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1])
  return map
}

export default addMapEntry