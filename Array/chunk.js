Array.prototype.chunk = function (size = 1) {
  if (!Number.isInteger(size)) throw new TypeError('size must be integer')
  size = Math.max(size, 0)
  if (this.length <= 0 || size == 0) return []
  let index = 0
  const result = new Array(Math.ceil(this.length / size))
  while (index < result.length) {
    result[index] = this.slice(index * size, index * size + size)
    index++
  }
  return result
}