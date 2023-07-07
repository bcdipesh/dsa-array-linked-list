/** Node: node for a singly linked list. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** LinkedList: chained together nodes. */

class LinkedList {
	constructor(vals = []) {
		this.head = null;
		this.tail = null;
		this.length = 0;

		for (let val of vals) this.push(val);
	}

	/** push(val): add new value to end of list. */

	push(val) {
		const newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
	}

	/** unshift(val): add new value to start of list. */

	unshift(val) {
		const newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
	}

	/** pop(): return & remove last item. */

	pop() {
		if (this.length === 0) {
			throw new Error('List is empty.');
		}

		let currentNode = this.head;
		let prevNode = null;

		while (currentNode.next) {
			prevNode = currentNode;
			currentNode = currentNode.next;
		}

		const poppedValue = currentNode.val;

		if (prevNode) {
			prevNode.next = null;
			this.tail = prevNode;
		} else {
			this.head = null;
			this.tail = null;
		}

		this.length--;

		return poppedValue;
	}

	/** shift(): return & remove first item. */

	shift() {
		if (this.length === 0) {
			throw new Error('List is empty.');
		}

		const shiftedValue = this.head.val;
		this.head = this.head.next;
		this.length--;

		if (this.length === 0) {
			this.tail = null;
		}

		return shiftedValue;
	}

	/** getAt(idx): get val at idx. */

	getAt(idx) {
		if (idx < 0 || idx >= this.length) {
			throw new Error('Invalid index.');
		}

		let currentNode = this.head;
		let count = 0;

		while (count < idx) {
			currentNode = currentNode.next;
			count++;
		}

		return currentNode.val;
	}

	/** setAt(idx, val): set val at idx to val */

	setAt(idx, val) {
		if (idx < 0 || idx >= this.length) {
			throw new Error('Invalid index.');
		}

		let currentNode = this.head;
		let count = 0;

		while (count < idx) {
			currentNode = currentNode.next;
			count++;
		}

		currentNode.val = val;
	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt(idx, val) {
		if (idx < 0 || idx > this.length) {
			throw new Error('Invalid index.');
		}

		if (idx === 0) {
			this.unshift(val);
		} else if (idx === this.length) {
			this.push(val);
		} else {
			let currentNode = this.head;
			let prevNode = null;
			let count = 0;

			while (count < idx) {
				prevNode = currentNode;
				currentNode = currentNode.next;
				count++;
			}

			const newNode = new Node(val);
			prevNode.next = newNode;
			newNode.next = currentNode;
			this.length++;
		}
	}

	/** removeAt(idx): return & remove item at idx, */

	removeAt(idx) {
		if (idx < 0 || idx >= this.length) {
			throw new Error('Invalid index.');
		}

		if (idx === 0) {
			return this.shift();
		} else if (idx === this.length - 1) {
			return this.pop();
		} else {
			let currentNode = this.head;
			let prevNode = null;
			let count = 0;

			while (count < idx) {
				prevNode = currentNode;
				currentNode = currentNode.next;
				count++;
			}

			prevNode.next = currentNode.next;
			this.length--;

			return currentNode.val;
		}
	}

	/** average(): return an average of all values in the list */

	average() {
		if (this.length === 0) {
			return 0;
		}

		let sum = 0;
		let currentNode = this.head;

		while (currentNode) {
			sum += currentNode.val;
			currentNode = currentNode.next;
		}

		return sum / this.length;
	}
}

module.exports = LinkedList;
