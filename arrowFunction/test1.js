function Person(name){
  this.name = name
}

Person.prototype.prefixName = function(arr){
  return arr.map(function(character){
    
    return this.name + character
  })
}
console.log(Person())