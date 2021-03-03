# Graph (Adjacency List)
```
A       B - F
  \   /
    C
  /   \
D       E
```
Graphs can store relationships, called edges, between elements, called nodes. Adjacency lists are used to represent graphs by storing the nodes in an array such that each node has an array to adjacent nodes. The space complexity is O(n + m). When a graph is sparse, such that its number of edges is not close to the maximal number of edges, then the space complexity of adjency list is smaller in comparision to the matrix.

`getVertices()` Retrieve all verticies in the graph.

`getEdges(v)` Given a vertex, retrieve all the vertices it is incedent to.

`addVertex(v)` Given data, add the vertex to the graph.

`findVertex(v)` Given data, retrieve the vertex in the graph.

`addEdge(v, w)` Given two verticies relate them to one another to form an edge.

`degree(v)` Given a vertex determine how many vertices it is incedent to.