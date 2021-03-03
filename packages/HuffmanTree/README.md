# Huffman Tree
```
    *
  /   \
e       *
      /   \
     n     s
```

Huffman tree is a type of tree that stores a elements that are accessed with an uneven distribution. Some elements are more frequently accessed than others and are therefore less expensive to retreive.

`new HuffmanTree(comparator)` Create a new Huffman Tree given a comprator.

`add(element, code)` Given an element and a bit string, add a node in the tree for the element such that the tree can be traversed using the bit string as a sequence of edges.

`decode(code)` Given a bit string, retrieve the element in the tree it corresponds to.