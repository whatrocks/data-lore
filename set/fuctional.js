var Set = function() {

  // Sets contain unique valies in no particular order

  var obj = {};

  var storage = {};

  // O(1)
  obj.add = function(val) {
    storage[val] = true;
  };

  // O(1)
  obj.contains = function(val) {
    // Note: should do error checking for falsy values
    return storage[val] ? true: false;
  }

  // O(1)
  obj.remove = function(val) {
    delete storage[val];
    return val;
  }

  return obj;

};

var ssset = Set();
ssset.add("A");
ssset.add("B");
console.log(ssset.contains("A"));
console.log(ssset.contains("C"));
console.log(ssset.remove("A"));
console.log(ssset.contains("A"));


