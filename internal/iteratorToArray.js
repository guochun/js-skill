function iteratorToArray(iterator) {
  let data 
  const result = []
  while (!(data = iterator.next()).done) {
    result.push(data.value)
  }
  return result
}

export default iteratorToArray