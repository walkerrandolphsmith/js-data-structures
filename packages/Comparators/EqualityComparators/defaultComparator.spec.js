import expect from 'expect';
import defaultComparator from './defaultComparator';

describe('src/Comparators/EqualityComparators/defaultComparator', () => {
    describe('Given the default comparator', () => {
        let element = {id: 1};
        describe('When comparing the element to itself', () => {
            it('should return zero', () => {
                expect(defaultComparator(element, element)).toBeTruthy();
            });
        });
        describe('When comparing two distinct elements', () => {
            it('should return zero', () => {
                expect(defaultComparator(element, {id: 2})).toBeFalsy();
            });
        });
    });
});