import getTag from './getTag'
import isObjectLike from './isObjectLike'

function isBoolean(value) {
  return value === true || value === false ||
  (isObjectLike(value) && getTag(value) == '[object object]')
}

export default isBoolean