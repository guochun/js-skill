RegExp.prototype.clone = function () {
  if (RegExp.prototype.flags === undefined) {
    Object.defineProperty(RegExp.prototype, 'flags', {
      configurable: true,
      get: function () {
        return this.toString().match(/[gimuy]*$/)[0];
      }
    });
  }
  const result = new this.constructor(this.source, this.flags)
  result.lastIndex = this.lastIndex
  return result
}