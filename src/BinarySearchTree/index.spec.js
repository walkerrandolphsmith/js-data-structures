import expect from 'expect';
import BinaryTree from './../BinaryTree';
import { objectPropComparator } from './../Comparator';
import BinarySearchTree from './index';

describe('src/BinarySearchTree', () => {
    let tree;
    let root;
    let element = { id: 1 };
    let comparator = objectPropComparator('id');
    let actual;

    describe('Given no parameters', () => {
        describe('When creating a BinarySearchTree', () => {
            beforeEach(() => {
                tree = new BinarySearchTree();
            });

            it('should be a BinaryTree', () => {
                expect(tree instanceof BinaryTree).toBeTruthy();
            });
        })
    });

    describe('Given an element and empty Binary Search Tree', () => {
        beforeEach(() => {
            tree = new BinarySearchTree();
        });

        describe('When adding the element', () => {
            beforeEach(() => {
                actual = tree.add(element);
            });

            it('should indicate that an element was added', () => {
                expect(actual).toBeTruthy();
            });
            
            it('should have a root node that contains the element', () => {
                expect(tree.getData()).toEqual(element);
            });
        });

        describe('When finding the an element not in the tree', () => {
            beforeEach(() => {
                actual = tree.find(element);
            });

            it('should return undefined', () => {
                expect(actual).toBeFalsy();
            });
        });
    });


    describe('Given an element that is the root of the tree and non-empty Binary Search Tree', () => {
        beforeEach(() => {
            tree = new BinarySearchTree(element);
        });

        describe('When adding the element', () => {
            beforeEach(() => {
                actual = tree.add(element);
            });

            it('should indicate that an element was not added', () => {
                expect(actual).toBeFalsy();
            });

            it('should still have the original root node', () => {
                expect(tree.getData()).toEqual(element);
            });

            it('should not have a left subtree', () => {
                expect(tree.getLeftSubtree()).toBeFalsy();
            });
        });

        describe('When finding the root element', () => {
            beforeEach(() => {
                actual = tree.find(element);
            });

            it('should return the root element', () => {
                expect(actual).toEqual(element);
            });
        })
    });

    describe('Given an element not in the tree and non-empty Binary Search Tree', () => {
        describe('When adding the element', () => {
            beforeEach(() => {
                root = { id: 0 };
                tree = new BinarySearchTree(root);
                actual = tree.add(element);
            });

            it('should indicate that an element was added', () => {
                expect(actual).toBeTruthy();
            });

            it('should have a root node that contains the element', () => {
                expect(tree.getData()).toEqual(root);
            });

            it('should have a left sub tree with a root node containing the element', () => {
                expect(tree.getLeftSubtree().getData()).toEqual(element);
            });
        })
    });

    describe('Given non-empty Binary Search Tree and an element less than the root', () => {
        describe('When adding the element', () => {
            beforeEach(() => {
                root = { id: 10 };
                tree = new BinarySearchTree(root);
                actual = tree.add(element);
            });

            it('should indicate that an element was added', () => {
                expect(actual).toBeTruthy();
            });

            it('should have a root node that contains the element', () => {
                expect(tree.getData()).toEqual(root);
            });

            it('should have a left sub tree with a root node containing the element', () => {
                expect(tree.getLeftSubtree().getData() === element).toBeTruthy();
            });

            it('should have a right sub tree with a root node containing the element', () => {
                expect(tree.getRightSubtree()).toBeFalsy();
            });
        });
    });

    describe('Given non-empty Binary Search Tree and an element greater than the root', () => {
        describe('When adding the element', () => {
            beforeEach(() => {
                root = { id: 0 };
                tree = new BinarySearchTree(root);
                actual = tree.add(element, comparator);
            });

            it('should indicate that an element was added', () => {
                expect(actual).toBeTruthy();
            });

            it('should have a root node that contains the element', () => {
                expect(tree.getData()).toEqual(root);
            });

            it('should have a left sub tree with a root node containing the element', () => {
                expect(tree.getLeftSubtree()).toBeFalsy();
            });

            it('should have a right sub tree with a root node containing the element', () => {
                expect(tree.getRightSubtree().getData() === element).toBeTruthy();
            });
        });
    });

    describe('Given Binary Search Tree with a root and left subtree', () => {
        beforeEach(() => {
            root = { id: 2 };
            tree = new BinarySearchTree(root);
            tree.add(element, comparator);
        });

        describe('When finding the element in the left subtree', () => {
            beforeEach(() => {
                actual = tree.find(element, comparator);
            });
            it('should return the element in the left subtree', () => {
                expect(actual).toEqual(element);
            });
        });
    });

    describe('Given Binary Search Tree with a root and right subtree', () => {
        beforeEach(() => {
            root = { id: -1 };
            tree = new BinarySearchTree(root);
            tree.add(element, comparator);
        });

        describe('When finding the element in the right subtree', () => {
            beforeEach(() => {
                actual = tree.find(element, comparator);
            });
            it('should return the element in the right subtree', () => {
                expect(actual).toEqual(element);
            });
        });
    });

    describe('Given Binary Search Tree with a right subtree that has a right subtree', () => {
        beforeEach(() => {
            element = { id: 2 };
            tree = new BinarySearchTree({ id: 0 });
            tree.add({ id: -1 }, comparator);
            tree.add({ id: 1 }, comparator);
            tree.add(element, comparator);
        });

        describe('When finding largest child of the root', () => {
            beforeEach(() => {
                actual = tree.findLargestChild(tree.root, comparator);
            });
            it('should return the element in the right subtree', () => {
                expect(actual).toEqual(element);
            });
        });
    });

    describe('Given Binary Search Tree with two generations of children excluding root', () => {
        let root = { id: 10 };
        let leftChild = { id: 5 };
        let leftLeftChild = { id: 4 };
        let rightChild = { id: 20 };
        let rightLeftChild = { id: 18 };
        let rightLeftRightChild = { id: 19 };
        let rightRightChild = { id: 21 };

        beforeEach(() => {
            tree = new BinarySearchTree({ id: 10 });
            tree.add(leftChild, comparator);
            tree.add(leftLeftChild, comparator);
            tree.add(rightChild, comparator);
            tree.add(rightLeftChild, comparator);
            tree.add(rightLeftRightChild, comparator);
            tree.add(rightRightChild, comparator);
        });

        describe('When removing the root', () => {
            beforeEach(() => {
                actual = tree.remove(root, comparator);
            });
            it('should return the element in the right subtree', () => {
                expect(actual).toBeTruthy();
            });
        });

        describe('When removing the left child', () => {
            beforeEach(() => {
                actual = tree.remove(leftChild, comparator);
            });
            it('should return the element in the right subtree', () => {
                expect(actual).toBeTruthy();
            });
        });

        describe('When removing the right child', () => {
            beforeEach(() => {
                actual = tree.remove(rightChild, comparator);
            });
            it('should return the element in the right subtree', () => {
                expect(actual).toBeTruthy();
            });
        });

        describe('When removing the left left child', () => {
            beforeEach(() => {
                actual = tree.remove(leftLeftChild, comparator);
            });
            it('should return the element in the right subtree', () => {
                expect(actual).toBeTruthy();
            });
        });

        describe('When removing the right right child', () => {
            beforeEach(() => {
                actual = tree.remove(rightChild, comparator);
                console.log(actual);
            });
            it('should return the element in the right subtree', () => {
                expect(actual).toBeTruthy();
            });
        });
    });
});