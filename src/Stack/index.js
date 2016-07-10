export default class Stack {
    constructor() {
        this.stack = [];
    }

    isEmpty = () => this.stack.length <= 0;

    peek = () => this.stack[this.stack.length - 1];

    pop = () => this.stack.pop();

    push = element => this.stack.push(element);
}