import expect from 'expect';
import Heap from './index';
import { compareOnObjectProperty } from './../BinaryTree';

describe('src/BinarySearchTree', () => {
    let heap;
    let capacity = 4;
    let element = { id: 1 };
    let largerElement = { id: 2 };
    let comparator = compareOnObjectProperty('id');
    let actual;
    describe('Given no parameters', () => {
        describe('When creating a Heap', () => {
            beforeEach(() => {
                heap = new Heap();
            });

            it('should be a empty', () => {
                expect(heap.isEmpty()).toBeTruthy();
            });
        });

        describe('When creating a Heap with a capacity', () => {
            beforeEach(() => {
                heap = new Heap(capacity);
            });

            it('should be a empty', () => {
                expect(heap.isEmpty()).toBeTruthy();
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
            heap = new Heap(capacity);
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

        describe('When inserting one more element than the heaps capacity', () => {
            beforeEach(() => {
                for(var i = 0; i < capacity; i++) {
                    heap.insert({ id: i }, comparator);
                }
                actual = heap.insert({ id: capacity + 1 }, comparator);
            });

            it('should be undefined', () => {
                expect(actual).toBeFalsy();
            });
        });
    });

    describe('Given a Heap with one element', () => {
        beforeEach(() => {
            heap = new Heap(capacity);
            heap.insert(element, comparator);
        });

        describe('When removing an element', () => {
            beforeEach(() => {
                actual = heap.remove();
            });

            it('should be empty', () => {
                expect(heap.isEmpty()).toBeTruthy();
            });

            it('should return the element at the root of the heap', () => {
                expect(actual).toEqual(element);
            });
        });
    });
});