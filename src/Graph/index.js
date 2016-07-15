export default class Graph {
    constructor() {
        this.vertices = [];
    }

    addVertex = (v) => {
        const willAdd = true; //this.vertices.find(comparator) < -1;
        if(willAdd) {
            this.vertices.push(v);
        }
        return willAdd
    };

    getVertices = () => this.vertices;
}