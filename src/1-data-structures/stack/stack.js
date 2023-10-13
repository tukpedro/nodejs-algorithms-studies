module.exports = class Stack {
	/**
	 * Constructor for the Stack class.
	 */
	constructor() {
		this.items = []; // The elements in the stack
	}

	/**
	 * Adds a new number to the top of the stack.
	 * @param {any} element - The element to add.
	 */
	pushNumber(element) {
		return typeof element === 'number' ? this.items.push(element) : 'Invalid input';
	}

	/**
	 * Adds a new element to the top of the stack.
	 * @param {any} element - The element to add.
	 */
	push(element) {
		return this.items.push(element);
	}

	/**
	 * Removes the top element from the stack and returns it.
	 * @returns {any|string} - The removed element or 'Underflow' if the stack is empty.
	 */
	pop() {
		if (this.isEmpty()) {
			return 'Underflow';
		}
		return this.items.pop();
	}

	/**
	 * Returns the top element of the stack without removing it.
	 * @returns {any|string} - The top element or 'No elements in Stack' if the stack is empty.
	 */
	peek() {
		if (this.isEmpty()) {
			return 'No elements in Stack';
		}
		return this.items[this.items.length - 1];
	}

	/**
	 * Checks if the stack is empty.
	 * @returns {boolean} - True if the stack is empty, false otherwise.
	 */
	isEmpty() {
		return this.items.length === 0;
	}

	/**
	 * Returns a string representation of the stack.
	 * @returns {string} - The elements of the stack separated by commas.
	 */
	printStack() {
		return this.items.length > 0 ? this.items.join(',') : 0;
	}

	/**
	 * Returns the number of elements in the stack.
	 * @returns {number} - The number of elements in the stack.
	 */
	size() {
		return this.items.length;
	}

	/**
	 * Removes all elements from the stack.
	 */
	clear() {
		this.items = [];
		return 'Stack cleared';
	}

	/**
	 * Returns the max element in the stack.
	 * @returns {any} - The max element in the stack.
	 */
	max() {
		return Math.max(...this.items);
	}

	/**
	 * Returns the min element in the stack.
	 * @returns {any} - The min element in the stack.
	 */
	min() {
		return Math.min(...this.items);
	}

	/**
	 * Returns the inverted stack.
	 * @returns {any} - The inverted stack.
	 */
	invert() {
		return this.items.reverse();
	}

	/**
	 * Returns the inverted stack as a string.
	 * @returns {any} - The string.
	 */
	invertString() {
		this.items.reverse().toString();
		return this.items.join('');
	}
};
