Array.prototype.compact = function () {
  let index = 0
  let result = []
  for(const value of this) {
    if(value) result[index++] = value
  }
  return result
}