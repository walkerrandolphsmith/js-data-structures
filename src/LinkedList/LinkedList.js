export default class LinkedList {
    constructor() {
        this.head = undefined;
    }

    isEmpty = () => !this.head;

    length = () => this.head ? this.head.length() : 0;

    push(element) {
        if(this.head) {
            this.head.push(element);
        } else {
            this.head = new Node(element);
        }
    }

    contains = (element, comparator) => this.head ? this.head.contains(element, comparator) : false;

    getFirst = () => this.head ? this.head.getData() : undefined;

    getLast = () => this.head ? this.head.getLast() : undefined;
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = undefined;
        this.previous = undefined;
    }

    length = () => this.next ? 1 + this.next.length() : 1;

    push(element) {
        if(this.next) {
            this.next.push(element);
        } else {
            this.next = new Node(element);
        }
    }

    contains = (element, comparator = (e, d) => e === d) =>
        comparator(element, this.data) ? true : this.next ? this.next.contains(element, comparator) : false;

    getData = () => this.data;

    getLast = () => this.next ? this.next.getLast() : this.data;
}