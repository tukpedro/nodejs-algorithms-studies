const Stack = require('./stack');

describe('Stack', () => {
	let stack;

	beforeEach(() => {
		stack = new Stack();
	});

	it('should create an empty stack', () => {
		expect(stack.isEmpty()).toBe(true);
		expect(stack.printStack()).toBe('');
	});

	it('should add elements to the stack', () => {
		stack.push(1);
		expect(stack.isEmpty()).toBe(false);
		expect(stack.peek()).toBe(1);
		stack.push(2);
		expect(stack.peek()).toBe(2);
	});

	it('should remove elements from the stack', () => {
		stack.push(1);
		stack.push(2);
		expect(stack.pop()).toBe(2);
		expect(stack.peek()).toBe(1);
		expect(stack.pop()).toBe(1);
		expect(stack.isEmpty()).toBe(true);
	});

	it('should return the top element of the stack', () => {
		stack.push(1);
		stack.push(2);
		expect(stack.peek()).toBe(2);
		stack.pop();
		expect(stack.peek()).toBe(1);
	});

	it('should return the number of elements in the stack', () => {
		expect(stack.printStack()).toBe('');
		stack.push(1);
		expect(stack.printStack()).toBe('1');
		stack.push(2);
		expect(stack.printStack()).toBe('1,2');
	});
});
