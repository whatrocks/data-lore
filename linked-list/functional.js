var LinkedList = function() {
  
  // Dynamic data structure with constant time insertion and remove

  var obj = {};
  obj.head = null;
  obj.tail = null;

  // O(1)
  obj.addToTail = function(val) {

    var node = Node(val);

    if ( !obj.head ) {
      obj.head = node;
    }

    if ( !obj.tail ) {
      obj.tail = node;
    } else {
      var oldTail = obj.tail;
      oldTail.next = node;
      obj.tail = node;
    }
  }

  // O(1)
  obj.removeHead = function() {
    var oldValue = obj.head.value;
    var newHead = obj.head.next;
    obj.head = newHead;
    return oldValue;
  }

  // O(n)
  obj.contains = function(value) {

    var node = obj.head;

    while ( node.next ) {

      if ( node.value === value ) {
        return true;
      }

      node = node.next;

    }

    return false;

  }

  return obj;
}

var Node = function(val) {
  var obj = {};
  obj.value = val;
  obj.next = null;
  return obj;
}

var linker = LinkedList();
linker.addToTail("This");
linker.addToTail("was");
linker.addToTail("fun!");
console.log(linker.removeHead()); // This
console.log(linker.contains("was")); // true
console.log(linker.contains("wasn't")); // false

