export default class BinaryTree {
    constructor(data) {
        this.root = new Node(data);
    }

    getData = () => this.root ? this.root.data : undefined;
}

class Node {
    constructor(element) {
        this.data = element;
    }
}