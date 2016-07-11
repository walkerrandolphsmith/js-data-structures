export default class Heap {
    constructor(capacity) {
        const size = typeof capacity === 'number' ? capacity : 0;
        this.heap = new Array(size);
        this.nextEmpty = 0;
    }
    
    isEmpty = () => this.heap.length <= 0;
}