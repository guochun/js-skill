function mapToArray(map) {
  let index = -1
  const result = new Array(map.size)
  map.forEach((value, key) => {
    result[++index] = [key, value]
  })
  return result
}

export default mapToArray