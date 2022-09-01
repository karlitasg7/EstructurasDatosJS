class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyDoubleLinkedList {

    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null,
        }
        this.tail = this.head;

        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;

        return this;
    }

}

let myLinkedList = new MyDoubleLinkedList(1);

console.log(myLinkedList);

// test the append
console.log('***** ***** append ***** *****');
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(3));
