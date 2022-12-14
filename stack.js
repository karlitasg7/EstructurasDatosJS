class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }

        this.length++;

        return this;

    }

    pop() {

        if (this.length > 0) {

            if (this.length === 1) {
                this.bottom = null;
            }

            this.top = this.top.next;
            this.length--;
        }

        return this;
    }
}


// test

const myStack = new Stack();

console.log(myStack);

// push
console.log("***** ***** push ***** *****");
console.log(myStack.push(1));
console.log(myStack.push(3));
console.log(myStack.push(5));

// peek
console.log("***** ***** peek ***** *****");
console.log(myStack.peek());

console.log(myStack);

// pop
console.log("***** ***** pop ***** *****");
console.log(myStack.pop());
