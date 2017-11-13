var person = {
  firstName:'James',
  lastName:'Bond',
  get fullName(){
    console.log('Getting FullName')
    return this.firstName + ' ' + this.lastName
  },
  set fullName(name){
    console.log('Setting FullName')
    var words = name.toString().split(' ')
    this.firstName = words[0] || ''
    this.lastName = words[1] || ''
  }
}

console.log(person.fullName)
console.log(person.fullName = 'klklren')
console.log(person.fullName)