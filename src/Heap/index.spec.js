import expect from 'expect';
import Heap from './index';
import { objectPropComparator } from './../RelationalComparators';

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

    describe('Given a Heap with three elements in which the right child is greater than the left child', () => {
        beforeEach(() => {
            heap = new Heap(capacity);
            heap.insert(element, comparator);
            heap.insert(largerElement, comparator);
            heap.insert(largestElement, comparator);
        });

        describe('When removing all elements', () => {
            it('should remove the smallest element', () => {
                expect(heap.remove(comparator)).toEqual(element);
                expect(heap.remove(comparator)).toEqual(largerElement);
                expect(heap.remove(comparator)).toEqual(largestElement);
                expect(heap.isEmpty()).toBeTruthy();
            });
        });
    });

    describe('Given a Heap with three elements in which the right child is less than the left child', () => {
        beforeEach(() => {
            heap = new Heap(capacity);
            heap.insert(element, comparator);
            heap.insert(largestElement, comparator);
            heap.insert(largerElement, comparator);
        });

        describe('When removing all elements', () => {
            it('should be the smallest element', () => {
                expect(heap.remove(comparator)).toEqual(element);
                expect(heap.remove(comparator)).toEqual(largerElement);
                expect(heap.remove(comparator)).toEqual(largestElement);
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
            heap = new Heap(capacity);
            heap.insert(root, comparator);
            heap.insert(left, comparator);
            heap.insert(right, comparator);
            heap.insert(leftLeft, comparator);
            heap.insert(leftRight, comparator);
            heap.insert(rightLeft, comparator);
            heap.insert(rightRight, comparator);
        });

        describe('When removing all elements', () => {
            it('should the be the smallest remaining element', () => {
                expect(heap.remove(comparator)).toEqual(root);
                expect(heap.remove(comparator)).toEqual(left);
                expect(heap.remove(comparator)).toEqual(right);
                expect(heap.remove(comparator)).toEqual(leftLeft);
                expect(heap.remove(comparator)).toEqual(leftRight);
                expect(heap.remove(comparator)).toEqual(rightLeft);
                expect(heap.remove(comparator)).toEqual(rightRight);
                expect(heap.isEmpty()).toBeTruthy();
            });
        });
    });
});