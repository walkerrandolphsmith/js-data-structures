export default class AdjacencyMatrix {
    constructor(n) {
        this.max = n ? n : 5;
        this.matrix = [];
        for(let i = 0; i < this.max; i++) {
            this.matrix[i] = [];
        }
    }
}