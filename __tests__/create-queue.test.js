const createQueue = require('../create-queue.js');

describe('createQueue tests', () => {
    describe('Property Creation tests', () => {
        test('should have a storage property, which is initialised as an empty array, and holds the queued items', () => {
            //Arrange
            const testQueue = createQueue();
            //Act
            //Assert
            expect(testQueue.storage).toEqual({});
        });
        test('should have a front property, which is initialised as 0, and changes to the key of the front item in the queue', () => {
            //Arrange
            const testQueue = createQueue();
            const item1 = 'Box 1';
            const item2 = 'Box 2';
            //Assert
            expect(testQueue.front).toBe(0);
            //Act
            testQueue.enQueue(item1, item2);
            //Assert
            expect(testQueue.front).toBe(1);
            //Act
            testQueue.deQueue(2);
            //Assert
            expect(testQueue.front).toBe(0);
        });  
        test('should have a back property, which is initialised as 0, and changes to the key of the back item in the queue', () => {
            //Arrange
            const testQueue = createQueue();
            const item1 = 'Box 1';
            const item2 = 'Box 2';
            //Act
            //Assert
            expect(testQueue.back).toEqual(0);
            //Act
            testQueue.enQueue(item1, item2);
            //Assert
            expect(testQueue.back).toBe(2);
            //Act
            testQueue.deQueue(2);
            //Assert
            expect(testQueue.back).toBe(0);
        });    
    });
    describe('Method Creation tests', () => {
        test('should have an enQueue method, that adds items to the **back** of the queue.  Items can only be added if the queue isn\'t full.', () => {
            //Arrange
            const testQueue = createQueue(5);
            const item1 = 'Box 1';
            const item2 = 'Box 2';
            const item3 = 'Box 3';
            const item4 = 'Box 4';
            const item5 = 'Box 5';
            const item6 = 'Box 6';
            //Act
            testQueue.enQueue(item1, item2, item3, item4, item5, item6);
            //Assert
            expect(testQueue.storage).toEqual({1: item1, 2: item2, 3: item3, 4: item4, 5: item5});
        }); 
        test('should have a deQueue method that removes items from the **front** of the queue, provided the queue isn\'t already empty.', () => {
            //Arrange
            const testQueue = createQueue(5);
            const item1 = 'Box 1';
            const item2 = 'Box 2';
            const item3 = 'Box 3';
            //Act
            testQueue.enQueue(item1, item2, item3)
            testQueue.deQueue(2);
            //Assert
            expect(testQueue.storage).toEqual({1: item3});
        });   
        test('should have a getQuantity method that returns the number of items in the queue.', () => {
            //Arrange
            const testQueue = createQueue(5);
            const item1 = 'Box 1';
            const item2 = 'Box 2';
            const item3 = 'Box 3';
            //Act
            testQueue.enQueue(item1, item2, item3)
            //Assert
            expect(testQueue.getQuantity()).toEqual(3);
        });   
        test('should have an isEmpty method that will return a boolean indicating if the queue is empty or not.', () => {
            //Arrange
            const testQueue = createQueue();
            const item1 = 'Box 1';
            const item2 = 'Box 2';
            const item3 = 'Box 3';
            //Act
            testQueue.enQueue(item1, item2, item3);
            //Assert
            expect(testQueue.isEmpty()).toEqual(false);
            //Act
            testQueue.deQueue(3);
            //Assert
            expect(testQueue.isEmpty()).toEqual(true);
        });  
        test('should have an isFull method that will return a boolean indicating if the queue is full or not.', () => {
            //Arrange
            const testQueue = createQueue(3);
            const item1 = 'Box 1';
            const item2 = 'Box 2';
            const item3 = 'Box 3';
            //Act
            testQueue.enQueue(item1, item2, item3);
            //Assert
            expect(testQueue.isFull()).toEqual(true);
            //Act
            testQueue.deQueue(1);
            //Assert
            expect(testQueue.isFull()).toEqual(false);
        });  
        test('should have a peek method that returns the element at the **front** of the queue (without removing it)', () => {
            //Arrange
            const testQueue = createQueue(3);
            const item1 = 'Box 1';
            const item2 = 'Box 2';
            const item3 = 'Box 3';
            //Act
            testQueue.enQueue(item1, item2, item3);
            //Assert
            expect(testQueue.peek()).toEqual('Box 1');
            //Act
            testQueue.deQueue(1);
            //Assert
            expect(testQueue.peek()).toEqual('Box 2');
        }); 
    });
  });