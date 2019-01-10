function defer(fn, ...args) {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function')
  }
  setTimeout(fn,1,...args)
}