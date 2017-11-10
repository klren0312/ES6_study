/**
* process.nextTick 和 promise.then 都属于microtask，而setImmediate属于macrotasks
* 事件循环的每个阶段（macrotasks）之间都会执行microtasks，时间循环的开始会先执行一次microtasks
*
*/
process.nextTick(()=>{
	console.log('nextTick')
})
Promise.resolve()
	.then(()=>{
		console.log('then')
	})
setImmediate(()=>{
	console.log('setImmediate')
})

console.log('end')