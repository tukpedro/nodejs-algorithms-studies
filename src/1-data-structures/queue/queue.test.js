const Queue = require('./queue');

describe('Queue', () => {
    let queue;

    beforeEach(() => {
        queue = new Queue();
    });

    test('enqueue adds an element to the queue', () => {
        queue.enqueue(1);
        expect(queue.front()).toBe(1);
    });

    test('dequeue removes an element from the queue', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.dequeue();
        expect(queue.front()).toBe(2);
    });

    test('front returns the front element of the queue', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.front()).toBe(1);
    });

    test('isEmpty checks if the queue is empty', () => {
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);
    });

    test('printQueue prints all the elements of the queue', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.printQueue();
        expect(consoleSpy).toHaveBeenCalledWith('1 2 3');
        consoleSpy.mockRestore();
    });
});
