Function.prototype.fakeApply = function (context, args) {
  if (typeof this !== 'function') {
    throw new TypeError(this.name + ' must be function')
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
  let result
  if (args) {
    result = context.fn(...args)
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}

Math.max.fakeApply(null, [1, 2, 3, 4, 90])