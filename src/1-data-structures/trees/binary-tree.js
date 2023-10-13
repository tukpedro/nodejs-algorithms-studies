// Define a Node class for the binary tree
class Node {
	constructor(data) {
		this.data = data; // Data contained in the node
		this.left = null; // Pointer to the left child
		this.right = null; // Pointer to the right child
	}
}

// Define the BinaryTree class
module.exports = class BinaryTree {
	constructor() {
		this.root = null; // Root node of the tree
	}

	// Method to insert data into the binary tree
	insert(data) {
		const newNode = new Node(data);
		if (this.root === null) {
			this.root = newNode; // If tree is empty, set new node as root
		} else {
			this.insertNode(this.root, newNode); // Otherwise, use helper function to find the correct position
		}
	}

	// Helper function to insert a node in the binary tree
	insertNode(node, newNode) {
		if (newNode.data < node.data) {
			if (node.left === null) {
				node.left = newNode; // If left child is empty, insert here
			} else {
				this.insertNode(node.left, newNode); // Otherwise, move to the left child and repeat
			}
		} else {
			if (node.right === null) {
				node.right = newNode; // If right child is empty, insert here
			} else {
				this.insertNode(node.right, newNode); // Otherwise, move to the right child and repeat
			}
		}
	}
};
