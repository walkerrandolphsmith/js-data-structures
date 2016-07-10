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

    popNode(current, data_to_pop, comparator = (nd, d) => nd === d) {
        if(current) {
            if(comparator(current.getData(), data_to_pop)) {
                return current.getNext();
            } else {
                current.setNext(this.popNode(current.getNext(), data_to_pop, comparator));
                return current;
            }
        } else {
            return undefined;
        }
    }

    pop(data, comparator) {
        if(this.contains(data, comparator)) {
            this.head = this.popNode(this.head, data, comparator);
            return true;
        }
        return false;
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

    getNext = () => this.next;

    setNext(newNext) {
        this.next = newNext;
    }

    contains = (element, comparator = (e, d) => e === d) =>
        comparator(element, this.data) ? true : this.next ? this.next.contains(element, comparator) : false;

    getData = () => this.data;

    getLast = () => this.next ? this.next.getLast() : this.data;
}