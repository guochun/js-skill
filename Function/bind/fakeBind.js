Function.prototype.fakeBind = function (context) {
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
  const args = [...arguments].slice(1)
  const that = this;
  const fNop = function () {}
  const bound = function () {
    return that.apply(this instanceof bound ? this : context, args.concat([...arguments]))
  }
  // 维护函数的prototype
  if(this.prototype) {
    fNop.prototype = this.prototype
  }
  //
  bound.prototype = new fNop()
  bound.constructor = bound

  return bound

}