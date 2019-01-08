Function.prototype.fakeApply = function (context,args) { 
  if (typeof this !== 'function') {
    throw new TypeError('this must be function')
  }
  context = context || window || global
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

Math.max.fakeApply(null,[1,2,3,4,90])