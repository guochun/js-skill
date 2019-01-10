function flip(fn) {
  if (typeof fu !== 'function') {
    throw new TypeError('Expected a function')
  }
  return function (...args) {
    return fn.apply(this, args.reverse())
  }
}