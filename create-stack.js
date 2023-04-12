//METHODS
function pushToStack(...items) {
    items.map((item, index) => {
        if (Object.keys(this.storage).length < this.maxSize) {
            return this.storage[index + 1] = item
        } else {
            return;
        };
    });
};

function popFromStack() {
    let itemRemoved = "";
    let count = 0;
    if (Object.keys(this.storage).length > 0) {
        for (let item in this.storage) {
            if (item > count) {
                count = item
            }
    }
    itemRemoved = this.storage[count];
    console.log(this.storage[count])
    delete this.storage[count]
    return itemRemoved;
    };
};

function isEmpty() {
    if (Object.keys(this.storage).length === 0) return true;
    return false;
};

function isFull() {
    if (this.storage.hasOwnProperty(this.maxSize)) return true;
    return false;
};

function peek() {
    let count = 0;
    for (let item in this.storage) {
        if (item > count) {
            count = item
        }
    }
    return this.storage[count];
};

//CREATE STACK FACTORY FUNCTION
function createStack(maxSize) {
    const stack = {
        quantity: 0,
        storage: {},
        maxSize: maxSize || 10
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