import BinaryTree, { Node } from '@quillio/binary-tree';

export default class HuffmanTree extends BinaryTree {
    constructor(data) {
        super(data, null, null, null);
    }

    setLeftSubtree = (left) => {
        if(this.getData() && left instanceof HuffmanTree) {
            this.root.left = left.root;
        }
    };

    setRightSubtree = (right) => {
        if(this.getData() && right instanceof HuffmanTree) {
            this.root.right = right.root;
        }
    };

    getLeftSubtree = () => {
        const root = this.root.data && this.root.left ? this.root.left : undefined;
        return new HuffmanTree(root);
    };

    getRightSubtree = () => {
        const root = this.root.data && this.root.right ? this.root.right : undefined;
        return new HuffmanTree(root);
    };

    add = (element, code) => {
        if(code.length === 0){
            if(this.isEmpty()) {
                this.root = new Node(element);
            }
        }else {
            if(this.isEmpty()) {
                this.root = new Node('*');
            }
            let tempTree;
            const currentChar = code[0];
            if(currentChar === '0') {
                tempTree = this.getLeftSubtree();
                tempTree.add(element, code.substring(1));
                this.setLeftSubtree(tempTree);
            } else if(currentChar === '1') {
                tempTree = this.getRightSubtree();
                tempTree.add(element, code.substring(1));
                this.setRightSubtree(tempTree);
            }
        }
    };

    decode = (code) => {
        let remainingCode = code;
        let decoded = '';
        while(remainingCode.length > 0) {
            let result = this.decodeOne(remainingCode);
            decoded += result.substring(0, 1);
            remainingCode = result.substring(1);
        }
        return decoded;
    };

    decodeOne = (code) => {
        if(this.isLeaf()) {
            return this.root.data + code;
        } else {
            if(code.length === 0) {
                return '?'; //throw new Error('Unknown code')?
            }
            let tempTree;
            const currentChar = code[0];
            if(currentChar === '0') {
                tempTree = this.getLeftSubtree();
                return tempTree.decodeOne(code.substring(1));
            } else if(currentChar === '1') {
                tempTree = this.getRightSubtree();
                return tempTree.decodeOne(code.substring(1));
            }
        }
    };
}