import expect from 'expect';
import * as Comparators from './index';

describe('src/index', () => {
    describe('Given everything is imported from index as Comparators', () => {
        it('should contain a default comparator', () => {
            expect(Comparators.defaultComparator).toBeA('function');
        });

        it('should contain a objectPropComparator comparator builder', () => {
            expect(Comparators.objectPropComparator).toBeA('function');
            expect(Comparators.objectPropComparator()).toBeA('function');
        });
    });
});