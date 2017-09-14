# js-data-structures :dancer: [![Build Status](https://travis-ci.org/Quillio/js-data-structures.svg?branch=master)](https://travis-ci.org/Quillio/js-data-structures)


- [Linked List](#linked-list)
- [Stack](#stack)
- [Binary Tree](#binary-tree)
- [Binary Search Tree](#binary-serach-tree)
- [Huffman Tree](#huffman-tree)
- [Heap](#heap)
- [Adjacency Matrix](#adjacency-matrix)
- [Graph](#graph)

### Linked List
```
a->b->c
```

`new LinkedList(comparator)` Create a new linked list given a comparator function

`isEmpty()` 
Determine if there is any elements in list.

`length()`
Determine the number of elements in the list.

`contains(element)`
Given an element determine if the element is in the list.

`getFirst()`
Retrieve the first element in the list.

`getLast()`
Retrieve the last element in the list.

`push(element)`
Add an element to the end of the list.

`pop(element)`
Given an element remove the first element that matches the comparison.


### Stack
```
|_|
|_|
|_|
```

`isEmpty()` Determine if there are any elements in the stack.

`peek()` Retrieve the element on top of the stack without removing it from the stack.

`pop()` Retrieve the element on top of the stack and remove it from the stack.

`push(element)` Add an element to the top of the stack.

### Binary Tree
```
    9
  /   \
2       3
  \   /   \
   4 5     6
```

`isEmpty()` Determine if there are any elements in the tree.

`getData()` Retreive the element at the root of the tree.

`isLeaf()` Determine if the tree is a leaf node.

`getLeftSubtree()` Retrieve the tree that is the left child of the current root node.

`getRightSubtree()` Retrieve the tree that is the right child of the current root node.

### Binary Search Tree : Binary Tree
```
    9
  /   \
2       3
  \   /   \
   4 5     6
```
`new BinarySearchTree(comparator)` Create a new Binary Search Tree given a compartor function.

`add(element)` Given an element add an element to the tree.

`find(element)` Given an element retrieve the first element that matchs the comparison.

`findLargestChild(parent)` Given a node in the tree, find the descendant node with greatest value.

`remove(element)` Given an element remove the first element that matches the comparison.

### Huffman Tree : Binary Tree
```
    *
  /   \
e       *
      /   \
     n     s
```
`new HuffmanTree(comparator)` Create a new Huffman Tree given a comprator.

`add(element, code)` Given an element and a bit string, add a node in the tree for the element such that the tree can be traversed using the bit string as a sequence of edges.

`decode(code)` Given a bit string, retrieve the element in the tree it corresponds to.

### Heap : Binary Tree
```
    1
  /   \
2       3
  \   /   \
   4 5     6
```
`new Heap(comparator)` Create a new Heap given a comparator function.

`insert(element)` Given an element insert the element in the heap.

`remove()` Retrieve and remove the root node which is the largest or smallest element in the heap.

### Adjacency Matrix
```
[ 1 0 1 ] 
[ 0 1 0 ]
[ 1 0 1 ]
```
`addEdge(v, w)` Given two verticies then create an edge with an initial vertex of v and terminal vertex of w.

`hasEdge(v, w)` Given two vertices determine if there is an edge with a initial vertex of v and terminal vertex of w.

`removeEdge(v, w)` Given two vertices remove the edge with an initial vertex of v and terminal vertex of w.

`outEdges(v)` Given a vertex find all edges where the initial vertex is v.

`inEdges(v)` Given a vertex find all edges where the terminal vertex is v.

### Graph
```
A       B - F
  \   /
    C
  /   \
D       E
```
`getVertices()` Retrieve all verticies in the graph.

`getEdges(v)` Given a vertex, retrieve all the vertices it is incedent to.

`addVertex(v)` Given data, add the vertex to the graph.

`findVertex(v)` Given data, retrieve the vertex in the graph.

`addEdge(v, w)` Given two verticies relate them to one another to form an edge.

`degree(v)` Given a vertex determine how many vertices it is incedent to.
