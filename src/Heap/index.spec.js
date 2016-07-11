import expect from 'expect';
import Heap from './index';

describe('src/BinarySearchTree', () => {
    let heap;
    let capacity;
    let element;
    let actual;
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

            it('should return true indicating the element was inserted', () => {
                expect(actual).toBeTruthy();
            });
        });
    });
});