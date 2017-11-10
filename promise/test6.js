/**
* .then 或.catch中return一个error对象，并不会抛出错误，所以不会被后续的.catch捕获
*/
Promise.resolve()
  .then(()=>{
	  //return new Error('error!!!')
	  return Promise.reject(new Error('error!!!'))
  })
  .then((res)=>{
	  console.log('then:',res)
  })
  .catch((err)=>{
	  console.log('catch: ',err)
  })