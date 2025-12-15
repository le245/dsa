    // class Tree{
    //     constructor(value){
    //         this.value=value
    //         this.children=[]
    //     }

    //     addChild(child){
    //         this.children.push(child)
    //     }
    // }

    // const root= new Tree("a")
    // const child1=new Tree("b")
    // const child2= new Tree("c")


    // root.addChild(child1)
    // root.addChild(child2)

    // const child3=new Tree("e")
    // const child4= new Tree("i")

    // child1.addChild(child3)
    // child2.addChild(child4)

    // console.log(root)




// class TreeNode {
//   constructor(data) {
//     this.data = data;       
//     this.children = [];     
//   }

//   addChild(childNode) {
//     this.children.push(childNode);
//   }
// }

// const root = new TreeNode("CEO");
// const manager1 = new TreeNode("Manager1");
// const manager2 = new TreeNode("Manager2");
// const emp1 = new TreeNode("Emp1");
// const emp2 = new TreeNode("Emp2");
// const emp3 = new TreeNode("Emp3");


// root.addChild(manager1);
// root.addChild(manager2);

// manager1.addChild(emp1);
// manager1.addChild(emp2);

// manager2.addChild(emp3);


// function printTree(node, indent = "") {
//   console.log(indent + node.data);       
//   for (let child of node.children) {
//     printTree(child, indent + "  ");   
//   }
// }


// printTree(root);


// binary tree

// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// const root= new Node(1)
// const value1= new Node(2)
// const value2=new Node(3)
// const value3=new Node(4)
// const value4=new Node(5)


// root.right=value1;
// root.left=value2;


// value1.leftt=value3
// value1.right=value4

// root;


// function preOrder(node){

//     if(!node) return

//     console.log(node.value)

//     preOrder(node.left)
//     console.log(node.value)

//     preOrder(node.right)
//     console.log(node.value)
// }


// preOrder(root)



class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(value) {
        const node = new Node(value)

        if (!this.root) {
            this.root = node
            return
        }

        let curr = this.root

        while (true) {
            if (value < curr.value) {
                if (!curr.left) {
                    curr.left = node
                    return
                }
                curr = curr.left
            } else {
                if (!curr.right) {
                    curr.right = node
                    return
                }
                curr = curr.right
            }
        }
    }

 contain(value){
    let curr=this.root
    
    while(curr){
      if(value < curr.value){
        curr=curr.left
      }else if (value > curr.value){
        curr=curr.right
      }else{
        return true
      }
    }
    
    return false
  }
  


   printInorder(node) {
    if (!node) return
    this.printInorder(node.left)
    console.log(node.value)
    this.printInorder(node.right)
}

}                                                           
const tree = new BST()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(48)
tree.insert(29)
tree.insert(2)
tree.insert(3)
tree.printInorder(tree.root)
