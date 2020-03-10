


class UnWeighegUnDirectedGraph {
    
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        // if vertex does not exist in Graph
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        // check if vertex1 adn vertex2 already exist
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            // check if edge already exists
            if(this.adjacencyList[vertex1].indexOf(vertex2) === -1) {
                this.adjacencyList[vertex1].push(vertex2);
                this.adjacencyList[vertex2].push(vertex1);
            }
        }
    }

    removeVertex(vertex) {
        // check if vertex already exists
        if(this.adjacencyList[vertex]) {
            for(let vtx of this.adjacencyList[vertex]) {
                this.removeEdge(vertex, vtx);
            }
            delete this.adjacencyList[vertex];
        }
    }

    removeEdge(vertex1, vertex2) {
        // check if vertex1 adn vertex2 already exist
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            // remove vertex2 from vertex1
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2);
            // remove vertex1 from vertex2
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1);
        }
    }

    depthFirstRecursiveSearch(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        function DFShelper(vertex) {
            // dfs recursion baseCase
            if(!vertex) {
                return null;
            }
            result.push(vertex);
            visited[vertex] = true;
            adjacencyList[vertex].forEach(neighbor => {
                // check if vertex is already visited
                if(!visited[neighbor]){
                    return DFShelper(neighbor)
                }
            });
        }
        DFShelper(start);

        return result;
    }

    depthFirstIterativeSearch(start) {
        const stack = [start]; // LIFO
        const result = [];
        const visited = {};

        visited[start] = true;

        while(stack.length) {
            let currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                // check if vertex is already visited
                if(!visited[neighbor]){
                    stack.push(neighbor);
                    visited[neighbor] = true;
                }
            });
        }

        return result;
    }

    breadthFirstSearch(start) {
        const queue = [start]; // FIFO
        const result = [];
        const visited = {};

        visited[start] = true;

        while(queue.length) {
            let currentVertex = queue.shift();  
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                // check if vertex is already visited
                if(!visited[neighbor]){
                    queue.push(neighbor);
                    visited[neighbor] = true;
                }
            });
        }

        return result;
    }
}



// Driver Code
const graph = new UnWeighegUnDirectedGraph();
graph.addVertex("kutaisi");
graph.addVertex("tbilisi");
graph.addVertex("batumi");
graph.addVertex("samtredia");
graph.addEdge("kutaisi", "tbilisi");
console.log(graph.adjacencyList);
graph.addEdge("batumi", "tbilisi");
graph.addEdge("kutaisi", "batumi");
graph.addEdge("tbilisi", "samtredia");
console.log(graph.adjacencyList);
graph.removeEdge("tbilisi", "samtredia");
console.log(graph.adjacencyList);
graph.removeVertex("kutaisi");
console.log(graph.adjacencyList);



// Graph Traversal
const g = new UnWeighegUnDirectedGraph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
console.log(g.depthFirstRecursiveSearch("A")); 
console.log(g.depthFirstIterativeSearch("A")); 
console.log(g.breadthFirstSearch("A")); 

