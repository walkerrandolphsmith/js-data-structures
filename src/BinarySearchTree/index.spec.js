import expect from 'expect';
import BinaryTree, { Node } from './../BinaryTree';
import BinarySearchTree, { defaultComparator, compareOnObjectProperty } from './index';

describe('src/BinarySearchTree', () => {
    let tree;
    let root;
    let element = { id: 1 };
    let comparator = compareOnObjectProperty('id');
    let actual;

    describe('Given the default comparator', () => {
        describe('When comparing the element to itself', () => {
            it('should return zero', () => {
                expect(defaultComparator(element, element)).toEqual(0);
            });
        });
        describe('When comparing two distinct elements', () => {
            it('should return zero', () => {
                expect(defaultComparator(element, { id: 2 })).toEqual(-1);
            });
        });
    });

    describe('Given the compareOnObjectProperty comparator and object property name id', () => {
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
});