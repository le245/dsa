class Max{
  constructor(value){
    this.heap=[]
  }

  
  insert(value){
    
    this.heap.push(value)
    this.heapfyup()
  }
  
  heapfyup(          ){
    
    let index = this.heap.length-1
    
    while(index > 0){
      let parent= Math.floor((index-1)/2)
      
      if(this.heap[parent] >= this.heap[index])break;
      
      [this.heap[parent],this.heap[index]]=[this.heap[index],this.heap[parent]]
      
      index=parent
    }
    
  }
  
    
extract() {
  if (this.heap.length === 0) return null
  if (this.heap.length === 1) return this.heap.pop()

  const max = this.heap[0]
  this.heap[0] = this.heap.pop()

  this.heapfydown()
  return max
}

heapfydown() {
  let index = 0
  let length = this.heap.length

  while (true) {
    let left = 2 * index + 1
    let right = 2 * index + 2
    let largest = index

    if (left < length && this.heap[left] > this.heap[largest]) {
      largest = left
    }

    if (right < length && this.heap[right] > this.heap[largest]) {
      largest = right
    }

    if (largest === index) break;

    [this.heap[index], this.heap[largest]] =[this.heap[largest], this.heap[index]]

    index = largest
  }
}

front() {
        return this.heap[0]
    }
    size() {
        return this.heap.length;
    }

    
  print(){
    console.log(this.heap)
  }
}

const maxheap=new Max()
maxheap.insert(10)
maxheap.insert(20)
maxheap.insert(30)
maxheap.insert(40)
maxheap.extract()
maxheap.print()