// Linked list consist of nodes, and each node has a value a pointer of another,
// and a pointer of another node or null.
// linked lists do not have indexes!
// connected via nodes with a next pointer!
// random access is not allowed!

// class Node stores piece of data --value
// and reference to next node --next

// Time Complexity:
// Insertion - O(1) or O(n), Removal - O(1) or O(n), Searching - O(n), access O(n)
class Node {
    constructor(value) {
        this.value = value;
        this.next = null; // in the beginning node has null pointer
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode =  new Node(value);
        if(!this.head) { // if head does not exist
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next =  newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // removing a node from the end of the Linked List
    pop() { 
        if(!this.head) {
            return undefined;
        }
        let current = this.head;
        let newTail = current;
        //loop through the list ,while next pointer is not null
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current; // return node ,which is deleted
    }

    // adding a new node to the beginning of the linked list
    unshift(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // removing a node from the beggining of the linked list
    shift() {
        if(!this.head) {
            return undefined;
        }
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead; // return node ,which is deleted
    }

    // retrieving a node by it's position in the linked list
    get(index) {
        if(index < 0 || index >= this.length) { // if index is away bounds
            return null;
        }
        let counter = 0;
        let current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    // change the value of a node based on it's position in the linked list
    set(index, value) {
        const foundedNode = this.get(index);
        if(foundedNode) { 
            foundedNode.value = value;
            return true;
        }
        return false; //if node does not exist on index
    }

    // adding a node to the linked list at a specific position (index)
    insert(index, value) {
        if(index < 0 || index >= this.length) { // if index is away bounds
            return false;
        }
        if(index === this.length) {
            return !!this.push(value);
        } else if(inedex === 0) {
            return !!this.unshift(value);
        } else {
            const previous = this.get(index-1);
            const newNode =  new Node(value);
            newNode.next = previous.next;
            previous.next = newNode;
            this.length++;
            return true;
        }
    }

    // removing a node from the linked list at a specific position
    remove(index) {
        if(index < 0 || index >= this.length) { // if index is away bounds
            return false;
        }
        if(index === this.length) {
            this.pop();
        } else if(index === 0) {
            this.shift();
        } else {
            const previousNode = this.get(index-1);
            const removedNode = previousNode.next;
            previousNode.next = removedNode.next;
            return removedNode;
        }
    }

    // reverse yhe linked list in place
    revese() {
        const node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for(let i=0; i< this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    // for development printing
    print() {
        const arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr);
    }

}

// Driver Code
let list =  new SinglyLinkedList();
list.push('roma');
list.push('chikhladze');
list.push('hello');
console.log(list.shift());
console.log(list.pop());
list.print()