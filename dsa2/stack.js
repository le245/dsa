class Stack{
    constructor(){
        this.stack=[]
    }

    push(value){
        this.stack.push(value)
    }

    pop(){

        if(this.isEmpty()){
            return "stack is empty"

        }

        return this.stack.pop()
    }

    peek(){
         if(this.isEmpty()){
            return "stack is empty"

        }
        return this.stack[this.stack.length-1]
    }

    isEmpty(){
        return this.stack.length === 0
    }

    display(){

        for(let i=this.stack.length-1;i>=0;i--){
            console.log(this.stack[i])
        }
    }
}

const s= new Stack()

s.push(10)
s.push(20)
s.push(30)
s.pop()
console.log(s.peek())
s.display()


