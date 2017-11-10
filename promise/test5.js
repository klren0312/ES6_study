/*
* promise 的 .then 或者.catch 可以被调用多次，但这里的Promise构造函数只执行一次
* promise内部状态一经改变，并且有了值，那么后续每次调用.then或者.catch都会直接拿到
*/
const promise = new Promise((resolve,reject) => {
	setTimeout(()=>{
		console.log('once')
		resolve('success')
	},1000)
})

const start = Date.now()
promise.then((res)=>{
	console.log(res,Date.now()-start)
})

promise.then((res)=>{
	console.log(res,Date.now() - start)
})