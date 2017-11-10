/**
* .then 或者 .catch 参数期望是函数，传入非函数则会发生值穿透
*/
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)
 