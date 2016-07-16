import expect from 'expect';
import Graph from './index';
import { objectPropComparator } from './../Comparators/EqualityComparators';

describe('src/Graph', () => {
    let graph;
    let vertex = { id: 1 };
    let comparator = objectPropComparator('id');
    let actual;

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
            beforeEach(() => {
                actual = graph.addVertex(vertex, comparator);
            });
            it('should return true indicating the vertex was added', () => {
                expect(actual).toBeTruthy();
            });
        });

        describe('When finding a vertex not in the graph', () => {
            beforeEach(() => {
                actual = graph.findVertex(vertex);
            });

            it('should return the vertex', () => {
                expect(actual).toBeFalsy();
            });
        });

        describe('when adding an edge between one or more vertex not in the graph', () => {
            beforeEach(() => {
                actual = graph.addEdge(vertex, vertex);
            });

            it('it should return false indicating the edge was not created', () => {
                expect(actual).toEqual(false);
            });
        });
    });

    describe('Given a non empty graph', () => {
        beforeEach(() => {
            graph = new Graph();
            graph.addVertex(vertex, comparator);
        });

        describe('When adding a vertex already in graph', () => {
            beforeEach(() => {
                actual = graph.addVertex(vertex, comparator);
            });

            it('should return false indicating the vertex was not added', () => {
                expect(actual).toBeFalsy();
            });
        });

        describe('When getting all vertices', () => {
            beforeEach(() => {
                actual = graph.getVertices();
            });
            it('should return a list of all vertices in graph', () => {
                expect(actual).toInclude(vertex);
            });
        });

        describe('when finding a vertex in the graph', () => {
            beforeEach(() => {
                actual = graph.findVertex(vertex);
            });

            it('it should return the vertex', () => {
                expect(actual).toEqual(vertex, comparator);
            });
        });

        describe('when adding an edge between two vertices in the graph', () => {
            beforeEach(() => {
                actual = graph.addEdge(vertex, vertex);
            });

            it('it should return true indicating the edge was added', () => {
                expect(actual).toEqual(true);
            });
        });
    });
});