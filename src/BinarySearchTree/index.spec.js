import expect from 'expect';
import BinaryTree, { Node } from './../BinaryTree';
import BinarySearchTree, { defaultComparator, compareOnObjectProperty } from './index';

describe('src/BinarySearchTree', () => {
    let tree;
    let root;
    let element;
    let comparator;
    let wasAdded;

    describe('Given the default comparator', () => {
        describe('When comparing the element to itself', () => {
            it('should return zero', () => {
                element = { id: 1 };
                expect(defaultComparator(element, element)).toEqual(0);
            });
        });
        describe('When comparing two distinct elements', () => {
            it('should return zero', () => {
                element = { id: 1 };
                expect(defaultComparator(element, { id: 2 })).toEqual(-1);
            });
        });
    });

    describe('Given the compareOnObjectProperty comparator and object property name id', () => {
        beforeEach(() => {
            comparator = compareOnObjectProperty('id');
        });

        describe('When comparing the elements that are equal', () => {
            it('should return zero', () => {
                expect(comparator({ id: 1 }, { id: 1 })).toEqual(0);
            });
        });

        describe('When comparing two elements such that the first is less than the second', () => {
            it('should return 1', () => {
                expect(comparator({ id: 1 }, { id: 2 })).toEqual(-1);
            });
        });

        describe('When comparing two elements such that the first is greater than the second', () => {
            it('should return 1', () => {
                expect(comparator({ id: 5 }, { id: 2 })).toEqual(1);
            });
        });
    });


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
            element = { id: 1 };
        });

        describe('When adding the element', () => {
            beforeEach(() => {
                wasAdded = tree.add(element);
            });

            it('should indicate that an element was added', () => {
                expect(wasAdded).toBeTruthy();
            });
            
            it('should have a root node that contains the element', () => {
                expect(tree.getData()).toEqual(element);
            });
        });
    });


    describe('Given an element that is the root of the tree and non-empty Binary Search Tree', () => {
        describe('When adding the element', () => {
            beforeEach(() => {
                root = { id: 0 };
                tree = new BinarySearchTree(root);
                wasAdded = tree.add(root);
            });

            it('should indicate that an element was not added', () => {
                expect(wasAdded).toBeFalsy();
            });

            it('should still have the original root node', () => {
                expect(tree.getData()).toEqual(root);
            });

            it('should not have a left subtree', () => {
                expect(tree.getLeftSubtree()).toBeFalsy();
            });
        })
    });

    describe('Given an element not in the tree and non-empty Binary Search Tree', () => {
        describe('When adding the element', () => {
            beforeEach(() => {
                root = { id: 0 };
                tree = new BinarySearchTree(root);
                element = { id: 1 };
                wasAdded = tree.add(element);
            });

            it('should indicate that an element was added', () => {
                expect(wasAdded).toBeTruthy();
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
                element = { id: 1 };
                tree = new BinarySearchTree(root);
                wasAdded = tree.add(element);
            });

            it('should indicate that an element was added', () => {
                expect(wasAdded).toBeTruthy();
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
                element = { id: 2 };
                tree = new BinarySearchTree(root);
                comparator = compareOnObjectProperty('id');
                wasAdded = tree.add(element, comparator);
            });

            it('should indicate that an element was added', () => {
                expect(wasAdded).toBeTruthy();
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
});