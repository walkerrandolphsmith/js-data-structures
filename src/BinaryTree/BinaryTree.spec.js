import expect from 'expect';
import BinaryTree from './BinaryTree';

describe('src/BinaryTree', () => {
    let tree;
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

    describe('Given the root node', () => {
        describe('When creating a BinaryTree', () => {
            let root;
            beforeEach(() => {
                root = { id: 1 };
                tree = new BinaryTree(root);
            });

            it('should have data', () => {
                expect(tree.getData()).toEqual(root);
            });
        })
    });
});