function everyValue(object, predicate) {
  object = Object(object)
  const props = Object.keys(object)

  for (const key of props) {
    if(!predicate(object[key], key, object)) return false
  }

  return true
}

export default everyValue