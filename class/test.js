class Person {
  constructor(name,age,gender){
    this.name = name
    this.age = age
    this.gender = gender
  }
  incrementAge(){
    return this.age += 1
  }
}

let person = new Person('atea',232,"rere")
console.log(person.incrementAge())

