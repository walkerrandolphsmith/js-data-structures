export default class BinaryTree {
    constructor() {
        this.root = undefined;
    }

    getData = () => this.root ? this.root.data : undefined;
} 