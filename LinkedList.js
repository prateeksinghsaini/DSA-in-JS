class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(value) {
        const node = new Node(value);

        node.next = this.head;
        this.head = node;
        this.size++;
    }

    insertLast(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    removeFirst() {
        if (!this.head) {
            return null; 
        }

        this.head = this.head.next;
        this.size--;
    }

    removeAt(index) {
        if (index > this.size || index < 0) {
            return null;
        }

        if (index === 0) {
            this.removeFirst();
            return;
        } else {
            let current = this.head;
            let previous;
            let count = 0;

            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }

            previous.next = current.next

        }
    }

    printlistData() {
        let current = this.head;
        const values = [];

        while (current) {
            values.push(current.value);
            current = current.next;
        }

        console.log(values);
    }
}