//METHODS

function enQueue(...items) {
    const storageQuantity = this.getQuantity();
    items.map((item, index) => {
        if (!this.isFull()) {
            return this.storage[index + (storageQuantity + 1)] = item
        } else {
            return;
        };
    });
    //Amend front and back properties
    this.front = 1;
    this.back = this.getQuantity();
};

function deQueue(numberOfItems) {
    if (!this.isEmpty()) {
        for (let i = 1; i <= numberOfItems; i++) {
            delete this.storage[this.front];
            for (let i = 2; i <= this.back; i ++) {
                this.storage[i - 1] = this.storage[i];
                delete this.storage[i];
            };
            this.back = this.getQuantity();
        };
    };
    if (this.isEmpty()) {
        this.front = 0;
    };
};

function getQuantity() {
    return Object.keys(this.storage).length
}

function isEmpty() {
    if (this.getQuantity() === 0) return true;
    return false;
}

function isFull() {
    if (this.getQuantity() === this.maxSize) return true;
    return false;
}

function peek() {
    const itemAtFront = this.storage[this.front];
    return itemAtFront;
};

//CREATE QUEUE FACTORY FUNCTION
function createQueue(maxSize = 5) {
    const queue = {
        maxSize: maxSize,
        storage: {},
        front: 0,
        back: 0
    };

    //METHODS
    queue.enQueue = enQueue;
    queue.deQueue = deQueue;
    queue.getQuantity = getQuantity;
    queue.isEmpty = isEmpty;
    queue.isFull = isFull;
    queue.peek = peek;

    return queue;
};



module.exports = createQueue;