import expect from 'expect';
import BinaryTree from './BinaryTree';
import { Node } from './BinaryTree';

describe('src/BinaryTree', () => {
    let tree;
    let root;
    let data;
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
        })
    });
});