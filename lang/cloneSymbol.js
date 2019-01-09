Symbol.prototype.clone = function () {
  const valueOf = Symbol.prototype.valueOf
  return Object(valueOf.call(this))
}