/** @license Apache-2.0 */

'use strict';

/**
* Test whether an input value is a supported ndarray data type.
*
* @module @stdlib/ndarray-base-assert-is-data-type
*
* @example
* var isDataType = require( '@stdlib/ndarray-base-assert-is-data-type' );
*
* var bool = isDataType( 'binary' );
* // returns true
*
* bool = isDataType( 'float32' );
* // returns true
*
* bool = isDataType( 'float64' );
* // returns true
*
* bool = isDataType( 'generic' );
* // returns true
*
* bool = isDataType( 'int16' );
* // returns true
*
* bool = isDataType( 'int32' );
* // returns true
*
* bool = isDataType( 'int8' );
* // returns true
*
* bool = isDataType( 'uint16' );
* // returns true
*
* bool = isDataType( 'uint32' );
* // returns true
*
* bool = isDataType( 'uint8' );
* // returns true
*
* bool = isDataType( 'uint8c' );
* // returns true
*
* bool = isDataType( 'foo' );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
