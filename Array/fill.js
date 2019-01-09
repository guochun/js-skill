Array.prototype.fill = function (value, start = 0, end = this.length) {
  const result = new Array(Math.max(end, this.length))
  for (let i = 0; i < result.length; i ++) {
      if (i < end && i >= start)  result[i] = value
      else result[i] = this[i]
  }
  return result
}