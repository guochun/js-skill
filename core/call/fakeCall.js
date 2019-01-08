Function.prototype.fakeCall = function (content) {
  if (typeof this !== 'function') {
    throw new TypeError('this must be function')
  }
  content = content || window || global
  content.fn = this
  const args = [...arguments].slice(1)
  const result = content.fn(...args)
  return result
}

// test

console.log(Object.prototype.toString.fakeCall([]))  // [Object Array]