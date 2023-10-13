// Define a TreeNode class for the non-binary tree
class TreeNode {
	/**
	 * Constructor for the TreeNode class.
	 * @param {any} data - The data for the node.
	 */
	constructor(data) {
		this.data = data; // Data contained in the node
		this.children = []; // List of child nodes
	}

	/**
	 * Adds a child node to the current node.
	 * @param {TreeNode} childNode - The child node to add.
	 */
	addChild(childNode) {
		this.children.push(childNode);
	}
}

// Define the Tree class for the non-binary tree
class Tree {
	/**
	 * Constructor for the Tree class.
	 * @param {any} rootData - The data for the root node.
	 */
	constructor(rootData) {
		this.root = new TreeNode(rootData); // Root node of the tree
	}

	/**
	 * Traverses the tree and applies a callback function to each node.
	 * @param {Function} callback - The function to apply to each node.
	 */
	traverse(callback) {
		function walk(node) {
			callback(node);
			node.children.forEach(walk); // Recursively traverse child nodes
		}
		walk(this.root);
	}

	/**
	 * Finds a node with a specific value.
	 * @param {any} value - The value to search for.
	 * @returns {TreeNode|null} - The node with the given value or null if not found.
	 */
	find(value) {
		let result = null;
		this.traverse((node) => {
			if (node.data === value) {
				result = node;
			}
		});
		return result;
	}

	/**
	 * Removes a node with a specific value.
	 * @param {any} value - The value of the node to remove.
	 */
	remove(value) {
		if (this.root.data === value) {
			this.root = null; // If root node matches the value, remove the entire tree
			return;
		}
		const queue = [this.root];
		while (queue.length) {
			const node = queue.shift();
			for (let i = 0; i < node.children.length; i++) {
				if (node.children[i].data === value) {
					node.children.splice(i, 1); // Remove the matching child node
					return;
				} else {
					queue.push(node.children[i]); // Otherwise, add child nodes to the queue for further processing
				}
			}
		}
	}

	/**
	 * Gets the total number of nodes in the tree.
	 * @returns {number} - The total number of nodes.
	 */
	size() {
		let count = 0;
		this.traverse(() => count++);
		return count;
	}

	/**
	 * Gets the height (or depth) of the tree.
	 * @param {TreeNode} [node=this.root] - The starting node (default is the root).
	 * @returns {number} - The height of the tree.
	 */
	height(node = this.root) {
		if (!node) return 0;
		let maxChildHeight = 0;
		node.children.forEach((child) => {
			const childHeight = this.height(child);
			if (childHeight > maxChildHeight) {
				maxChildHeight = childHeight;
			}
		});
		return 1 + maxChildHeight; // Add 1 for the current node and then add the height of the deepest child
	}

	/**
	 * Prints the tree structure to the console.
	 * @param {TreeNode} [node=this.root] - The starting node (default is the root).
	 * @param {number} [spaceCount=0] - The number of spaces for indentation.
	 * @param {string} [spaceChar=' '] - The character used for indentation.
	 */
	print(node = this.root, spaceCount = 0, spaceChar = ' ') {
		if (!node) return;

		const space = spaceChar.repeat(spaceCount * 4);
		console.log(space + node.data);
		node.children.forEach((child) => {
			this.print(child, spaceCount + 1);
		});
	}
}

module.exports = { Tree, TreeNode };
