export const defaultComparator = (e, d) => e === d ? 0 : -1;

export const compareOnObjectProperty = (prop) => {
    return (e, d) => {
        if(e[prop] === d[prop]) {
            return 0;
        } else if(e[prop] < d[prop]) {
            return -1;
        } else {
            return 1;
        }
    };
};

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