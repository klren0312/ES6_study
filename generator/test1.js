function* sillyGenerator(){
  yield 1
  yield 2
  yield 3
  yield 4
}

var generator = sillyGenerator()

console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())