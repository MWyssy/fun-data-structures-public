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
    if (Object.keys(this.storage).length > 0) {      
    itemRemoved = this.storage[Object.keys(this.storage).length];
    delete this.storage[Object.keys(this.storage).length]
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
function createStack(maxSize = 10) {
    const stack = {
        quantity: 0,
        storage: {},
        maxSize: maxSize
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