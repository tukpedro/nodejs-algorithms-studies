module.exports = class HashTable {
	/**
	 * Constructor for the HashTable class.
	 * @param {number} size - The size of the hash table.
	 */
	constructor(size) {
		this.buckets = new Array(size); // Array to store the key-value pairs
	}

	/**
	 * Generates a hash value for a given key.
	 * @param {string} key - The key to hash.
	 * @returns {number} - The hash value.
	 */
	hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i); // Sum up the character codes of the key
		}
		return hash % this.buckets.length; // Modulo operation to ensure the hash value fits within the table size
	}

	/**
	 * Inserts a key-value pair into the hash table.
	 * @param {string} key - The key to insert.
	 * @param {any} value - The value associated with the key.
	 */
	set(key, value) {
		const index = this.hash(key); // Get the hash value for the key
		if (!this.buckets[index]) {
			this.buckets[index] = []; // Initialize the bucket if it's empty
		}
		this.buckets[index].push([key, value]); // Add the key-value pair to the bucket
	}

	/**
	 * Retrieves the value associated with a given key.
	 * @param {string} key - The key to search for.
	 * @returns {any|null} - The value associated with the key or null if not found.
	 */
	get(key) {
		const index = this.hash(key); // Get the hash value for the key
		if (!this.buckets[index]) {
			return null; // Return null if the bucket is empty
		}
		for (let i = 0; i < this.buckets[index].length; i++) {
			if (this.buckets[index][i][0] === key) {
				return this.buckets[index][i][1]; // Return the value if the key is found
			}
		}
		return null; // Return null if the key is not found in the bucket
	}

	/**
	 * Removes a key-value pair from the hash table.
	 * @param {string} key - The key to remove.
	 * @returns {any|null} - The value that was removed or null if not found.
	 */
	remove(key) {
		const index = this.hash(key); // Get the hash value for the key
		if (!this.buckets[index]) {
			return null; // Return null if the bucket is empty
		}
		for (let i = 0; i < this.buckets[index].length; i++) {
			if (this.buckets[index][i][0] === key) {
				const value = this.buckets[index][i][1];
				this.buckets[index].splice(i, 1); // Remove the key-value pair from the bucket
				return value; // Return the value that was removed
			}
		}
		return null; // Return null if the key is not found in the bucket
	}
};
