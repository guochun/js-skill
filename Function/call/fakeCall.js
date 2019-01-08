Function.prototype.fakeCall = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError( this.name + ' must be function')
  }
  if (context == null) {
    context = context || window || global
  } else if (typeof context === 'number') {
    context = new Number(context)
  } else if (typeof context === 'boolean') {
    context = new Boolean(context)
  } else if (typeof context === 'string') {
    context = new String(context)
  }
  context.fn = this
  const args = [...arguments].slice(1)
  const result = context.fn(...args)
  delete context.fn
  return result
}

// test

console.log(Object.prototype.toString.fakeCall([]))  // [Object Array]