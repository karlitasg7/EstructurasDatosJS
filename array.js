class MyArray {

    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);

        return item;

    }

    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

}

const myArray = new MyArray();

// push elements
console.log(myArray.push("Jose"));
console.log(myArray.push("Adriana"));
console.log(myArray.push("Pedro"));
console.log(myArray.push("Juan"));

// view content of array
console.log(myArray);

// get element
console.log(myArray.get(0));

// pop (delete last element)
console.log("***** pop *****");
console.log("deleted: ", myArray.pop());

console.log(myArray);

// delete by index
console.log("***** delete *****");
console.log("Before: ", myArray);
console.log(myArray.delete(1));
console.log("After: ", myArray);
