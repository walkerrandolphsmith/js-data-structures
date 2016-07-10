import expect from 'expect';
import BinaryTree from './BinaryTree';
import { Node } from './BinaryTree';

describe('src/BinaryTree', () => {
    let tree;
    let root;
    let data;
    let leftSubTree;
    let rightSubTree;
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