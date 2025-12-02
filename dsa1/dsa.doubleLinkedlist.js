class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}

class DoubleLinkedlist{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    
    isEmpty(){
        return this.size === 0
    }
    
    append(value){
        const node= new Node(value)
        if(this.isEmpty()){
           this.head=node
           this.tail=node
        }else{
           this.tail.next=node
           node.prev=this.tail
           this.tail=node
        }
        this.size++
    }
    
    prepend(value){
        const node= new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head.prev=node
            this.head=node
            
        }
        this.size++
    }
    
    insert(index,value){
        if(index < 0 || index > this.size){
            return
        }
        
        if(index === 0){
          this.prepend(value)
          return
        }
        
        if(index === this.size){
            this.append(value)
            return
        }
        
        
        let curr=this.head
        for(let i=0;i< index-1;i++){
            curr=curr.next
        }
        
        const node = new Node(value)
       
        node.next=curr.next
        node.prev=curr
        curr.next.prev=node
        curr.next=node
        
        this.size++
        
        
    }
    
    
    printF(){
        
        if(this.isEmpty()){
            console.log("lisst is empry")
            
        }else{
            let curr=this.head
            let listvalue=''
            while(curr){
                listvalue+=` ${curr.value}`
                curr=curr.next
            }
            console.log(listvalue)
        }
    }
    
    printB(){
        if(this.isEmpty()){
            console.log("lisst is empry")
            
        }else{
            let curr=this.tail
            let listvalue=''
            while(curr){
                listvalue+=` ${curr.value}`
                curr=curr.prev
            }
            console.log(listvalue)
        }
    }
}
