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
        });
    });
});
