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
});
