/**
 * The base implementation of `value` and `valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`
 */

 function baseValues(object, props) {
   return props == null ? [] : props.map((key) => object[key])
 }

 export default baseValues