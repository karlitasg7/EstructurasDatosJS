class HashTable {

    constructor(size) {
        this.data = new Array(size);
    }

    hasMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const address = this.hasMethod(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        // use push to prevent colisitions
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        const address = this.hasMethod(key);
        const currentBucket = this.data[address];

        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
}

const myHashTable = new HashTable(50);

console.log(myHashTable);

// set values
console.log(myHashTable.set("Diego", 1990));
console.log(myHashTable.set("Mariana", 1998)); // with this generate a collision, the data is added at the same array of the last record
console.log(myHashTable.set("Alejandra", 2000));

// get values
console.log("***** GET *****")
console.log(myHashTable.get("Alejandra"));
console.log(myHashTable.get("Diego"));

console.log(myHashTable.get("other")); // doesn't exists
