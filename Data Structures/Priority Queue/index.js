// Time Complexity:
// insertion -- O(log n)
// removal -- O(log n)
// searching -- O(n)

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {

    constructor() {
        this.heap = [];
    }

    enqueue(value, priority) {
        const newNode = new Node(value, priority);
        this.heap.push(newNode);
        this.bubbleUp();
    }

    dequeue() {
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
            if(element.priority <= parent.priority) {
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
                if(leftChild.priority > element.priority) {
                    swap = leftChildIndex;
                }
            }
            if(rightChildIndex < this.heap.length) {
                rightChild = this.heap[rightChildIndex];
                if((swap === null && rightChild.priority > element.priority) || (swap !== null && rightChild.priority > leftChild.priority)) {
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
const pr = new PriorityQueue();
pr.enqueue('flu', 1);
pr.enqueue('blood lack', 5);
pr.enqueue('broken arm', 4);
pr.enqueue('fever', 3);
pr.dequeue();
console.log(pr.heap);