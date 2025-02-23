class PdfNull extends PdfObject {
	constructor() {
		super("Null", null)
	}

	/**
	 * Get value of the object
	 * @returns {null}
	 * @readonly
	 * @override
	 */
	get value() {
		return null
	}

	/**
	 * Write string representation of the object
	 * @returns {String}
	 * @override
	 */
	Write() {
		return "null"
	}

	/**
	 * Set value of the object
	 * @param {Object} value Value of the object
	 * @returns {void}
	 * @override
	 */
	Set(value) {
		throw new Error("Cannot set value of a null object")
	}
}
