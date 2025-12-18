class Graph{
  constructor(){
    this.adjacencyList={}
  }
  
  addVertex(vertex){
    
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex]=[];
    }
    
    
    
  }
  
  addEdge(v1,v2){
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }
  
  
  
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
console.log(graph.adjacencyList)