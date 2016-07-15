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
}