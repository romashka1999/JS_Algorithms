// Binary Search Tree (BST)
// Time Complexity insertion, searching: 
// -- Best -- O(log n) 
// -- Worst -- O(n)

// Binary Search Tree Example: 
//          10
//        /   \
//       6     15
//     /  \     \
//   3     8     20

// Traversal Tree: 
// BFS = [10, 6, 15, 3, 8, 20]
// DFS_InOrder = [3, 6, 8, 10, 15, 20]
// DFS_PreOrder = [10, 6, 3, 8, 15, 20]
// DFS_PostOrder = [3, 8, 6, 20, 15, 10]


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true) {
            if(value === current.value) {
                return undefined;
            }
            if(value < current.value) {
                if(current.left === null) {
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left;
                }
            } else if(value > current.value) {
                if(current.right === null) {
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            }
        }
    }

    find(value) {
        if(this.root === null) {
            return false;
        }
        let current = this.root;
        let found = false;
        while(current && !found) {
            if(value < current.value) {
                current = current.left;
            } else if(value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) {
            return false;
        } else {
            return current;
        }
    }

    // Breadth first Search
    BFS() {
        let node = this.root;
        let data = []; // data is BFS result
        let queue = []; // FIFO datastructure
        queue.push(node);
        // while queue is not empty
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }
        }
    }

    // Depth first search
    DFS_PreOrder() {
        let data = []; // DFS result
        function traverse(node) {
            data.push(node.value);
            if(node.left) {
                traverse(node.left);
            }
            if(node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root);
        return data;
    }

    // Depth first search
    DFS_PostOrder() {
        let data = []; // DFS result
        function traverse(node) {
            if(node.left) {
                traverse(node.left);
            }
            if(node.right) {
                traverse(node.right);
            }
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }

    // Depth first search
    DFS_InOrder() {
        let data = []; // DFS result
        function traverse(node) {
            if(node.left) {
                traverse(node.left);
            }
            data.push(node.value);
            if(node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root);
        return data;
    }
    
}

// Driver Code
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(8);
tree.insert(15);
tree.insert(20);
tree.insert(3);
console.log(tree.find(6));
console.log('DFS_InOrder', tree.DFS_InOrder());
console.log('DFS_PreOrder', tree.DFS_PreOrder());
console.log('DFS_PostOrder', tree.DFS_PostOrder());