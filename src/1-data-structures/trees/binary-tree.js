class Node {
	/**
	 * Constructor for the Node class.
	 * @param {number} data - The data for the node.
	 */
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

module.exports = class BinaryTree {
	constructor() {
		this.root = null; // Root node of the tree
	}

	/**
	 * Inserts a new node with the given data into the tree.
	 * @param {number} data - The data for the new node.
	 */
	insert(data) {
		const newNode = new Node(data);
		if (this.root === null) {
			this.root = newNode; // If tree is empty, set new node as root
		} else {
			this.insertNode(this.root, newNode); // Otherwise, use helper function to find the correct position
		}
	}

	/**
	 * Recursive helper function to insert a node in the binary tree.
	 * @param {Node} node - The current node.
	 * @param {Node} newNode - The new node to insert.
	 */
	insertNode(node, newNode) {
		if (newNode.data < node.data) {
			if (node.left === null) {
				node.left = newNode; // If left child is empty, insert here
			} else {
				this.insertNode(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode; // If right child is empty, insert here
			} else {
				this.insertNode(node.right, newNode);
			}
		}
	}

	/**
	 * Searches for a node with the given data in the tree.
	 * @param {number} data - The data to search for.
	 * @returns {Node|null} - The node with the given data or null if not found.
	 */
	search(data) {
		return this.searchNode(this.root, data);
	}

	/**
	 * Recursive helper function for the search method.
	 * @param {Node} node - The current node.
	 * @param {number} data - The data to search for.
	 * @returns {Node|null} - The node with the given data or null if not found.
	 */
	searchNode(node, data) {
		if (node === null) return null;

		if (data < node.data) {
			return this.searchNode(node.left, data);
		} else if (data > node.data) {
			return this.searchNode(node.right, data);
		} else {
			return node;
		}
	}

	/**
	 * Removes a node with the given data from the tree.
	 * @param {number} data - The data of the node to remove.
	 */
	remove(data) {
		this.root = this.removeNode(this.root, data);
	}

	/**
	 * Recursive helper function for the remove method.
	 * @param {Node} node - The current node.
	 * @param {number} data - The data of the node to remove.
	 * @returns {Node|null} - The updated node after removal.
	 */
	removeNode(node, data) {
		if (node === null) return null;

		if (data < node.data) {
			node.left = this.removeNode(node.left, data);
			return node;
		} else if (data > node.data) {
			node.right = this.removeNode(node.right, data);
			return node;
		} else {
			// Case 1: node with no children
			if (node.left === null && node.right === null) {
				node = null;
				return node;
			}

			// Case 2: node with one child
			if (node.left === null) return node.right;
			if (node.right === null) return node.left;

			// Case 3: node with two children
			let tempNode = this.findMinNode(node.right);
			node.data = tempNode.data;
			node.right = this.removeNode(node.right, tempNode.data);
			return node;
		}
	}

	/**
	 * Finds the node with the smallest value greater than the given node.
	 * @param {Node} node - The starting node.
	 * @returns {Node} - The node with the minimum value.
	 */
	findMinNode(node) {
		while (node && node.left !== null) {
			node = node.left;
		}
		return node;
	}
};
