/**
 * 原文章: https://github.com/xieranmaya/blog/issues/2
 * promise标准解读
 * 
 * 1 只有一个then方法, 没有catch, race，all 等方法，甚至没有构造函数
 * 
 * Promise标准中仅指定了Promise对象的then方法的行为 其他一切我们常见的方法/函数都并没有指定
 * 包括catch race all等常用方法 设置也没有指定该如何构造出一个Promise对象,另外then也没有一般
 * 实现中（Q $q等）所支持的第三个参数 一般称onProgress
 * 
 * 2 then方法返回一个Promise
 * 
 * Promise的then返回一个新的Promsie 而不是返回this 
 * 
 * promise2 = promise1.then(func)
 * promise1 === promise2 // false
 * 
 * 3 不同Promise的实现需要可以相互调用
 * 
 * 4 Promise的初始状态为pending 它可以由此状态转化为fulfilled(也叫做resolved) 或者rejected 一旦状态决定
 * 就不可以转化为其他的状态 状态的确定过程叫settle
 * 
 * 一步一步实现一个Promise
 * 
 * 构造函数 ES6里所使用的方式
 * var promise = new Promise(function(resolve, reject){
 *    如果操作成功 调用resolve 并传入value
 *    如果失败 调用reject并传入reason
 * })
 * 
 * 
 * 
 */

function Promise(executor) {
  //保存当前的this
  var self = this
  //Promise当前的状态 初始化为 pending
  self.status = 'pending'
  //Promise的值
  self.data = undefined
  //Promise resolve时的回调函数集
  self.onResolvedCallback = []
  //Promise reject时的回调函数集
  self.onRejectCallback = []

  function resolve(value) {
    if (self.status === 'pending') {
      self.status = 'resolved'
      self.data = value
      for(var i = 0; i < self.onResolvedCallback.length; i++) {
        self.onResolvedCallback[i](value)
      }
    }
  }

  function reject(reason) {
    f (self.status === 'pending') {
      self.status === 'rejected'
      self.data = reason
      for(var i = 0; i < self.onRejectedCallback.length; i++) {
        self.onRejectedCallback[i](reason)
      }
    }
  }

  //考虑到执行executor的过程有可能出错 所以我们用 try/ catch包起来 并且在出错的时候可以reject到
  try{
    executor(resolve, reject) 
  }catch(e) {
    reject(e)
  }
}

Promise.prototype.then = function(onResolved, onRejected) {
  var self = this
  var promiseRef 

  // 根据标准 如果then的参数不是function 需要忽略
  onResolved = typeof onResolved === 'function' ? onResolved : function(v) {return v}
  onRejected = typeof onRejected === 'function' ? onRejected : function(r) {return r}

  //Promise总共有三种可能的状态，我们分三个if块来处理，在里面分别都返回一个new Promise。
  if (self.status === 'resolved') {
    //状态已经确认为 resolved 我们调用 onResolved
    return promiseRef = new Promise(function(resolve, reject) {
      try {
        var x = onResolved(self.data)
        if (x instanceof Promise) {
          x.then(resolve, reject)
        }
        resolve(x)
      } catch(e) {
        reject(e)
      }
    })
  }

  if (self.status === 'rejected') {
    return promiseRef = new Promise(function(resolve, reject) {

    })
  }

  if (self.status === 'pending') {
    return promiseRef = new Promise(function(resolve, reject) {

    })
  }
}