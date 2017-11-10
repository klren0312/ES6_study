/**
* 构造函数中的resolve或reject只有第一次执行有效，
* 多次调用没有任何作用，promise状态一旦改变就不能再变
*/
const promise = new Promise((resolve, reject) => {
  reject('error')
  resolve('success1')
  resolve('success2')
})
 
promise
  .then((res)=>{
  	console.log('then:',res)
  })
  .catch((err)=>{
	console.log('catch',err)
  })