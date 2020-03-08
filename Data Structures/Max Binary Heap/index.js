// Time Complexity:
// insertion -- O(log n)
// removal -- O(log n)
// searching -- O(n)

class MaxBinryHeap {

    constructor() {
        this.heap = [];
    }

    insert(element) {
        this.heap.push(element);
        this.bubbleUp();
    }

    extractMax() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if(this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return max;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        const element = this.heap[index];
        while(index > 0) {
            const parendIndex = Math.floor((index-1) / 2);
            const parent = this.heap[parendIndex];
            if(element <= parent) {
                break;
            }
            this.heap[parendIndex] = element;
            this.heap[index] = parent;
            index = parendIndex;
        }
    }

    sinkDown() {
        let index = 0;
        const element = this.heap[0];
        while(true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIndex < this.heap.length) {
                leftChild = this.heap[leftChildIndex];
                if(leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            if(rightChildIndex < this.heap.length) {
                rightChild = this.heap[rightChildIndex];
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIndex;
                }
            }

            if(swap === null) {
                break;
            }
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}

// Driver Code
const maxHeap = new MaxBinryHeap();
maxHeap.insert(3);
maxHeap.insert(23);
maxHeap.insert(225);
maxHeap.extractMax();
maxHeap.insert(49);
console.log(maxHeap.heap);