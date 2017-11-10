/*
* promise 可以链式调用
* promise每次调用.then或者.catch都会返回一个新的promise
* 从而实现链式调用
*/
Promise.resolve(1)
  .then((res)=>{
    console.log(res)
	return 2
  })
  .catch((err)=>{
	return 3
  })
  .then((res)=>{
	console.log(res)
  })