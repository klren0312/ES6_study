let map = new Map([
  ['name','devid'],
  [true,'false'],
  [1,'one'],
  [{},'object'],
  [function(){},'function']
])

for(let key of map.keys()){
  console.log(typeof key)
}

for(let [key, value] of map.entries()){
  console.log(key,value)
}

console.log(map)