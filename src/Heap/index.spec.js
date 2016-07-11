import expect from 'expect';
import Heap from './index';
import { compareOnObjectProperty } from './../BinaryTree';

describe.only('src/BinarySearchTree', () => {
    let heap;
    let capacity;
    let element;
    let actual;
    let largerElement;
    let comparator = compareOnObjectProperty('id');
    describe('Given no parameters', () => {
        describe('When creating a Heap', () => {
            beforeEach(() => {
                heap = new Heap();
            });

            it('should be a empty', () => {
                expect(heap.isEmpty).toBeTruthy();
            });
        });

        describe('When creating a Heap with a capacity', () => {
            beforeEach(() => {
                heap = new Heap(10);
            });

            it('should be a empty', () => {
                expect(heap.isEmpty()).toBeFalsy();
            });
        });

        describe('When creating a Heap with an invalid capacity', () => {
            beforeEach(() => {
                heap = new Heap("invalid number");
            });

            it('should be a empty', () => {
                expect(heap.isEmpty()).toBeTruthy();
            });
        });
    });

    describe('Given an empty Heap', () => {
        beforeEach(() => {
            capacity = 10;
            heap = new Heap(capacity);
            element = { id: 1 };
        });

        describe('When inserting an element', () => {
            beforeEach(() => {
                actual = heap.insert(element);
            });

            it('should not be empty', () => {
                expect(heap.isEmpty()).toBeFalsy();
            });

            it('should return true indicating the element was inserted', () => {
                expect(actual).toBeTruthy();
            });
        });

        describe('When inserting elements of strictly increasing values', () => {
            beforeEach(() => {
                largerElement = { id: 2 };
                heap.insert(element, comparator);
                actual = heap.insert(largerElement, comparator);
            });

            it('should not be empty', () => {
                expect(heap.isEmpty()).toBeFalsy();
            });

            it('should return true indicating the element was inserted', () => {
                expect(actual).toBeTruthy();
            });

            it('should have element at the first index', () => {
                expect(heap.heap[0]).toEqual(element);
            });

            it('should have the larger element at the second index', () => {
                expect(heap.heap[1]).toEqual(largerElement);
            });
        });

        describe('When inserting elements of strictly decreasing values', () => {
            beforeEach(() => {
                largerElement = { id: 2 };
                heap.insert(largerElement, comparator);
                actual = heap.insert(element, comparator);
            });

            it('should not be empty', () => {
                expect(heap.isEmpty()).toBeFalsy();
            });

            it('should return true indicating the element was inserted', () => {
                expect(actual).toBeTruthy();
            });

            it('should have element at the first index', () => {
                expect(heap.heap[0]).toEqual(element);
            });

            it('should have the larger element at the second index', () => {
                expect(heap.heap[1]).toEqual(largerElement);
            });
        });

        describe('When removing an element', () => {
            beforeEach(() => {
                actual = heap.remove();
            });

            it('should be undefined', () => {
                expect(actual).toBeFalsy();
            });
        });
    });
});