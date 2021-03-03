# Binary Search Tree
```
    4
  /   \
2       6
  \   /   \
   3 5     8
```
Binary search trees are used to store comaparable data such that all elemnts on the left subtree are less than a node and all elements on the right subtree are greater than a node. Finding, adding, and removing elements happen in O(log n) compared to a findind an element in an array which is O(n). Binary trees are can become unbalanced and as they become more unbalanced they perform more like an

Unblanaced tree:
```
    4
     \
       5
        \
         6
          \
           8
```

`new BinarySearchTree(comparator)` Create a new Binary Search Tree given a compartor function.

`add(element)` Given an element add an element to the tree.

`find(element)` Given an element retrieve the first element that matchs the comparison.

`findLargestChild(parent)` Given a node in the tree, find the descendant node with greatest value.

`remove(element)` Given an element remove the first element that matches the comparison.