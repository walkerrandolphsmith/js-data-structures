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
        if(!this.head) {
            this.head = new Node(element);
        } else {
            this.head.push(element);
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
        if(!this.next) {
            this.next = new Node(element);
        } else {
            this.next.push(element);
        }
    }

    getData() {
        return this.data;
    }

    getLast() {
        if(!this.next) {
            return this.data;
        } else {
            return this.next.getLast();
        }
    }
}