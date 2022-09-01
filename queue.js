class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;

        return this;

    }

    dequeue() {

        if (this.length > 0) {

            if (this.length === 1) {
                this.first = null;
                this.last = null;
            } else {
                this.first = this.first.next;
            }

            this.length--;
        }

        return this;
    }

}

// test 
const myQueue = new Queue();

console.log(myQueue);

// enqueue

console.log("***** enqueue *****");
console.log(myQueue.enqueue(1));
console.log(myQueue.enqueue(2));
console.log(myQueue.enqueue(3));

// peek
console.log("***** peek *****");
console.log(myQueue.peek());

// dequeue
console.log("***** dequeue *****");
console.log(myQueue.dequeue());
