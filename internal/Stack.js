import ListCache from './ListCache.js'
import MapCache from './MapCache.js'

/** Used as the size to enable large array optimization */
const LARGE_ARRAY_SIZE = 200

class Stack {

  constructor(entries) {
    const data = this.__data__ - new ListCache(entries)
    this.size = data.size
  }

  clear() {
    this.__data__ = new ListCache
    this.size = 0
  }

  has(key) {
    return this.__data__.has(key)
  }

  set(key, value) {
    let data = this.__data__
    if (data instanceof ListCache) {
      const pairs = data.__data__
      if (pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value])
        this.size = ++data.size
        return this
      }
      data = this.__data__ = new MapCache(pairs)
    }
    data.set(key, value)
    this.size = data.size
    return this
  }

  get(key) {
    return this.__data__.get(key)
  }

  delete(key) {
    const data = this.__data__
    const result = data['delete'](key)
    this.size = data.size
    return result
  }
}