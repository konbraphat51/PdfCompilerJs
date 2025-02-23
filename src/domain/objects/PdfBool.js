import {PdfObject} from "./PdfObject"

class PdfBool extends PdfObject {
	/**
	 * Constructor
	 * @param {Boolean} value Value of the object
	 * @override
	 */
	constructor(value) {
		super("Boolean", value)
	}

	/**
	 * Get value of the object
	 * @returns {Boolean}
	 * @readonly
	 * @override
	 */
	get value() {
		return this.value
	}

	/**
	 * Write string representation of the object
	 * @returns {String}
	 * @override
	 */
	Write() {
		return this.value ? "true" : "false"
	}

	/**
	 * Set value of the object
	 * @param {Boolean} value Value of the object
	 * @returns {void}
	 * @override
	 */
	Set(value) {
		this._value = value
	}
}
