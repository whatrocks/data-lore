var Queue = function() {

  // FIFO

  var obj = {};

  var storage = {};
  var length = 0;
  var tracker = 0;

  // O(1)
  obj.enqueue = function(val) {
    storage[tracker] = val;
    length++;
    tracker++;
  };

  // O(1)
  obj.dequeue = function() {
    var value = storage[tracker - length];
    length--;
    return value;
  };

  return obj;
};

Queue.classHello = function() {
  console.log("I am a class only method");
}

var qbert = Queue();
qbert.enqueue("A");
console.log(qbert);
qbert.enqueue("B");
var first = qbert.dequeue();
console.log(first);
console.log(qbert.dequeue());
//qbert.classHello(); // doesn't work on instances
Queue.classHello();
