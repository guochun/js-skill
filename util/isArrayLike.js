import isLength from './isLength'

function isArrayLike (value) {
  return value != null && typeof value !== 'function' && isLength(value)
}

export default isArrayLike