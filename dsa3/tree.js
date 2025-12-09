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


class TreeNode {
  constructor(data) {
    this.data = data;       
    this.children = [];     
  }

  addChild(childNode) {
    this.children.push(childNode);
  }
}

const root = new TreeNode("CEO");
const manager1 = new TreeNode("Manager1");
const manager2 = new TreeNode("Manager2");
const emp1 = new TreeNode("Emp1");
const emp2 = new TreeNode("Emp2");
const emp3 = new TreeNode("Emp3");


root.addChild(manager1);
root.addChild(manager2);

manager1.addChild(emp1);
manager1.addChild(emp2);

manager2.addChild(emp3);


function printTree(node, indent = "") {
  console.log(indent + node.data);       
  for (let child of node.children) {
    printTree(child, indent + "  ");   
  }
}


printTree(root);


