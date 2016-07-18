import expect from 'expect';
import Graph from './index';
import { objectPropComparator } from './../Comparators/EqualityComparators';

describe('src/Graph', () => {
    let graph;
    let v = { id: 1 };
    let w = { id: 2 };
    let comparator = objectPropComparator('id');

    describe('Given no parameters', () => {
        describe('When creating a graph', () => {
            it('should create a graph', () => {
                expect(new Graph(comparator) instanceof Graph).toBeTruthy();
            });
        });
    });

    describe('Given an empty graph', () => {
        beforeEach(() => {
            graph = new Graph(comparator);
        });

        describe('When adding a vertex', () => {
            it('should return true indicating the vertex was added', () => {
                expect(graph.addVertex(v)).toBeTruthy();
            });
        });

        describe('When finding a vertex not in the graph', () => {
            it('should return the vertex', () => {
                expect(graph.findVertex(v)).toBeFalsy();
            });
        });

        describe('when getting the degree of a vertex not in the graph', () => {
            it('it should return -1', () => {
                expect(graph.degree(v)).toEqual(-1);
            });
        });

        describe('when adding an edge between one or more vertex not in the graph', () => {
            it('it should return false indicating the edge was not created', () => {
                expect(graph.addEdge(v, v)).toEqual(false);
            });
        });
    });

    describe('Given a non empty graph', () => {
        beforeEach(() => {
            graph = new Graph(comparator);
            graph.addVertex(v);
        });

        describe('When adding a vertex already in graph', () => {
            it('should return false indicating the vertex was not added', () => {
                expect(graph.addVertex(v)).toBeFalsy();
            });
        });

        describe('when getting the degree of a vertex in the graph that does not make an edge', () => {
            it('it should return 0', () => {
                expect(graph.degree(v)).toEqual(0);
            });
        });

        describe('When getting all vertices', () => {
            it('should return a list of all vertices in graph', () => {
                expect(graph.getVertices()).toInclude(v);
            });
        });

        describe('when finding a vertex in the graph', () => {
            it('it should return the vertex', () => {
                expect(graph.findVertex(v)).toEqual(v);
            });
        });

        describe('when adding an edge between two vertices in the graph', () => {
            it('it should return true indicating the edge was added', () => {
                expect(graph.addEdge(v, v)).toEqual(true);
            });
        });
    });

    describe('given a graph with edge between a vertex and itself', () => {
        beforeEach(() => {
            graph = new Graph(comparator);
            graph.addVertex(v);
            graph.addEdge(v, v)
        });

        describe('when getting the degree of a vertex in the graph that makes an edge', () => {
            it('it should return 1', () => {
                expect(graph.degree(v)).toEqual(1);
            });
        });

        describe('when getting all the edges associated with a vertex', () => {
            it('it should return all the vertices that are incedent.', () => {
                expect(graph.getEdges(v)).toInclude(v);
            });
        });

        describe('when getting all the edges associated with a vertex not in the graph', () => {
            it('it should return all the vertices that are incedent.', () => {
                expect(graph.getEdges({ id: 5 })).toBeFalsy();
            });
        });
    });

    describe('given a graph with edge between two distinct vertices', () => {
        beforeEach(() => {
            graph = new Graph(comparator);
            graph.addVertex(v);
            graph.addVertex(w);
            graph.addEdge(v, w)
        });

        describe('when getting the degree of a vertex in the graph that makes an edge', () => {
            it('it should return 1', () => {
                expect(graph.degree(v)).toEqual(1);
            });
        });

        describe('when getting all the edges associated with a vertex', () => {
            it('it should return all the vertices that are incedent.', () => {
                expect(graph.getEdges(v)).toInclude(w);
            });
        });
    });
});