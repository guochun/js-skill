Function.prototype.fakeCall = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('this must be function')
  }
  context = context || window || global
  context.fn = this
  const args = [...arguments].slice(1)
  const result = context.fn(...args)
  return result
}

// test

console.log(Object.prototype.toString.fakeCall([]))  // [Object Array]