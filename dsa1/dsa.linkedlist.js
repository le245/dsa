class Node{
     constructor(value){
         this.value=value
         this.next=null
     }
 }
 gti
 
 class Linkedlist{
    constructor(){
        this.head=null
        this.size=0
    }
    
    isEmpty(){
        return this.size === 0
    }
    
    append(value){
        const node = new Node(value);
        
        if(this.isEmpty()){
            this.head=node;
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }
    
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
   
     insert(index,value){
         if(index < 0 || index > this.size){
             return 
         }
         const node = new Node(value)
         if(index === 0){
            node.next=this.head
            this.head=node
         }else{
            
             
             let curr= this.head
             
             for(let i=0;i<index-1;i++){
                 curr=curr.next
             }
             
             node.next=curr.next
             curr.next=node
             this.size++
             
         }
     }
    


      deleteNode(index){
     
     if(  index < 0 || index >= this.size){
         return null
     }
     let remove
     if(index === 0){
          remove=this.head
         this.head=this.head.next
         
     }else{
         
         let curr=this.head
         for(let i=0;i<index-1 ;i++){
             curr=curr.next
         }
         remove=curr.next
         curr.next=remove.next
         
     }
     this.size--
    return remove.value
     
 }


  removeValue(value){
           if(this.isEmpty()){
               return null
           }
           if(this.head.value === value){
               this.head= this.head.next
               this.size--
               return value
           }else{            
               let prev= this.head
               while(prev.next && prev.next.value !== value){
                   prev=prev.next
               }
               if(prev.next){
                   let removeNode= prev.next
                   prev.next=removeNode.next        
                   this.size--
                   return value
               }
               return null
           }
       }
    
    print(){
        if(this.isEmpty()){
            console.log("list is empty")
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
}

const list=new Linkedlist()

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.insert(2,15)
list.print()














