var HashTable = function() {

  var obj = {};
  var storage = [];
  var storageLimit = 8;

  // Average: O(1), worst: O(n)
  obj.insert = function(key, val) {

    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index] || [];
    var foundIt = false;

    for ( var i = 0; i < bucket.length; i++ ) {
      if ( bucket[i][0] === key) {
        bucket[i][1] = val;
        foundIt = true;
      }
    }

    if (!foundIt) {
      var tuple = [key, val];
      bucket.push(tuple);
    }

    storage[index] = bucket;

  };

  // Average: O(1), Worst: O(n)
  obj.retrieve = function(key) {

    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index] || [];

    for (var i = 0; i < bucket.length; i++ ){
      if ( bucket[i][0] === key) {
        return bucket[i][1];
      }
    }

  };
 
  // Average: O(1), Worst: O(n)
  obj.remove = function(key) {

    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index] || [];
    var result;

    for ( var i = 0; i < bucket.length; i++ ) {
      if (bucket[i][0] === key) {
        result = bucket[i][1];
        bucket[i][1] = undefined;
      }
    }

    storage[index] = bucket;
    return result;

  };

  return obj;

};


// HASHING FUNCTION
// Turns any string into an integer that is well-distributed between 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var hashy = HashTable();
console.log(hashy.retrieve("Darth"));
hashy.insert("Darth", "Vader");
console.log(hashy.retrieve("Darth"));
hashy.insert("Darth", "Maul");
console.log(hashy.retrieve("Darth"));
console.log(hashy.remove("Darth"));
console.log(hashy.retrieve("Darth"));
hashy.insert("Darth", "Vader");
console.log(hashy.retrieve("Darth"));


