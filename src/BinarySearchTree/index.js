import BinaryTree, { Node } from './../BinaryTree';

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

export default class BinarySearchTree extends BinaryTree {
    add = (element, comparator) => {
        const { wasAdded, root } = this.addNode(this.root, element, comparator);
        this.root = root;
        return wasAdded;
    };

    addNode = (currentRoot, element, comparator = defaultComparator) => {
        if(currentRoot && currentRoot.data) {
            const comparison = comparator(element, currentRoot.data);
            if(comparison === 0) {
                return { wasAdded: false, root: currentRoot };
            } else if(comparison < 0) {
                currentRoot.left = this.addNode(currentRoot.left, element, comparator).root;
                return { wasAdded: true, root: currentRoot };
            } else {
                currentRoot.right = this.addNode(currentRoot.right, element, comparator).root;
                return { wasAdded: true, root: currentRoot };
            }
        } else {
            return { wasAdded: true, root: new Node(element) };
        }
    }
}