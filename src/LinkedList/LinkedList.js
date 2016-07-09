export default class LinkedList {
    constructor() {
        this.head = undefined;
    }

    isEmpty() {
        return !this.head;
    }

    length() {
        return this.head ? this.head.length() : 0;
    }

    push(element) {
        if(this.head) {
            this.head.push(element);
        } else {
            this.head = new Node(element);
        }
    }

    getFirst() {
        return this.head ? this.head.getData() : undefined;
    }

    getLast() {
        return this.head ? this.head.getLast() : undefined;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = undefined;
        this.previous = undefined;
    }

    length() {
        return this.next ? 1 + this.next.length() : 1;
    }

    push(element) {
        if(this.next) {
            this.next.push(element);
        } else {
            this.next = new Node(element);
        }
    }

    getData() {
        return this.data;
    }

    getLast() {
        return this.next ? this.next.getLast() : this.data;
    }
}