import { defaultComparator } from './../Comparators/EqualityComparators';

export default class Graph {
    constructor() {
        this.vertices = [];
    }

    addVertex = (v, comparator = defaultComparator) => {
        let willAdd = true;
        for(let i = 0; i < this.vertices.length; i++) {
            if(comparator(v, this.vertices[i].data)){
                willAdd = false;
            }
        }
        if(willAdd) {
            this.vertices.push(new Vertex(v));
        }
        return willAdd
    };

    getVertices = () => this.vertices.map(v => v.data);

    findVertex = (vertex, comparator = defaultComparator) => {
        const v = this.findVertexInternal(vertex, comparator);
        return v ? v.data : v;
    };

    findVertexInternal = (vertex, comparator = defaultComparator) => {
        let v = undefined;
        for(let i = 0; i < this.vertices.length; i++) {
            if(comparator(vertex, this.vertices[i].data)) {
                v = this.vertices[i];
            }
        }
        return v;
    };

    addEdge = (v, w, comparator = defaultComparator) => {
        let willAdd = false;
        let vertexV = this.findVertexInternal(v, comparator);
        let vertexW = this.findVertexInternal(w, comparator);
        if(vertexV && vertexW) {
            willAdd = true;
        }
        if(willAdd) {
            vertexV.incedentVertices.push(vertexW);
            vertexW.incedentVertices.push(vertexV);
        }
        return willAdd;
    };

    getEdges = (vertex, comparator = defaultComparator) => {
        let v = this.findVertexInternal(vertex, comparator);
        return v ? v.incedentVertices.map(v => v.data) : undefined;
    }
}

class Vertex {
    constructor(data) {
        this.data = data;
        this.incedentVertices = [];
    }
}