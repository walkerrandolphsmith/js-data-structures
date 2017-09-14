import { EqualityComparators } from '@quillio/comparators';

export default class LinkedList {
    constructor(comparator = EqualityComparators.defaultComparator) {
        this.head = undefined;
        this.comparator = comparator
    }

    isEmpty = () => !this.head;

    length = () => this.head ? this.head.length() : 0;

    push(element) {
        if(this.head) {
            this.head.push(element);
        } else {
            this.head = new Node(element, this.comparator);
        }
    }

    popNode(current, data_to_pop) {
        if(current.getData() && !this.comparator(current.getData(), data_to_pop)){
            current.next = this.popNode(current.next, data_to_pop);
            return current;
        }
        return current.next;
    }

    pop(data) {
        if(!data) return true;
        if(this.contains(data)) {
            this.head = this.popNode(this.head, data);
            return true;
        }
        return false;
    }

    contains = (element) => this.head ? this.head.contains(element) : false;

    getFirst = () => this.head ? this.head.getData() : undefined;

    getLast = () => this.head ? this.head.getLast() : undefined;
}

class Node {
    constructor(data, comparator) {
        this.data = data;
        this.next = undefined;
        this.comparator = comparator;
    }

    length = () => this.next ? 1 + this.next.length() : 1;

    push(element) {
        if(this.next) {
            this.next.push(element);
        } else {
            this.next = new Node(element, this.comparator);
        }
    }

    contains = (element) =>
        this.comparator(element, this.data) ? true : this.next ? this.next.contains(element) : false;

    getData = () => this.data;

    getLast = () => this.next ? this.next.getLast() : this.data;
}