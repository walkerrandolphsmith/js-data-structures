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

    findVertex = (v, comparator = defaultComparator) => {
        const vertex = this.findVertexInternal(v, comparator);
        return vertex ? vertex.data : vertex;
    };

    findVertexInternal = (v, comparator = defaultComparator) => {
        let vertex = undefined;
        for(let i = 0; i < this.vertices.length; i++) {
            if(comparator(v, this.vertices[i].data)) {
                vertex = this.vertices[i];
            }
        }
        return vertex;
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
            if(!comparator(vertexV, vertexW)) {
                vertexW.incedentVertices.push(vertexV);
            }
        }
        return willAdd;
    };

    getEdges = (v, comparator = defaultComparator) => {
        const vertex = this.findVertexInternal(v, comparator);
        return vertex ? vertex.incedentVertices.map(v => v.data) : undefined;
    };

    degree = (v, comparator = defaultComparator) => {
        const vertex = this.findVertexInternal(v, comparator);
        return vertex ? vertex.incedentVertices.length : -1
    };
}

class Vertex {
    constructor(data) {
        this.data = data;
        this.incedentVertices = [];
    }
}