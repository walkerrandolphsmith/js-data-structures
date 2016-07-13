# js-data-structures

- [Linked List](#linked-list)
- [Stack](#stack)
- [Binary Tree](#binary-tree)
- [Binary Search Tree](#binary-serach-tree)
- [Huffman Tree](#huffman-tree)
- [Heap](#heap)


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

### Huffman Tree
```
    *
  /   \
e       *
      /   \
     n     s
```

### Heap
```
    1
  /   \
2       3
  \   /   \
   4 5     6
```
