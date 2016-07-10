import expect from 'expect';
import BinaryTree, { Node } from './../BinaryTree';
import BinarySearchTree, { defaultComparator } from './index';

describe('src/BinarySearchTree', () => {
    let tree;
    let element;

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
        describe('When adding the element', () => {
            let wasAdded;
            beforeEach(() => {
                tree = new BinarySearchTree();
                element = { id: 1 };
                wasAdded = tree.add(element);
            });

            it('should indicate that an element was added', () => {
                expect(wasAdded).toBeTruthy();
            });
            
            it('should have a root node that contains the element', () => {
                expect(tree.getData()).toEqual(element);
            });
        })
    });
});