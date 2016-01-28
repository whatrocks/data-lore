var Stack = function() {

  var obj = {};

  obj.storage = {};
  obj.length = 0;

  obj.push = function(val) {
    obj.storage[obj.length] = val;
    obj.length++;
  }

  obj.pop = function() {
    var result = obj.storage[obj.length - 1];
    delete obj.storage[obj.length - 1];
    obj.length--;
    return result;
  }

  return obj;
}

var stacky = new Stack();
stacky.push("hello");
stacky.push("charlie");
stacky.push("harrington");
console.log(stacky);
console.log(stacky.pop());
console.log(stacky);
console.log(stacky.pop());
console.log(stacky.pop());
console.log(stacky);

