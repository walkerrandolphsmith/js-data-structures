import BinaryTree, { Node } from './../BinaryTree';
import { defaultComparator } from './../Comparators/RelationalComparators';

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
    };

    find = (element, comparator) => this.findNode(this.root, element, comparator);

    findNode = (currentRoot, element, comparator = defaultComparator) => {
        if(currentRoot && currentRoot.data) {
            const comparison = comparator(element, currentRoot.data);
            if(comparison === 0) {
                return currentRoot.data;
            } else if(comparison < 0) {
                return this.findNode(currentRoot.left, element, comparator);
            } else {
                return this.findNode(currentRoot.right, element, comparator);
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

    remove = (element, comparator) => {
        const { root, isRemoved } = this.removeNode(this.root, element, comparator);
        this.root = root;
        return isRemoved;
    };

    removeNode = (currentRoot, element, comparator) => {
        let nodeToReturn = currentRoot;
        let isRemoved = false;
        if(currentRoot) {
            const comparison = comparator(element, currentRoot.data);
            if(comparison < 0) {
                const result = this.removeNode(currentRoot.left, element, comparator);
                currentRoot.left = result.root;
                isRemoved = result.isRemoved;
            } else if(comparison > 0) {
                 const result = this.removeNode(currentRoot.right, element, comparator);
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