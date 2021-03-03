# Linked List
```
a->b->c
```

Linked lists provide a way to store elements such that each element has a reference to the next element in the list. This allows adding and removing elements in O(1) time complexity. It also affords inserting new elements in the middle of the list without shifting the subsequent elements. Random access is O(n) since links must be traveled from each element.


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
