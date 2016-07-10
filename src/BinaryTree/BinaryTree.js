export default class BinaryTree {
    constructor(data) {
        this.root = data instanceof Node ? data : new Node(data);
    }

    getData = () => this.root ? this.root.data : undefined;
}

export class Node {
    constructor(element) {
        this.data = element;
    }
}