var HashTable = function() {

  // Double in size when utilization is greater than 75%
  // Halve in size when below 25%

  var obj = {};
  var storage = [];
  var storageLimit = 16;
  var size = 0;

  // Average: O(1), worst: O(n)
  obj.insert = function(key, val) {

    console.log("inserting: ", key, val);

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
      size++;
    }

    storage[index] = bucket;

    if ( size >= storageLimit * 0.75 ) {
      resize(storageLimit * 2);
    }

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
        size--;
      }
    }

    storage[index] = bucket;

    if (size <= storageLimit * 0.25) {
      resize(storageLimit / 2);
    }

    return result;

  };

  // Resizing means that insertion or deletion
  // could be O(n)
  var resizing = false;
  var resize = function(newLimit) {
    console.log("Resizing to new limit of ", newLimit );
    if (!resizing) {
      var tuples = [];
      for (var i = 0; i < storage.length; i++ ) {
        if (!storage[i]) {
          continue;
        }
        for (var j = 0; j < storage[i].length; j++ ) {
          if (!storage[i][j]) {
            continue;
          }
          tuples.push(storage[i][j]);
        }
      }
      storageLimit = newLimit;
      storage = [];
      size = 0;
      for (var i = 0; i < tuples.length; i++ ) {
        obj.insert(tuples[i][0], tuples[i][1]);
      }
      resizing = false;
    }
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
hashy.insert("Luke", "Sky");
hashy.insert("Han", "Solo");
hashy.insert("Leia", "Solo");
hashy.insert("Greedo", "Thing");
hashy.insert("Boba", "Fett");
hashy.insert("Lando", "Cal");
hashy.insert("Poe", "D");
console.log(hashy);


