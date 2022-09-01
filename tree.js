class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root == null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;

            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    search(value, tree = this.root) {
        if (tree == null) {
            return "El elemento no se encuentra.";
        }
        else if (value > tree.value) {
            return this.search(value, tree.right);
        }
        else if (value < tree.value) {
            return this.search(value, tree.left);
        }
        else {
            return "¡El elemento ha sido encontrado!";
        }
    }
}

const myTree = new BinarySearchTree();

console.log(myTree);

myTree.insert(10);

console.log(myTree);

myTree.insert(4);
myTree.insert(20);

console.log(myTree);

myTree.insert(2);
myTree.insert(8);
myTree.insert(17);
myTree.insert(170);
console.log(myTree);

// test search
console.log("***** search *****");
console.log(myTree.search(2));

console.log(myTree.search(200));
