class Employee{
  constructor(name){
    this._name = name
  }

  get name(){
    if(this._name){
      return 'Mr.' + this._name.toUpperCase()
    }else{
      return undefined
    }
  }

  set name(newName){
    if(newName == this._name){
      console.log('I already have this name')
    }else if(newName){
      this._name = newName
    }else{
      return false
    }
  }
}
var emp = new Employee('klren')

if(emp.name){
  console.log(emp.name)
}

emp.name = 'klkl'
console.log(emp.name)

emp.name = 'klkl'
console.log(emp.name)