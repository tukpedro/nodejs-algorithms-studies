const HashTable = require('./hash-table');

describe('HashTable', () => {
	let hashTable;

	beforeEach(() => {
		hashTable = new HashTable(10);
	});

	it('should set and get values', () => {
		hashTable.set('key1', 'value1');
		hashTable.set('key2', 'value2');
		hashTable.set('key3', 'value3');

		expect(hashTable.get('key1')).toBe('value1');
		expect(hashTable.get('key2')).toBe('value2');
		expect(hashTable.get('key3')).toBe('value3');
	});

	it('should return undefined for non-existent keys', () => {
		expect(hashTable.get('non-existent-key')).toBeNull();
	});

	it('should remove values', () => {
		hashTable.set('key1', 'value1');
		hashTable.set('key2', 'value2');
		hashTable.set('key3', 'value3');

		hashTable.remove('key2');

		expect(hashTable.get('key1')).toBe('value1');
		expect(hashTable.get('key2')).toBeNull();
		expect(hashTable.get('key3')).toBe('value3');
	});
});
