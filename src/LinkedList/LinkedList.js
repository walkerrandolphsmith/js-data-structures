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
            this.head.append(element);
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
    }

    length() {
        return 1;
    }
}