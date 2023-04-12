//METHODS
function pushToStack(...items) {
    items.map((item) => {
        if (this.storage.length < this.maxSize) {
            return this.storage.push(item)
        } else {
            return;
        };
    });
}

function popFromStack() {
    let itemRemoved = [];
    if (this.storage.length > 0) {
        itemRemoved = this.storage.pop()
    }
    return itemRemoved;
}

function isEmpty() {
    if (this.storage.length === 0) return true;
    return false;
}

function isFull() {
    if (this.storage.length === this.maxSize) return true;
    return false;
}

function peek() {
    return this.storage[this.storage.length - 1];
}

//CREATE STACK FACTORY FUNCTION
function createStack(maxSize) {
    const stack = {
        quantity: 0,
        storage: [],
        maxSize: 10
    };
    //set maxSize based on parameter
    if (maxSize !== undefined) {
        stack.maxSize = maxSize;
    };
    //Methods
    stack.pushToStack = pushToStack;
    stack.popFromStack = popFromStack;
    stack.isEmpty = isEmpty;
    stack.isFull = isFull;
    stack.peek = peek;

    return stack;
};


module.exports = createStack;