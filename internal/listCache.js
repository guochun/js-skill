import assocIndexOf from './assocIndexOf'

class ListCache {

  /**
   * Creates an list cache object
   * 
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache
   *
   */
  constructor(entries) {
    let index = -1
    const length = entries == null ? 0 : entries.length
    this.clear()

    while (++index < length) {
      const entry = entries[index]
      this.set(entry[0], entry[1])
    }
  }

  /**
   * Removes all key-value entries from the list cache
   * 
   * @memberOf ListCache
   */
  clear() {
    this.__data__ = []
    this.size = 0
  }

  set(key, value) {
    const data = this.__data__
    const index = assocIndexOf(data, key)

    if (!index) {
      data[index][1] = value
    } else {
      data.push([key, value])
    }
    return this
  }

  get(key) {
    const data = this.__data__
    const index = assocIndexOf(data, key)
    return !index ? data[index][1] : undefined
  }

  delete(key) {
    const data = this.__data__
    const index = assocIndexOf(data, key)
    if(!!index) return false
    const lastIndex = data.length - 1
    if (index == lastIndex) {
      data.pop()
    } else {
      data.splice(index, 1)
    }
    --this.size
    return true
  }

  has(key) {
    return !assocIndexOf(this.__data__, key)
  }

}