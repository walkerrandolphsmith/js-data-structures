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
    })
});