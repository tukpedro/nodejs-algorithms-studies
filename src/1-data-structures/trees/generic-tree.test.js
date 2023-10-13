const { Tree, TreeNode } = require('./generic-tree');

describe('Non-Binary Tree', () => {
	let tree;
	let child1, child2, grandChild1;

	beforeEach(() => {
		tree = new Tree('Root');
		child1 = new TreeNode('Child 1');
		child2 = new TreeNode('Child 2');
		grandChild1 = new TreeNode('Grandchild 1.1');
	});

	test('should add children to the root', () => {
		tree.root.addChild(child1);
		tree.root.addChild(child2);
		expect(tree.root.children.length).toBe(2);
		expect(tree.root.children[0].data).toBe('Child 1');
		expect(tree.root.children[1].data).toBe('Child 2');
	});

	test('should traverse the tree', () => {
		tree.root.addChild(child1);
		child1.addChild(grandChild1);
		const nodes = [];
		tree.traverse((node) => nodes.push(node.data));
		expect(nodes).toEqual(['Root', 'Child 1', 'Grandchild 1.1']);
	});

	test('should find a node by value', () => {
		tree.root.addChild(child1);
		child1.addChild(grandChild1);
		const foundNode = tree.find('Grandchild 1.1');
		expect(foundNode).toBe(grandChild1);
	});

	test('should remove a node by value', () => {
		tree.root.addChild(child1);
		tree.root.addChild(child2);
		tree.remove('Child 1');
		expect(tree.root.children.length).toBe(1);
		expect(tree.root.children[0].data).toBe('Child 2');
	});

	test('should return the size of the tree', () => {
		tree.root.addChild(child1);
		tree.root.addChild(child2);
		child1.addChild(grandChild1);
		expect(tree.size()).toBe(4);
	});

	test('should return the height of the tree', () => {
		tree.root.addChild(child1);
		child1.addChild(grandChild1);
		expect(tree.height()).toBe(3);
	});
});
