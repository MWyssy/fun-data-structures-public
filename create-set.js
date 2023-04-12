//METHODS
function getQuantity() {
    return Object.keys(this.storage).length;
}

function add(itemToAdd) {
    if (!Object.values(this.storage).includes(itemToAdd)) {
        this.storage[this.getQuantity() + 1] = itemToAdd;
    }
    return this;
};

function clear() {
    for (let item in this.storage) {
        delete this.storage[item];
    }
    return this;
}


//FACTORY FUNCTION
function createSet() {
    const set = {
       storage: {}
    };

    //Adding the Methods
    set.add = add;
    set.getQuantity = getQuantity;
    set.clear = clear;

    return set;
};

module.exports = createSet;