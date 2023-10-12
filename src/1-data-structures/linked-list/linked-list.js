// Define a Node class to represent each element in the linked list
class Node {
	constructor(data) {
		this.data = data; // The data stored in the node
		this.next = null; // A reference to the next node in the list
	}
}

// Define the LinkedList class to represent the linked list
module.exports = class LinkedList {
	constructor() {
		this.head = null; // The first node in the list
		this.tail = null; // The last node in the list
		this.length = 0; // The number of nodes in the list
	}

	// Add a new node to the end of the list
	append(data) {
		const newNode = new Node(data); // Create a new node with the given data

		if (!this.head) {
			// If the list is empty, set the new node as the head and tail
			this.head = newNode;
			this.tail = newNode;
		} else {
			// Otherwise, add the new node to the end of the list
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++; // Increment the length of the list
	}

	// Insert a new node at the specified index
	insert(index, data) {
		if (index < 0 || index > this.length) {
			// Check if the index is out of bounds
			throw new Error('Index out of bounds');
		}

		const newNode = new Node(data); // Create a new node with the given data

		if (index === 0) {
			// If the index is 0, set the new node as the head
			newNode.next = this.head;
			this.head = newNode;
		} else if (index === this.length) {
			// If the index is the length of the list, add the new node to the end
			this.tail.next = newNode;
			this.tail = newNode;
		} else {
			// Otherwise, insert the new node at the specified index
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

		this.length++; // Increment the length of the list
	}

	// Remove the node at the specified index
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

		this.length--; // Decrement the length of the list
	}

	// Get the data at the specified index
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

	// Get the index of the first occurrence of the specified data
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

	// Convert the linked list to an array
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
