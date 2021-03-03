import { EqualityComparators } from '@walkerrandolphsmith/comparators';

export default class Graph {
    constructor(comparator = EqualityComparators.defaultComparator) {
        this.vertices = [];
        this.comparator = comparator;
    }

    addVertex = (v) => {
        let willAdd = true;
        for(let i = 0; i < this.vertices.length; i++) {
            if(this.comparator(v, this.vertices[i].data)){
                willAdd = false;
            }
        }
        if(willAdd) {
            this.vertices.push(new Vertex(v));
        }
        return willAdd
    };

    getVertices = () => this.vertices.map(v => v.data);

    findVertex = (v) => {
        const vertex = this.findVertexInternal(v);
        return vertex ? vertex.data : vertex;
    };

    findVertexInternal = (v) => {
        let vertex = undefined;
        for(let i = 0; i < this.vertices.length; i++) {
            if(this.comparator(v, this.vertices[i].data)) {
                vertex = this.vertices[i];
            }
        }
        return vertex;
    };

    addEdge = (v, w) => {
        const vertexV = this.findVertexInternal(v);
        const vertexW = this.findVertexInternal(w);
        const willAdd = !!(vertexV && vertexW);
        if(willAdd) {
            vertexV.incedentVertices.push(vertexW);
            if(!this.comparator(vertexV, vertexW)) {
                vertexW.incedentVertices.push(vertexV);
            }
        }
        return willAdd;
    };

    getEdges = (v) => {
        const vertex = this.findVertexInternal(v);
        return vertex ? vertex.incedentVertices.map(v => v.data) : undefined;
    };

    degree = (v) => {
        const vertex = this.findVertexInternal(v);
        return vertex ? vertex.incedentVertices.length : -1
    };
}

class Vertex {
    constructor(data) {
        this.data = data;
        this.incedentVertices = [];
    }
}