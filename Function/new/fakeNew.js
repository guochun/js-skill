function fakeNew(fn) {
  const args = [...arguments].slice(1)
  const obj = {}
  obj.__proto__ = fn.prototype
  const result = fn.apply(obj, args)
  return typeof result !== 'Object' ? obj : result;
}