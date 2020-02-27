// Time Complexity:
// Insertion - O(1), Removal - O(1), Searching - O(n), access O(n)

// Stack is a LIFO data structure (Last In First Out)
// the last element added to the stack will be the first element removed from the stack

// class Node stores piece of data --value
// and reference to next node --next
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// this Stack class is implemented by linked list
class Stack {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    // adding a new node to the top of stack
    push(value) {
        const newNode = new Node(value);
        if(!this.head) { // if top does not exist
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
        return true;
    }

    // removing a node from the top of stack
    pop() {
        if(!this.head) {
            return null;
        }
        this.head = this.head.next;
        this.size--;
        return true;
    }

    // return node from the top of stack
    top() {
        if(this.head) {
            return this.head.value;
        } else {
            return false;
        }
    }
    
    // clear whole stack
    clear() {
        this.head = null;
        this.size = 0;
    }

    // returns true if stack is empty
    empty() {
        if(this.size === 0) {
            return true;
        }
        return false;
    }
}

// Driver Code
const st = new Stack();
st.push(123);
st.push(1231232342);
st.pop();
console.log(st.size);
console.log(st.top());