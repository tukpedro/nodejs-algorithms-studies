const BinaryTree = require('./binary-tree');

describe('BinaryTree', () => {
	let binaryTree;

	beforeEach(() => {
		binaryTree = new BinaryTree();
	});

	test('should insert data into the binary tree', () => {
		binaryTree.insert(5);
		expect(binaryTree.root.data).toBe(5);
	});

	test('should insert data into the binary tree in the correct order', () => {
		binaryTree.insert(5);
		binaryTree.insert(3);
		binaryTree.insert(7);
		binaryTree.insert(1);
		binaryTree.insert(4);
		binaryTree.insert(6);
		binaryTree.insert(8);
		expect(binaryTree.root.data).toBe(5);
		expect(binaryTree.root.left.data).toBe(3);
		expect(binaryTree.root.left.left.data).toBe(1);
		expect(binaryTree.root.left.right.data).toBe(4);
		expect(binaryTree.root.right.data).toBe(7);
		expect(binaryTree.root.right.left.data).toBe(6);
		expect(binaryTree.root.right.right.data).toBe(8);
	});
});
