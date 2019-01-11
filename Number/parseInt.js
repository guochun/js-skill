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
  let sign = 1
  if (typeof value !== 'string') value = value.toString()
  value = trimLeft(value)
  value = value.replace(/^([+-])?/, (match, $1) => {
    if ($1 === '-') sign = -1
    return ''
  })
  console.log(value)
  if (radix == null) {
    const patten = /^0([xXOoBb])/
    if (patten.test(value)) {
      value = value.replace(patten, (match, $1) => {

        $1 = $1.toLowerCase()
        if ($1 === 'x') radix = 16
        else if ($1 === 'o') radix = 8
        else if ($1 === 'b') radix = 2
        return ''
      })
    } else {
      radix = 10
    }
  } else {
    radix = Number(radix)
    radix = Math.floor(radix)
    radix = isFinite(radix) ? radix : 10
    radix = isNaN(radix) ? 10 : radix
    radix = radix === 0 ? 10 : radix
    if (radix == 1 || radix > 36) return NaN
  }
  return radixTransform(value, radix) * sign
}

function radixTransform(value, radix) {
  value = value.split('')
  const digits = []
  for (let i = 0; i < value.length; i++) {
    const digit = value[i]
    if (digit in radixTable && radixTable[digit] < radix) digits.push(digit)
    else break
  }
  if (digits.length <= 0) return NaN
  let digitsNum = 1;
  const total = digits.reduceRight((accu, item) => {
    let value = radixTable[item] * digitsNum
    value = accu + value
    digitsNum = digitsNum * radix
    return value
  }, 0)
  return total
}

function trimLeft(value) {
  return value.replace(/^\s*/, '')
}

console.log(Number.parseInt('-13', 4))