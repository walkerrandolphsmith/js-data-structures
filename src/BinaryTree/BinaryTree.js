export default class BinaryTree {
    constructor(data, left) {
        this.root = data instanceof Node ? data : new Node(data);
        this.root.left = left instanceof BinaryTree ? left.root : undefined;
    }

    getData = () => this.root ? this.root.data : undefined;

    isLeaf = () => !(this.root.left || this.root.right);
}

export class Node {
    constructor(element) {
        this.data = element;
    }
}