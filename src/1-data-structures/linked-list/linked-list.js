// Define a Node class to represent each element in the linked list
class Node {
	/**
	 * @param {any} data - The data to store in the node.
	 */
	constructor(data) {
		this.data = data;
		this.next = null; // A reference to the next node in the list
	}
}

module.exports = class LinkedList {
	constructor() {
		this.head = null; // The first node in the list
		this.tail = null; // The last node in the list
		this.length = 0; // The number of nodes in the list
	}

	/**
	 * Adds a new node to the end of the list.
	 * @param {any} data - The data to store in the new node.
	 */
	append(data) {
		const newNode = new Node(data);

		if (!this.head) {
			// If the list is empty, set the new node as the head and tail
			this.head = newNode;
			this.tail = newNode;
		} else {
			// Otherwise, add the new node to the end of the list
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
	}

	/**
	 * Inserts a new node at the specified index.
	 * @param {number} index - The index to insert the new node at.
	 * @param {any} data - The data to store in the new node.
	 */
	insert(index, data) {
		if (index < 0 || index > this.length) {
			// Check if the index is out of bounds
			throw new Error('Index out of bounds');
		}

		const newNode = new Node(data); // Create a new node with the given data

		if (index === 0) {
			newNode.next = this.head;
			this.head = newNode;
		} else {
			let current = this.head;
			let previous = null;
			let i = 0;

			while (i < index) {
				previous = current;
				current = current.next;
				i++;
			}

			newNode.next = current;
			previous.next = newNode;
		}

		this.length++;
	}

	/**
	 * Removes the node at the specified index.
	 * @param {number} index - The index of the node to remove.
	 */
	remove(index) {
		if (index < 0 || index >= this.length) {
			// Check if the index is out of bounds
			throw new Error('Index out of bounds');
		}

		let current = this.head;

		if (index === 0) {
			// If the index is 0, remove the head node
			this.head = current.next;
		} else {
			// Otherwise, remove the node at the specified index
			let previous = null;
			let i = 0;

			while (i < index) {
				previous = current;
				current = current.next;
				i++;
			}

			previous.next = current.next;

			if (index === this.length - 1) {
				// If the index is the last node, update the tail
				this.tail = previous;
			}
		}

		this.length--;
	}

	/**
	 * Returns the data at the specified index.
	 * @param {number} index - The index of the node to retrieve.
	 * @returns {any} - The data at the specified index.
	 */
	get(index) {
		if (index < 0 || index >= this.length) {
			// Check if the index is out of bounds
			throw new Error('Index out of bounds');
		}

		let current = this.head;
		let i = 0;

		while (i < index) {
			// Traverse the list until the specified index is reached
			current = current.next;
			i++;
		}

		return current.data; // Return the data at the specified index
	}

	/**
	 * Returns the index of the first occurrence of the specified data.
	 * @param {any} data - The data to search for.
	 * @returns {number} - The index of the first occurrence or -1 if not found.
	 */
	indexOf(data) {
		let current = this.head;
		let i = 0;

		while (current) {
			// Traverse the list until the end is reached
			if (current.data === data) {
				// If the data is found, return the index
				return i;
			}

			current = current.next;
			i++;
		}

		return -1; // If the data is not found, return -1
	}

	/**
	 * Converts the linked list to an array.
	 * @returns {Array} - An array containing all the data in the linked list.
	 */
	toArray() {
		const array = [];
		let current = this.head;

		while (current) {
			// Traverse the list until the end is reached
			array.push(current.data); // Add each node's data to the array
			current = current.next;
		}

		return array;
	}
};
