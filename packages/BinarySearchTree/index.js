import BinaryTree, { Node } from '@quillio/binary-tree';
import { RelationalComparators } from '@quillio/comparators';

export default class BinarySearchTree extends BinaryTree {

    constructor(data, left, right, comparator = RelationalComparators.defaultComparator) {
        super(data, left, right, comparator)
    }

    add = (element) => {
        const { wasAdded, root } = this.addNode(this.root, element);
        this.root = root;
        return wasAdded;
    };

    addNode = (currentRoot, element) => {
        if(currentRoot && currentRoot.data) {
            const comparison = this.comparator(element, currentRoot.data);
            if(comparison === 0) {
                return { wasAdded: false, root: currentRoot };
            } else if(comparison < 0) {
                currentRoot.left = this.addNode(currentRoot.left, element).root;
                return { wasAdded: true, root: currentRoot };
            } else {
                currentRoot.right = this.addNode(currentRoot.right, element).root;
                return { wasAdded: true, root: currentRoot };
            }
        } else {
            return { wasAdded: true, root: new Node(element) };
        }
    };

    find = (element) => this.findNode(this.root, element);

    findNode = (currentRoot, element) => {
        if(currentRoot && currentRoot.data) {
            const comparison = this.comparator(element, currentRoot.data);
            if(comparison === 0) {
                return currentRoot.data;
            } else if(comparison < 0) {
                return this.findNode(currentRoot.left, element);
            } else {
                return this.findNode(currentRoot.right, element);
            }
        } else {
            return undefined;
        }
    };

    findLargestChild = (parent) => {
        if(parent.right.right) {
            return this.findLargestChild(parent.right);
        } else {
            const max = parent.right.data;
            parent.right = parent.right.left;
            return max;
        }
    };

    remove = (element) => {
        const { root, isRemoved } = this.removeNode(this.root, element);
        this.root = root;
        return isRemoved;
    };

    removeNode = (currentRoot, element) => {
        let nodeToReturn = currentRoot;
        let isRemoved = false;
        if(currentRoot) {
            const comparison = this.comparator(element, currentRoot.data);
            if(comparison < 0) {
                const result = this.removeNode(currentRoot.left, element);
                currentRoot.left = result.root;
                isRemoved = result.isRemoved;
            } else if(comparison > 0) {
                 const result = this.removeNode(currentRoot.right, element);
                currentRoot.right = result.root;
                isRemoved = result.isRemoved;
            } else {
                isRemoved = true;
                if(!currentRoot.left) {
                    nodeToReturn = currentRoot.right;
                } else if(!currentRoot.right) {
                    nodeToReturn = currentRoot.left;
                } else {
                    if(!currentRoot.left.right) {
                        currentRoot.data = currentRoot.left.data;
                        currentRoot.left = currentRoot.left.left;
                    } else {
                        currentRoot.data = this.findLargestChild(currentRoot.left);
                    }
                }
            }
        }
        return {root: nodeToReturn, isRemoved: isRemoved};
    };
}