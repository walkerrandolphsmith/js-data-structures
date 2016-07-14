import expect from 'expect';
import AdjacencyMatrix from './index';

describe('src/AdjacencyMatrix', () => {
    let matrix;
    describe('Given no parameters', () => {
        describe('When creating an AdjacencyMatrix', () => {
            beforeEach(() => {
                matrix = new AdjacencyMatrix();
            });

            it('should have matrix of length 5', () => {
                expect(matrix.matrix.length).toEqual(5);
            });
        });
    });

    describe('Given a number of vertices', () => {
        describe('When creating an AdjacencyMatrix', () => {
            let numberOfVertices = 3;
            beforeEach(() => {
                matrix = new AdjacencyMatrix(numberOfVertices);
            });

            it('should have matrix of length 5', () => {
                expect(matrix.matrix.length).toEqual(numberOfVertices);
            });
        });
    });
});