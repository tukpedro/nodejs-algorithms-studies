module.exports = class HashTable {
	constructor(size) {
		this.buckets = new Array(size);
	}

	hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		return hash % this.buckets.length;
	}

	set(key, value) {
		const index = this.hash(key);
		if (!this.buckets[index]) {
			this.buckets[index] = [];
		}
		this.buckets[index].push([key, value]);
	}

	get(key) {
		const index = this.hash(key);
		if (!this.buckets[index]) {
			return null;
		}
		for (let i = 0; i < this.buckets[index].length; i++) {
			if (this.buckets[index][i][0] === key) {
				return this.buckets[index][i][1];
			}
		}
		return null;
	}

	remove(key) {
		const index = this.hash(key);
		if (!this.buckets[index]) {
			return null;
		}
		for (let i = 0; i < this.buckets[index].length; i++) {
			if (this.buckets[index][i][0] === key) {
				const value = this.buckets[index][i][1];
				this.buckets[index].splice(i, 1);
				return value;
			}
		}
		return null;
	}
};
