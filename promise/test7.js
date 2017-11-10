/**
* .then或.catch返回的值不能使promise本身，否则会造成死循环
*/
const promise = Promise.resolve()
  .then(()=>{
	  return promise
  })
 promise.catch(console.error)