const createSet = require('../create-set');

describe('createSet tests', () => {
    describe('Property setup tests', () => {
        test('should have a storage property initialised as an empty object', () => {
            //Arrange
            const testSet = createSet();
            //Act
            //Assert
            expect(testSet.storage).toEqual({});
        });
        test('should not contain any non-unique values', () => {
            //Arrange
            const testSet = createSet();
            const itemToAdd1 = 'Box 1'
            const itemToAdd2 = 'Box 2'
            const itemToAdd3 = 'Box 3'
            //Act
            //Assert
            expect(testSet.storage).toEqual({});
            //Act
            testSet.add(itemToAdd1).add(itemToAdd2).add(itemToAdd1)
            //Assert
            expect(testSet.storage).toEqual({1: 'Box 1', 2: 'Box 2'});
        });
    });
    describe('Method setup tests', () => {
        test('should have an add method that Inserts a new element with a specified value in to a Set object, if there isn\'t an element with the same value already in the Set ', () => {
            //Arrange
            const testSet = createSet();
            const itemToAdd1 = 'Box 1'
            const itemToAdd2 = 'Box 2'
            const itemToAdd3 = 'Box 3'
            //Act
            testSet.add(itemToAdd1);
            //Assert
            expect(testSet.storage).toEqual({1: 'Box 1'});
            //Act
            testSet.add(itemToAdd2).add(itemToAdd3);
            //Assert
            expect(testSet.storage).toEqual({1: 'Box 1', 2: 'Box 2', 3: 'Box 3'});
        });
        test('should have a clear method which removes all of the items from the set', () => {
            //Arrange
            const testSet = createSet();
            const itemToAdd1 = 'Box 1'
            const itemToAdd2 = 'Box 2'
            const itemToAdd3 = 'Box 3'
            //Act
            testSet.add(itemToAdd1).add(itemToAdd2).add(itemToAdd3);
            testSet.clear();
            //Assert
            expect(testSet.storage).toEqual({});
        });
    });
});