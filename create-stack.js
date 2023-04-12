//METHODS
function push(...items) {
    items.map((item, index) => {
        if (Object.keys(this.storage).length < this.maxSize) {
            this.storage[index + 1] = item
            this.quantity++;
            return this
        } else {
            return;
        };
    });
    
};

function pop() {
    let itemRemoved = "";
    if (Object.keys(this.storage).length > 0) {      
    itemRemoved = this.storage[Object.keys(this.storage).length];
    delete this.storage[Object.keys(this.storage).length]
    this.quantity--;
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
    stack.push = push;
    stack.pop = pop;
    stack.isEmpty = isEmpty;
    stack.isFull = isFull;
    stack.peek = peek;

    return stack;
};


module.exports = createStack;