export default class BinaryTree {
    constructor(data, left, right) {
        this.root = data instanceof Node ? data : new Node(data);
        this.root.left = left instanceof BinaryTree ? left.root : undefined;
        this.root.right = right instanceof BinaryTree ? right.root : undefined;
    }

    getData = () => this.root.data;

    isLeaf = () => !(this.root.left || this.root.right);

    getLeftSubtree = () => this.root && this.root.left ? new BinaryTree(this.root.left) : undefined;

    getRightSubtree = () => this.root && this.root.right ? new BinaryTree(this.root.right) : undefined;
}

export class Node {
    constructor(element) {
        this.data = element;
        this.left = undefined;
        this.right = undefined;
    }
}