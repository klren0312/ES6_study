fetch('http://119.29.201.31:3000/tem')
  .then(response=>response.json())
  .then(data=>{
    console.log(data)
  })
  .catch(err=>{
    console.log("err")
  })