import expect from 'expect';
import BinaryTree, { Node } from './../BinaryTree';
import BinarySearchTree from './index';

describe.only('src/BinarySearchTree', () => {
    let tree;
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
});