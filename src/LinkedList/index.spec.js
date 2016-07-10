import expect from 'expect';
import LinkedList from './index';

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
                it('should return the first element in the list', () => {
                    expect(list.getFirst()).toEqual(element);
                });
            });

            describe('When retrieving the last element', () => {
                it('should return the last element in the list', () => {
                    expect(list.getLast()).toEqual(element);
                });
            });

            describe('When retrieving the first and last element', () => {
                it('should return the same element', () => {
                    expect(list.getFirst()).toEqual(list.getLast());
                });
            });
        });

        describe('Given an existing LinkedList with two distinct elements', () => {
            let list;
            let first;
            let second;
            beforeEach(() => {
                first = { id: 1 };
                second = { id: 2 };
                list = new LinkedList();
                list.push(first);
                list.push(second)
            });

            describe('When retrieving the first element', () => {
                it('should return the first element in the list', () => {
                    expect(list.getFirst()).toEqual(first);
                });
            });

            describe('When retrieving the last element', () => {
                it('should return the last element in the list', () => {
                    expect(list.getLast()).toEqual(second);
                });
            });

            describe('When retrieving the first and last element', () => {
                it('should return two distinct elements', () => {
                    expect(list.getFirst() === list.getLast()).toBeFalsy();
                });
            });

            describe('When determining if the first element is contained in the list', () => {
                it('should return true', () => {
                    expect(list.contains(first)).toBeTruthy();
                });
            });

            describe('When determining if an element that satisfies the comparator is contained in the list', () => {
                it('should return true', () => {
                    let actual = list.contains({ id: 1 }, (e, d) => {
                        return e.id === d.id;
                    });
                    expect(actual).toBeTruthy();
                });
            });

            describe('When determining if an element that does not satisfy the comparator is contained in the list', () => {
                it('should return false', () => {
                    let actual = list.contains({ id: 1 }, (e, d) => {
                        return e.id === d;
                    });
                    expect(actual).toBeFalsy();
                });
            });

            describe('When removing an element not in the list', () => {
                let actual;
                beforeEach(() => {
                    actual = list.pop({ id: 3 });
                });

                it('should return false', () => {
                    expect(actual).toBeFalsy();
                });

                it('should contain the both elements', () => {
                    expect(list.contains(first)).toBeTruthy();
                    expect(list.contains(second)).toBeTruthy();
                });
            });

            describe('When removing the first element in the list', () => {
                let actual;
                beforeEach(() => {
                    actual = list.pop(first);
                });

                it('should return true', () => {
                    expect(actual).toBeTruthy();
                });

                it('should not contain the first element', () => {
                    expect(list.contains(first)).toBeFalsy();
                });

                it('should contain the second element', () => {
                    expect(list.contains(second)).toBeTruthy();
                });
            });

            describe('When removing the second element in the list', () => {
                let actual;
                beforeEach(() => {
                    actual = list.pop(second);
                });

                it('should return true', () => {
                    expect(actual).toBeTruthy();
                });

                it('should not contain the first element', () => {
                    expect(list.contains(first)).toBeTruthy();
                });

                it('should contain the second element', () => {
                    expect(list.contains(second)).toBeFalsy();
                });
            });
        });

        describe('Given an existing LinkedList with two distinct elements such that one has empty data', () => {
            let list;
            let first;
            let third;
            let emptyNode;
            beforeEach(() => {
                first = { id: 1 };
                emptyNode = undefined;
                third = { id: 3 };
                list = new LinkedList();
                list.push(first);
                list.push(emptyNode);
                list.push(third);
            });

            describe('When removing the element with empty data in the list', () => {
                let actual;
                beforeEach(() => {
                    actual = list.pop(emptyNode);
                });

                it('should return true', () => {
                    expect(actual).toBeTruthy();
                });

                it('should not contain the first element', () => {
                    expect(list.contains(first)).toBeTruthy();
                });

                it('should contain the second element', () => {
                    expect(list.contains(emptyNode)).toBeFalsy();
                });

                it('should contain the third element', () => {
                    expect(list.contains(third)).toBeTruthy();
                });
            });
        });
    });
});
