# Adjacency Matrix
```
[ 1 0 1 ] 
[ 0 1 0 ]
[ 1 0 1 ]
```

Adjacency matricies are used to represent graphs by storing the edges as 1s and the lack of an edge between two nodes as 0s. The space complexity is O(n^2). When a graph is dense, such that its number of edges is close to the maximal number of edges, then the space complexity of adjency list is similar to the matrix. However adjacency matrix is suited for determining if two nodes are connected in O(1) time compared to the list's O(n) time.


`addEdge(v, w)` Given two verticies then create an edge with an initial vertex of v and terminal vertex of w.

`hasEdge(v, w)` Given two vertices determine if there is an edge with a initial vertex of v and terminal vertex of w.

`removeEdge(v, w)` Given two vertices remove the edge with an initial vertex of v and terminal vertex of w.

`outEdges(v)` Given a vertex find all edges where the initial vertex is v.

`inEdges(v)` Given a vertex find all edges where the terminal vertex is v.