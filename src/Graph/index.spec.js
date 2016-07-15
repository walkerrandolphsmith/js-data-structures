import expect from 'expect';
import Graph from './index';

describe('src/Graph', () => {
    let graph;
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
});