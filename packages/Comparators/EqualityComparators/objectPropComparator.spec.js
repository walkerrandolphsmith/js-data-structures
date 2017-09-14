import expect from 'expect';
import objectPropComparator from './objectPropComparator';

describe('src/Comparators/EqualityComparators/objectPropComparator', () => {
    describe('Given the objectPropComparator comparator and object property name id', () => {
        let comparator = objectPropComparator('id');
        describe('When comparing two elements such that their property values are the same', () => {
            it('should be equal', () => {
                expect(comparator({ id: 1 }, { id: 1 })).toBeTruthy();
            });
        });

        describe('When comparing two elements such their property values are different', () => {
            it('should not be equal', () => {
                expect(comparator({ id: 1 }, { id: 2 })).toBeFalsy();
            });
        });
    });
});