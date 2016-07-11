import expect from 'expect';
import Heap from './index';

describe('src/BinarySearchTree', () => {
    let heap;
    let capacity;

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
});