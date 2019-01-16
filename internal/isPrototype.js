/** used for built-in method references */
const obejectProto = Object.prototype

/**
 * Checks if `value` is  likely a prototype object
 * 
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `fasle` 
 * 
 */

 function isPrototype(value) {
   const Ctor = value && value.constructor
   const proto = (typeof Ctor == 'function' && Ctor.prototype) || obejectProto
   return value === proto
 }

 export default isPrototype