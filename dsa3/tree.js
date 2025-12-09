    class Tree{
        constructor(value){
            this.value=value
            this.children=[]
        }

        addChild(child){
            this.children.push(child)
        }
    }

    const root= new Tree("a")
    const child1=new Tree("b")
    const child2= new Tree("c")


    root.addChild(child1)
    root.addChild(child2)

    const child3=new Tree("e")
    const child4= new Tree("i")

    child1.addChild(child3)
    child2.addChild(child4)

    console.log(root)