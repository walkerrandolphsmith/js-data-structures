export default class BinaryTree {
    constructor(data) {
        this.root = data instanceof Node ? data : new Node(data);
    }

    getData = () => this.root ? this.root.data : undefined;

    isLeaf = () => !(this.root.left || this.root.right);
}

export class Node {
    constructor(element) {
        this.data = element;
    }
}