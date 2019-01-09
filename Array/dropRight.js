Array.prototype.dropRight = function (value = 1) {
  value = Math.max(value, 0)
  if (value >= this.length) return []
  const result = new Array(this.length - value)
  for (let i = 0; i < result.length; i ++) {
    result[i] = this[i]
  }
  return result
}