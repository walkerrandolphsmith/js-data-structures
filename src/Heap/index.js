import { defaultComparator } from './../BinaryTree';

export default class Heap {
    constructor(capacity) {
        this.capacity = typeof capacity === 'number' ? capacity : 0;
        this.heap = new Array(this.capacity);
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
                let parent = (child - 1) / 2;
                const comparison = comparator(this.heap[parent], this.heap[child]);
                while(parent >= 0 && comparison === 1) {
                    this.swap(parent, child);
                    child = parent;
                    parent = (child - 1) / 2;
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
        }
        return root;
    };
}