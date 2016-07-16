import { defaultComparator } from './../Comparators/EqualityComparators';

export default class Graph {
    constructor() {
        this.vertices = [];
    }

    addVertex = (v, comparator = defaultComparator) => {
        let willAdd = true;
        for(let i = 0; i < this.vertices.length; i++) {
            if(comparator(v, this.vertices[i])){
                willAdd = false;
            }
        }
        if(willAdd) {
            this.vertices.push(v);
        }
        return willAdd
    };

    getVertices = () => this.vertices;

    findVertex = (vertex, comparator = defaultComparator) => {
        let v = undefined;
        for(let i = 0; i < this.vertices.length; i++) {
            if(comparator(vertex, this.vertices[i])) {
                v = this.vertices[i];
            }
        }
        return v;
    };

    addEdge = (v, w, comparator = defaultComparator) => {
        let willAdd = false;
        if(this.findVertex(v, comparator) && this.findVertex(w, comparator)) {
            willAdd = true;
        }
        return willAdd;
    }
}