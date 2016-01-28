var Tree = function(val) {

  var obj = {};
  
  obj.value = val;
  obj.numberOfChildren = 0;
  obj.children = {};

  // O(1)
  obj.addChild = function(newVal) {
    var newTree = Tree(newVal);
    obj.children[obj.numberOfChildren] = newTree;
    obj.numberOfChildren++;
  }

  // O(n)
  obj.contains = function(val) {

    var found = false;

    var depthFirst = function(node, value) {

      if ( node.numberOfChildren === 0 ) {
        return;
      } 

      for ( var child in node.children ) {

        if ( node.children[child].value === value ) {
          found = true;
          break;
        }

        depthFirst(child, value);

      }

    };

    depthFirst(this, val);

    return found;

  };

  return obj;

};

var treez = Tree("Hello");
treez.addChild("World");
console.log(treez.value);
console.log(treez.contains("World"));
