import expect from 'expect';
import * as EqualityComparators from './index';

describe('src/index', () => {
    describe('Given everything is imported from index as EqualityComparators', () => {
        it('should contain a default comparator', () => {
            expect(EqualityComparators.defaultComparator).toBeA('function');
        });

        it('should contain a objectPropComparator comparator builder', () => {
            expect(EqualityComparators.objectPropComparator).toBeA('function');
            expect(EqualityComparators.objectPropComparator()).toBeA('function');
        });
    });
});