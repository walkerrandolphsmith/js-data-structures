import expect from 'expect';
import LinkedList from './LinkedList';

describe('src/LinkedList', () => {
    describe('Given no parameters', () => {
        describe('When creating a LinkedList', () => {
            let actual;
            beforeEach(() => {
                actual = new LinkedList();
            });

            it('should have the length of zero', () => {
                expect(actual.length()).toEqual(0);
            });

            it('should be empty', () => {
                expect(actual.isEmpty()).toBeTruthy();
            });

            it('should not be able to retrieve the first element', () => {
                expect(actual.getFirst()).toBeFalsy();
            });

            it('should not be able to retrieve the last element', () => {
                expect(actual.getLast()).toBeFalsy();
            });
        });
    });

    describe('Given an empty LinkedList', () => {
        let list;
        beforeEach(() => {
            list = new LinkedList();
        });
        describe('When adding a new element', () => {
            let element;
            beforeEach(() => {
                element = { id: 1 };
                list.push(element);
            });

            it('should have the length of one', () => {
                expect(list.length()).toEqual(1);
            });

            it('should be not be empty', () => {
                expect(list.isEmpty()).toBeFalsy();
            });

            it('should contain the element', () => {
               expect(list.contains(element)).toBeTruthy();
            });
        });

        describe('When adding a two elements', () => {
            let first;
            let second;
            beforeEach(() => {
                first = { id: 1 };
                second = { id: 2 };
                list.push(first);
                list.push(second);
            });

            it('should have the length of two', () => {
                expect(list.length()).toEqual(2);
            });

            it('should be not be empty', () => {
                expect(list.isEmpty()).toBeFalsy();
            });

            it('should contain the first element', () => {
                expect(list.contains(first)).toBeTruthy();
            });

            it('should contain the second element', () => {
                expect(list.contains(second)).toBeTruthy();
            });
        });

        describe('Given an existing LinkedList with one element', () => {
            let list;
            let element;
            beforeEach(() => {
                element = { id: 1 };
                list = new LinkedList();
                list.push(element)
            });
            describe('When retrieving the first element', () => {
                let actual;
                beforeEach(() => {
                    actual = list.getFirst();
                });

                it('should return the first element in the list', () => {
                    expect(actual).toEqual(element);
                });
            });

            describe('When retrieving the last element', () => {
                let actual;
                beforeEach(() => {
                    actual = list.getLast();
                });

                it('should return the last element in the list', () => {
                    expect(actual).toEqual(element);
                });
            });

            describe('When retrieving the first and last element', () => {
                let first;
                let last;
                beforeEach(() => {
                    first = list.getFirst();
                    last = list.getLast();
                });

                it('should return the same element', () => {
                    expect(first).toEqual(last);
                });
            });
        });

        describe('Given an existing LinkedList with many distinct elements', () => {
            let list;
            let first;
            let second;
            beforeEach(() => {
                first = { id: 1 };
                second = { id: 1 };
                list = new LinkedList();
                list.push(first);
                list.push(second)
            });

            describe('When retrieving the first element', () => {
                let actual;
                beforeEach(() => {
                    actual = list.getFirst();
                });

                it('should return the first element in the list', () => {
                    expect(actual).toEqual(first);
                });
            });

            describe('When retrieving the last element', () => {
                let actual;
                beforeEach(() => {
                    actual = list.getLast();
                });

                it('should return the last element in the list', () => {
                    expect(actual).toEqual(second);
                });
            });

            describe('When retrieving the first and last element', () => {
                it('should return two distinct elements', () => {
                    expect(list.getFirst() === list.getLast()).toBeFalsy();
                });
            });
        });
    });
});
