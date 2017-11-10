

const arr = [1,2,3,4,5]
/**
 * 1
 */
// const squares = arr.map(x=>x*x)
// console.log(squares)
/**
 * 2
 */
var squares = arr.map(function(x){
  return x * x
})
console.log(squares)