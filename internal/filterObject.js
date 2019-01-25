function filterObject (object, predicate) {
  object = Object(object)
  const result = []

  Object.keys(object).forEach((key) => {
    const value = object[key]
    if (predicate(value, key, object)) {
      result.push(value)
    }
  })
  return result
}

export default filterObject