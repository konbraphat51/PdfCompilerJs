/**
 * Base class for all objects of PDF Object
 */
class PdfObject {
	/**
	 * List of PDF Object types
	 * @type {String[]}
	 */
	static types = [
		"Boolean",
		"Number",
		"String",
		"Name",
		"Array",
		"Dictionary",
		"Stream",
		"Null",
	]

	/**
	 * Type of the PDF object.
	 * This should be one of PdfObject.types
	 * @type {String}
	 */
	#type = ""

	/**
	 * Value of the PDF object
	 */
	#value = null

	/**
	 * Get value of the object
	 * @returns {Object}
	 * @readonly
	 */
	get value() {
		return this.#value
	}

	/**
	 * Get type of the object
	 * @returns {String}
	 * @readonly
	 */
	get type() {
		return this.#type
	}

	/**
	 * Constructor
	 * @param {String} type Type of the object
	 * @param {Object} value Value of the object
	 */
	constructor(type, value) {
		//type check
		if (!PdfObject.types.includes(type)) {
			throw new Error(`Invalid type ${type}`)
		}

		this.#type = type
		this.#value = value
	}

	/**
	 * Write string representation of the object
	 * @returns {String}
	 */
	Write() {
		throw new Error("Not implemented")
	}

	/**
	 * Set value of the object
	 * @param {Object} value Value of the object
	 * @returns {void}
	 */
	Set(value) {
		this.#value = value
	}
}

export default PdfObject
