# Heap
```
    1
  /   \
2       3
  \   /   \
   4 5     6
```
Heaps are a type of tree such that the smallest or largest element is stored at the root. Retrieve the smallest or largest item is O(1) time complexity.

`new Heap(comparator)` Create a new Heap given a comparator function.

`insert(element)` Given an element insert the element in the heap.

`remove()` Retrieve and remove the root node which is the largest or smallest element in the heap.