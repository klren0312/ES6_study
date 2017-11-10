 /**
 * promise 有3种状态：pending、fulfilled和rejected。
 * 状态改变只能是 pending->fulfilled 或者 pending->reject .
 * 状态一旦改变则不能在变
 */
 const promise = new Promise((resolve, reject)=>{
	setTimeout(() => {
		resolve('success')
	},1000)
 })
 console.log(promise)
 promise
	.then(()=>{

		console.log(promise)
		throw new Error('error!!!')
	})
	.catch(err =>{
		console.log(promise)
	})