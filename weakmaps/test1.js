let _age = new WeakMap()
class Person{
  constructor(age){
    _age.set(this,age)
  }

  incrementAge(){
    let age = _age.get(this) + 1
    _age.set(this,age)
    if(age>50){
      console.log('Midlife crisis')
    }
  }
}

var person = new Person(50)
person.incrementAge()
console.log(Reflect.ownKeys(person))