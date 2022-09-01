// 1 --> 2 --> 3 --> 4 --> 5 --> null

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList {

    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;

        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;

        return this;
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;

        return this;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const firstPointer = this.getByIndex(index - 1);
        const holdingPointer = firstPointer.next;

        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this.length++;

        return this;

    }

    getByIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;

    }

}

let myLinkedList = new MySinglyLinkedList(1);

console.log(myLinkedList);

// test the append
console.log('***** ***** append ***** *****');
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(3));

// test the preprend
console.log('***** ***** preappend ***** *****');
console.log(myLinkedList.prepend(0));

// test insert
console.log('***** ***** insert ***** *****');
console.log(myLinkedList.insert(1, 5));
