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

    describe('Given an existing AdjacencyMatrix', () => {
        beforeEach(() => {
            matrix = new AdjacencyMatrix();
        });

        describe('When adding an edge', () => {
            beforeEach(() => {
                matrix.addEdge(1,1);
            });

            it('should have only one edge', () => {
                for(let i = 0; i < 5; i++) {
                    for(let j = 0; j < 5; j++) {
                        if(i === 1 && j === 1){
                            expect(matrix.matrix[i][j]).toBeTruthy();
                        } else {
                            expect(matrix.matrix[i][j]).toBeFalsy();
                        }
                    }
                }
            });
        });
    });
});