import { defaultComparator } from './../BinaryTree';

export default class Heap {
    constructor(capacity) {
        this.capacity = typeof capacity === 'number' ? capacity : 0;
        this.heap = [];
        for(var i = 0; i < this.capacity; i++) {
            this.heap[i] = undefined;
        }
        this.nextEmpty = 0;
    }

    isEmpty = () => this.nextEmpty === 0;

    insert = (element, comparator = defaultComparator) => {
        if(this.nextEmpty >= this.capacity) {
            return false;
        } else {
            this.heap[this.nextEmpty] = element;
            let child = this.nextEmpty++;
            if(child > 0) {
                let parent = Math.floor((child - 1) / 2);
                const comparison = comparator(this.heap[parent], this.heap[child]);
                while(parent >= 0 && comparison === 1) {
                    this.swap(parent, child);
                    child = parent;
                    parent = Math.floor((child - 1) / 2);
                }
            }
            return true;
        }
    };

    swap = (parent, child) => {
        const temp = this.heap[parent];
        this.heap[parent] = this.heap[child];
        this.heap[child] = temp;
    };

    remove = (comparator = defaultComparator) => {
        const root = this.heap[0];
        if(!this.isEmpty()) {
            this.heap[0] = this.heap[--this.nextEmpty];
            let parent = 0;

            while(true) {
                let leftChild = 2 * parent + 1;
                let rightChild = leftChild + 1;
                if(leftChild >= this.nextEmpty) {
                    break;
                }
                if(rightChild >= this.nextEmpty) {
                    let isParentLessThanLeftChild = comparator(this.heap[parent], this.heap[leftChild]) === -1;
                    if(isParentLessThanLeftChild) {
                        break;
                    } else  {
                        this.swap(parent, leftChild);
                        parent = leftChild;
                    }
                } else {
                    let isLeftGreater = comparator(this.heap[leftChild], this.heap[rightChild]) === 1;
                    let minChild = isLeftGreater ? rightChild : leftChild;
                    this.swap(parent, minChild);
                    parent = minChild;
                }
            }
            this.heap[this.nextEmpty] = undefined;
        }
        return root;
    };
}