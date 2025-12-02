// class Stack{
//     constructor(){
//         this.stack=[]
//     }

//     push(value){
//         this.stack.push(value)
//     }

//     pop(){

//         if(this.isEmpty()){
//             return "stack is empty"

//         }

//         return this.stack.pop()
//     }

//     peek(){
//          if(this.isEmpty()){
//             return "stack is empty"

//         }
//         return this.stack[this.stack.length-1]
//     }

//     isEmpty(){
//         return this.stack.length === 0
//     }

//     display(){

//         for(let i=this.stack.length-1;i>=0;i--){
//             console.log(this.stack[i])
//         }
//     }
// }

// const s= new Stack()

// s.push(10)
// s.push(20)
// s.push(30)
// s.pop()
// console.log(s.peek())
// s.display()




// class Node{
//   constructor(value){
//     this.value=value;
//     this.next=null
//   }

// }

// class Stack{
//     constructor(){
//         this.top=null
      
       
//     }

//     push(value){
//         const node = new Node(value)

//         node.next=this.top
//         this.top=node;

       


        
//     }

//     isEmpty(){
//         return this.top.length === 0
//     }

//     pop(){

//         if(this.isEmpty()){
//             return null
//         }

//         let remove= this.top
//         this.top.next=this.top

//         return this.top.value
//     }


//     peek(){

//         return this.top.value
//     }

//    print(){

//     let curr=this.top
//     let listvalue=""

//     while(curr){
//         listvalue+=` ${curr.value} `
//         curr=curr.next
//     }
//     console.log(listvalue)
//    }
// }

// const s = new Stack()

// s.push(10)
// s.push(20)
// s.push(30)
// s.print()




// stack using queue


class Stack{
    constructor(){
        this.q1=[]
        this.q2=[]
    }


    push(value){

        this.q2.push(value)

        while(this.q1.length > 0){
            this.q2.push(this.q1.shift())
        }

        [this.q1,this.q2]=[this.q2,this.q1]
    }

    pop(){
        return this.q1.shift()
    }   

}


let s = new Stack();
s.push(10);
s.push(20);
console.log(s.q1)