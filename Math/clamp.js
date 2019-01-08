Math.clamp = function (number, lower, upper) {
  if (typeof number !== 'number') throw new Error('number must be number')
  if (typeof lower !== 'number') throw new Error('lower must be lower')
  if (typeof upper !== 'number') throw new Error('upper must be upper')
  if(lower >= upper) throw new Error('lower must be less than upper')
  if (number >= lower && number <= upper) return number
  if (number < lower) return lower
  if (number > upper) return upper
}