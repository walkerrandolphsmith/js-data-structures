import BinaryTree, { Node } from './../BinaryTree';

const defaultComparator = (e, d) => {
    if(e === d) {
        return 0;
    } else if(e < d) {
        return -1;
    } else {
        return 1;
    }
};

export default class BinarySearchTree extends BinaryTree {

    add = (element, comparator) => {
        const { wasAdded, root } = this.addNode(this.root, element, comparator);
        this.root = root;
        return wasAdded;
    };

    addNode = (currentRoot, element, comparator = defaultComparator) => {
        if(currentRoot.data) {
            const comparison = comparator(element, currentRoot.data);
            if(comparison === 0) {
                return { wasAdded: false, root: currentRoot };
            } else if(comparison < 0) {
                currentRoot.left = this.addNode(currentRoot.left, element, comparator);
                return { wasAdded: false, root: currentRoot };
            } else {
                currentRoot.right = this.addNode(currentRoot.right, element, comparator);
                return { wasAdded: false, root: currentRoot };
            }
        } else {
            return { wasAdded: true, root: new Node(element) };
        }
    }
}