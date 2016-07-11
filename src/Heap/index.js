export default class Heap {
    constructor(capacity) {
        this.capacity = typeof capacity === 'number' ? capacity : 0;
        this.heap = new Array(this.capacity);
        this.nextEmpty = 0;
    }

    isEmpty = () => this.heap.length <= 0;

    insert = (element) => {
        if(this.nextEmpty >= this.capacity) {
            return false;
        } else {
            this.heap[this.nextEmpty] = element;
            return true;
        }
    };
}