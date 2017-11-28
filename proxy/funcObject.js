var target = function(){ return "I am the target " }
var handler = {
  apply: function(receiver, ...args){
    return "I am the proxy"+args
  }
}

var p = new Proxy(target, handler)
console.log(p("test"))