export default class AdjacencyMatrix {
    constructor(n) {
        this.max = n ? n : 5;
        this.matrix = [];
        for(let i = 0; i < this.max; i++) {
            this.matrix[i] = [];
        }
    }

    addEdge = (i, j) => this.matrix[i][j] = true;

    hasEdge = (i, j) => this.matrix[i][j];

    remove = (i, j) => this.matrix[i][j] = false;

    outEdges = (i) => {
        let edges = [];
        for(let j = 0; j < this.max; j++) {
            if(this.matrix[i][j]) {
                edges.push(j);
            }
        }
        return edges;
    };

    inEdges = (i) => {
        let edges = [];
        for(let j = 0; j < this.max; j++) {
            if(this.matrix[j][i]) {
                edges.push(j);
            }
        }
        return edges;
    };
}