import expect from 'expect';
import * as DataStructures from './index';

import LinkedList from './LinkedList';
import Stack from './Stack';
import BinaryTree from './BinaryTree';

describe('src/index', () => {
    describe('Given everything is imported from index as DataStructures', () => {
        it('should contain a LinkedList', () => {
            expect(new DataStructures.LinkedList() instanceof LinkedList).toBeTruthy();
        });

        it('should contain a Stack', () => {
            expect(new DataStructures.Stack() instanceof Stack).toBeTruthy();
        });

        it('should contain a LinkedList', () => {
            expect(new DataStructures.BinaryTree() instanceof BinaryTree).toBeTruthy();
        });
    });
});