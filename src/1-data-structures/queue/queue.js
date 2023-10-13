// Define the Queue class
module.exports = class Queue {
	/**
	 * Constructor for the Queue class.
	 */
	constructor() {
		this.items = [];
	}

	/**
	 * Adds an element to the end of the queue.
	 * @param {any} element - The element to add.
	 */
	enqueue(element) {
		this.items.push(element);
	}

	/**
	 * Removes and returns the front element of the queue.
	 * @returns {any|string} - The removed element or 'Underflow' if the queue is empty.
	 */
	dequeue() {
		if (this.isEmpty()) return 'Underflow';
		return this.items.shift();
	}

	/**
	 * Returns the front element of the queue without removing it.
	 * @returns {any|string} - The front element or 'No elements in Queue' if the queue is empty.
	 */
	front() {
		if (this.isEmpty()) return 'No elements in Queue';
		return this.items[0];
	}

	/**
	 * Checks if the queue is empty.
	 * @returns {boolean} - True if the queue is empty, false otherwise.
	 */
	isEmpty() {
		return this.items.length == 0;
	}

	/**
	 * Prints all the elements of the queue to the console.
	 */
	printQueue() {
		console.log(this.items.join(' '));
	}
};
