//export 变量
export let name = 'David'

//export list
function sumTwo(a,b){
  return a+b
}
function sumThree(a,b,c){
  return a+b+c
}
export { sumTwo, sumThree}

//export function,object,value
export function sumTwo(a,b){
  return a+b
}

//export default bindings
function sumTwo(a,b){
  return a+b
}
function sumThree(a,b,c){
  return a+b+c
}

let api = {
  sumTwo,
  sumThree
}

export default api

