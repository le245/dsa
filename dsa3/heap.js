// class Max{
//   constructor(value){
//     this.heap=[]
//   }

  
//   insert(value){
    
//     this.heap.push(value)
//     this.heapfyup()
//   }
  
//   heapfyup(          ){
    
//     let index = this.heap.length-1
    
//     while(index > 0){
//       let parent= Math.floor((index-1)/2)
      
//       if(this.heap[parent] >= this.heap[index])break;
      
//       [this.heap[parent],this.heap[index]]=[this.heap[index],this.heap[parent]]
      
//       index=parent
//     }
    
//   }
  
    
// extract() {
//   if (this.heap.length === 0) return null
//   if (this.heap.length === 1) return this.heap.pop()

//   const max = this.heap[0]
//   this.heap[0] = this.heap.pop()

//   this.heapfydown()
//   return max
// }

// heapfydown() {
//   let index = 0
//   let length = this.heap.length

//   while (true) {
//     let left = 2 * index + 1
//     let right = 2 * index + 2
//     let largest = index

//     if (left < length && this.heap[left] > this.heap[largest]) {
//       largest = left
//     }

//     if (right < length && this.heap[right] > this.heap[largest]) {
//       largest = right
//     }

//     if (largest === index) break;

//     [this.heap[index], this.heap[largest]] =[this.heap[largest], this.heap[index]]

//     index = largest
//   }
// }

// front() {
//         return this.heap[0]
//     }
//     size() {
//         return this.heap.length;
//     }

    
//   print(){
//     console.log(this.heap)
//   }
// }

// const maxheap=new Max()
// maxheap.insert(10)
// maxheap.insert(20)
// maxheap.insert(30)
// maxheap.insert(40)
// maxheap.extract()
// maxheap.print()



// class Min{
//   constructor(){
//     this.heap=[]
//   }
  
//   insert(value){
//     this.heap.push(value)
//     this.heapifyup()
//   }
  
//   heapifyup(){
    
//     let index=this.heap.length-1
    
//     while(index > 0){
      
//       let parent = Math.floor((index-1)/2)
      
//       if(this.heap[parent] <= this.heap[index])break;
      
//       [this.heap[parent],this.heap[index]]=[this.heap[index],this.heap[parent]]
      
//       index=parent
//     }
    
//   }
  
  
//   extract(){
    
//     if(this.heap.length === 0)return null
//     if(this.heap.length === 1)return this.heap.pop()
    
    
//     const min= this.heap[0]
//     this.heap[0]=this.heap.pop()
//     this.heapifydown()
//     return min
//   }

//   heapifydown(){
    
//     let length = this.heap.length
//     let index=0 
   
    
//     while(true){
//       let left = 2*index+1
//       let right= 2*index+2 
//       let smallest = index
      
//       if(left < length && this.heap[left] < this.heap[smallest]){
//         smallest=left
        
//       }
      
//       if(right < length && this.heap[right] < this.heap[smallest]){
//         smallest=right
//       }
      
      
//       if(smallest === index)break
      
//       [this.heap[index],this.heap[smallest]]=[this.heap[smallest],this.heap[index]]
      
//       index=smallest
//     }
//   }
  
//   front(){
//     return this.heap[0]
//   }
  
//   print(){
//     console.log(this.heap)
//   }
// }
  
//  let minheap= new Min()
  
//   minheap.insert(10)
//   minheap.insert(20)
//   minheap.insert(30)
//   minheap.insert(40)
//   minheap.extract()
//   minheap.print()


// heap sort 




// function heapsort(arr){
//   let n= arr.length
  
  
//   for(let i=Math.floor(n/2)-1; i>=0;i--){
//     heapify(arr,n,i)
//   }
  
//   for(let i=n-1;i>0; i--){
//     [arr[0],arr[i]]=[arr[i],arr[0]]
//     heapify(arr,i,0)
//   }
  
//   return arr
// }

// function heapify(arr,n,i){

//   let largest=i
//   let left=2*i+1 
//   let right = 2 * i +2 
  
//   if(left < n && arr[left] > arr[largest]){
//     largest=left
//   }
  
//   if(right < n && arr[right] > arr[largest]){
//     largest=right
//   }
  
  
//   if(largest !==i){
//     [arr[i],arr[largest]]=[arr[largest],arr[i]]
//     heapify(arr,n,largest)
//   }
// }

// let arr = [66, 3, 2, 0, 7, 88]
// console.log(heapsort(arr))