/**
 * for in 方式遍历数组 不但遍历本身的元素 也会遍历原型上的元素 
 * 如果原型上和本身有重复的key 会忽略 原型的key
 * 可以使用 Object.prototype.hasOwnProperty过滤原型的key
 * 不能遍历修饰符为 enumerable 为 false的 key
 * 
 */
 const ownKey = Object.prototype.hasOwnProperty
 var a = {
   id: 1001,
   name: 'purcy',
   age: 11
 }

 var b = {
   hobby: 'book',
 }

 var c = {
   name: 'tony'
 }

 Object.setPrototypeOf(b,a)
 Object.setPrototypeOf(c,b)

 //  hobby id name age
 for (let key in b) {
  console.log(key)
 }

 // name hobby id age
 for (let key in c) {
  console.log(key)
 }
 
 // name
 for (let key in c) {
  if(hasOwnProperty.call(c, key)) {
    console.log(key)
  }
 }



