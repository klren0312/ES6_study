function f(x, y=12){
  return x+y
}
function ff(x, ...y){
  console.log(y)
  return x * y.length
}
function fff(x,y,z){
  return x+y+z
}
console.log(f(3))
console.log(ff(3,"hello",true))
console.log(fff(...[1,2,3]))