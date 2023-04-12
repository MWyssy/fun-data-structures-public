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
        test('should have a delete method which removes the element associated to the value, and returns a boolean asserting whether an element was successfully removed or not.', () => {
            //Arrange
            const testSet = createSet();
            const itemToAdd1 = 'Box 1'
            const itemToAdd2 = 'Box 2'
            const itemToAdd3 = 'Box 3'
            const itemToAdd4 = 'Box 4'
            //Act
            testSet.add(itemToAdd1).add(itemToAdd2).add(itemToAdd3).add(itemToAdd4);
            testSet.delete(itemToAdd2);
            //Assert
            expect(testSet.storage).toEqual({1: 'Box 1', 2: 'Box 3', 3: 'Box 4'});
            expect(testSet.delete(itemToAdd1)).toBe(true);
            expect(testSet.delete(itemToAdd2)).toBe(false);
        });
        test('should have a has method which returns a boolean asserting whether an element is present with the given value in the Set object or not.', () => {
            //Arrange
            const testSet = createSet();
            const itemToAdd1 = 'Box 1'
            const itemToAdd2 = 'Box 2'
            const itemToAdd3 = 'Box 3'
            const itemToAdd4 = 'Box 4'
            //Act
            testSet.add(itemToAdd1).add(itemToAdd2).add(itemToAdd3).add(itemToAdd4);
            //Assert
            expect(testSet.has(itemToAdd2)).toBe(true);
            //Act
            testSet.delete(itemToAdd1);
            //Assert
            expect(testSet.has(itemToAdd1)).toBe(false);
        });
        test('should have a size method which returns the current number of items in the set', () => {
            //Arrange
            const testSet = createSet();
            const itemToAdd1 = 'Box 1'
            const itemToAdd2 = 'Box 2'
            const itemToAdd3 = 'Box 3'
            const itemToAdd4 = 'Box 4'
            //Act
            testSet.add(itemToAdd1).add(itemToAdd2).add(itemToAdd3).add(itemToAdd4);
            //Assert
            expect(testSet.size()).toBe(4);
            //Act
            testSet.delete(itemToAdd1);
            //Assert
            expect(testSet.size()).toBe(3);
        });
        test('should have a union method which takes a set as an argument, and adds all of the new items to the existing set from the st passed as an argument', () => {
            //Arrange
            const testSet = createSet();
            const itemToAdd1 = 'Box 1'
            const itemToAdd2 = 'Box 2'
            const itemToAdd3 = 'Box 3'
            const itemToAdd4 = 'Box 4'
            const itemToAdd5 = 'Box 5'
            const itemToAdd6 = 'Box 6'
            const itemToAdd7 = 'Box 7'
            const setToMerge = {
                1: itemToAdd4,
                2: itemToAdd5,
                3: itemToAdd6,
                4: itemToAdd7
            };
            //Act
            testSet.add(itemToAdd1).add(itemToAdd2).add(itemToAdd3).add(itemToAdd4);
            //Assert
            expect(testSet.union(setToMerge)).toEqual({
                1: itemToAdd1,
                2: itemToAdd2,
                3: itemToAdd3,
                4: itemToAdd4,
                5: itemToAdd5,
                6: itemToAdd6,
                7: itemToAdd7
            });
        });
    });
});