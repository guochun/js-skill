function every(array, predicate) {
  let index = - 1
  const length = array == null ? 0 : array.length
  while (++index < length) {
    if (!predicate(array[index], index, array)) return false
  }

  return true
}

export default every