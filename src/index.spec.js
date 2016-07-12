import expect from 'expect';
import * as DataStructures from './index';

import LinkedList from './LinkedList';
import Stack from './Stack';
import BinaryTree from './BinaryTree';
import BinarySearchTree from './BinarySearchTree';

describe('src/index', () => {
    describe('Given everything is imported from index as DataStructures', () => {
        it('should contain a LinkedList', () => {
            expect(new DataStructures.LinkedList() instanceof LinkedList).toBeTruthy();
        });

        it('should contain a Stack', () => {
            expect(new DataStructures.Stack() instanceof Stack).toBeTruthy();
        });

        it('should contain a BinaryTree', () => {
            expect(new DataStructures.BinaryTree() instanceof BinaryTree).toBeTruthy();
        });

        it('should contain a BinarySearchTree that is a BinaryTree', () => {
            expect(new DataStructures.BinarySearchTree() instanceof BinaryTree).toBeTruthy();
            expect(new DataStructures.BinarySearchTree() instanceof BinarySearchTree).toBeTruthy();
        });

        it('should contain a default comparator', () => {
            expect(DataStructures.defaultComparator).toBeA('function');
        });

        it('should contain a objectPropComparator comparator builder', () => {
            expect(DataStructures.objectPropComparator).toBeA('function');
            expect(DataStructures.objectPropComparator()).toBeA('function');
        });
    });
});