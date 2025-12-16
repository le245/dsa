class MaxHeap {
    constructor() {
        this.heap = [];
    } 
    
    
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            if (this.heap[parentIndex] >= this.heap[index])
                break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();


        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max
    }
    heapifyDown(index) {
        let length = this.heap.length;
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let largest = index;


        if (left < length && this.heap[left] >= this.heap[largest]) largest = left;
        if (right < length && this.heap[right] >= this.heap[largest]) largest = right;
        if (index !== largest) {
            [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];

            this.heapifyDown(largest);
        }
    }

    front() {
        return this.heap[0]
    }
    size() {
        return this.heap.length;
    }
    print() {
        console.log(this.heap);
    }

}

const maxHeap = new MaxHeap();
maxHeap.insert(4)
maxHeap.insert(8)
maxHeap.insert(11)
maxHeap.insert(0)

maxHeap.print()

maxHeap.extractMax()
maxHeap.print()
maxHeap.extractMax()
maxHeap.print()