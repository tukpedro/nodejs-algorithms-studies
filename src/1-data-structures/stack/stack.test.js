const Stack = require('./stack');

describe('Stack', () => {
	let stack;

	beforeEach(() => {
		stack = new Stack();
	});

	it('should create an empty stack', () => {
		expect(stack.isEmpty()).toBe(true);
		expect(stack.printStack()).toBe(0);
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

	it('should return underflow if trying to pop from an empty stack', () => {
		expect(stack.pop()).toBe('Underflow');
	});

	it('should return the top element of the stack', () => {
		stack.push(1);
		stack.push(2);
		expect(stack.peek()).toBe(2);
		stack.pop();
		expect(stack.peek()).toBe(1);
	});

	it('should return the number of elements in the stack', () => {
		expect(stack.size()).toBe(0);
		stack.push(1);
		expect(stack.size()).toBe(1);
		stack.push(2);
		expect(stack.size()).toBe(2);
	});

	it('should clear the stack', () => {
		stack.push(1);
		stack.push(2);
		stack.clear();
		expect(stack.isEmpty()).toBe(true);
	});

	it('should return the max and min elements in the stack', () => {
		stack.push(1);
		stack.push(3);
		stack.push(2);
		expect(stack.max()).toBe(3);
		expect(stack.min()).toBe(1);
	});

	it('should return the ordered stack', () => {
		stack.push(1);
		stack.push(6);
		stack.push(4);
		stack.push(3);
		stack.push(2);
		stack.push(5);
		stack.order();
		expect(stack.printStack()).toEqual('1,2,3,4,6');
	});

	it('should invert the stack', () => {
		stack.push(1);
		stack.push(2);
		stack.push(3);
		stack.invert();
		expect(stack.peek()).toBe(1);
	});

	it('should return the inverted stack as a string', () => {
		stack.push(1);
		stack.push(2);
		stack.push(3);
		expect(stack.invertString()).toBe('321');
	});

	it('should add only numbers to the stack using pushNumber', () => {
		stack.pushNumber(1);
		expect(stack.peek()).toBe(1);
		stack.pushNumber('a');
		expect(stack.peek()).toBe(1);
	});

	it('should not exceed 5 items in the stack', () => {
		stack.push(1);
		stack.push(2);
		stack.push(3);
		stack.push(4);
		stack.push(5);
		stack.push(6);
		expect(stack.size()).toBe(5);
		expect(stack.peek()).toBe(5);
	});
});
