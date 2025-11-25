class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (value === current.value) return undefined;

            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }

                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }

                current = current.right;
            }
        }
    };

    search (value) {
        if (!this.root) return false;
    
        let current = this.root;

        while (current) {
            if (value === current.value) return true;

            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return false;
    }

    dfsInOrder() {
        let results = [];

        function traverse(node) {
            if (node.left) traverse(node.left);

            results.push(node.value);

            if (node.right) traverse(node.right);
        }

        if (this.root) traverse(this.root);

        return results;
    }

    bfs() {
        let node = this.root;
        const data = [];
        const queue = [];

        if (node) queue.push(node);

        while (queue.length > 0) {
            node = queue.shift();
            data.push(node.value);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data;
    }
}