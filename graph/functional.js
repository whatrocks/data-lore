var Graph = function() {

  var obj = {};

  var nodes = {};
  var edges = {};
  
  // O(1)
  obj.addNode = function(val) {
    nodes[val] = true;
  }

  // O(1)
  obj.contains = function(val) {
    return nodes[val] ? true : false;
  }

  // removeNode
  obj.removeNode = function(val) {
    var node = nodes[val];
    delete nodes[val];
    return node;
  }

  // addEdge
  obj.addEdge = function(node1, node2) {

    // To-do: Should check that they are valid nodes first!
    edges[node1] = edges[node1] || {};
    edges[node2] = edges[node2] || {};
    edges[node1][node2] = true;
    edges[node2][node1] = true;
  };

  // hasEdge
  obj.hasEdge = function(node1, node2) {
    return edges[node1][node2] ? true : false;
  }

  // removeEdge
  obj.removeEdge = function(node1, node2) {
    delete edges[node1][node2];
    delete edges[node2][node1];
  }

  // O(n)
  obj.forEachNode = function(cb) {
    for (var node in nodes) {
      cb(node);
    }
  }

  return obj;

};

var graphy = Graph();
graphy.addNode("C");
graphy.addNode("H");
console.log(graphy.contains("C")); // true
console.log(graphy.contains("Z")); // false
graphy.removeNode("H");
console.log(graphy.contains("H")); // false
graphy.addNode("HAHAHA");
graphy.forEachNode(function(node) {
  console.log("I am node: ", node);
})
graphy.addEdge("C", "HAHAHA");
console.log(graphy.hasEdge("C", "HAHAHA")); // true
graphy.removeEdge("C", "HAHAHA");
console.log(graphy.hasEdge("C", "HAHAHA")); // false

