export default class Stack {
    constructor() {
        this.stack = [];
    }

    isEmpty = () => this.stack.length <= 0
}