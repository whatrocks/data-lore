var BinaryHeap = function() {

  this._heap = [];
  this._compare = function (i, j) {
    return i < j;
  };
}

BinaryHeap.prototype.insert = function (node) {

  // add node to the end of the heap
  this._heap.push(node);

  // locate the nodes parent
  var index = this._heap.length - 1;
  var parentIndex = Math.floor( (index - 1) / 2);

  // while the node has parent and is less than parent
  while ( index > 0 && ( this._compare(this._heap[index], this._heap[parentIndex]))) {

    // swap node and parent
    swapNodesAt(index, parentIndex, this);
    index = parentIndex;
    parentIndex = Math.floor( (index - 1) / 2);
  }
}

BinaryHeap.prototype.removeRoot = function () {

  // swap root with last node
  swapNodesAt(this._heap.length - 1, 0, this);

  // remove the last node and store it to be returned later
  var originalRoot = this._heap.pop();

  var temporaryRootIndex = 0;

  // compare children nodes to get the index of the lesser item
  var lesserChildIndex = getLesserChildIndex(temporaryRootIndex, this);

  // while there are hchildren nodes and the lesser of them is less than the new root
  while ( lesserChildIndex && this._compare(this._heap[lesserChildIndex], this._heap[temporaryRootIndex])) {
    swapNodesAt(lesserChildIndex, temporaryRootIndex, this);
    temporaryRootIndex = lesserChildIndex;
    lesserChildIndex = getLesserChildIndex(temporaryRootIndex, this);
  }

  return originalRoot;
}

function swapNodesAt(index, parentIndex, binaryHeap) {
  var heap = binaryHeap._heap;
  var temp = heap[index];
  heap[index] = heap[parentIndex];
  heap[parentIndex] = temp;
}


function getLesserChildIndex (parentIndex, binaryHeap) {
  var childIndices = [ parentIndex * 2 + 1, parentIndex * 2 + 2].filter(function (index) {
    return index < binaryHeap._heap.length;
  });

  // compare children nodes to get the index of the lesser of them
  if ( binaryHeap._compare(binaryHeap._heap[childIndices[0]], binaryHeap._heap[childIndices[1]])) {
    return childIndices[0];
  } else {
    return childIndices[1];
  }
}

var heapy = new BinaryHeap();
heapy.insert(10);
heapy.insert(1);
heapy.insert(2);
heapy.insert(100);
heapy.insert(5);
heapy.removeRoot();
console.log(heapy);

