// Define a TreeNode class for the non-binary tree
class TreeNode {
	constructor(data) {
		this.data = data; // Data contained in the node
		this.children = []; // List of child nodes
	}

	// Method to add a child node
	addChild(childNode) {
		this.children.push(childNode);
	}
}

// Define the Tree class for the non-binary tree
class Tree {
	constructor(rootData) {
		this.root = new TreeNode(rootData); // Root node of the tree
	}

	// Method to traverse the tree and apply a callback function to each node
	traverse(callback) {
		function walk(node) {
			callback(node);
			node.children.forEach(walk); // Recursively traverse child nodes
		}
		walk(this.root);
	}

	// Method to find a node with a specific value
	find(value) {
		let result = null;
		this.traverse((node) => {
			if (node.data === value) {
				result = node;
			}
		});
		return result;
	}

	// Method to remove a node with a specific value
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

	// Method to get the total number of nodes in the tree
	size() {
		let count = 0;
		this.traverse(() => count++);
		return count;
	}

	// Method to get the height (or depth) of the tree
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
