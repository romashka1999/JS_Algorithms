// Time Complexity:
// Insertion - O(1), Removal - O(1), Searching - O(n), access O(n)

// Queue is a FIFO datastructure (First I First Out)

// class Node stores piece of data --value
// and reference to next node --next
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // add new Node in Queue
    enqueue(value) {
        const newNode = new Node(value);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return true;
    }

    // remove node ,which is added the most first
    dequeue() {
        if(!this.first) {
            return null;
        }
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return true;
    }
}
// Driver Code
const qu = new Queue();
qu.enqueue('first');
qu.enqueue('olaa');
qu.enqueue('uraaaaa');
qu.dequeue();
console.log(qu);


