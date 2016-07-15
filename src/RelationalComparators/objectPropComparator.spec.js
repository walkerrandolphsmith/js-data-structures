import expect from 'expect';
import objectPropComparator from './objectPropComparator';

describe('src/Comparator/objectPropComparator', () => {
    describe('Given the objectPropComparator comparator and object property name id', () => {
        let comparator = objectPropComparator('id');
        describe('When comparing the elements that are equal', () => {
            it('should return zero', () => {
                expect(comparator({ id: 1 }, { id: 1 })).toEqual(0);
            });
        });

        describe('When comparing two elements such that the first is less than the second', () => {
            it('should return 1', () => {
                expect(comparator({ id: 1 }, { id: 2 })).toEqual(-1);
            });
        });

        describe('When comparing two elements such that the first is greater than the second', () => {
            it('should return 1', () => {
                expect(comparator({ id: 5 }, { id: 2 })).toEqual(1);
            });
        });
    });
});