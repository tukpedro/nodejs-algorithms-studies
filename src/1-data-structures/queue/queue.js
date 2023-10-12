module.exports = class Queue {
	constructor() {
		this.items = []; // array to store queue elements
	}

	// enqueue(item)
	// adds an element to the queue
	enqueue(element) {
		this.items.push(element); // adding element to the queue
	}

	// dequeue()
	// removes an element from the queue
	dequeue() {
		if (this.isEmpty()) return 'Underflow'; // if queue is empty, return error message
		return this.items.shift(); // removing element from the queue
	}

	// front()
	// returns the front element of the queue
	front() {
		if (this.isEmpty()) return 'No elements in Queue'; // if queue is empty, return error message
		return this.items[0]; // returning the front element of the queue
	}

	// isEmpty()
	// checks if the queue is empty
	isEmpty() {
		return this.items.length == 0; // returns true if queue is empty, false otherwise
	}

	// printQueue()
	// prints all the elements of the queue
	printQueue() {
		console.log(this.items.join(' '));
	}
};
