var Queue = function() {

  var obj = {};

  var storage = {};
  var length = 0;
  var tracker = 0;

  obj.enqueue = function(val) {
    storage[tracker] = val;
    length++;
    tracker++;
  };

  obj.dequeue = function() {
    var value = storage[tracker - length];
    length--;
    return value;
  };

  return obj;
};

var qbert = Queue();
qbert.enqueue("A");
console.log(qbert);
qbert.enqueue("B");
var first = qbert.dequeue();
console.log(first);
console.log(qbert.dequeue());
