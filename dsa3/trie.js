class TrieNode {
  constructor() {
    this.children = {}
    this.isEndOfWord = false
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(word) {
    let node = this.root
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode()
      }
      node = node.children[char]
    }
    node.isEndOfWord = true
  }

  search(word) {
    let node = this.root
    for (let char of word) {
      if (!node.children[char]) return false
      node = node.children[char]
    }
    return node.isEndOfWord
  }

  delete(word) {
    const deleteHelper = (node, word, index) => {

      if (index === word.length) {
        if (!node.isEndOfWord) return false
        node.isEndOfWord = false
        return Object.keys(node.children).length === 0
      }

      let char = word[index]
      if (!node.children[char]) return false

      let shouldDelete = deleteHelper(
        node.children[char],
        word,
        index + 1
      )

      if (shouldDelete) {
        delete node.children[char]
        return (
          Object.keys(node.children).length === 0 &&
          !node.isEndOfWord
        )
      }

      return false
    }

    deleteHelper(this.root, word, 0)
  }
  
  
  startwith(prefix){
    let node=this.root
    
    for(let char of prefix){
      if(!node.children[char])return []
       node=node.children[char]
       
    }
    return this.getWords(node,prefix)
  }
  
  
  getWords(node,prefix){
    let word=[];
    
    if(node.isEndOfWord)word.push(prefix)
    
    
    
      for (let char in node.children) {
            words.push(...this.getWords(node.children[char], prefix + char));
        }
        
         return word
  }
}

const trie = new Trie()

trie.insert("cat")
trie.insert("car")
trie.insert("cap")

console.log(trie.search("cat"))