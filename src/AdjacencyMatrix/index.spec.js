import expect from 'expect';
import AdjacencyMatrix from './index';

describe('src/AdjacencyMatrix', () => {
    let matrix;
    let v = 1;
    let w = 1;
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

        describe('When adding an edge between vertex v and w', () => {
            beforeEach(() => {
                matrix.addEdge(v, w);
            });

            it('should have only one edge', () => {
                for(let i = 0; i < 5; i++) {
                    for(let j = 0; j < 5; j++) {
                        if(i === v && j === w){
                            expect(matrix.matrix[i][j]).toBeTruthy();
                        } else {
                            expect(matrix.matrix[i][j]).toBeFalsy();
                        }
                    }
                }
            });
        });

        describe('When determining if there is an edge between vertex v and w', () => {
            it('should not have the edge', () => {
                expect(matrix.hasEdge(v, w)).toBeFalsy();
            });
        });
    });

    describe('Given an existing AdjacencyMatrix with an edge', () => {
        beforeEach(() => {
            matrix = new AdjacencyMatrix();
            matrix.addEdge(v, w)
        });

        describe('When adding an edge between vertex x and y', () => {
            let x = 2;
            let y = 2;
            beforeEach(() => {
                matrix.addEdge(x, y);
            });

            it('should have two edges', () => {
                for(let i = 0; i < 5; i++) {
                    for(let j = 0; j < 5; j++) {
                        if(i === v && j === w || i === x && j === y){
                            expect(matrix.matrix[i][j]).toBeTruthy();
                        } else {
                            expect(matrix.matrix[i][j]).toBeFalsy();
                        }
                    }
                }
            });
        });

        describe('When determining if there is an edge between vertex v and w', () => {
            it('should not have the edge', () => {
                expect(matrix.hasEdge(v, w)).toBeTruthy();
            });
        });

        describe('When removing an edge between v and w', () => {
            beforeEach(() => {
                matrix.remove(v, w);
            });
            it('should not have the edge', () => {
                expect(matrix.hasEdge(v, w)).toBeFalsy();
            });
        });
    });
});