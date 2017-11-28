function square(){
  let example = () => {
    let numbers = []
    for(let number of arguments){
      numbers.push(number*number)
    }
    return numbers 
  }
  return example()
}
console.log(square(2,3,4,5,6,9))