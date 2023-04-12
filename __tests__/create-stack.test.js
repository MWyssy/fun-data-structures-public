const createStack = require('../create-stack');

describe('createStack tests', () => {
    describe('Object Properties', () => {
        test('should have a quantity property intially set to 0, but changes based on the number of items in the storage', () => {
          //Arrange
          const testStack = createStack()
          const itemToAdd1 = 'Box 1';
          const itemToAdd2 = 'Box 2';
          const itemToAdd3 = 'Box 3';
          //Act
          
          //Assert
          expect(testStack.quantity).toBe(0);
          //Act
          testStack.push(itemToAdd1, itemToAdd2, itemToAdd3)
          //Assert
          expect(testStack.quantity).toBe(3);
          //Act
          testStack.pop()
          //Assert
          expect(testStack.quantity).toBe(2);
        });
        test('should have a storage property intially set to an empty array', () => {
            //Arrange
            const testStack = createStack()
            //Act
            
            //Assert
            expect(testStack.storage).toEqual({});
          });
          test('should have a maxSize property which can be set as an argument, or has a default value if no argument is passed', () => {
            //Arrange
            const testStack1 = createStack(5);
            const testStack2 = createStack();
            //Act
            
            //Assert
            expect(testStack1.maxSize).toBe(5);
            expect(testStack2.maxSize).toBe(10)
          });
    });
    describe('Objeck Methods', () => {
        test('should have a push method which adds an item to the stack storage', () => {
            //Arrange
            const testStack = createStack()
            const itemToAdd = 'Box 1'
            //Act
            testStack.push(itemToAdd);
            //Assert
            expect(testStack.storage).toEqual({1: itemToAdd});
          });
          test('should have a push method which adds any number of items to the stack storage, provided it doesn\'t exceed the maxSize', () => {
            //Arrange
            const testStack = createStack(5)
            const itemToAdd1 = 'Box 1';
            const itemToAdd2 = 'Box 2';
            const itemToAdd3 = 'Box 3';
            const itemToAdd4 = 'Box 4';
            const itemToAdd5 = 'Box 5';
            const itemToAdd6 = 'Box 6';
            //Act
            testStack.push(itemToAdd1, itemToAdd2, itemToAdd3, itemToAdd4, itemToAdd5, itemToAdd6);
            //Assert
            expect(testStack.storage).toEqual({1: itemToAdd1, 2: itemToAdd2, 3: itemToAdd3, 4: itemToAdd4, 5: itemToAdd5});
          });
          test('should have a pop method which removes the last item from the stack storage, and returns that item, provided the stack is not empty', () => {
            //Arrange
            const testStack = createStack()
            const itemToAdd1 = 'Box 1';
            const itemToAdd2 = 'Box 2';
            const itemToAdd3 = 'Box 3';
            const itemToAdd4 = 'Box 4';
            //Act
            testStack.push(itemToAdd1, itemToAdd2, itemToAdd3, itemToAdd4);
            //Assert
            expect(testStack.pop()).toEqual(itemToAdd4);
            expect(testStack.storage).toEqual({1: itemToAdd1, 2: itemToAdd2, 3: itemToAdd3});
          });
          test('should have an isEmpty method which returns a boolean. Should return `true` when the stack storage is empty and the current quantity is 0.', () => {
            //Arrange
            const testStack = createStack()
            const itemToAdd1 = 'Box 1';
            //Act
            testStack.push(itemToAdd1);
            //Assert
            expect(testStack.isEmpty()).toBe(false);
            //Act
            testStack.pop();
            //Assert
            expect(testStack.isEmpty()).toBe(true);
          });
          test('should have an isFull method, which returns a boolean. Should return `true` when the storage is full', () => {
            //Arrange
            const testStack = createStack(3)
            const itemToAdd1 = 'Box 1';
            const itemToAdd2 = 'Box 2';
            const itemToAdd3 = 'Box 3';
            //Act
            testStack.push(itemToAdd1, itemToAdd2, itemToAdd3);
            //Assert
            expect(testStack.isFull()).toBe(true);
            //Act
            testStack.pop();
            //Assert
            expect(testStack.isEmpty()).toBe(false);
          });
          test('should have a peek method that will show the item at the top of the stack storage.', () => {
            //Arrange
            const testStack = createStack(3)
            const itemToAdd1 = 'Box 1';
            const itemToAdd2 = 'Box 2';
            const itemToAdd3 = 'Box 3';
            //Act
            testStack.push(itemToAdd1, itemToAdd2, itemToAdd3);
            //Assert
            expect(testStack.peek()).toBe(itemToAdd3);
            //Act
            testStack.pop();
            //Assert
            expect(testStack.peek()).toBe(itemToAdd2);
          });
    });
  });