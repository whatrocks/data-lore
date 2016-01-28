var DoubleLinkedList = function() {
  var obj = {};
  obj.head = null;
  obj.tail = null;

  // addToHead
  obj.addToHead = function(value) {
    var newNode = Node(value);
    
    if ( obj.head === null ) {
      obj.head = newNode;
    } else {
      var oldHead = obj.head;
      newNode.next = oldHead;
      oldHead.previous = newNode;
      obj.head = newNode;
    }

    if (obj.tail === null ) {
      obj.tail = newNode;
    }
  };
  
  // addToTail
  obj.addToTail = function(value) {

    var newNode = Node(value);

    if ( obj.tail === null ) {
      obj.tail = newNode;
    } else {
      var oldTail = obj.tail;
      newNode.previous = oldTail;
      oldTail.next = newNode;
      obj.tail = newNode;
    }

    if ( obj.head === null ) {
      obj.head = newNode;
    }

  };

  // removeHead
  obj.removeHead = function() {

    var result = obj.head.value;
    obj.head = obj.head.next;
    obj.head.previous = null;
    return result;

  };

  // removeTail
  obj.removeTail = function() {
    var result = obj.tail.value;
    obj.tail = obj.tail.previous;
    obj.tail.next = null;
    return result;
  };

  return obj;
};

var Node = function(val) {
  var obj = {};
  obj.value = val;
  obj.previous = null;
  obj.next = null;
  return obj;
}

var link = DoubleLinkedList();
link.addToHead("Charlie");
link.addToHead("King");
console.log(link.head);
console.log(link.tail);
link.addToTail("the Great");
console.log(link.tail);
console.log(link.removeTail());
console.log(link.tail);
console.log(link.removeHead());
console.log(link);
