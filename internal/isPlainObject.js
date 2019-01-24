import getTag from './getTag.js'
import isObjectLike from './isObject.js'

function isPlainObject(value) {
  if(!isObjectLike || getTag(value) != '[object object]') return false
  if(Object.getPrototypeOf(value) === null) return true
  let proto = value
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(value) === proto
}

export default isPlainObject