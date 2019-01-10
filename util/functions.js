function functions (obj) {
  if (obj == null) return []
  Object.keys(obj).filter((key) => typeof Object[key] === 'function' )
}