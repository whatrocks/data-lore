var Node = function(data) {
  this.data = data;
  this.isWord = false;
  this.prefixes = 0;
  this.children = {};
}

var Trie = function() {
  this.root = new Node('');
}

Trie.prototype.add = function(word) {
  if (!this.root) {
    return null;
  }
  this._addNode(this.root, word);
}

Trie.prototype._addNode = function(node, word) {
  if (!node || !word) {
    return null;
  }
  node.prefixes++;
  var letter = word.charAt(0);
  var child = node.children[letter];
  if (!child) {
    child = new Node(letter);
    node.children[letter] = child;
  }
  var remainder = word.substring(1);
  if (!remainder) {
    child.isWord = true;
  }
  this._addNode(child, remainder);
}

var myTrie = new Trie();
myTrie.add("apple");
console.log(myTrie.root.children);