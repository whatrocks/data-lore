var Stack = function() {

  //LIFO

  var obj = {};

  obj.storage = {};
  obj.length = 0;

  //O(1)
  obj.push = function(val) {
    obj.storage[obj.length] = val;
    obj.length++;
  }

  //O(1)
  obj.pop = function() {
    var result = obj.storage[obj.length - 1];
    delete obj.storage[obj.length - 1];
    obj.length--;
    return result;
  }

  return obj;
}

var stacky = Stack();
stacky.push("hello");
stacky.push("charlie");
stacky.push("harrington");
console.log(stacky);
console.log(stacky.pop());
console.log(stacky);
console.log(stacky.pop());
console.log(stacky.pop());
console.log(stacky);

