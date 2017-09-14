import expect from 'expect';
import * as RelationalComparators from './index';

describe('src/index', () => {
    describe('Given everything is imported from index as RelationalComparators', () => {
        it('should contain a default comparator', () => {
            expect(RelationalComparators.defaultComparator).toBeA('function');
        });

        it('should contain a objectPropComparator comparator builder', () => {
            expect(RelationalComparators.objectPropComparator).toBeA('function');
            expect(RelationalComparators.objectPropComparator()).toBeA('function');
        });
    });
});