import expect from 'expect';
import BinaryTree from './BinaryTree';
import { Node } from './BinaryTree';

describe('src/BinaryTree', () => {
    let tree;
    let root;
    let data;
    let leftSubTree;
    describe('Given no parameters', () => {
        describe('When creating a BinaryTree', () => {
            beforeEach(() => {
                tree = new BinaryTree();
            });

            it('should have no data', () => {
                expect(tree.getData()).toBeFalsy();
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
        })
    });

    describe('Given data and a BinaryTree', () => {
        describe('When creating a BinaryTree', () => {
            beforeEach(() => {
                data = { id: 1 };
                root = new Node(data);
                leftSubTree = new BinaryTree();
                tree = new BinaryTree(root, leftSubTree);
            });

            it('should have data', () => {
                expect(tree.getData()).toEqual(data);
            });

            it('should be a leaf node', () => {
                expect(tree.isLeaf()).toBeFalsy();
            });
        })
    });
});