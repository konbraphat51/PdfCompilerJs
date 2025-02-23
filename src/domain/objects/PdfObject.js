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
	type = ""

	/**
	 * Value of the PDF object
	 */
	value = null

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

		this.type = type
		this.value = value
	}
}

export default PdfObject
