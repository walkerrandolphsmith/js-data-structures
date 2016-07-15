import expect from 'expect';
import Graph from './index';

describe('src/Graph', () => {
    let graph;
    let vertex = { id: 1 };

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
                actual = graph.addVertex(vertex);
            });
            it('should return true indicating the vertex was added', () => {
                expect(actual).toBeTruthy();
            });
        });
    });

    describe('Given a non empty graph', () => {
        beforeEach(() => {
            graph = new Graph();
            graph.addVertex(vertex);
        });

        describe('When getting all vertices', () => {
            let actual;
            beforeEach(() => {
                actual = graph.getVertices();
            });
            it('should return a list of all vertices in graph', () => {
                expect(actual).toInclude(vertex);
            });
        });
    });
});