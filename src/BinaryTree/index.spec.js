import expect from 'expect';
import BinaryTree, { Node, defaultComparator, compareOnObjectProperty } from './index';

describe('src/BinaryTree', () => {
    let tree;
    let root;
    let data;
    let leftSubTree;
    let rightSubTree;

    describe('Given the default comparator', () => {
        let element = { id: 1 };
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
        let comparator = compareOnObjectProperty('id');
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
        describe('When creating a BinaryTree', () => {
            beforeEach(() => {
                tree = new BinaryTree();
            });

            it('should not have data', () => {
                expect(tree.getData()).toBeFalsy();
            });

            it('should not have a left subtree', () => {
                expect(tree.getLeftSubtree()).toBeFalsy();
            });

            it('should not have a right subtree', () => {
                expect(tree.getRightSubtree()).toBeFalsy();
            });
        })
    });

    describe('Given an element', () => {
        describe('When creating a BinaryTree', () => {
            beforeEach(() => {
                data = { id: 1 };
                tree = new BinaryTree(data);
            });

            it('should have data', () => {
                expect(tree.getData()).toEqual(data);
            });

            it('should be a leaf node', () => {
                expect(tree.isLeaf()).toBeTruthy();
            });

            it('should not have a left subtree', () => {
                expect(tree.getLeftSubtree()).toBeFalsy();
            });

            it('should not have a right subtree', () => {
                expect(tree.getRightSubtree()).toBeFalsy();
            });
        })
    });

    describe('Given a node', () => {
        describe('When creating a BinaryTree', () => {
            beforeEach(() => {
                data = { id: 1 };
                root = new Node(data);
                tree = new BinaryTree(root);
            });

            it('should have data', () => {
                expect(tree.getData()).toEqual(data);
            });

            it('should be a leaf node', () => {
                expect(tree.isLeaf()).toBeTruthy();
            });

            it('should not have a left subtree', () => {
                expect(tree.getLeftSubtree()).toBeFalsy();
            });

            it('should not have a right subtree', () => {
                expect(tree.getRightSubtree()).toBeFalsy();
            });
        })
    });

    describe('Given data and a non-BinaryTree', () => {
        describe('When creating a BinaryTree', () => {
            beforeEach(() => {
                data = { id: 1 };
                root = new Node(data);
                leftSubTree = "Anything that is not a binary tree";
                tree = new BinaryTree(root, leftSubTree);
            });

            it('should have data', () => {
                expect(tree.getData()).toEqual(data);
            });

            it('should be a leaf node', () => {
                expect(tree.isLeaf()).toBeTruthy();
            });

            it('should not have a left subtree', () => {
                expect(tree.getLeftSubtree()).toBeFalsy();
            });

            it('should not have a right subtree', () => {
                expect(tree.getRightSubtree()).toBeFalsy();
            });
        })
    });

    describe('Given data and a BinaryTree', () => {
        describe('When creating a BinaryTree', () => {
            beforeEach(() => {
                data = { id: 1 };
                root = new Node(data);
                leftSubTree = new BinaryTree(1);
                tree = new BinaryTree(root, leftSubTree);
            });

            it('should have data', () => {
                expect(tree.getData()).toEqual(data);
            });

            it('should be a leaf node', () => {
                expect(tree.isLeaf()).toBeFalsy();
            });

            it('should have a left subtree', () => {
                expect(tree.getLeftSubtree().getData()).toEqual(leftSubTree.getData());
            });

            it('should not have a right subtree', () => {
                expect(tree.getRightSubtree()).toBeFalsy();
            });
        })
    });

    describe('Given data and two non-BinaryTree', () => {
        describe('When creating a BinaryTree', () => {
            beforeEach(() => {
                data = { id: 1 };
                root = new Node(data);
                leftSubTree = "Anything other than a binary tree";
                rightSubTree = "Anything other than a binary tree";
                tree = new BinaryTree(root, leftSubTree, rightSubTree);
            });

            it('should have data', () => {
                expect(tree.getData()).toEqual(data);
            });

            it('should be a leaf node', () => {
                expect(tree.isLeaf()).toBeTruthy();
            });

            it('should not have a left subtree', () => {
                expect(tree.getLeftSubtree()).toBeFalsy();
            });

            it('should not have a right subtree', () => {
                expect(tree.getRightSubtree()).toBeFalsy();
            });
        });
    });

    describe('Given data, a BinaryTree, and a non-BinaryTree', () => {
        describe('When creating a BinaryTree with a left subtree', () => {
            beforeEach(() => {
                data = { id: 1 };
                root = new Node(data);
                leftSubTree = new BinaryTree(1);
                rightSubTree = "Anything other than a binary tree";
                tree = new BinaryTree(root, leftSubTree, rightSubTree);
            });

            it('should have data', () => {
                expect(tree.getData()).toEqual(data);
            });

            it('should be a leaf node', () => {
                expect(tree.isLeaf()).toBeFalsy();
            });

            it('should have a left subtree', () => {
                expect(tree.getLeftSubtree().getData()).toEqual(leftSubTree.getData());
            });

            it('should not have a right subtree', () => {
                expect(tree.getRightSubtree()).toBeFalsy();
            });
        });

        describe('When creating a BinaryTree with a right subtree', () => {
            beforeEach(() => {
                data = { id: 1 };
                root = new Node(data);
                leftSubTree = "Anything other than a binary tree";
                rightSubTree = new BinaryTree(2);
                tree = new BinaryTree(root, leftSubTree, rightSubTree);
            });

            it('should have data', () => {
                expect(tree.getData()).toEqual(data);
            });

            it('should be a leaf node', () => {
                expect(tree.isLeaf()).toBeFalsy();
            });

            it('should not have a left subtree', () => {
                expect(tree.getLeftSubtree()).toBeFalsy();
            });

            it('should have a right subtree', () => {
                expect(tree.getRightSubtree().getData()).toEqual(rightSubTree.getData());
            });
        });
    });

    describe('Given data and two BinaryTrees', () => {
        describe('When creating a BinaryTree', () => {
            beforeEach(() => {
                data = { id: 1 };
                root = new Node(data);
                leftSubTree = new BinaryTree(1);
                rightSubTree = new BinaryTree(2);
                tree = new BinaryTree(root, leftSubTree, rightSubTree);
            });

            it('should have data', () => {
                expect(tree.getData()).toEqual(data);
            });

            it('should be a leaf node', () => {
                expect(tree.isLeaf()).toBeFalsy();
            });

            it('should have a left subtree', () => {
                expect(tree.getLeftSubtree().getData()).toEqual(leftSubTree.getData());
            });

            it('should have a right subtree', () => {
                expect(tree.getRightSubtree().getData()).toEqual(rightSubTree.getData());
            });
        })
    });
});