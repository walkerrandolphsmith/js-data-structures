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
}