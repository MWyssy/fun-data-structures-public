//METHODS
function size() {
    return Object.keys(this.storage).length;
}

function add(itemToAdd) {
    if (!this.has(itemToAdd)) {
        this.storage[this.size() + 1] = itemToAdd;
    }
    return this;
};

function clear() {
    for (let item in this.storage) {
        delete this.storage[item];
    }
    return this;
};

function deleteItem(itemToDelete) {
    const currentQuantity = this.size()
    const keyToDelete = Object.keys(this.storage).filter((item) => this.storage[item] === itemToDelete)[0];
    const isItemPresent = this.has(itemToDelete);

    delete this.storage[keyToDelete];

    for (let i = (Number(keyToDelete) + 1); i <= currentQuantity; i++) {
        console.log(this.storage[i - 1], this.storage[i])
        this.storage[i - 1] = this.storage[i];
        delete this.storage[i];
    };

    if (isItemPresent) return true;
    return false;
};

function has(item) {
    if (Object.values(this.storage).includes(item)) return true;
    return false;
};

function union(setToMerge) {
    for (let item in setToMerge) {
        this.add(setToMerge[item])
    }
    return this.storage;
};


//FACTORY FUNCTION
function createSet() {
    const set = {
       storage: {}
    };

    //Adding the Methods
    set.add = add;
    set.size = size;
    set.clear = clear;
    set.delete = deleteItem;
    set.has = has;
    set.union = union;

    return set;
};

module.exports = createSet;