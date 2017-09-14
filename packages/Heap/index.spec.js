import expect from 'expect';
import Heap from './index';
import { objectPropComparator } from './../Comparators/RelationalComparators';

describe('src/BinarySearchTree', () => {
    let heap;
    let capacity = 4;
    let element = { id: 1 };
    let largerElement = { id: 2 };
    let largestElement = { id: 3 };
    let comparator = objectPropComparator('id');
    let actual;
    describe('Given no parameters', () => {
        describe('When creating a Heap', () => {
            beforeEach(() => {
                heap = new Heap(null, comparator);
            });

            it('should be a empty', () => {
                expect(heap.isEmpty()).toBeTruthy();
            });
        });

        describe('When creating a Heap with a capacity', () => {
            beforeEach(() => {
                heap = new Heap(capacity, comparator);
            });

            it('should be a empty', () => {
                expect(heap.isEmpty()).toBeTruthy();
            });
        });

        describe('When creating a Heap with an invalid capacity', () => {
            beforeEach(() => {
                heap = new Heap("invalid number", comparator);
            });

            it('should be a empty', () => {
                expect(heap.isEmpty()).toBeTruthy();
            });
        });
    });

    describe('Given an empty Heap', () => {
        beforeEach(() => {
            heap = new Heap(capacity, comparator);
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
                heap.insert(element);
                actual = heap.insert(largerElement);
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
                heap.insert(largerElement);
                actual = heap.insert(element);
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
                    heap.insert({ id: i });
                }
                actual = heap.insert({ id: capacity + 1 });
            });

            it('should be undefined', () => {
                expect(actual).toBeFalsy();
            });
        });
    });

    describe('Given a Heap with one element', () => {
        beforeEach(() => {
            heap = new Heap(capacity, comparator);
            heap.insert(element);
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

    describe('Given a Heap with three elements in which the right child is greater than the left child', () => {
        beforeEach(() => {
            heap = new Heap(capacity, comparator);
            heap.insert(element);
            heap.insert(largerElement);
            heap.insert(largestElement);
        });

        describe('When removing all elements', () => {
            it('should remove the smallest element', () => {
                expect(heap.remove()).toEqual(element);
                expect(heap.remove()).toEqual(largerElement);
                expect(heap.remove()).toEqual(largestElement);
                expect(heap.isEmpty()).toBeTruthy();
            });
        });
    });

    describe('Given a Heap with three elements in which the right child is less than the left child', () => {
        beforeEach(() => {
            heap = new Heap(capacity, comparator);
            heap.insert(element);
            heap.insert(largestElement);
            heap.insert(largerElement);
        });

        describe('When removing all elements', () => {
            it('should be the smallest element', () => {
                expect(heap.remove()).toEqual(element);
                expect(heap.remove()).toEqual(largerElement);
                expect(heap.remove()).toEqual(largestElement);
                expect(heap.isEmpty()).toBeTruthy();
            });
        });
    });

    describe('Given a Heap with a full left sub tree and full right sub tree', () => {
        let root = { id: 1 };
        let left = { id: 2 };
        let right = { id: 3 };
        let leftLeft = { id: 4 };
        let leftRight = { id: 5 };
        let rightLeft = { id: 6 };
        let rightRight = { id: 7 };
        beforeEach(() => {
            capacity = 9;
            heap = new Heap(capacity, comparator);
            heap.insert(root);
            heap.insert(left);
            heap.insert(right);
            heap.insert(leftLeft);
            heap.insert(leftRight);
            heap.insert(rightLeft);
            heap.insert(rightRight);
        });

        describe('When removing all elements', () => {
            it('should the be the smallest remaining element', () => {
                expect(heap.remove()).toEqual(root);
                expect(heap.remove()).toEqual(left);
                expect(heap.remove()).toEqual(right);
                expect(heap.remove()).toEqual(leftLeft);
                expect(heap.remove()).toEqual(leftRight);
                expect(heap.remove()).toEqual(rightLeft);
                expect(heap.remove()).toEqual(rightRight);
                expect(heap.isEmpty()).toBeTruthy();
            });
        });
    });
});