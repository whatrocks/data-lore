var BST = function(val) {

  // Great for a dictionary of all English words
  // Binary search trees can only have 0, 1, or 2 children
  // One child will always be less than parent and one will be greater than parent

  var obj = {};

  obj.value = val;
  obj.left = null;
  obj.right = null;

  // O (log n)
  obj.insert = function(val) {

    var newTree = BST(val);

    var findPosition = function(node) {
      if ( newTree.value < node.value ) {
        if ( node.left === null ) {
          node.left = newTree;
        } else {
          findPosition(node.left);
        }
      } else {
        if (node.right === null) {
          node.right = newTree;
        } else {
          findPosition(node.right);
        }
      }
    };
    findPosition(this);
  };

  // O(log n)
  obj.contains = function(val) {
    var found = false;
    var search = function(node) {
      if ( node === null) {
        return;
      }
      if (node.value === val) {
        found = true;
        return;
      } else {
        if (node.value > val) {
          search(node.left);
        } else {
          search(node.right);
        }
      }

    };
    search(this);
    return found;
  }

  // O(n)
  obj.depthFirstLog = function(cb) {
    var iterate = function(node){
      if (node === null) {
        return;
      }
      cb(node.value);
      iterate(node.left);
      iterate(node.right);
    }
    iterate(this);
  }

  // O(n)
  obj.breadthFirstLog = function(cb) {
    var iterate = function(nodeArray) {
      for ( var i = 0; i < nodeArray.length; i++ ){
        cb(nodeArray[i].value);
      }
      var nextLayer = [];
      for ( var i = 0; i < nodeArray.length; i++) {
        if (nodeArray[i].left) {
          nextLayer.push(nodeArray[i].left);
        }
        if (nodeArray[i].right){ 
          nextLayer.push(nodeArray[i].right);
        }
      }
      if ( nextLayer.length ) {
        iterate(nextLayer);
      }

    }
    iterate([this]);
  }

  return obj;
};

var bfg = BST(10);
bfg.insert(5);
bfg.insert(1);
bfg.insert(-11);
bfg.insert(100);
bfg.insert(20);
bfg.insert(11);
console.log(bfg.contains(12));
bfg.depthFirstLog(function(node) {
  console.log("I am node: ", node);
});
console.log("-----------------------");
bfg.breadthFirstLog(function(node) {
  console.log("I am node: ", node);
});

