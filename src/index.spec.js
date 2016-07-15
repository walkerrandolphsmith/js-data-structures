import expect from 'expect';
import * as DataStructures from './index';

import LinkedList from './LinkedList';
import Stack from './Stack';
import BinaryTree from './BinaryTree';
import BinarySearchTree from './BinarySearchTree';
import HuffmanTree from './HuffmanTree';
import AdjacencyMatrix from './AdjacencyMatrix';
import Graph from './Graph';

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

        it('should contain a HuffmanTree that is a BinaryTree', () => {
            expect(new DataStructures.HuffmanTree() instanceof BinaryTree).toBeTruthy();
            expect(new DataStructures.HuffmanTree() instanceof HuffmanTree).toBeTruthy();
        });

        it('should contain a AdjacencyMatrix', () => {
            expect(new DataStructures.AdjacencyMatrix() instanceof AdjacencyMatrix).toBeTruthy();
        });

        it('should contain a Graph', () => {
            expect(new DataStructures.Graph() instanceof Graph).toBeTruthy();
        });

        it('should contain a default comparator', () => {
            expect(DataStructures.RelationalComparators.defaultComparator).toBeA('function');
        });

        it('should contain a objectPropComparator comparator builder', () => {
            expect(DataStructures.RelationalComparators.objectPropComparator).toBeA('function');
            expect(DataStructures.RelationalComparators.objectPropComparator()).toBeA('function');
        });
    });
});