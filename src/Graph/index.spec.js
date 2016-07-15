import expect from 'expect';
import Graph from './index';

describe('src/Graph', () => {
    let graph;
    let vertex;
    describe('Given no parameters', () => {
        describe('When creating a graph', () => {
            beforeEach(() => {
                graph = new Graph();
            });

            it('should create a graph', () => {
                expect(graph instanceof Graph).toBeTruthy();
            });
        });
    });

    describe('Given an empty graph', () => {
        beforeEach(() => {
            graph = new Graph();
        });

        describe('When adding a vertex', () => {
            let actual;
            beforeEach(() => {
                vertex = { id: 1 };
                actual = graph.addVertex(vertex);
            });
            it('should return true indicating the vertex was added', () => {
                expect(actual).toBeTruthy();
            });
        });
    });
});