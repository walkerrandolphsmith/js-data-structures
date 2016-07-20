# js-data-structures :dancer:

- [Linked List](#linked-list)
- [Stack](#stack)
- [Binary Tree](#binary-tree)
- [Binary Search Tree](#binary-serach-tree)
- [Huffman Tree](#huffman-tree)
- [Heap](#heap)
- [Adjacency Matrix](#adjacency-matrix)

### Linked List
```
a->b->c
```

`isEmpty()` 
Determine if there is any elements in list.

`length()`
Determine the number of elements in the list.

`contains(element, comparator)`
Given an element and a comparator function, determine if the element is in the list.

`getFirst()`
Retrieve the first element in the list.

`getLast()`
Retrieve the last element in the list.

`push(element)`
Add an element to the end of the list.

`pop(element, comparator)`
Given an element and a comparator function, remove the first element that matches the comparison.


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

`add(element, comparator)` Given an element and a comparator function, add an element to the tree.

`find(element, comparator)` Given an element and a comparator function, retrieve the first element that matchs the comparison.

`findLargestChild(parent)` Given a node in the tree, find the descendant node with greatest value.

`remove(element, comparator)` Given an element and a comparator function, remove the first element that matches the comparison.

### Huffman Tree : Binary Tree
```
    *
  /   \
e       *
      /   \
     n     s
```

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
`insert(element, comparator)` Given an element and a comparator function, insert the element in the heap.

`remove(comparator)` Given a comparator (to reshap the heap), Retrieve the root node which is the largest or smallest element in the heap.

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
