class Stack {
    constructor() {
        this.stackList = [];
    }

    getStackList() {
        return this.stackList;
    }

    printStack() {
        for (let i = this.stackList.length - 1; i >= 0; i--) {
            console.log(this.stackList[i]);
        }
    }

    isEmpty() {
        return this.stackList.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.stackList[this.stackList.length - 1];
        }
    }

    size() {
        return this.stackList.length;
    }

    push(value) {
        this.stackList.push(value);
    }

    pop() {
        if (this.stackList.length === 0) return null;
        return this.stackList.pop();
    }

}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
let poppedValue = myStack.pop();
console.log('popped value', poppedValue)
myStack.printStack();