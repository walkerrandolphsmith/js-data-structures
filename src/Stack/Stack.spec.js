import expect from 'expect';
import Stack from './Stack';

describe('src/Stack', () => {
    describe('Given no parameters', () => {
        describe('When creating a Stack', () => {
            let actual;
            beforeEach(() => {
                actual = new Stack();
            });

            it('should be empty', () => {
                expect(actual.isEmpty()).toBeTruthy();
            });
        });
    });

    describe('Given an empty Stack', () => {
        let stack;
        beforeEach(() => {
            stack = new Stack();
        });

        describe('When peeking at the top element', () => {
            it('should be undefined', () => {
                expect(stack.peek()).toBeFalsy();
            });
        });

        describe('When popping the top element', () => {
            it('should be undefined', () => {
                expect(stack.pop()).toBeFalsy();
            });
        });

        describe('When pushing a new element on the top', () => {
            beforeEach(() => {
                stack.push({ id: 1 });
            });

            it('should not be empty', () => {
                expect(stack.isEmpty()).toBeFalsy();
            });
        });
    });

    describe('Given an Stack with one element', () => {
        let stack;
        let element = { id: 1 };
        beforeEach(() => {
            stack = new Stack();
            stack.push(element);
        });

        describe('When peeking at the top element', () => {
            let peekedElement;
            beforeEach(() => {
                peekedElement = stack.peek()
            });

            it('should return the element without emptying the stack', () => {
                expect(peekedElement).toEqual(element);
            });

            it('should not empty the stack', () => {
                expect(stack.isEmpty()).toBeFalsy();
            });
        });

        describe('When popping the top element', () => {
            let poppedElement;
            beforeEach(() => {
                poppedElement = stack.pop()
            });

            it('should return the element', () => {
                expect(poppedElement).toEqual(element);
            });

            it('should empty the stack', () => {
                expect(stack.isEmpty()).toBeTruthy();
            });
        });
    });
});
