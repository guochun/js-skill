Number.fakeIsInteger = function (value) {
  if (typeof value !== 'number') return false
  if(isFinite(value)) return false
  return Math.ceil(value) === value
}