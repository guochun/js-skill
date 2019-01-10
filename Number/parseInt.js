const radixTable = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
  g: 16,
  h: 17,
  i: 18,
  j: 19,
  k: 20,
  l: 21,
  m: 22,
  n: 23,
  o: 24,
  p: 25,
  q: 26,
  r: 27,
  s: 28,
  t: 29,
  u: 30,
  v: 31,
  w: 32,
  x: 33,
  y: 34,
  z: 35
}
Number.parseInt = function (value, radix) {
  if (typeof value !== 'string') value = value.toString()
  if (radix == null) {
    if(/^0[xX]/.test(value)) {
      return radixTransform(value.slice(2),16)
    } else {
      radix = 10
    }
  } else {
    if (typeof radix !== 'number') return NaN
    radix = Math.floor(radix)
    radix = isFinite(radix) ? radix : 10
    radix = isNaN(radix) ? 10 : radix
    if (radix == 1 || radix > 36) return NaN
  }
  console.log('radix '+ radix)
  return radixTransform(value, radix)
}

function radixTransform(value, radix) {
  value = value.split('')
  const digits = []
  for (let i = 0; i < value.length; i ++) {
    const digit = value[i]
    if(digit in radixTable && radixTable[digit] < radix) digits.push(digit)
    else break
  }
  if(digits.length <= 0) return NaN
  console.log("digits: "+ digits)
  let digitsNum = 1;
  const total = digits.reduceRight((accu, item) => {
    let value = radixTable[item] * digitsNum
    value = accu + value
    digitsNum = digitsNum * radix
    return value
  }, 0)
  return total
}

