module.exports = class Stack {
	constructor() {
		this.items = []; // The elements in the stack
	}

	// Add a new element to the top of the stack
	push(element) {
		this.items.push(element);
	}

	// Remove the top element from the stack and return it
    pop() {
        // Return 'Underflow' if the stack is empty
		if (this.isEmpty()) {
			return 'Underflow';
		}
		return this.items.pop();
	}

	// Return the top element of the stack
	peek() {
		if (this.isEmpty()) {
			return 'No elements in Stack';
		}
		return this.items[this.items.length - 1];
	}

	// Return true if the stack is empty, false otherwise
	isEmpty() {
		return this.items.length === 0;
	}

	// Return the number of elements in the stack
	printStack() {
		return this.items.join(',');
	}
};
