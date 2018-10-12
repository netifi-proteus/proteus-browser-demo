/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});
exports.every = (exports.Single = (exports.Flowable = undefined));

var _Flowable = __webpack_require__(18);
var _Flowable2 = _interopRequireDefault(_Flowable);
var _Single = __webpack_require__(34);
var _Single2 = _interopRequireDefault(_Single);
var _FlowableTimer = __webpack_require__(35);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                               * The public API of the `flowable` package.
                                                                                                                                               */ exports.Flowable = _Flowable2.default;
exports.Single = _Single2.default;
exports.every = _FlowableTimer.every;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});
exports.JsonSerializers = (exports.JsonSerializer = (exports.IdentitySerializers = (exports.IdentitySerializer = (exports.UTF8Encoder = (exports.Utf8Encoders = (exports.BufferEncoder = (exports.BufferEncoders = (exports.writeUInt24BE = (exports.toBuffer = (exports.readUInt24BE = (exports.createBuffer = (exports.byteLength = (exports.serializeFrameWithLength = (exports.serializeFrame = (exports.deserializeFrames = (exports.deserializeFrameWithLength = (exports.deserializeFrame = (exports.printFrame = (exports.isResumeEnable = (exports.isRespond = (exports.isNext = (exports.isMetadata = (exports.isLease = (exports.isIgnore = (exports.isComplete = (exports.getErrorCodeExplanation = (exports.createErrorFromFrame = (exports.MAX_VERSION = (exports.MAX_STREAM_ID = (exports.MAX_RESUME_LENGTH = (exports.MAX_MIME_LENGTH = (exports.MAX_LIFETIME = (exports.MAX_KEEPALIVE = (exports.MAX_CODE = (exports.FRAME_TYPES = (exports.FRAME_TYPE_OFFFSET = (exports.FLAGS = (exports.FLAGS_MASK = (exports.ERROR_EXPLANATIONS = (exports.ERROR_CODES = (exports.CONNECTION_STREAM_ID = (exports.RSocketResumableTransport = (exports.RSocketServer = (exports.RSocketClient = undefined))))))))))))))))))))))))))))))))))))))))))));
var _RSocketFrame = __webpack_require__(7);
Object.defineProperty(exports, 'CONNECTION_STREAM_ID', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.CONNECTION_STREAM_ID;
  },
});
Object.defineProperty(exports, 'ERROR_CODES', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.ERROR_CODES;
  },
});
Object.defineProperty(exports, 'ERROR_EXPLANATIONS', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.ERROR_EXPLANATIONS;
  },
});
Object.defineProperty(exports, 'FLAGS_MASK', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.FLAGS_MASK;
  },
});
Object.defineProperty(exports, 'FLAGS', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.FLAGS;
  },
});
Object.defineProperty(exports, 'FRAME_TYPE_OFFFSET', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.FRAME_TYPE_OFFFSET;
  },
});
Object.defineProperty(exports, 'FRAME_TYPES', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.FRAME_TYPES;
  },
});
Object.defineProperty(exports, 'MAX_CODE', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.MAX_CODE;
  },
});
Object.defineProperty(exports, 'MAX_KEEPALIVE', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.MAX_KEEPALIVE;
  },
});
Object.defineProperty(exports, 'MAX_LIFETIME', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.MAX_LIFETIME;
  },
});
Object.defineProperty(exports, 'MAX_MIME_LENGTH', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.MAX_MIME_LENGTH;
  },
});
Object.defineProperty(exports, 'MAX_RESUME_LENGTH', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.MAX_RESUME_LENGTH;
  },
});
Object.defineProperty(exports, 'MAX_STREAM_ID', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.MAX_STREAM_ID;
  },
});
Object.defineProperty(exports, 'MAX_VERSION', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.MAX_VERSION;
  },
});
Object.defineProperty(exports, 'createErrorFromFrame', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.createErrorFromFrame;
  },
});
Object.defineProperty(exports, 'getErrorCodeExplanation', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.getErrorCodeExplanation;
  },
});
Object.defineProperty(exports, 'isComplete', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.isComplete;
  },
});
Object.defineProperty(exports, 'isIgnore', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.isIgnore;
  },
});
Object.defineProperty(exports, 'isLease', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.isLease;
  },
});
Object.defineProperty(exports, 'isMetadata', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.isMetadata;
  },
});
Object.defineProperty(exports, 'isNext', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.isNext;
  },
});
Object.defineProperty(exports, 'isRespond', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.isRespond;
  },
});
Object.defineProperty(exports, 'isResumeEnable', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.isResumeEnable;
  },
});
Object.defineProperty(exports, 'printFrame', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.printFrame;
  },
});
var _RSocketBinaryFraming = __webpack_require__(37);
Object.defineProperty(exports, 'deserializeFrame', {
  enumerable: true,
  get: function() {
    return _RSocketBinaryFraming.deserializeFrame;
  },
});
Object.defineProperty(exports, 'deserializeFrameWithLength', {
  enumerable: true,
  get: function() {
    return _RSocketBinaryFraming.deserializeFrameWithLength;
  },
});
Object.defineProperty(exports, 'deserializeFrames', {
  enumerable: true,
  get: function() {
    return _RSocketBinaryFraming.deserializeFrames;
  },
});
Object.defineProperty(exports, 'serializeFrame', {
  enumerable: true,
  get: function() {
    return _RSocketBinaryFraming.serializeFrame;
  },
});
Object.defineProperty(exports, 'serializeFrameWithLength', {
  enumerable: true,
  get: function() {
    return _RSocketBinaryFraming.serializeFrameWithLength;
  },
});
var _RSocketBufferUtils = __webpack_require__(9);
Object.defineProperty(exports, 'byteLength', {
  enumerable: true,
  get: function() {
    return _RSocketBufferUtils.byteLength;
  },
});
Object.defineProperty(exports, 'createBuffer', {
  enumerable: true,
  get: function() {
    return _RSocketBufferUtils.createBuffer;
  },
});
Object.defineProperty(exports, 'readUInt24BE', {
  enumerable: true,
  get: function() {
    return _RSocketBufferUtils.readUInt24BE;
  },
});
Object.defineProperty(exports, 'toBuffer', {
  enumerable: true,
  get: function() {
    return _RSocketBufferUtils.toBuffer;
  },
});
Object.defineProperty(exports, 'writeUInt24BE', {
  enumerable: true,
  get: function() {
    return _RSocketBufferUtils.writeUInt24BE;
  },
});
var _RSocketEncoding = __webpack_require__(22);
Object.defineProperty(exports, 'BufferEncoders', {
  enumerable: true,
  get: function() {
    return _RSocketEncoding.BufferEncoders;
  },
});
Object.defineProperty(exports, 'BufferEncoder', {
  enumerable: true,
  get: function() {
    return _RSocketEncoding.BufferEncoder;
  },
});
Object.defineProperty(exports, 'Utf8Encoders', {
  enumerable: true,
  get: function() {
    return _RSocketEncoding.Utf8Encoders;
  },
});
Object.defineProperty(exports, 'UTF8Encoder', {
  enumerable: true,
  get: function() {
    return _RSocketEncoding.UTF8Encoder;
  },
});
var _RSocketSerialization = __webpack_require__(14);
Object.defineProperty(exports, 'IdentitySerializer', {
  enumerable: true,
  get: function() {
    return _RSocketSerialization.IdentitySerializer;
  },
});
Object.defineProperty(exports, 'IdentitySerializers', {
  enumerable: true,
  get: function() {
    return _RSocketSerialization.IdentitySerializers;
  },
});
Object.defineProperty(exports, 'JsonSerializer', {
  enumerable: true,
  get: function() {
    return _RSocketSerialization.JsonSerializer;
  },
});
Object.defineProperty(exports, 'JsonSerializers', {
  enumerable: true,
  get: function() {
    return _RSocketSerialization.JsonSerializers;
  },
});
var _RSocketClient = __webpack_require__(38);
var _RSocketClient2 = _interopRequireDefault(_RSocketClient);
var _RSocketServer = __webpack_require__(39);
var _RSocketServer2 = _interopRequireDefault(_RSocketServer);
var _RSocketResumableTransport = __webpack_require__(40);
var _RSocketResumableTransport2 = _interopRequireDefault(
  _RSocketResumableTransport
);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
exports.RSocketClient = _RSocketClient2.default;
exports.RSocketServer = _RSocketServer2.default;
exports.RSocketResumableTransport = _RSocketResumableTransport2.default;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(25)
var ieee754 = __webpack_require__(26)
var isArray = __webpack_require__(27)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FrameTypeNames = exports.FrameTypes = undefined;
exports.getFrameTypeName = getFrameTypeName;

var _forEachObject = __webpack_require__(21);

var _forEachObject2 = _interopRequireDefault(_forEachObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FrameTypes = exports.FrameTypes = {
  BROKER_SETUP: 0x01,
  DESTINATION_SETUP: 0x02,
  DESTINATION: 0x03,
  GROUP: 0x04,
  BROADCAST: 0x05,
  SHARD: 0x06
};

// Maps frame type codes to type names
/**
 * Copyright (c) 2017-present, Netifi Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */

var FrameTypeNames = exports.FrameTypeNames = {};
(0, _forEachObject2.default)(FrameTypes, function (value, name) {
  FrameTypeNames[value] = name;
});

function getFrameTypeName(type) {
  var name = FrameTypeNames[type];
  return name != null ? name : toHex(type);
}

function toHex(n) {
  return '0x' + n.toString(16);
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ProteusTypes = __webpack_require__(43);

Object.keys(_ProteusTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ProteusTypes[key];
    }
  });
});

var _ProteusFrame = __webpack_require__(4);

Object.defineProperty(exports, 'FrameTypes', {
  enumerable: true,
  get: function get() {
    return _ProteusFrame.FrameTypes;
  }
});
Object.defineProperty(exports, 'getFrameTypeName', {
  enumerable: true,
  get: function get() {
    return _ProteusFrame.getFrameTypeName;
  }
});

var _ProteusBinaryFraming = __webpack_require__(44);

Object.defineProperty(exports, 'encodeFrame', {
  enumerable: true,
  get: function get() {
    return _ProteusBinaryFraming.encodeFrame;
  }
});
Object.defineProperty(exports, 'decodeFrame', {
  enumerable: true,
  get: function get() {
    return _ProteusBinaryFraming.decodeFrame;
  }
});

var _ProteusMetadata = __webpack_require__(51);

Object.defineProperty(exports, 'encodeProteusMetadata', {
  enumerable: true,
  get: function get() {
    return _ProteusMetadata.encodeProteusMetadata;
  }
});
Object.defineProperty(exports, 'getVersion', {
  enumerable: true,
  get: function get() {
    return _ProteusMetadata.getVersion;
  }
});
Object.defineProperty(exports, 'getService', {
  enumerable: true,
  get: function get() {
    return _ProteusMetadata.getService;
  }
});
Object.defineProperty(exports, 'getMethod', {
  enumerable: true,
  get: function get() {
    return _ProteusMetadata.getMethod;
  }
});
Object.defineProperty(exports, 'getMetadata', {
  enumerable: true,
  get: function get() {
    return _ProteusMetadata.getMetadata;
  }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Netifi Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */



/* eslint-disable consistent-return, no-bitwise */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodeFrameHeader = encodeFrameHeader;
exports.getMajorVersion = getMajorVersion;
exports.getMinorVersion = getMinorVersion;
exports.getFrameType = getFrameType;


/**
 * Protocol Version
 */
var MAJOR_VERSION = exports.MAJOR_VERSION = 0;var MINOR_VERSION = exports.MINOR_VERSION = 1;

var MAJOR_VERSION_SIZE = exports.MAJOR_VERSION_SIZE = 2;
var MINOR_VERSION_SIZE = exports.MINOR_VERSION_SIZE = 2;
var FRAME_TYPE_SIZE = exports.FRAME_TYPE_SIZE = 2;

var FRAME_HEADER_SIZE = exports.FRAME_HEADER_SIZE = MAJOR_VERSION_SIZE + MINOR_VERSION_SIZE + FRAME_TYPE_SIZE;

function encodeFrameHeader(buffer, frame) {
  var offset = buffer.writeUInt16BE(frame.majorVersion || MAJOR_VERSION, 0);
  offset = buffer.writeUInt16BE(frame.minorVersion || MINOR_VERSION, offset);
  return buffer.writeUInt16BE(frame.type, offset);
}

function getMajorVersion(buffer) {
  return buffer.readUInt16BE(0);
}

function getMinorVersion(buffer) {
  return buffer.readUInt16BE(MAJOR_VERSION_SIZE);
}

function getFrameType(buffer) {
  return buffer.readUInt16BE(MAJOR_VERSION_SIZE + MINOR_VERSION_SIZE);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/* eslint-disable max-len, no-bitwise */ Object.defineProperty(
  exports,
  '__esModule',
  {value: true}
);
exports.MAX_VERSION = (exports.MAX_TTL = (exports.MAX_STREAM_ID = (exports.MAX_RESUME_LENGTH = (exports.MAX_REQUEST_N = (exports.MAX_REQUEST_COUNT = (exports.MAX_MIME_LENGTH = (exports.MAX_METADATA_LENGTH = (exports.MAX_LIFETIME = (exports.MAX_KEEPALIVE = (exports.MAX_CODE = (exports.FRAME_TYPE_OFFFSET = (exports.FLAGS_MASK = (exports.ERROR_EXPLANATIONS = (exports.ERROR_CODES = (exports.FLAGS = (exports.FRAME_TYPE_NAMES = (exports.FRAME_TYPES = (exports.CONNECTION_STREAM_ID = undefined))))))))))))))))));
exports.isIgnore = isIgnore;
exports.isMetadata = isMetadata;
exports.isComplete = isComplete;
exports.isNext = isNext;
exports.isRespond = isRespond;
exports.isResumeEnable = isResumeEnable;
exports.isLease = isLease;
exports.isResumePositionFrameType = isResumePositionFrameType;
exports.getFrameTypeName = getFrameTypeName;
exports.createErrorFromFrame = createErrorFromFrame;
exports.getErrorCodeExplanation = getErrorCodeExplanation;
exports.printFrame = printFrame;
var _forEachObject = __webpack_require__(21);
var _forEachObject2 = _interopRequireDefault(_forEachObject);
var _sprintf = __webpack_require__(36);
var _sprintf2 = _interopRequireDefault(_sprintf);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
const CONNECTION_STREAM_ID = (exports.CONNECTION_STREAM_ID = 0);
const FRAME_TYPES = (exports.FRAME_TYPES = {
  CANCEL: 0x09, // Cancel Request: Cancel outstanding request.
  ERROR: 0x0b, // Error: Error at connection or application level.
  EXT: 0x3f, // Extension Header: Used To Extend more frame types as well as extensions.
  KEEPALIVE: 0x03, // Keepalive: Connection keepalive.
  LEASE: 0x02, // Lease: Sent by Responder to grant the ability to send requests.
  METADATA_PUSH: 0x0c, // Metadata: Asynchronous Metadata frame
  PAYLOAD: 0x0a, // Payload: Payload on a stream. For example, response to a request, or message on a channel.
  REQUEST_CHANNEL: 0x07, // Request Channel: Request a completable stream in both directions.
  REQUEST_FNF: 0x05, // Fire And Forget: A single one-way message.
  REQUEST_N: 0x08, // Request N: Request N more items with Reactive Streams semantics.
  REQUEST_RESPONSE: 0x04, // Request Response: Request single response.
  REQUEST_STREAM: 0x06, // Request Stream: Request a completable stream.
  RESERVED: 0x00, // Reserved
  RESUME: 0x0d, // Resume: Replaces SETUP for Resuming Operation (optional)
  RESUME_OK: 0x0e, // Resume OK : Sent in response to a RESUME if resuming operation possible (optional)
  SETUP: 0x01,
}); // Maps frame type codes to type names
const FRAME_TYPE_NAMES = (exports.FRAME_TYPE_NAMES = {});
(0, _forEachObject2.default)(FRAME_TYPES, (value, name) => {
  FRAME_TYPE_NAMES[value] = name;
});
const FLAGS = (exports.FLAGS = {
  COMPLETE: 0x40, // PAYLOAD, REQUEST_CHANNEL: indicates stream completion, if set onComplete will be invoked on receiver.
  FOLLOWS: 0x80, // (unused)
  IGNORE: 0x200, // (all): Ignore frame if not understood.
  LEASE: 0x40, // SETUP: Will honor lease or not.
  METADATA: 0x100, // (all): must be set if metadata is present in the frame.
  NEXT: 0x20, // PAYLOAD: indicates data/metadata present, if set onNext will be invoked on receiver.
  RESPOND: 0x80, // KEEPALIVE: should KEEPALIVE be sent by peer on receipt.
  RESUME_ENABLE: 0x80,
}); // Maps error names to codes
const ERROR_CODES = (exports.ERROR_CODES = {
  APPLICATION_ERROR: 0x00000201,
  CANCELED: 0x00000203,
  CONNECTION_CLOSE: 0x00000102,
  CONNECTION_ERROR: 0x00000101,
  INVALID: 0x00000204,
  INVALID_SETUP: 0x00000001,
  REJECTED: 0x00000202,
  REJECTED_RESUME: 0x00000004,
  REJECTED_SETUP: 0x00000003,
  RESERVED: 0x00000000,
  RESERVED_EXTENSION: 0xffffffff,
  UNSUPPORTED_SETUP: 0x00000002,
}); // Maps error codes to names
const ERROR_EXPLANATIONS = (exports.ERROR_EXPLANATIONS = {});
(0, _forEachObject2.default)(ERROR_CODES, (code, explanation) => {
  ERROR_EXPLANATIONS[code] = explanation;
});
const FLAGS_MASK = (exports.FLAGS_MASK = 0x3ff); // low 10 bits
const FRAME_TYPE_OFFFSET = (exports.FRAME_TYPE_OFFFSET = 10); // frame type is offset 10 bytes within the uint16 containing type + flags
const MAX_CODE = (exports.MAX_CODE = 0x7fffffff); // uint31
const MAX_KEEPALIVE = (exports.MAX_KEEPALIVE = 0x7fffffff); // uint31
const MAX_LIFETIME = (exports.MAX_LIFETIME = 0x7fffffff); // uint31
const MAX_METADATA_LENGTH = (exports.MAX_METADATA_LENGTH = 0xffffff); // uint24
const MAX_MIME_LENGTH = (exports.MAX_MIME_LENGTH = 0xff); // int8
const MAX_REQUEST_COUNT = (exports.MAX_REQUEST_COUNT = 0x7fffffff); // uint31
const MAX_REQUEST_N = (exports.MAX_REQUEST_N = 0x7fffffff); // uint31
const MAX_RESUME_LENGTH = (exports.MAX_RESUME_LENGTH = 0xffff); // uint16
const MAX_STREAM_ID = (exports.MAX_STREAM_ID = 0x7fffffff); // uint31
const MAX_TTL = (exports.MAX_TTL = 0x7fffffff); // uint31
const MAX_VERSION = (exports.MAX_VERSION = 0xffff); // uint16
/**
 * Returns true iff the flags have the IGNORE bit set.
 */ function isIgnore(
  flags
) {
  return (flags & FLAGS.IGNORE) === FLAGS.IGNORE;
}
/**
                                                                               * Returns true iff the flags have the METADATA bit set.
                                                                               */ function isMetadata(
  flags
) {
  return (flags & FLAGS.METADATA) === FLAGS.METADATA;
}
/**
                                                                                                                                                                   * Returns true iff the flags have the COMPLETE bit set.
                                                                                                                                                                   */ function isComplete(
  flags
) {
  return (flags & FLAGS.COMPLETE) === FLAGS.COMPLETE;
}
/**
                                                                                                                                                                                                                                                       * Returns true iff the flags have the NEXT bit set.
                                                                                                                                                                                                                                                       */ function isNext(
  flags
) {
  return (flags & FLAGS.NEXT) === FLAGS.NEXT;
}
/**
                                                                                                                                                                                                                                                                                                                               * Returns true iff the flags have the RESPOND bit set.
                                                                                                                                                                                                                                                                                                                               */ function isRespond(
  flags
) {
  return (flags & FLAGS.RESPOND) === FLAGS.RESPOND;
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                * Returns true iff the flags have the RESUME_ENABLE bit set.
                                                                                                                                                                                                                                                                                                                                                                                                                */ function isResumeEnable(
  flags
) {
  return (flags & FLAGS.RESUME_ENABLE) === FLAGS.RESUME_ENABLE;
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Returns true iff the flags have the LEASE bit set.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */ function isLease(
  flags
) {
  return (flags & FLAGS.LEASE) === FLAGS.LEASE;
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * Returns true iff the frame type is counted toward the implied
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * client/server position used for the resumption protocol.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */ function isResumePositionFrameType(
  type
) {
  return type === FRAME_TYPES.CANCEL ||
    type === FRAME_TYPES.ERROR ||
    type === FRAME_TYPES.METADATA_PUSH ||
    type === FRAME_TYPES.PAYLOAD ||
    type === FRAME_TYPES.REQUEST_CHANNEL ||
    type === FRAME_TYPES.REQUEST_FNF ||
    type === FRAME_TYPES.REQUEST_RESPONSE ||
    type === FRAME_TYPES.REQUEST_STREAM;
}
function getFrameTypeName(type) {
  const name = FRAME_TYPE_NAMES[type];
  return name != null ? name : toHex(type);
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * Constructs an Error object given the contents of an error frame. The
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * `source` property contains metadata about the error for use in introspecting
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * the error at runtime:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * - `error.source.code: number`: the error code returned by the server.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * - `error.source.explanation: string`: human-readable explanation of the code
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              *   (this value is not standardized and may change).
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * - `error.source.message: string`: the error string returned by the server.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */ function createErrorFromFrame(
  frame
) {
  const {code, message} = frame;
  const explanation = getErrorCodeExplanation(code);
  const error = new Error(
    (0, _sprintf2.default)(
      'RSocket error %s (%s): %s. See error `source` property for details.',
      toHex(code),
      explanation,
      message
    )
  );
  error.source = {code, explanation, message};
  return error;
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Given a RSocket error code, returns a human-readable explanation of that
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * code, following the names used in the protocol specification.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */ function getErrorCodeExplanation(
  code
) {
  const explanation = ERROR_EXPLANATIONS[code];
  if (explanation != null) {
    return explanation;
  } else if (code <= 0x00300) {
    return 'RESERVED (PROTOCOL)';
  } else {
    return 'RESERVED (APPLICATION)';
  }
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Pretty-prints the frame for debugging purposes, with types, flags, and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * error codes annotated with descriptive names.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */ function printFrame(
  frame
) {
  const obj = Object.assign({}, frame);
  obj.type = getFrameTypeName(frame.type) + ` (${toHex(frame.type)})`;
  const flagNames = [];
  (0, _forEachObject2.default)(FLAGS, (flag, name) => {
    if ((frame.flags & flag) === flag) {
      flagNames.push(name);
    }
  });
  if (!flagNames.length) {
    flagNames.push('NO FLAGS');
  }
  obj.flags = flagNames.join(' | ') + ` (${toHex(frame.flags)})`;
  if (frame.type === FRAME_TYPES.ERROR) {
    obj.code = getErrorCodeExplanation(frame.code) + ` (${toHex(frame.code)})`;
  }
  return JSON.stringify(obj, null, 2);
}
function toHex(n) {
  return '0x' + n.toString(16);
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = __webpack_require__(16);
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.google.protobuf.Empty', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.Empty.displayName = 'proto.google.protobuf.Empty';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.Empty}
 */
proto.google.protobuf.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Empty;
  return proto.google.protobuf.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Empty}
 */
proto.google.protobuf.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.google.protobuf);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/* eslint-disable no-bitwise */ Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.createBuffer = undefined;
exports.readUInt24BE = readUInt24BE;
exports.writeUInt24BE = writeUInt24BE;
exports.readUInt64BE = readUInt64BE;
exports.writeUInt64BE = writeUInt64BE;
exports.byteLength = byteLength;
exports.toBuffer = toBuffer;
var _buffer = __webpack_require__(3);
var _invariant = __webpack_require__(1);
var _invariant2 = _interopRequireDefault(_invariant);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
/**
                                                                                                                                                                                                                                                       * Mimimum value that would overflow bitwise operators (2^32).
                                                                                                                                                                                                                                                       */ const BITWISE_OVERFLOW = 0x100000000; /**
                                                                                                                                                                                                                                                                                                * Read a uint24 from a buffer starting at the given offset.
                                                                                                                                                                                                                                                                                                */ // rewritten for browsers
function readUInt24BE(buffer, offset) {
  const val1 = buffer.readUInt8(offset) << 16;
  const val2 = buffer.readUInt8(offset + 1) << 8;
  const val3 = buffer.readUInt8(offset + 2);
  return val1 | val2 | val3;
}
/**
                                                                                                                                                                                                         * Writes a uint24 to a buffer starting at the given offset, returning the
                                                                                                                                                                                                         * offset of the next byte.
                                                                                                                                                                                                         */ function writeUInt24BE(
  buffer,
  value,
  offset
) {
  offset = buffer.writeUInt8(value >>> 16, offset); // 3rd byte
  offset = buffer.writeUInt8(value >>> 8 & 0xff, offset); // 2nd byte
  return buffer.writeUInt8(value & 0xff, offset); // 1st byte
}
/**
   * Read a uint64 (technically supports up to 53 bits per JS number
   * representation).
   */ function readUInt64BE(
  buffer,
  offset
) {
  const high = buffer.readUInt32BE(offset);
  const low = buffer.readUInt32BE(offset + 4);
  return high * BITWISE_OVERFLOW + low;
}
/**
                                                                                                                                                                         * Write a uint64 (technically supports up to 53 bits per JS number
                                                                                                                                                                         * representation).
                                                                                                                                                                         */ function writeUInt64BE(
  buffer,
  value,
  offset
) {
  const high = value / BITWISE_OVERFLOW | 0;
  const low = value % BITWISE_OVERFLOW;
  offset = buffer.writeUInt32BE(high, offset); // first half of uint64
  return buffer.writeUInt32BE(low, offset); // second half of uint64
}
/**
   * Determine the number of bytes it would take to encode the given data with the
   * given encoding.
   */ function byteLength(
  data,
  encoding
) {
  if (data == null) {
    return 0;
  }
  return _buffer.Buffer.byteLength(data, encoding);
}
/**
                                                                                                                           * Attempts to construct a buffer from the input, throws if invalid.
                                                                                                                           */ function toBuffer(
  data
) {
  // Buffer.from(buffer) copies which we don't want here
  if (data instanceof _buffer.Buffer) {
    return data;
  }
  (0, _invariant2.default)(
    data instanceof ArrayBuffer,
    'RSocketBufferUtils: Cannot construct buffer. Expected data to be an ' +
      'arraybuffer, got `%s`.',
    data
  );
  return _buffer.Buffer.from(data);
}
/**
                                                                                                                                                                                                                                                       * Function to create a buffer of a given sized filled with zeros.
                                                                                                                                                                                                                                                       */ const createBuffer = (exports.createBuffer = typeof _buffer.Buffer.alloc ===
  'function'
  ? length => _buffer.Buffer.alloc(length)
  : length => new _buffer.Buffer(length).fill(0));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});
var _ReactiveSocketTypes = __webpack_require__(30);

Object.keys(_ReactiveSocketTypes).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function() {
      return _ReactiveSocketTypes[key];
    },
  });
});
var _ReactiveStreamTypes = __webpack_require__(31);

Object.keys(_ReactiveStreamTypes).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function() {
      return _ReactiveStreamTypes[key];
    },
  });
});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = __webpack_require__(16);
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = __webpack_require__(8);
goog.exportSymbol('proto.io.netifi.proteus.broker.info.Broker', null, global);
goog.exportSymbol('proto.io.netifi.proteus.broker.info.Destination', null, global);
goog.exportSymbol('proto.io.netifi.proteus.broker.info.Event', null, global);
goog.exportSymbol('proto.io.netifi.proteus.broker.info.Event.Type', null, global);
goog.exportSymbol('proto.io.netifi.proteus.broker.info.Group', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.netifi.proteus.broker.info.Group = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.netifi.proteus.broker.info.Group, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.io.netifi.proteus.broker.info.Group.displayName = 'proto.io.netifi.proteus.broker.info.Group';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.io.netifi.proteus.broker.info.Group.prototype.toObject = function (opt_includeInstance) {
    return proto.io.netifi.proteus.broker.info.Group.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.io.netifi.proteus.broker.info.Group} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.io.netifi.proteus.broker.info.Group.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      group: jspb.Message.getFieldWithDefault(msg, 1, ""),
      broker: (f = msg.getBroker()) && proto.io.netifi.proteus.broker.info.Broker.toObject(includeInstance, f)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.netifi.proteus.broker.info.Group}
 */
proto.io.netifi.proteus.broker.info.Group.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.netifi.proteus.broker.info.Group();
  return proto.io.netifi.proteus.broker.info.Group.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.netifi.proteus.broker.info.Group} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.netifi.proteus.broker.info.Group}
 */
proto.io.netifi.proteus.broker.info.Group.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */reader.readString();
        msg.setGroup(value);
        break;
      case 2:
        var value = new proto.io.netifi.proteus.broker.info.Broker();
        reader.readMessage(value, proto.io.netifi.proteus.broker.info.Broker.deserializeBinaryFromReader);
        msg.setBroker(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.netifi.proteus.broker.info.Group.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.io.netifi.proteus.broker.info.Group.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.netifi.proteus.broker.info.Group} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.netifi.proteus.broker.info.Group.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getBroker();
  if (f != null) {
    writer.writeMessage(2, f, proto.io.netifi.proteus.broker.info.Broker.serializeBinaryToWriter);
  }
};

/**
 * optional string group = 1;
 * @return {string}
 */
proto.io.netifi.proteus.broker.info.Group.prototype.getGroup = function () {
  return (/** @type {string} */jspb.Message.getFieldWithDefault(this, 1, "")
  );
};

/** @param {string} value */
proto.io.netifi.proteus.broker.info.Group.prototype.setGroup = function (value) {
  jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional Broker broker = 2;
 * @return {?proto.io.netifi.proteus.broker.info.Broker}
 */
proto.io.netifi.proteus.broker.info.Group.prototype.getBroker = function () {
  return (/** @type{?proto.io.netifi.proteus.broker.info.Broker} */jspb.Message.getWrapperField(this, proto.io.netifi.proteus.broker.info.Broker, 2)
  );
};

/** @param {?proto.io.netifi.proteus.broker.info.Broker|undefined} value */
proto.io.netifi.proteus.broker.info.Group.prototype.setBroker = function (value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.io.netifi.proteus.broker.info.Group.prototype.clearBroker = function () {
  this.setBroker(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.io.netifi.proteus.broker.info.Group.prototype.hasBroker = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.netifi.proteus.broker.info.Destination = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.netifi.proteus.broker.info.Destination, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.io.netifi.proteus.broker.info.Destination.displayName = 'proto.io.netifi.proteus.broker.info.Destination';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.io.netifi.proteus.broker.info.Destination.prototype.toObject = function (opt_includeInstance) {
    return proto.io.netifi.proteus.broker.info.Destination.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.io.netifi.proteus.broker.info.Destination} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.io.netifi.proteus.broker.info.Destination.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      group: jspb.Message.getFieldWithDefault(msg, 1, ""),
      destination: jspb.Message.getFieldWithDefault(msg, 2, ""),
      broker: (f = msg.getBroker()) && proto.io.netifi.proteus.broker.info.Broker.toObject(includeInstance, f)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.netifi.proteus.broker.info.Destination}
 */
proto.io.netifi.proteus.broker.info.Destination.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.netifi.proteus.broker.info.Destination();
  return proto.io.netifi.proteus.broker.info.Destination.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.netifi.proteus.broker.info.Destination} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.netifi.proteus.broker.info.Destination}
 */
proto.io.netifi.proteus.broker.info.Destination.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */reader.readString();
        msg.setGroup(value);
        break;
      case 2:
        var value = /** @type {string} */reader.readString();
        msg.setDestination(value);
        break;
      case 3:
        var value = new proto.io.netifi.proteus.broker.info.Broker();
        reader.readMessage(value, proto.io.netifi.proteus.broker.info.Broker.deserializeBinaryFromReader);
        msg.setBroker(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.netifi.proteus.broker.info.Destination.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.io.netifi.proteus.broker.info.Destination.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.netifi.proteus.broker.info.Destination} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.netifi.proteus.broker.info.Destination.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getDestination();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getBroker();
  if (f != null) {
    writer.writeMessage(3, f, proto.io.netifi.proteus.broker.info.Broker.serializeBinaryToWriter);
  }
};

/**
 * optional string group = 1;
 * @return {string}
 */
proto.io.netifi.proteus.broker.info.Destination.prototype.getGroup = function () {
  return (/** @type {string} */jspb.Message.getFieldWithDefault(this, 1, "")
  );
};

/** @param {string} value */
proto.io.netifi.proteus.broker.info.Destination.prototype.setGroup = function (value) {
  jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string destination = 2;
 * @return {string}
 */
proto.io.netifi.proteus.broker.info.Destination.prototype.getDestination = function () {
  return (/** @type {string} */jspb.Message.getFieldWithDefault(this, 2, "")
  );
};

/** @param {string} value */
proto.io.netifi.proteus.broker.info.Destination.prototype.setDestination = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional Broker broker = 3;
 * @return {?proto.io.netifi.proteus.broker.info.Broker}
 */
proto.io.netifi.proteus.broker.info.Destination.prototype.getBroker = function () {
  return (/** @type{?proto.io.netifi.proteus.broker.info.Broker} */jspb.Message.getWrapperField(this, proto.io.netifi.proteus.broker.info.Broker, 3)
  );
};

/** @param {?proto.io.netifi.proteus.broker.info.Broker|undefined} value */
proto.io.netifi.proteus.broker.info.Destination.prototype.setBroker = function (value) {
  jspb.Message.setWrapperField(this, 3, value);
};

proto.io.netifi.proteus.broker.info.Destination.prototype.clearBroker = function () {
  this.setBroker(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.io.netifi.proteus.broker.info.Destination.prototype.hasBroker = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.netifi.proteus.broker.info.Broker = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.netifi.proteus.broker.info.Broker, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.io.netifi.proteus.broker.info.Broker.displayName = 'proto.io.netifi.proteus.broker.info.Broker';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.io.netifi.proteus.broker.info.Broker.prototype.toObject = function (opt_includeInstance) {
    return proto.io.netifi.proteus.broker.info.Broker.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.io.netifi.proteus.broker.info.Broker} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.io.netifi.proteus.broker.info.Broker.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      brokerid: jspb.Message.getFieldWithDefault(msg, 1, ""),
      ipaddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
      port: jspb.Message.getFieldWithDefault(msg, 3, 0),
      clusterport: jspb.Message.getFieldWithDefault(msg, 4, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.netifi.proteus.broker.info.Broker}
 */
proto.io.netifi.proteus.broker.info.Broker.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.netifi.proteus.broker.info.Broker();
  return proto.io.netifi.proteus.broker.info.Broker.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.netifi.proteus.broker.info.Broker} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.netifi.proteus.broker.info.Broker}
 */
proto.io.netifi.proteus.broker.info.Broker.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */reader.readString();
        msg.setBrokerid(value);
        break;
      case 2:
        var value = /** @type {string} */reader.readString();
        msg.setIpaddress(value);
        break;
      case 3:
        var value = /** @type {number} */reader.readInt32();
        msg.setPort(value);
        break;
      case 4:
        var value = /** @type {number} */reader.readInt32();
        msg.setClusterport(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.netifi.proteus.broker.info.Broker.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.io.netifi.proteus.broker.info.Broker.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.netifi.proteus.broker.info.Broker} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.netifi.proteus.broker.info.Broker.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getBrokerid();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getIpaddress();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt32(3, f);
  }
  f = message.getClusterport();
  if (f !== 0) {
    writer.writeInt32(4, f);
  }
};

/**
 * optional string brokerId = 1;
 * @return {string}
 */
proto.io.netifi.proteus.broker.info.Broker.prototype.getBrokerid = function () {
  return (/** @type {string} */jspb.Message.getFieldWithDefault(this, 1, "")
  );
};

/** @param {string} value */
proto.io.netifi.proteus.broker.info.Broker.prototype.setBrokerid = function (value) {
  jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string ipAddress = 2;
 * @return {string}
 */
proto.io.netifi.proteus.broker.info.Broker.prototype.getIpaddress = function () {
  return (/** @type {string} */jspb.Message.getFieldWithDefault(this, 2, "")
  );
};

/** @param {string} value */
proto.io.netifi.proteus.broker.info.Broker.prototype.setIpaddress = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional int32 port = 3;
 * @return {number}
 */
proto.io.netifi.proteus.broker.info.Broker.prototype.getPort = function () {
  return (/** @type {number} */jspb.Message.getFieldWithDefault(this, 3, 0)
  );
};

/** @param {number} value */
proto.io.netifi.proteus.broker.info.Broker.prototype.setPort = function (value) {
  jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional int32 clusterPort = 4;
 * @return {number}
 */
proto.io.netifi.proteus.broker.info.Broker.prototype.getClusterport = function () {
  return (/** @type {number} */jspb.Message.getFieldWithDefault(this, 4, 0)
  );
};

/** @param {number} value */
proto.io.netifi.proteus.broker.info.Broker.prototype.setClusterport = function (value) {
  jspb.Message.setProto3IntField(this, 4, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.netifi.proteus.broker.info.Event = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.netifi.proteus.broker.info.Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.io.netifi.proteus.broker.info.Event.displayName = 'proto.io.netifi.proteus.broker.info.Event';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.io.netifi.proteus.broker.info.Event.prototype.toObject = function (opt_includeInstance) {
    return proto.io.netifi.proteus.broker.info.Event.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.io.netifi.proteus.broker.info.Event} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.io.netifi.proteus.broker.info.Event.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      type: jspb.Message.getFieldWithDefault(msg, 1, 0),
      broker: (f = msg.getBroker()) && proto.io.netifi.proteus.broker.info.Broker.toObject(includeInstance, f),
      destination: (f = msg.getDestination()) && proto.io.netifi.proteus.broker.info.Destination.toObject(includeInstance, f)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.netifi.proteus.broker.info.Event}
 */
proto.io.netifi.proteus.broker.info.Event.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.netifi.proteus.broker.info.Event();
  return proto.io.netifi.proteus.broker.info.Event.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.netifi.proteus.broker.info.Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.netifi.proteus.broker.info.Event}
 */
proto.io.netifi.proteus.broker.info.Event.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.io.netifi.proteus.broker.info.Event.Type} */reader.readEnum();
        msg.setType(value);
        break;
      case 2:
        var value = new proto.io.netifi.proteus.broker.info.Broker();
        reader.readMessage(value, proto.io.netifi.proteus.broker.info.Broker.deserializeBinaryFromReader);
        msg.setBroker(value);
        break;
      case 3:
        var value = new proto.io.netifi.proteus.broker.info.Destination();
        reader.readMessage(value, proto.io.netifi.proteus.broker.info.Destination.deserializeBinaryFromReader);
        msg.setDestination(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.netifi.proteus.broker.info.Event.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.io.netifi.proteus.broker.info.Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.netifi.proteus.broker.info.Event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.netifi.proteus.broker.info.Event.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getBroker();
  if (f != null) {
    writer.writeMessage(2, f, proto.io.netifi.proteus.broker.info.Broker.serializeBinaryToWriter);
  }
  f = message.getDestination();
  if (f != null) {
    writer.writeMessage(3, f, proto.io.netifi.proteus.broker.info.Destination.serializeBinaryToWriter);
  }
};

/**
 * @enum {number}
 */
proto.io.netifi.proteus.broker.info.Event.Type = {
  JOIN: 0,
  LEAVE: 1
};

/**
 * optional Type type = 1;
 * @return {!proto.io.netifi.proteus.broker.info.Event.Type}
 */
proto.io.netifi.proteus.broker.info.Event.prototype.getType = function () {
  return (/** @type {!proto.io.netifi.proteus.broker.info.Event.Type} */jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};

/** @param {!proto.io.netifi.proteus.broker.info.Event.Type} value */
proto.io.netifi.proteus.broker.info.Event.prototype.setType = function (value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * optional Broker broker = 2;
 * @return {?proto.io.netifi.proteus.broker.info.Broker}
 */
proto.io.netifi.proteus.broker.info.Event.prototype.getBroker = function () {
  return (/** @type{?proto.io.netifi.proteus.broker.info.Broker} */jspb.Message.getWrapperField(this, proto.io.netifi.proteus.broker.info.Broker, 2)
  );
};

/** @param {?proto.io.netifi.proteus.broker.info.Broker|undefined} value */
proto.io.netifi.proteus.broker.info.Event.prototype.setBroker = function (value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.io.netifi.proteus.broker.info.Event.prototype.clearBroker = function () {
  this.setBroker(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.io.netifi.proteus.broker.info.Event.prototype.hasBroker = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional Destination destination = 3;
 * @return {?proto.io.netifi.proteus.broker.info.Destination}
 */
proto.io.netifi.proteus.broker.info.Event.prototype.getDestination = function () {
  return (/** @type{?proto.io.netifi.proteus.broker.info.Destination} */jspb.Message.getWrapperField(this, proto.io.netifi.proteus.broker.info.Destination, 3)
  );
};

/** @param {?proto.io.netifi.proteus.broker.info.Destination|undefined} value */
proto.io.netifi.proteus.broker.info.Event.prototype.setDestination = function (value) {
  jspb.Message.setWrapperField(this, 3, value);
};

proto.io.netifi.proteus.broker.info.Event.prototype.clearDestination = function () {
  this.setDestination(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.io.netifi.proteus.broker.info.Event.prototype.hasDestination = function () {
  return jspb.Message.getField(this, 3) != null;
};

goog.object.extend(exports, proto.io.netifi.proteus.broker.info);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(11);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});
exports.IdentitySerializers = (exports.IdentitySerializer = (exports.JsonSerializers = (exports.JsonSerializer = undefined)));

var _buffer = __webpack_require__(3);
var _invariant = __webpack_require__(1);
var _invariant2 = _interopRequireDefault(_invariant);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

// JSON serializer
/**
 * A Serializer transforms data between the application encoding used in
 * Payloads and the Encodable type accepted by the transport client.
 */ const JsonSerializer = (exports.JsonSerializer = {
  deserialize: data => {
    let str;
    if (data == null) {
      return null;
    } else if (typeof data === 'string') {
      str = data;
    } else if (_buffer.Buffer.isBuffer(data)) {
      const buffer = data;
      str = buffer.toString('utf8');
    } else {
      const buffer = _buffer.Buffer.from(data);
      str = buffer.toString('utf8');
    }
    return JSON.parse(str);
  },
  serialize: JSON.stringify,
}); // rewritten for browsers

const JsonSerializers = (exports.JsonSerializers = {
  data: JsonSerializer,
  metadata: JsonSerializer,
});

// Pass-through serializer
const IdentitySerializer = (exports.IdentitySerializer = {
  deserialize: data => {
    (0, _invariant2.default)(
      data == null ||
        typeof data === 'string' ||
        _buffer.Buffer.isBuffer(data) ||
        data instanceof Uint8Array,
      'RSocketSerialization: Expected data to be a string, Buffer, or ' +
        'Uint8Array. Got `%s`.',
      data
    );

    return data;
  },
  serialize: data => data,
});

const IdentitySerializers = (exports.IdentitySerializers = {
  data: IdentitySerializer,
  metadata: IdentitySerializer,
});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});
exports.createServerMachine = createServerMachine;
exports.createClientMachine = createClientMachine;
var _rsocketFlowable = __webpack_require__(0);
var _emptyFunction = __webpack_require__(11);
var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
var _invariant = __webpack_require__(1);
var _invariant2 = _interopRequireDefault(_invariant);
var _warning = __webpack_require__(13);
var _warning2 = _interopRequireDefault(_warning);
var _RSocketFrame = __webpack_require__(7);
var _RSocketSerialization = __webpack_require__(14);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
class ResponderWrapper {
  constructor(responder) {
    this._responder = responder || {};
  }
  setResponder(responder) {
    this._responder = responder || {};
  }
  fireAndForget(payload) {
    if (this._responder.fireAndForget) {
      try {
        this._responder.fireAndForget(payload);
      } catch (error) {
        console.error('fireAndForget threw an exception', error);
      }
    }
  }
  requestResponse(payload) {
    let error;
    if (this._responder.requestResponse) {
      try {
        return this._responder.requestResponse(payload);
      } catch (_error) {
        console.error('requestResponse threw an exception', _error);
        error = _error;
      }
    }
    return _rsocketFlowable.Single.error(error || new Error('not implemented'));
  }
  requestStream(payload) {
    let error;
    if (this._responder.requestStream) {
      try {
        return this._responder.requestStream(payload);
      } catch (_error) {
        console.error('requestStream threw an exception', _error);
        error = _error;
      }
    }
    return _rsocketFlowable.Flowable.error(
      error || new Error('not implemented')
    );
  }
  requestChannel(payloads) {
    let error;
    if (this._responder.requestChannel) {
      try {
        return this._responder.requestChannel(payloads);
      } catch (_error) {
        console.error('requestChannel threw an exception', _error);
        error = _error;
      }
    }
    return _rsocketFlowable.Flowable.error(
      error || new Error('not implemented')
    );
  }
  metadataPush(payload) {
    let error;
    if (this._responder.metadataPush) {
      try {
        return this._responder.metadataPush(payload);
      } catch (_error) {
        console.error('metadataPush threw an exception', _error);
        error = _error;
      }
    }
    return _rsocketFlowable.Single.error(error || new Error('not implemented'));
  }
}
function createServerMachine(
  connection,
  connectionPublisher,
  serializers,
  requestHandler
) {
  return new RSocketMachineImpl(
    'SERVER',
    connection,
    connectionPublisher,
    serializers,
    requestHandler
  );
}
function createClientMachine(
  connection,
  connectionPublisher,
  serializers,
  requestHandler
) {
  return new RSocketMachineImpl(
    'CLIENT',
    connection,
    connectionPublisher,
    serializers,
    requestHandler
  );
}

class RSocketMachineImpl {
  constructor(
    role,
    connection,
    connectionPublisher,
    serializers,
    requestHandler
  ) {
    this._handleTransportClose = () => {
      this._handleError(new Error('RSocket: The connection was closed.'));
    };
    this._handleError = error => {
      // Error any open request streams
      this._receivers.forEach(receiver => {
        receiver.onError(error);
      });
      this._receivers.clear();
    };
    this._handleFrame = frame => {
      const {streamId} = frame;
      if (streamId === _RSocketFrame.CONNECTION_STREAM_ID) {
        this._handleConnectionFrame(frame);
      } else {
        this._handleStreamFrame(streamId, frame);
      }
    };
    this._connection = connection;
    this._nextStreamId = role === 'CLIENT' ? 1 : 2;
    this._receivers = new Map();
    this._subscriptions = new Map();
    this._serializers = serializers ||
      _RSocketSerialization.IdentitySerializers;
    this._requestHandler = new ResponderWrapper(requestHandler); // Subscribe to completion/errors before sending anything
    connectionPublisher({
      onComplete: this._handleTransportClose,
      onError: this._handleError,
      onNext: this._handleFrame,
      onSubscribe: subscription =>
        subscription.request(Number.MAX_SAFE_INTEGER),
    }); // Cleanup when the connection closes
    this._connection.connectionStatus().subscribe({
      onNext: status => {
        if (status.kind === 'CLOSED') {
          this._handleTransportClose();
        } else if (status.kind === 'ERROR') {
          this._handleError(status.error);
        }
      },
      onSubscribe: subscription =>
        subscription.request(Number.MAX_SAFE_INTEGER),
    });
  }
  setRequestHandler(requestHandler) {
    this._requestHandler.setResponder(requestHandler);
  }
  close() {
    this._connection.close();
  }
  connectionStatus() {
    return this._connection.connectionStatus();
  }
  fireAndForget(payload) {
    const streamId = this._getNextStreamId();
    const data = this._serializers.data.serialize(payload.data);
    const metadata = this._serializers.metadata.serialize(payload.metadata);
    const frame = {
      data,
      flags: payload.metadata !== undefined ? _RSocketFrame.FLAGS.METADATA : 0,
      metadata,
      streamId,
      type: _RSocketFrame.FRAME_TYPES.REQUEST_FNF,
    };
    this._connection.sendOne(frame);
  }
  requestResponse(payload) {
    const streamId = this._getNextStreamId();
    return new _rsocketFlowable.Single(subscriber => {
      this._receivers.set(streamId, {
        onComplete: _emptyFunction2.default,
        onError: error => subscriber.onError(error),
        onNext: data => subscriber.onComplete(data),
      });
      const data = this._serializers.data.serialize(payload.data);
      const metadata = this._serializers.metadata.serialize(payload.metadata);
      const frame = {
        data,
        flags: payload.metadata !== undefined
          ? _RSocketFrame.FLAGS.METADATA
          : 0,
        metadata,
        streamId,
        type: _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE,
      };
      this._connection.sendOne(frame);
      subscriber.onSubscribe(() => {
        this._receivers.delete(streamId);
        const cancelFrame = {
          flags: 0,
          streamId,
          type: _RSocketFrame.FRAME_TYPES.CANCEL,
        };
        this._connection.sendOne(cancelFrame);
      });
    });
  }
  requestStream(payload) {
    const streamId = this._getNextStreamId();
    return new _rsocketFlowable.Flowable(
      subscriber => {
        this._receivers.set(streamId, subscriber);
        let initialized = false;
        subscriber.onSubscribe({
          cancel: () => {
            this._receivers.delete(streamId);
            if (!initialized) {
              return;
            }
            const cancelFrame = {
              flags: 0,
              streamId,
              type: _RSocketFrame.FRAME_TYPES.CANCEL,
            };
            this._connection.sendOne(cancelFrame);
          },
          request: n => {
            if (n > _RSocketFrame.MAX_REQUEST_N) {
              (0, _warning2.default)(
                false,
                'RSocketClient: Invalid request value `%s`, the maximum ' +
                  'value supported by the RSocket protocol is `%s`. Sending ' +
                  'the maximum supported value instead.',
                n,
                _RSocketFrame.MAX_REQUEST_N
              );
              n = _RSocketFrame.MAX_REQUEST_N;
            }
            if (initialized) {
              const requestNFrame = {
                flags: 0,
                requestN: n,
                streamId,
                type: _RSocketFrame.FRAME_TYPES.REQUEST_N,
              };
              this._connection.sendOne(requestNFrame);
            } else {
              initialized = true;
              const data = this._serializers.data.serialize(payload.data);
              const metadata = this._serializers.metadata.serialize(
                payload.metadata
              );
              const requestStreamFrame = {
                data,
                flags: payload.metadata !== undefined
                  ? _RSocketFrame.FLAGS.METADATA
                  : 0,
                metadata,
                requestN: n,
                streamId,
                type: _RSocketFrame.FRAME_TYPES.REQUEST_STREAM,
              };
              this._connection.sendOne(requestStreamFrame);
            }
          },
        });
      },
      _RSocketFrame.MAX_REQUEST_N
    );
  }
  requestChannel(payloads) {
    // TODO #18065296: implement requestChannel
    throw new Error('requestChannel() is not implemented');
  }
  metadataPush(payload) {
    // TODO #18065331: implement metadataPush
    throw new Error('metadataPush() is not implemented');
  }
  _getNextStreamId() {
    const streamId = this._nextStreamId;
    (0, _invariant2.default)(
      streamId <= _RSocketFrame.MAX_STREAM_ID,
      'RSocketClient: Cannot issue request, maximum stream id reached (%s).',
      _RSocketFrame.MAX_STREAM_ID
    );
    this._nextStreamId += 2;
    return streamId;
  }
  /**
                                                                                                                                                                                                                                                                                                                                    * Handle the connection closing normally: this is an error for any open streams.
                                                                                                                                                                                                                                                                                                                                    */ /**
                                                                                                                                                                                                                                                                                                                                        * Handle the transport connection closing abnormally or a connection-level protocol error.
                                                                                                                                                                                                                                                                                                                                        */ _handleConnectionError(
    error
  ) {
    this._handleError(error);
    this._connection.close();
  }
  /**
                                                                                                                                                                                                                                                                                                                                                                                                                              * Handle a frame received from the transport client.
                                                                                                                                                                                                                                                                                                                                                                                                                              */ /**
                                                                                                                                                                                                                                                                                                                                                                                                                                  * Handle connection frames (stream id === 0).
                                                                                                                                                                                                                                                                                                                                                                                                                                  */ _handleConnectionFrame(
    frame
  ) {
    switch (frame.type) {
      case _RSocketFrame.FRAME_TYPES.ERROR:
        const error = (0, _RSocketFrame.createErrorFromFrame)(frame);
        this._handleConnectionError(error);
        break;
      case _RSocketFrame.FRAME_TYPES.EXT: // Extensions are not supported
        break;
      case _RSocketFrame.FRAME_TYPES.KEEPALIVE:
        if ((0, _RSocketFrame.isRespond)(frame.flags)) {
          this._connection.sendOne(
            Object.assign({}, frame, {
              flags: frame.flags ^ _RSocketFrame.FLAGS.RESPOND, // eslint-disable-line no-bitwise
              lastReceivedPosition: 0,
            })
          );
        }
        break;
      case _RSocketFrame.FRAME_TYPES.LEASE:
        // TODO #18064860: support lease
        break;
      case _RSocketFrame.FRAME_TYPES.METADATA_PUSH:
      case _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL:
      case _RSocketFrame.FRAME_TYPES.REQUEST_FNF:
      case _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE:
      case _RSocketFrame.FRAME_TYPES.REQUEST_STREAM:
        // TODO #18064706: handle requests from server
        break;
      case _RSocketFrame.FRAME_TYPES.RESERVED:
        // No-op
        break;
      case _RSocketFrame.FRAME_TYPES.RESUME:
      case _RSocketFrame.FRAME_TYPES.RESUME_OK:
        // TODO #18065016: support resumption
        break;
      default:
        if (false) {
          console.log(
            'RSocketClient: Unsupported frame type `%s` on stream `%s`.',
            (0, _RSocketFrame.getFrameTypeName)(frame.type),
            _RSocketFrame.CONNECTION_STREAM_ID
          );
        }
        break;
    }
  }

  /**
     * Handle stream-specific frames (stream id !== 0).
     */
  _handleStreamFrame(streamId, frame) {
    switch (frame.type) {
      case _RSocketFrame.FRAME_TYPES.CANCEL:
        this._handleCancel(streamId, frame);
        break;
      case _RSocketFrame.FRAME_TYPES.REQUEST_N:
        this._handleRequestN(streamId, frame);
        break;
      case _RSocketFrame.FRAME_TYPES.REQUEST_FNF:
        this._handleFireAndForget(streamId, frame);
        break;
      case _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE:
        this._handleRequestResponse(streamId, frame);
        break;
      case _RSocketFrame.FRAME_TYPES.REQUEST_STREAM:
        this._handleRequestStream(streamId, frame);
        break;
      case _RSocketFrame.FRAME_TYPES.ERROR:
        const error = (0, _RSocketFrame.createErrorFromFrame)(frame);
        this._handleStreamError(streamId, error);
        break;
      case _RSocketFrame.FRAME_TYPES.PAYLOAD:
        const receiver = this._receivers.get(streamId);
        if (receiver != null) {
          if ((0, _RSocketFrame.isNext)(frame.flags)) {
            const payload = {
              data: this._serializers.data.deserialize(frame.data),
              metadata: this._serializers.metadata.deserialize(frame.metadata),
            };

            receiver.onNext(payload);
          }
          if ((0, _RSocketFrame.isComplete)(frame.flags)) {
            this._receivers.delete(streamId);
            receiver.onComplete();
          }
        }
        break;
      default:
        if (false) {
          console.log(
            'RSocketClient: Unsupported frame type `%s` on stream `%s`.',
            (0, _RSocketFrame.getFrameTypeName)(frame.type),
            streamId
          );
        }
        break;
    }
  }

  _handleCancel(streamId, frame) {
    const subscription = this._subscriptions.get(streamId);
    if (subscription) {
      subscription.cancel();
      this._subscriptions.delete(streamId);
    }
  }

  _handleRequestN(streamId, frame) {
    const subscription = this._subscriptions.get(streamId);
    if (subscription) {
      subscription.request(frame.requestN);
    }
  }

  _handleFireAndForget(streamId, frame) {
    const payload = this._deserializePayload(frame);
    this._requestHandler.fireAndForget(payload);
  }

  _handleRequestResponse(streamId, frame) {
    const payload = this._deserializePayload(frame);
    this._requestHandler.requestResponse(payload).subscribe({
      onComplete: payload => {
        this._sendStreamPayload(streamId, payload, true);
      },
      onError: error => this._sendStreamError(streamId, error),
      onSubscribe: cancel => {
        const subscription = {
          cancel,
          request: _emptyFunction2.default,
        };

        this._subscriptions.set(streamId, subscription);
      },
    });
  }

  _handleRequestStream(streamId, frame) {
    const payload = this._deserializePayload(frame);
    this._requestHandler.requestStream(payload).subscribe({
      onComplete: () => this._sendStreamComplete(streamId),
      onError: error => this._sendStreamError(streamId, error),
      onNext: payload => this._sendStreamPayload(streamId, payload),
      onSubscribe: subscription => {
        this._subscriptions.set(streamId, subscription);
        subscription.request(frame.requestN);
      },
    });
  }

  _sendStreamComplete(streamId) {
    this._subscriptions.delete(streamId);
    this._connection.sendOne({
      data: null,
      flags: _RSocketFrame.FLAGS.COMPLETE,
      metadata: null,
      streamId,
      type: _RSocketFrame.FRAME_TYPES.PAYLOAD,
    });
  }

  _sendStreamError(streamId, error) {
    this._subscriptions.delete(streamId);
    this._connection.sendOne({
      code: _RSocketFrame.ERROR_CODES.APPLICATION_ERROR,
      flags: 0,
      message: error.message,
      streamId,
      type: _RSocketFrame.FRAME_TYPES.ERROR,
    });
  }

  _sendStreamPayload(streamId, payload, complete = false) {
    let flags = _RSocketFrame.FLAGS.NEXT;
    if (complete) {
      // eslint-disable-next-line no-bitwise
      flags |= _RSocketFrame.FLAGS.COMPLETE;
      this._subscriptions.delete(streamId);
    }
    const data = this._serializers.data.serialize(payload.data);
    const metadata = this._serializers.metadata.serialize(payload.metadata);
    this._connection.sendOne({
      data,
      flags,
      metadata,
      streamId,
      type: _RSocketFrame.FRAME_TYPES.PAYLOAD,
    });
  }

  _deserializePayload(frame) {
    return deserializePayload(this._serializers, frame);
  }

  /**
     * Handle an error specific to a stream.
     */
  _handleStreamError(streamId, error) {
    const receiver = this._receivers.get(streamId);
    if (receiver != null) {
      this._receivers.delete(streamId);
      receiver.onError(error);
    }
  }
}

function deserializePayload(serializers, frame) {
  return {
    data: serializers.data.deserialize(frame.data),
    metadata: serializers.metadata.deserialize(frame.metadata),
  };
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, Buffer) {var $jscomp={scope:{},getGlobal:function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global?global:a}};$jscomp.global=$jscomp.getGlobal(this);$jscomp.initSymbol=function(){$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol);$jscomp.initSymbol=function(){}};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(a){return"jscomp_symbol_"+a+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();$jscomp.global.Symbol.iterator||($jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));$jscomp.initSymbolIterator=function(){}};$jscomp.makeIterator=function(a){$jscomp.initSymbolIterator();$jscomp.initSymbol();$jscomp.initSymbolIterator();var b=a[Symbol.iterator];if(b)return b.call(a);var c=0;return{next:function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}}};
$jscomp.arrayFromIterator=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};$jscomp.arrayFromIterable=function(a){return a instanceof Array?a:$jscomp.arrayFromIterator($jscomp.makeIterator(a))};$jscomp.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]};$jscomp.array=$jscomp.array||{};
$jscomp.iteratorFromArray=function(a,b){$jscomp.initSymbolIterator();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};$jscomp.initSymbol();$jscomp.initSymbolIterator();d[Symbol.iterator]=function(){return d};return d};
$jscomp.findInternal=function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{i:e,v:f}}return{i:-1,v:void 0}};
$jscomp.array.from=function(a,b,c){$jscomp.initSymbolIterator();b=null!=b?b:function(a){return a};var d=[];$jscomp.initSymbol();$jscomp.initSymbolIterator();var e=a[Symbol.iterator];"function"==typeof e&&(a=e.call(a));if("function"==typeof a.next)for(;!(e=a.next()).done;)d.push(b.call(c,e.value));else for(var e=a.length,f=0;f<e;f++)d.push(b.call(c,a[f]));return d};$jscomp.array.of=function(a){return $jscomp.array.from(arguments)};
$jscomp.array.entries=function(){return $jscomp.iteratorFromArray(this,function(a,b){return[a,b]})};$jscomp.array.installHelper_=function(a,b){!Array.prototype[a]&&Object.defineProperties&&Object.defineProperty&&Object.defineProperty(Array.prototype,a,{configurable:!0,enumerable:!1,writable:!0,value:b})};$jscomp.array.entries$install=function(){$jscomp.array.installHelper_("entries",$jscomp.array.entries)};$jscomp.array.keys=function(){return $jscomp.iteratorFromArray(this,function(a){return a})};
$jscomp.array.keys$install=function(){$jscomp.array.installHelper_("keys",$jscomp.array.keys)};$jscomp.array.values=function(){return $jscomp.iteratorFromArray(this,function(a,b){return b})};$jscomp.array.values$install=function(){$jscomp.array.installHelper_("values",$jscomp.array.values)};
$jscomp.array.copyWithin=function(a,b,c){var d=this.length;a=Number(a);b=Number(b);c=Number(null!=c?c:d);if(a<b)for(c=Math.min(c,d);b<c;)b in this?this[a++]=this[b++]:(delete this[a++],b++);else for(c=Math.min(c,d+b-a),a+=c-b;c>b;)--c in this?this[--a]=this[c]:delete this[a];return this};$jscomp.array.copyWithin$install=function(){$jscomp.array.installHelper_("copyWithin",$jscomp.array.copyWithin)};
$jscomp.array.fill=function(a,b,c){var d=this.length||0;0>b&&(b=Math.max(0,d+b));if(null==c||c>d)c=d;c=Number(c);0>c&&(c=Math.max(0,d+c));for(b=Number(b||0);b<c;b++)this[b]=a;return this};$jscomp.array.fill$install=function(){$jscomp.array.installHelper_("fill",$jscomp.array.fill)};$jscomp.array.find=function(a,b){return $jscomp.findInternal(this,a,b).v};$jscomp.array.find$install=function(){$jscomp.array.installHelper_("find",$jscomp.array.find)};
$jscomp.array.findIndex=function(a,b){return $jscomp.findInternal(this,a,b).i};$jscomp.array.findIndex$install=function(){$jscomp.array.installHelper_("findIndex",$jscomp.array.findIndex)};$jscomp.ASSUME_NO_NATIVE_MAP=!1;
$jscomp.Map$isConformant=function(){if($jscomp.ASSUME_NO_NATIVE_MAP)return!1;var a=$jscomp.global.Map;if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a($jscomp.makeIterator([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(f){return!1}};
$jscomp.Map=function(a){this.data_={};this.head_=$jscomp.Map.createHead();this.size=0;if(a){a=$jscomp.makeIterator(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}};
$jscomp.Map.prototype.set=function(a,b){var c=$jscomp.Map.maybeGetEntry(this,a);c.list||(c.list=this.data_[c.id]=[]);c.entry?c.entry.value=b:(c.entry={next:this.head_,previous:this.head_.previous,head:this.head_,key:a,value:b},c.list.push(c.entry),this.head_.previous.next=c.entry,this.head_.previous=c.entry,this.size++);return this};
$jscomp.Map.prototype["delete"]=function(a){a=$jscomp.Map.maybeGetEntry(this,a);return a.entry&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.data_[a.id],a.entry.previous.next=a.entry.next,a.entry.next.previous=a.entry.previous,a.entry.head=null,this.size--,!0):!1};$jscomp.Map.prototype.clear=function(){this.data_={};this.head_=this.head_.previous=$jscomp.Map.createHead();this.size=0};$jscomp.Map.prototype.has=function(a){return!!$jscomp.Map.maybeGetEntry(this,a).entry};
$jscomp.Map.prototype.get=function(a){return(a=$jscomp.Map.maybeGetEntry(this,a).entry)&&a.value};$jscomp.Map.prototype.entries=function(){return $jscomp.Map.makeIterator_(this,function(a){return[a.key,a.value]})};$jscomp.Map.prototype.keys=function(){return $jscomp.Map.makeIterator_(this,function(a){return a.key})};$jscomp.Map.prototype.values=function(){return $jscomp.Map.makeIterator_(this,function(a){return a.value})};
$jscomp.Map.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};$jscomp.Map.maybeGetEntry=function(a,b){var c=$jscomp.Map.getId(b),d=a.data_[c];if(d&&Object.prototype.hasOwnProperty.call(a.data_,c))for(var e=0;e<d.length;e++){var f=d[e];if(b!==b&&f.key!==f.key||b===f.key)return{id:c,list:d,index:e,entry:f}}return{id:c,list:d,index:-1,entry:void 0}};
$jscomp.Map.makeIterator_=function(a,b){var c=a.head_,d={next:function(){if(c){for(;c.head!=a.head_;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}}};$jscomp.initSymbol();$jscomp.initSymbolIterator();d[Symbol.iterator]=function(){return d};return d};$jscomp.Map.mapIndex_=0;$jscomp.Map.createHead=function(){var a={};return a.previous=a.next=a.head=a};
$jscomp.Map.getId=function(a){if(!(a instanceof Object))return"p_"+a;if(!($jscomp.Map.idKey in a))try{$jscomp.Map.defineProperty(a,$jscomp.Map.idKey,{value:++$jscomp.Map.mapIndex_})}catch(b){}return $jscomp.Map.idKey in a?a[$jscomp.Map.idKey]:"o_ "+a};$jscomp.Map.defineProperty=Object.defineProperty?function(a,b,c){Object.defineProperty(a,b,{value:String(c)})}:function(a,b,c){a[b]=String(c)};$jscomp.Map.Entry=function(){};
$jscomp.Map$install=function(){$jscomp.initSymbol();$jscomp.initSymbolIterator();$jscomp.Map$isConformant()?$jscomp.Map=$jscomp.global.Map:($jscomp.initSymbol(),$jscomp.initSymbolIterator(),$jscomp.Map.prototype[Symbol.iterator]=$jscomp.Map.prototype.entries,$jscomp.initSymbol(),$jscomp.Map.idKey=Symbol("map-id-key"),$jscomp.Map$install=function(){})};$jscomp.math=$jscomp.math||{};
$jscomp.math.clz32=function(a){a=Number(a)>>>0;if(0===a)return 32;var b=0;0===(a&4294901760)&&(a<<=16,b+=16);0===(a&4278190080)&&(a<<=8,b+=8);0===(a&4026531840)&&(a<<=4,b+=4);0===(a&3221225472)&&(a<<=2,b+=2);0===(a&2147483648)&&b++;return b};$jscomp.math.imul=function(a,b){a=Number(a);b=Number(b);var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0};$jscomp.math.sign=function(a){a=Number(a);return 0===a||isNaN(a)?a:0<a?1:-1};
$jscomp.math.log10=function(a){return Math.log(a)/Math.LN10};$jscomp.math.log2=function(a){return Math.log(a)/Math.LN2};$jscomp.math.log1p=function(a){a=Number(a);if(.25>a&&-.25<a){for(var b=a,c=1,d=a,e=0,f=1;e!=d;)b*=a,f*=-1,d=(e=d)+f*b/++c;return d}return Math.log(1+a)};$jscomp.math.expm1=function(a){a=Number(a);if(.25>a&&-.25<a){for(var b=a,c=1,d=a,e=0;e!=d;)b*=a/++c,d=(e=d)+b;return d}return Math.exp(a)-1};$jscomp.math.cosh=function(a){a=Number(a);return(Math.exp(a)+Math.exp(-a))/2};
$jscomp.math.sinh=function(a){a=Number(a);return 0===a?a:(Math.exp(a)-Math.exp(-a))/2};$jscomp.math.tanh=function(a){a=Number(a);if(0===a)return a;var b=Math.exp(-2*Math.abs(a)),b=(1-b)/(1+b);return 0>a?-b:b};$jscomp.math.acosh=function(a){a=Number(a);return Math.log(a+Math.sqrt(a*a-1))};$jscomp.math.asinh=function(a){a=Number(a);if(0===a)return a;var b=Math.log(Math.abs(a)+Math.sqrt(a*a+1));return 0>a?-b:b};
$jscomp.math.atanh=function(a){a=Number(a);return($jscomp.math.log1p(a)-$jscomp.math.log1p(-a))/2};$jscomp.math.hypot=function(a,b,c){a=Number(a);b=Number(b);var d,e,f,g=Math.max(Math.abs(a),Math.abs(b));for(d=2;d<arguments.length;d++)g=Math.max(g,Math.abs(arguments[d]));if(1E100<g||1E-100>g){a/=g;b/=g;f=a*a+b*b;for(d=2;d<arguments.length;d++)e=Number(arguments[d])/g,f+=e*e;return Math.sqrt(f)*g}f=a*a+b*b;for(d=2;d<arguments.length;d++)e=Number(arguments[d]),f+=e*e;return Math.sqrt(f)};
$jscomp.math.trunc=function(a){a=Number(a);if(isNaN(a)||Infinity===a||-Infinity===a||0===a)return a;var b=Math.floor(Math.abs(a));return 0>a?-b:b};$jscomp.math.cbrt=function(a){if(0===a)return a;a=Number(a);var b=Math.pow(Math.abs(a),1/3);return 0>a?-b:b};$jscomp.number=$jscomp.number||{};$jscomp.number.isFinite=function(a){return"number"!==typeof a?!1:!isNaN(a)&&Infinity!==a&&-Infinity!==a};$jscomp.number.isInteger=function(a){return $jscomp.number.isFinite(a)?a===Math.floor(a):!1};
$jscomp.number.isNaN=function(a){return"number"===typeof a&&isNaN(a)};$jscomp.number.isSafeInteger=function(a){return $jscomp.number.isInteger(a)&&Math.abs(a)<=$jscomp.number.MAX_SAFE_INTEGER};$jscomp.number.EPSILON=function(){return Math.pow(2,-52)}();$jscomp.number.MAX_SAFE_INTEGER=function(){return 9007199254740991}();$jscomp.number.MIN_SAFE_INTEGER=function(){return-9007199254740991}();$jscomp.object=$jscomp.object||{};
$jscomp.object.assign=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};$jscomp.object.is=function(a,b){return a===b?0!==a||1/a===1/b:a!==a&&b!==b};$jscomp.ASSUME_NO_NATIVE_SET=!1;
$jscomp.Set$isConformant=function(){if($jscomp.ASSUME_NO_NATIVE_SET)return!1;var a=$jscomp.global.Set;if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a($jscomp.makeIterator([b]));if(!c.has(b)||1!=c.size||c.add(b)!=c||1!=c.size||c.add({x:4})!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||e.value[1]!=b)return!1;e=d.next();return e.done||e.value[0]==b||4!=e.value[0].x||e.value[1]!=e.value[0]?!1:d.next().done}catch(f){return!1}};
$jscomp.Set=function(a){this.map_=new $jscomp.Map;if(a){a=$jscomp.makeIterator(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.map_.size};$jscomp.Set.prototype.add=function(a){this.map_.set(a,a);this.size=this.map_.size;return this};$jscomp.Set.prototype["delete"]=function(a){a=this.map_["delete"](a);this.size=this.map_.size;return a};$jscomp.Set.prototype.clear=function(){this.map_.clear();this.size=0};$jscomp.Set.prototype.has=function(a){return this.map_.has(a)};
$jscomp.Set.prototype.entries=function(){return this.map_.entries()};$jscomp.Set.prototype.values=function(){return this.map_.values()};$jscomp.Set.prototype.forEach=function(a,b){var c=this;this.map_.forEach(function(d){return a.call(b,d,d,c)})};$jscomp.Set$install=function(){$jscomp.Map$install();$jscomp.Set$isConformant()?$jscomp.Set=$jscomp.global.Set:($jscomp.initSymbol(),$jscomp.initSymbolIterator(),$jscomp.Set.prototype[Symbol.iterator]=$jscomp.Set.prototype.values,$jscomp.Set$install=function(){})};
$jscomp.string=$jscomp.string||{};$jscomp.checkStringArgs=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
$jscomp.string.fromCodePoint=function(a){for(var b="",c=0;c<arguments.length;c++){var d=Number(arguments[c]);if(0>d||1114111<d||d!==Math.floor(d))throw new RangeError("invalid_code_point "+d);65535>=d?b+=String.fromCharCode(d):(d-=65536,b+=String.fromCharCode(d>>>10&1023|55296),b+=String.fromCharCode(d&1023|56320))}return b};
$jscomp.string.repeat=function(a){var b=$jscomp.checkStringArgs(this,null,"repeat");if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var c="";a;)if(a&1&&(c+=b),a>>>=1)b+=b;return c};$jscomp.string.repeat$install=function(){String.prototype.repeat||(String.prototype.repeat=$jscomp.string.repeat)};
$jscomp.string.codePointAt=function(a){var b=$jscomp.checkStringArgs(this,null,"codePointAt"),c=b.length;a=Number(a)||0;if(0<=a&&a<c){a|=0;var d=b.charCodeAt(a);if(55296>d||56319<d||a+1===c)return d;a=b.charCodeAt(a+1);return 56320>a||57343<a?d:1024*(d-55296)+a+9216}};$jscomp.string.codePointAt$install=function(){String.prototype.codePointAt||(String.prototype.codePointAt=$jscomp.string.codePointAt)};
$jscomp.string.includes=function(a,b){return-1!==$jscomp.checkStringArgs(this,a,"includes").indexOf(a,b||0)};$jscomp.string.includes$install=function(){String.prototype.includes||(String.prototype.includes=$jscomp.string.includes)};$jscomp.string.startsWith=function(a,b){var c=$jscomp.checkStringArgs(this,a,"startsWith");a+="";for(var d=c.length,e=a.length,f=Math.max(0,Math.min(b|0,c.length)),g=0;g<e&&f<d;)if(c[f++]!=a[g++])return!1;return g>=e};
$jscomp.string.startsWith$install=function(){String.prototype.startsWith||(String.prototype.startsWith=$jscomp.string.startsWith)};$jscomp.string.endsWith=function(a,b){var c=$jscomp.checkStringArgs(this,a,"endsWith");a+="";void 0===b&&(b=c.length);for(var d=Math.max(0,Math.min(b|0,c.length)),e=a.length;0<e&&0<d;)if(c[--d]!=a[--e])return!1;return 0>=e};$jscomp.string.endsWith$install=function(){String.prototype.endsWith||(String.prototype.endsWith=$jscomp.string.endsWith)};
var COMPILED=!0,goog=goog||{};goog.global=this;goog.isDef=function(a){return void 0!==a};goog.exportPath_=function(a,b,c){a=a.split(".");c=c||goog.global;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&goog.isDef(b)?c[d]=b:c=c[d]?c[d]:c[d]={}};
goog.define=function(a,b){var c=b;COMPILED||(goog.global.CLOSURE_UNCOMPILED_DEFINES&&Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES,a)?c=goog.global.CLOSURE_UNCOMPILED_DEFINES[a]:goog.global.CLOSURE_DEFINES&&Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES,a)&&(c=goog.global.CLOSURE_DEFINES[a]));goog.exportPath_(a,c)};goog.DEBUG=!0;goog.LOCALE="en";goog.TRUSTED_SITE=!0;goog.STRICT_MODE_COMPATIBLE=!1;goog.DISALLOW_TEST_ONLY_CODE=COMPILED&&!goog.DEBUG;
goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING=!1;goog.provide=function(a){if(!COMPILED&&goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');goog.constructNamespace_(a)};goog.constructNamespace_=function(a,b){if(!COMPILED){delete goog.implicitNamespaces_[a];for(var c=a;(c=c.substring(0,c.lastIndexOf(".")))&&!goog.getObjectByName(c);)goog.implicitNamespaces_[c]=!0}goog.exportPath_(a,b)};goog.VALID_MODULE_RE_=/^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module=function(a){if(!goog.isString(a)||!a||-1==a.search(goog.VALID_MODULE_RE_))throw Error("Invalid module identifier");if(!goog.isInModuleLoader_())throw Error("Module "+a+" has been loaded incorrectly.");if(goog.moduleLoaderState_.moduleName)throw Error("goog.module may only be called once per module.");goog.moduleLoaderState_.moduleName=a;if(!COMPILED){if(goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete goog.implicitNamespaces_[a]}};goog.module.get=function(a){return goog.module.getInternal_(a)};
goog.module.getInternal_=function(a){if(!COMPILED)return goog.isProvided_(a)?a in goog.loadedModules_?goog.loadedModules_[a]:goog.getObjectByName(a):null};goog.moduleLoaderState_=null;goog.isInModuleLoader_=function(){return null!=goog.moduleLoaderState_};
goog.module.declareLegacyNamespace=function(){if(!COMPILED&&!goog.isInModuleLoader_())throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");if(!COMPILED&&!goog.moduleLoaderState_.moduleName)throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");goog.moduleLoaderState_.declareLegacyNamespace=!0};
goog.setTestOnly=function(a){if(goog.DISALLOW_TEST_ONLY_CODE)throw a=a||"",Error("Importing test-only code into non-debug environment"+(a?": "+a:"."));};goog.forwardDeclare=function(a){};COMPILED||(goog.isProvided_=function(a){return a in goog.loadedModules_||!goog.implicitNamespaces_[a]&&goog.isDefAndNotNull(goog.getObjectByName(a))},goog.implicitNamespaces_={"goog.module":!0});
goog.getObjectByName=function(a,b){for(var c=a.split("."),d=b||goog.global,e;e=c.shift();)if(goog.isDefAndNotNull(d[e]))d=d[e];else return null;return d};goog.globalize=function(a,b){var c=b||goog.global,d;for(d in a)c[d]=a[d]};goog.addDependency=function(a,b,c,d){if(goog.DEPENDENCIES_ENABLED){var e;a=a.replace(/\\/g,"/");for(var f=goog.dependencies_,g=0;e=b[g];g++)f.nameToPath[e]=a,f.pathIsModule[a]=!!d;for(d=0;b=c[d];d++)a in f.requires||(f.requires[a]={}),f.requires[a][b]=!0}};
goog.ENABLE_DEBUG_LOADER=!0;goog.logToConsole_=function(a){goog.global.console&&goog.global.console.error(a)};goog.require=function(a){if(!COMPILED){goog.ENABLE_DEBUG_LOADER&&goog.IS_OLD_IE_&&goog.maybeProcessDeferredDep_(a);if(goog.isProvided_(a))return goog.isInModuleLoader_()?goog.module.getInternal_(a):null;if(goog.ENABLE_DEBUG_LOADER){var b=goog.getPathFromDeps_(a);if(b)return goog.writeScripts_(b),null}a="goog.require could not find: "+a;goog.logToConsole_(a);throw Error(a);}};
goog.basePath="";goog.nullFunction=function(){};goog.abstractMethod=function(){throw Error("unimplemented abstract method");};goog.addSingletonGetter=function(a){a.getInstance=function(){if(a.instance_)return a.instance_;goog.DEBUG&&(goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=a);return a.instance_=new a}};goog.instantiatedSingletons_=[];goog.LOAD_MODULE_USING_EVAL=!0;goog.SEAL_MODULE_EXPORTS=goog.DEBUG;goog.loadedModules_={};goog.DEPENDENCIES_ENABLED=!COMPILED&&goog.ENABLE_DEBUG_LOADER;
goog.DEPENDENCIES_ENABLED&&(goog.dependencies_={pathIsModule:{},nameToPath:{},requires:{},visited:{},written:{},deferred:{}},goog.inHtmlDocument_=function(){var a=goog.global.document;return null!=a&&"write"in a},goog.findBasePath_=function(){if(goog.isDef(goog.global.CLOSURE_BASE_PATH))goog.basePath=goog.global.CLOSURE_BASE_PATH;else if(goog.inHtmlDocument_())for(var a=goog.global.document.getElementsByTagName("SCRIPT"),b=a.length-1;0<=b;--b){var c=a[b].src,d=c.lastIndexOf("?"),d=-1==d?c.length:
d;if("base.js"==c.substr(d-7,7)){goog.basePath=c.substr(0,d-7);break}}},goog.importScript_=function(a,b){(goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_)(a,b)&&(goog.dependencies_.written[a]=!0)},goog.IS_OLD_IE_=!(goog.global.atob||!goog.global.document||!goog.global.document.all),goog.importModule_=function(a){goog.importScript_("",'goog.retrieveAndExecModule_("'+a+'");')&&(goog.dependencies_.written[a]=!0)},goog.queuedModules_=[],goog.wrapModule_=function(a,b){return goog.LOAD_MODULE_USING_EVAL&&
goog.isDef(goog.global.JSON)?"goog.loadModule("+goog.global.JSON.stringify(b+"\n//# sourceURL="+a+"\n")+");":'goog.loadModule(function(exports) {"use strict";'+b+"\n;return exports});\n//# sourceURL="+a+"\n"},goog.loadQueuedModules_=function(){var a=goog.queuedModules_.length;if(0<a){var b=goog.queuedModules_;goog.queuedModules_=[];for(var c=0;c<a;c++)goog.maybeProcessDeferredPath_(b[c])}},goog.maybeProcessDeferredDep_=function(a){goog.isDeferredModule_(a)&&goog.allDepsAreAvailable_(a)&&(a=goog.getPathFromDeps_(a),
goog.maybeProcessDeferredPath_(goog.basePath+a))},goog.isDeferredModule_=function(a){return(a=goog.getPathFromDeps_(a))&&goog.dependencies_.pathIsModule[a]?goog.basePath+a in goog.dependencies_.deferred:!1},goog.allDepsAreAvailable_=function(a){if((a=goog.getPathFromDeps_(a))&&a in goog.dependencies_.requires)for(var b in goog.dependencies_.requires[a])if(!goog.isProvided_(b)&&!goog.isDeferredModule_(b))return!1;return!0},goog.maybeProcessDeferredPath_=function(a){if(a in goog.dependencies_.deferred){var b=
goog.dependencies_.deferred[a];delete goog.dependencies_.deferred[a];goog.globalEval(b)}},goog.loadModuleFromUrl=function(a){goog.retrieveAndExecModule_(a)},goog.loadModule=function(a){var b=goog.moduleLoaderState_;try{goog.moduleLoaderState_={moduleName:void 0,declareLegacyNamespace:!1};var c;if(goog.isFunction(a))c=a.call(goog.global,{});else if(goog.isString(a))c=goog.loadModuleFromSource_.call(goog.global,a);else throw Error("Invalid module definition");var d=goog.moduleLoaderState_.moduleName;
if(!goog.isString(d)||!d)throw Error('Invalid module name "'+d+'"');goog.moduleLoaderState_.declareLegacyNamespace?goog.constructNamespace_(d,c):goog.SEAL_MODULE_EXPORTS&&Object.seal&&Object.seal(c);goog.loadedModules_[d]=c}finally{goog.moduleLoaderState_=b}},goog.loadModuleFromSource_=function(a){eval(a);return{}},goog.writeScriptSrcNode_=function(a){goog.global.document.write('<script type="text/javascript" src="'+a+'">\x3c/script>')},goog.appendScriptSrcNode_=function(a){var b=goog.global.document,
c=b.createElement("script");c.type="text/javascript";c.src=a;c.defer=!1;c.async=!1;b.head.appendChild(c)},goog.writeScriptTag_=function(a,b){if(goog.inHtmlDocument_()){var c=goog.global.document;if(!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING&&"complete"==c.readyState){if(/\bdeps.js$/.test(a))return!1;throw Error('Cannot write "'+a+'" after document load');}var d=goog.IS_OLD_IE_;void 0===b?d?(d=" onreadystatechange='goog.onScriptLoad_(this, "+ ++goog.lastNonModuleScriptIndex_+")' ",c.write('<script type="text/javascript" src="'+
a+'"'+d+">\x3c/script>")):goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING?goog.appendScriptSrcNode_(a):goog.writeScriptSrcNode_(a):c.write('<script type="text/javascript">'+b+"\x3c/script>");return!0}return!1},goog.lastNonModuleScriptIndex_=0,goog.onScriptLoad_=function(a,b){"complete"==a.readyState&&goog.lastNonModuleScriptIndex_==b&&goog.loadQueuedModules_();return!0},goog.writeScripts_=function(a){function b(a){if(!(a in e.written||a in e.visited)){e.visited[a]=!0;if(a in e.requires)for(var f in e.requires[a])if(!goog.isProvided_(f))if(f in
e.nameToPath)b(e.nameToPath[f]);else throw Error("Undefined nameToPath for "+f);a in d||(d[a]=!0,c.push(a))}}var c=[],d={},e=goog.dependencies_;b(a);for(a=0;a<c.length;a++){var f=c[a];goog.dependencies_.written[f]=!0}var g=goog.moduleLoaderState_;goog.moduleLoaderState_=null;for(a=0;a<c.length;a++)if(f=c[a])e.pathIsModule[f]?goog.importModule_(goog.basePath+f):goog.importScript_(goog.basePath+f);else throw goog.moduleLoaderState_=g,Error("Undefined script input");goog.moduleLoaderState_=g},goog.getPathFromDeps_=
function(a){return a in goog.dependencies_.nameToPath?goog.dependencies_.nameToPath[a]:null},goog.findBasePath_(),goog.global.CLOSURE_NO_DEPS||goog.importScript_(goog.basePath+"deps.js"));goog.normalizePath_=function(a){a=a.split("/");for(var b=0;b<a.length;)"."==a[b]?a.splice(b,1):b&&".."==a[b]&&a[b-1]&&".."!=a[b-1]?a.splice(--b,2):b++;return a.join("/")};
goog.loadFileSync_=function(a){if(goog.global.CLOSURE_LOAD_FILE_SYNC)return goog.global.CLOSURE_LOAD_FILE_SYNC(a);var b=new goog.global.XMLHttpRequest;b.open("get",a,!1);b.send();return b.responseText};
goog.retrieveAndExecModule_=function(a){if(!COMPILED){var b=a;a=goog.normalizePath_(a);var c=goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_,d=goog.loadFileSync_(a);if(null!=d)d=goog.wrapModule_(a,d),goog.IS_OLD_IE_?(goog.dependencies_.deferred[b]=d,goog.queuedModules_.push(b)):c(a,d);else throw Error("load of "+a+"failed");}};
goog.typeOf=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};goog.isNull=function(a){return null===a};goog.isDefAndNotNull=function(a){return null!=a};goog.isArray=function(a){return"array"==goog.typeOf(a)};goog.isArrayLike=function(a){var b=goog.typeOf(a);return"array"==b||"object"==b&&"number"==typeof a.length};goog.isDateLike=function(a){return goog.isObject(a)&&"function"==typeof a.getFullYear};goog.isString=function(a){return"string"==typeof a};
goog.isBoolean=function(a){return"boolean"==typeof a};goog.isNumber=function(a){return"number"==typeof a};goog.isFunction=function(a){return"function"==goog.typeOf(a)};goog.isObject=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};goog.getUid=function(a){return a[goog.UID_PROPERTY_]||(a[goog.UID_PROPERTY_]=++goog.uidCounter_)};goog.hasUid=function(a){return!!a[goog.UID_PROPERTY_]};
goog.removeUid=function(a){null!==a&&"removeAttribute"in a&&a.removeAttribute(goog.UID_PROPERTY_);try{delete a[goog.UID_PROPERTY_]}catch(b){}};goog.UID_PROPERTY_="closure_uid_"+(1E9*Math.random()>>>0);goog.uidCounter_=0;goog.getHashCode=goog.getUid;goog.removeHashCode=goog.removeUid;goog.cloneObject=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if(a.clone)return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=goog.cloneObject(a[c]);return b}return a};
goog.bindNative_=function(a,b,c){return a.call.apply(a.bind,arguments)};goog.bindJs_=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
goog.bind=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?goog.bind=goog.bindNative_:goog.bind=goog.bindJs_;return goog.bind.apply(null,arguments)};goog.partial=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};goog.mixin=function(a,b){for(var c in b)a[c]=b[c]};goog.now=goog.TRUSTED_SITE&&Date.now||function(){return+new Date};
goog.globalEval=function(a){if(goog.global.execScript)goog.global.execScript(a,"JavaScript");else if(goog.global.eval){if(null==goog.evalWorksForGlobals_)if(goog.global.eval("var _evalTest_ = 1;"),"undefined"!=typeof goog.global._evalTest_){try{delete goog.global._evalTest_}catch(d){}goog.evalWorksForGlobals_=!0}else goog.evalWorksForGlobals_=!1;if(goog.evalWorksForGlobals_)goog.global.eval(a);else{var b=goog.global.document,c=b.createElement("SCRIPT");c.type="text/javascript";c.defer=!1;c.appendChild(b.createTextNode(a));
b.body.appendChild(c);b.body.removeChild(c)}}else throw Error("goog.globalEval not available");};goog.evalWorksForGlobals_=null;goog.getCssName=function(a,b){var c=function(a){return goog.cssNameMapping_[a]||a},d=function(a){a=a.split("-");for(var b=[],d=0;d<a.length;d++)b.push(c(a[d]));return b.join("-")},d=goog.cssNameMapping_?"BY_WHOLE"==goog.cssNameMappingStyle_?c:d:function(a){return a};return b?a+"-"+d(b):d(a)};
goog.setCssNameMapping=function(a,b){goog.cssNameMapping_=a;goog.cssNameMappingStyle_=b};!COMPILED&&goog.global.CLOSURE_CSS_NAME_MAPPING&&(goog.cssNameMapping_=goog.global.CLOSURE_CSS_NAME_MAPPING);goog.getMsg=function(a,b){b&&(a=a.replace(/\{\$([^}]+)}/g,function(a,d){return null!=b&&d in b?b[d]:a}));return a};goog.getMsgWithFallback=function(a,b){return a};goog.exportSymbol=function(a,b,c){goog.exportPath_(a,b,c)};goog.exportProperty=function(a,b,c){a[b]=c};
goog.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};
goog.base=function(a,b,c){var d=arguments.callee.caller;if(goog.STRICT_MODE_COMPATIBLE||goog.DEBUG&&!d)throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");if(d.superClass_){for(var e=Array(arguments.length-1),f=1;f<arguments.length;f++)e[f-1]=arguments[f];return d.superClass_.constructor.apply(a,e)}e=Array(arguments.length-2);for(f=2;f<arguments.length;f++)e[f-2]=arguments[f];for(var f=!1,g=a.constructor;g;g=
g.superClass_&&g.superClass_.constructor)if(g.prototype[b]===d)f=!0;else if(f)return g.prototype[b].apply(a,e);if(a[b]===d)return a.constructor.prototype[b].apply(a,e);throw Error("goog.base called from a method of one name to a method of a different name");};goog.scope=function(a){a.call(goog.global)};COMPILED||(goog.global.COMPILED=COMPILED);
goog.defineClass=function(a,b){var c=b.constructor,d=b.statics;c&&c!=Object.prototype.constructor||(c=function(){throw Error("cannot instantiate an interface (no constructor defined).");});c=goog.defineClass.createSealingConstructor_(c,a);a&&goog.inherits(c,a);delete b.constructor;delete b.statics;goog.defineClass.applyProperties_(c.prototype,b);null!=d&&(d instanceof Function?d(c):goog.defineClass.applyProperties_(c,d));return c};goog.defineClass.SEAL_CLASS_INSTANCES=goog.DEBUG;
goog.defineClass.createSealingConstructor_=function(a,b){if(goog.defineClass.SEAL_CLASS_INSTANCES&&Object.seal instanceof Function){if(b&&b.prototype&&b.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_])return a;var c=function(){var b=a.apply(this,arguments)||this;b[goog.UID_PROPERTY_]=b[goog.UID_PROPERTY_];this.constructor===c&&Object.seal(b);return b};return c}return a};goog.defineClass.OBJECT_PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.defineClass.applyProperties_=function(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c]);for(var d=0;d<goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;d++)c=goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d],Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])};goog.tagUnsealableClass=function(a){!COMPILED&&goog.defineClass.SEAL_CLASS_INSTANCES&&(a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]=!0)};goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_="goog_defineClass_legacy_unsealable";goog.dom={};goog.dom.NodeType={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12};goog.debug={};goog.debug.Error=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,goog.debug.Error);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a));this.reportErrorToServer=!0};goog.inherits(goog.debug.Error,Error);goog.debug.Error.prototype.name="CustomError";goog.string={};goog.string.DETECT_DOUBLE_ESCAPING=!1;goog.string.FORCE_NON_DOM_HTML_UNESCAPING=!1;goog.string.Unicode={NBSP:"\u00a0"};goog.string.startsWith=function(a,b){return 0==a.lastIndexOf(b,0)};goog.string.endsWith=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};goog.string.caseInsensitiveStartsWith=function(a,b){return 0==goog.string.caseInsensitiveCompare(b,a.substr(0,b.length))};
goog.string.caseInsensitiveEndsWith=function(a,b){return 0==goog.string.caseInsensitiveCompare(b,a.substr(a.length-b.length,b.length))};goog.string.caseInsensitiveEquals=function(a,b){return a.toLowerCase()==b.toLowerCase()};goog.string.subs=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};goog.string.collapseWhitespace=function(a){return a.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")};
goog.string.isEmptyOrWhitespace=function(a){return/^[\s\xa0]*$/.test(a)};goog.string.isEmptyString=function(a){return 0==a.length};goog.string.isEmpty=goog.string.isEmptyOrWhitespace;goog.string.isEmptyOrWhitespaceSafe=function(a){return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(a))};goog.string.isEmptySafe=goog.string.isEmptyOrWhitespaceSafe;goog.string.isBreakingWhitespace=function(a){return!/[^\t\n\r ]/.test(a)};goog.string.isAlpha=function(a){return!/[^a-zA-Z]/.test(a)};
goog.string.isNumeric=function(a){return!/[^0-9]/.test(a)};goog.string.isAlphaNumeric=function(a){return!/[^a-zA-Z0-9]/.test(a)};goog.string.isSpace=function(a){return" "==a};goog.string.isUnicodeChar=function(a){return 1==a.length&&" "<=a&&"~">=a||"\u0080"<=a&&"\ufffd">=a};goog.string.stripNewlines=function(a){return a.replace(/(\r\n|\r|\n)+/g," ")};goog.string.canonicalizeNewlines=function(a){return a.replace(/(\r\n|\r|\n)/g,"\n")};
goog.string.normalizeWhitespace=function(a){return a.replace(/\xa0|\s/g," ")};goog.string.normalizeSpaces=function(a){return a.replace(/\xa0|[ \t]+/g," ")};goog.string.collapseBreakingSpaces=function(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")};goog.string.trim=goog.TRUSTED_SITE&&String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};goog.string.trimLeft=function(a){return a.replace(/^[\s\xa0]+/,"")};
goog.string.trimRight=function(a){return a.replace(/[\s\xa0]+$/,"")};goog.string.caseInsensitiveCompare=function(a,b){var c=String(a).toLowerCase(),d=String(b).toLowerCase();return c<d?-1:c==d?0:1};
goog.string.numberAwareCompare_=function(a,b,c){if(a==b)return 0;if(!a)return-1;if(!b)return 1;for(var d=a.toLowerCase().match(c),e=b.toLowerCase().match(c),f=Math.min(d.length,e.length),g=0;g<f;g++){c=d[g];var h=e[g];if(c!=h)return a=parseInt(c,10),!isNaN(a)&&(b=parseInt(h,10),!isNaN(b)&&a-b)?a-b:c<h?-1:1}return d.length!=e.length?d.length-e.length:a<b?-1:1};goog.string.intAwareCompare=function(a,b){return goog.string.numberAwareCompare_(a,b,/\d+|\D+/g)};
goog.string.floatAwareCompare=function(a,b){return goog.string.numberAwareCompare_(a,b,/\d+|\.\d+|\D+/g)};goog.string.numerateCompare=goog.string.floatAwareCompare;goog.string.urlEncode=function(a){return encodeURIComponent(String(a))};goog.string.urlDecode=function(a){return decodeURIComponent(a.replace(/\+/g," "))};goog.string.newLineToBr=function(a,b){return a.replace(/(\r\n|\r|\n)/g,b?"<br />":"<br>")};
goog.string.htmlEscape=function(a,b){if(b)a=a.replace(goog.string.AMP_RE_,"&amp;").replace(goog.string.LT_RE_,"&lt;").replace(goog.string.GT_RE_,"&gt;").replace(goog.string.QUOT_RE_,"&quot;").replace(goog.string.SINGLE_QUOTE_RE_,"&#39;").replace(goog.string.NULL_RE_,"&#0;"),goog.string.DETECT_DOUBLE_ESCAPING&&(a=a.replace(goog.string.E_RE_,"&#101;"));else{if(!goog.string.ALL_RE_.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(goog.string.AMP_RE_,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(goog.string.LT_RE_,
"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(goog.string.GT_RE_,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(goog.string.QUOT_RE_,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(goog.string.SINGLE_QUOTE_RE_,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(goog.string.NULL_RE_,"&#0;"));goog.string.DETECT_DOUBLE_ESCAPING&&-1!=a.indexOf("e")&&(a=a.replace(goog.string.E_RE_,"&#101;"))}return a};goog.string.AMP_RE_=/&/g;goog.string.LT_RE_=/</g;goog.string.GT_RE_=/>/g;goog.string.QUOT_RE_=/"/g;
goog.string.SINGLE_QUOTE_RE_=/'/g;goog.string.NULL_RE_=/\x00/g;goog.string.E_RE_=/e/g;goog.string.ALL_RE_=goog.string.DETECT_DOUBLE_ESCAPING?/[\x00&<>"'e]/:/[\x00&<>"']/;goog.string.unescapeEntities=function(a){return goog.string.contains(a,"&")?!goog.string.FORCE_NON_DOM_HTML_UNESCAPING&&"document"in goog.global?goog.string.unescapeEntitiesUsingDom_(a):goog.string.unescapePureXmlEntities_(a):a};
goog.string.unescapeEntitiesWithDocument=function(a,b){return goog.string.contains(a,"&")?goog.string.unescapeEntitiesUsingDom_(a,b):a};
goog.string.unescapeEntitiesUsingDom_=function(a,b){var c={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},d;d=b?b.createElement("div"):goog.global.document.createElement("div");return a.replace(goog.string.HTML_ENTITY_PATTERN_,function(a,b){var g=c[a];if(g)return g;if("#"==b.charAt(0)){var h=Number("0"+b.substr(1));isNaN(h)||(g=String.fromCharCode(h))}g||(d.innerHTML=a+" ",g=d.firstChild.nodeValue.slice(0,-1));return c[a]=g})};
goog.string.unescapePureXmlEntities_=function(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})};goog.string.HTML_ENTITY_PATTERN_=/&([^;\s<&]+);?/g;goog.string.whitespaceEscape=function(a,b){return goog.string.newLineToBr(a.replace(/  /g," &#160;"),b)};
goog.string.preserveSpaces=function(a){return a.replace(/(^|[\n ]) /g,"$1"+goog.string.Unicode.NBSP)};goog.string.stripQuotes=function(a,b){for(var c=b.length,d=0;d<c;d++){var e=1==c?b:b.charAt(d);if(a.charAt(0)==e&&a.charAt(a.length-1)==e)return a.substring(1,a.length-1)}return a};goog.string.truncate=function(a,b,c){c&&(a=goog.string.unescapeEntities(a));a.length>b&&(a=a.substring(0,b-3)+"...");c&&(a=goog.string.htmlEscape(a));return a};
goog.string.truncateMiddle=function(a,b,c,d){c&&(a=goog.string.unescapeEntities(a));if(d&&a.length>b){d>b&&(d=b);var e=a.length-d;a=a.substring(0,b-d)+"..."+a.substring(e)}else a.length>b&&(d=Math.floor(b/2),e=a.length-d,a=a.substring(0,d+b%2)+"..."+a.substring(e));c&&(a=goog.string.htmlEscape(a));return a};goog.string.specialEscapeChars_={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"};goog.string.jsEscapeCache_={"'":"\\'"};
goog.string.quote=function(a){a=String(a);for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),e=d.charCodeAt(0);b[c+1]=goog.string.specialEscapeChars_[d]||(31<e&&127>e?d:goog.string.escapeChar(d))}b.push('"');return b.join("")};goog.string.escapeString=function(a){for(var b=[],c=0;c<a.length;c++)b[c]=goog.string.escapeChar(a.charAt(c));return b.join("")};
goog.string.escapeChar=function(a){if(a in goog.string.jsEscapeCache_)return goog.string.jsEscapeCache_[a];if(a in goog.string.specialEscapeChars_)return goog.string.jsEscapeCache_[a]=goog.string.specialEscapeChars_[a];var b,c=a.charCodeAt(0);if(31<c&&127>c)b=a;else{if(256>c){if(b="\\x",16>c||256<c)b+="0"}else b="\\u",4096>c&&(b+="0");b+=c.toString(16).toUpperCase()}return goog.string.jsEscapeCache_[a]=b};goog.string.contains=function(a,b){return-1!=a.indexOf(b)};
goog.string.caseInsensitiveContains=function(a,b){return goog.string.contains(a.toLowerCase(),b.toLowerCase())};goog.string.countOf=function(a,b){return a&&b?a.split(b).length-1:0};goog.string.removeAt=function(a,b,c){var d=a;0<=b&&b<a.length&&0<c&&(d=a.substr(0,b)+a.substr(b+c,a.length-b-c));return d};goog.string.remove=function(a,b){var c=new RegExp(goog.string.regExpEscape(b),"");return a.replace(c,"")};
goog.string.removeAll=function(a,b){var c=new RegExp(goog.string.regExpEscape(b),"g");return a.replace(c,"")};goog.string.regExpEscape=function(a){return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")};goog.string.repeat=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
goog.string.padNumber=function(a,b,c){a=goog.isDef(c)?a.toFixed(c):String(a);c=a.indexOf(".");-1==c&&(c=a.length);return goog.string.repeat("0",Math.max(0,b-c))+a};goog.string.makeSafe=function(a){return null==a?"":String(a)};goog.string.buildString=function(a){return Array.prototype.join.call(arguments,"")};goog.string.getRandomString=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^goog.now()).toString(36)};
goog.string.compareVersions=function(a,b){for(var c=0,d=goog.string.trim(String(a)).split("."),e=goog.string.trim(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"",l=RegExp("(\\d*)(\\D*)","g"),p=RegExp("(\\d*)(\\D*)","g");do{var m=l.exec(h)||["","",""],n=p.exec(k)||["","",""];if(0==m[0].length&&0==n[0].length)break;var c=0==m[1].length?0:parseInt(m[1],10),q=0==n[1].length?0:parseInt(n[1],10),c=goog.string.compareElements_(c,q)||goog.string.compareElements_(0==
m[2].length,0==n[2].length)||goog.string.compareElements_(m[2],n[2])}while(0==c)}return c};goog.string.compareElements_=function(a,b){return a<b?-1:a>b?1:0};goog.string.hashCode=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};goog.string.uniqueStringCounter_=2147483648*Math.random()|0;goog.string.createUniqueString=function(){return"goog_"+goog.string.uniqueStringCounter_++};
goog.string.toNumber=function(a){var b=Number(a);return 0==b&&goog.string.isEmptyOrWhitespace(a)?NaN:b};goog.string.isLowerCamelCase=function(a){return/^[a-z]+([A-Z][a-z]*)*$/.test(a)};goog.string.isUpperCamelCase=function(a){return/^([A-Z][a-z]*)+$/.test(a)};goog.string.toCamelCase=function(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})};goog.string.toSelectorCase=function(a){return String(a).replace(/([A-Z])/g,"-$1").toLowerCase()};
goog.string.toTitleCase=function(a,b){var c=goog.isString(b)?goog.string.regExpEscape(b):"\\s";return a.replace(new RegExp("(^"+(c?"|["+c+"]+":"")+")([a-z])","g"),function(a,b,c){return b+c.toUpperCase()})};goog.string.capitalize=function(a){return String(a.charAt(0)).toUpperCase()+String(a.substr(1)).toLowerCase()};goog.string.parseInt=function(a){isFinite(a)&&(a=String(a));return goog.isString(a)?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN};
goog.string.splitLimit=function(a,b,c){a=a.split(b);for(var d=[];0<c&&a.length;)d.push(a.shift()),c--;a.length&&d.push(a.join(b));return d};goog.string.editDistance=function(a,b){var c=[],d=[];if(a==b)return 0;if(!a.length||!b.length)return Math.max(a.length,b.length);for(var e=0;e<b.length+1;e++)c[e]=e;for(e=0;e<a.length;e++){d[0]=e+1;for(var f=0;f<b.length;f++)d[f+1]=Math.min(d[f]+1,c[f+1]+1,c[f]+Number(a[e]!=b[f]));for(f=0;f<c.length;f++)c[f]=d[f]}return d[b.length]};goog.asserts={};goog.asserts.ENABLE_ASSERTS=goog.DEBUG;goog.asserts.AssertionError=function(a,b){b.unshift(a);goog.debug.Error.call(this,goog.string.subs.apply(null,b));b.shift();this.messagePattern=a};goog.inherits(goog.asserts.AssertionError,goog.debug.Error);goog.asserts.AssertionError.prototype.name="AssertionError";goog.asserts.DEFAULT_ERROR_HANDLER=function(a){throw a;};goog.asserts.errorHandler_=goog.asserts.DEFAULT_ERROR_HANDLER;
goog.asserts.doAssertFailure_=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);a=new goog.asserts.AssertionError(""+e,f||[]);goog.asserts.errorHandler_(a)};goog.asserts.setErrorHandler=function(a){goog.asserts.ENABLE_ASSERTS&&(goog.asserts.errorHandler_=a)};goog.asserts.assert=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!a&&goog.asserts.doAssertFailure_("",null,b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.fail=function(a,b){goog.asserts.ENABLE_ASSERTS&&goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1)))};goog.asserts.assertNumber=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isNumber(a)&&goog.asserts.doAssertFailure_("Expected number but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertString=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isString(a)&&goog.asserts.doAssertFailure_("Expected string but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertFunction=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isFunction(a)&&goog.asserts.doAssertFailure_("Expected function but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertObject=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isObject(a)&&goog.asserts.doAssertFailure_("Expected object but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertArray=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isArray(a)&&goog.asserts.doAssertFailure_("Expected array but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertBoolean=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isBoolean(a)&&goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertElement=function(a,b,c){!goog.asserts.ENABLE_ASSERTS||goog.isObject(a)&&a.nodeType==goog.dom.NodeType.ELEMENT||goog.asserts.doAssertFailure_("Expected Element but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertInstanceof=function(a,b,c,d){!goog.asserts.ENABLE_ASSERTS||a instanceof b||goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.",[goog.asserts.getType_(b),goog.asserts.getType_(a)],c,Array.prototype.slice.call(arguments,3));return a};goog.asserts.assertObjectPrototypeIsIntact=function(){for(var a in Object.prototype)goog.asserts.fail(a+" should not be enumerable in Object.prototype.")};
goog.asserts.getType_=function(a){return a instanceof Function?a.displayName||a.name||"unknown type name":a instanceof Object?a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a):null===a?"null":typeof a};var jspb={Map:function(a,b){this.arr_=a;this.valueCtor_=b;this.map_={};this.arrClean=!0;0<this.arr_.length&&this.loadFromArray_()}};jspb.Map.prototype.loadFromArray_=function(){for(var a=0;a<this.arr_.length;a++){var b=this.arr_[a],c=b[0];this.map_[c.toString()]=new jspb.Map.Entry_(c,b[1])}this.arrClean=!0};
jspb.Map.prototype.toArray=function(){if(this.arrClean){if(this.valueCtor_){var a=this.map_,b;for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b].valueWrapper;c&&c.toArray()}}}else{this.arr_.length=0;a=this.stringKeys_();a.sort();for(b=0;b<a.length;b++){var d=this.map_[a[b]];(c=d.valueWrapper)&&c.toArray();this.arr_.push([d.key,d.value])}this.arrClean=!0}return this.arr_};
jspb.Map.prototype.toObject=function(a,b){for(var c=this.toArray(),d=[],e=0;e<c.length;e++){var f=this.map_[c[e][0].toString()];this.wrapEntry_(f);var g=f.valueWrapper;g?(goog.asserts.assert(b),d.push([f.key,b(a,g)])):d.push([f.key,f.value])}return d};jspb.Map.fromObject=function(a,b,c){b=new jspb.Map([],b);for(var d=0;d<a.length;d++){var e=a[d][0],f=c(a[d][1]);b.set(e,f)}return b};jspb.Map.ArrayIteratorIterable_=function(a){this.idx_=0;this.arr_=a};
jspb.Map.ArrayIteratorIterable_.prototype.next=function(){return this.idx_<this.arr_.length?{done:!1,value:this.arr_[this.idx_++]}:{done:!0,value:void 0}};$jscomp.initSymbol();"undefined"!=typeof Symbol&&($jscomp.initSymbol(),$jscomp.initSymbolIterator(),jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator]=function(){return this});jspb.Map.prototype.getLength=function(){return this.stringKeys_().length};jspb.Map.prototype.clear=function(){this.map_={};this.arrClean=!1};
jspb.Map.prototype.del=function(a){a=a.toString();var b=this.map_.hasOwnProperty(a);delete this.map_[a];this.arrClean=!1;return b};jspb.Map.prototype.getEntryList=function(){var a=[],b=this.stringKeys_();b.sort();for(var c=0;c<b.length;c++){var d=this.map_[b[c]];a.push([d.key,d.value])}return a};jspb.Map.prototype.entries=function(){var a=[],b=this.stringKeys_();b.sort();for(var c=0;c<b.length;c++){var d=this.map_[b[c]];a.push([d.key,this.wrapEntry_(d)])}return new jspb.Map.ArrayIteratorIterable_(a)};
jspb.Map.prototype.keys=function(){var a=[],b=this.stringKeys_();b.sort();for(var c=0;c<b.length;c++)a.push(this.map_[b[c]].key);return new jspb.Map.ArrayIteratorIterable_(a)};jspb.Map.prototype.values=function(){var a=[],b=this.stringKeys_();b.sort();for(var c=0;c<b.length;c++)a.push(this.wrapEntry_(this.map_[b[c]]));return new jspb.Map.ArrayIteratorIterable_(a)};
jspb.Map.prototype.forEach=function(a,b){var c=this.stringKeys_();c.sort();for(var d=0;d<c.length;d++){var e=this.map_[c[d]];a.call(b,this.wrapEntry_(e),e.key,this)}};jspb.Map.prototype.set=function(a,b){var c=new jspb.Map.Entry_(a);this.valueCtor_?(c.valueWrapper=b,c.value=b.toArray()):c.value=b;this.map_[a.toString()]=c;this.arrClean=!1;return this};jspb.Map.prototype.wrapEntry_=function(a){return this.valueCtor_?(a.valueWrapper||(a.valueWrapper=new this.valueCtor_(a.value)),a.valueWrapper):a.value};
jspb.Map.prototype.get=function(a){if(a=this.map_[a.toString()])return this.wrapEntry_(a)};jspb.Map.prototype.has=function(a){return a.toString()in this.map_};jspb.Map.prototype.serializeBinary=function(a,b,c,d,e){var f=this.stringKeys_();f.sort();for(var g=0;g<f.length;g++){var h=this.map_[f[g]];b.beginSubMessage(a);c.call(b,1,h.key);this.valueCtor_?d.call(b,2,this.wrapEntry_(h),e):d.call(b,2,h.value);b.endSubMessage()}};
jspb.Map.deserializeBinary=function(a,b,c,d,e,f){for(var g=void 0;b.nextField()&&!b.isEndGroup();){var h=b.getFieldNumber();1==h?f=c.call(b):2==h&&(a.valueCtor_?(goog.asserts.assert(e),g=new a.valueCtor_,d.call(b,g,e)):g=d.call(b))}goog.asserts.assert(void 0!=f);goog.asserts.assert(void 0!=g);a.set(f,g)};jspb.Map.prototype.stringKeys_=function(){var a=this.map_,b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b};
jspb.Map.Entry_=function(a,b){this.key=a;this.value=b;this.valueWrapper=void 0};goog.array={};goog.NATIVE_ARRAY_PROTOTYPES=goog.TRUSTED_SITE;goog.array.ASSUME_NATIVE_FUNCTIONS=!1;goog.array.peek=function(a){return a[a.length-1]};goog.array.last=goog.array.peek;
goog.array.indexOf=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.indexOf)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(goog.isString(a))return goog.isString(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
goog.array.lastIndexOf=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.lastIndexOf)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;0>c&&(c=Math.max(0,a.length+c));if(goog.isString(a))return goog.isString(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
goog.array.forEach=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.forEach)?function(a,b,c){goog.asserts.assert(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};goog.array.forEachRight=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,d=d-1;0<=d;--d)d in e&&b.call(c,e[d],d,a)};
goog.array.filter=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.filter)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=goog.isString(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];b.call(c,k,h,a)&&(e[f++]=k)}return e};
goog.array.map=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.map)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=goog.isString(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e};
goog.array.reduce=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.reduce)?function(a,b,c,d){goog.asserts.assert(null!=a.length);d&&(b=goog.bind(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;goog.array.forEach(a,function(c,g){e=b.call(d,e,c,g,a)});return e};
goog.array.reduceRight=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.reduceRight)?function(a,b,c,d){goog.asserts.assert(null!=a.length);goog.asserts.assert(null!=b);d&&(b=goog.bind(b,d));return Array.prototype.reduceRight.call(a,b,c)}:function(a,b,c,d){var e=c;goog.array.forEachRight(a,function(c,g){e=b.call(d,e,c,g,a)});return e};
goog.array.some=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.some)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};
goog.array.every=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.every)?function(a,b,c){goog.asserts.assert(null!=a.length);return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};goog.array.count=function(a,b,c){var d=0;goog.array.forEach(a,function(a,f,g){b.call(c,a,f,g)&&++d},c);return d};
goog.array.find=function(a,b,c){b=goog.array.findIndex(a,b,c);return 0>b?null:goog.isString(a)?a.charAt(b):a[b]};goog.array.findIndex=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};goog.array.findRight=function(a,b,c){b=goog.array.findIndexRight(a,b,c);return 0>b?null:goog.isString(a)?a.charAt(b):a[b]};
goog.array.findIndexRight=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,d=d-1;0<=d;d--)if(d in e&&b.call(c,e[d],d,a))return d;return-1};goog.array.contains=function(a,b){return 0<=goog.array.indexOf(a,b)};goog.array.isEmpty=function(a){return 0==a.length};goog.array.clear=function(a){if(!goog.isArray(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};goog.array.insert=function(a,b){goog.array.contains(a,b)||a.push(b)};
goog.array.insertAt=function(a,b,c){goog.array.splice(a,c,0,b)};goog.array.insertArrayAt=function(a,b,c){goog.partial(goog.array.splice,a,c,0).apply(null,b)};goog.array.insertBefore=function(a,b,c){var d;2==arguments.length||0>(d=goog.array.indexOf(a,c))?a.push(b):goog.array.insertAt(a,b,d)};goog.array.remove=function(a,b){var c=goog.array.indexOf(a,b),d;(d=0<=c)&&goog.array.removeAt(a,c);return d};
goog.array.removeAt=function(a,b){goog.asserts.assert(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length};goog.array.removeIf=function(a,b,c){b=goog.array.findIndex(a,b,c);return 0<=b?(goog.array.removeAt(a,b),!0):!1};goog.array.removeAllIf=function(a,b,c){var d=0;goog.array.forEachRight(a,function(e,f){b.call(c,e,f,a)&&goog.array.removeAt(a,f)&&d++});return d};goog.array.concat=function(a){return Array.prototype.concat.apply(Array.prototype,arguments)};
goog.array.join=function(a){return Array.prototype.concat.apply(Array.prototype,arguments)};goog.array.toArray=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};goog.array.clone=goog.array.toArray;goog.array.extend=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(goog.isArrayLike(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}};
goog.array.splice=function(a,b,c,d){goog.asserts.assert(null!=a.length);return Array.prototype.splice.apply(a,goog.array.slice(arguments,1))};goog.array.slice=function(a,b,c){goog.asserts.assert(null!=a.length);return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};
goog.array.removeDuplicates=function(a,b,c){b=b||a;var d=function(a){return goog.isObject(a)?"o"+goog.getUid(a):(typeof a).charAt(0)+a};c=c||d;for(var d={},e=0,f=0;f<a.length;){var g=a[f++],h=c(g);Object.prototype.hasOwnProperty.call(d,h)||(d[h]=!0,b[e++]=g)}b.length=e};goog.array.binarySearch=function(a,b,c){return goog.array.binarySearch_(a,c||goog.array.defaultCompare,!1,b)};goog.array.binarySelect=function(a,b,c){return goog.array.binarySearch_(a,b,!0,void 0,c)};
goog.array.binarySearch_=function(a,b,c,d,e){for(var f=0,g=a.length,h;f<g;){var k=f+g>>1,l;l=c?b.call(e,a[k],k,a):b(d,a[k]);0<l?f=k+1:(g=k,h=!l)}return h?f:~f};goog.array.sort=function(a,b){a.sort(b||goog.array.defaultCompare)};goog.array.stableSort=function(a,b){for(var c=0;c<a.length;c++)a[c]={index:c,value:a[c]};var d=b||goog.array.defaultCompare;goog.array.sort(a,function(a,b){return d(a.value,b.value)||a.index-b.index});for(c=0;c<a.length;c++)a[c]=a[c].value};
goog.array.sortByKey=function(a,b,c){var d=c||goog.array.defaultCompare;goog.array.sort(a,function(a,c){return d(b(a),b(c))})};goog.array.sortObjectsByKey=function(a,b,c){goog.array.sortByKey(a,function(a){return a[b]},c)};goog.array.isSorted=function(a,b,c){b=b||goog.array.defaultCompare;for(var d=1;d<a.length;d++){var e=b(a[d-1],a[d]);if(0<e||0==e&&c)return!1}return!0};
goog.array.equals=function(a,b,c){if(!goog.isArrayLike(a)||!goog.isArrayLike(b)||a.length!=b.length)return!1;var d=a.length;c=c||goog.array.defaultCompareEquality;for(var e=0;e<d;e++)if(!c(a[e],b[e]))return!1;return!0};goog.array.compare3=function(a,b,c){c=c||goog.array.defaultCompare;for(var d=Math.min(a.length,b.length),e=0;e<d;e++){var f=c(a[e],b[e]);if(0!=f)return f}return goog.array.defaultCompare(a.length,b.length)};goog.array.defaultCompare=function(a,b){return a>b?1:a<b?-1:0};
goog.array.inverseDefaultCompare=function(a,b){return-goog.array.defaultCompare(a,b)};goog.array.defaultCompareEquality=function(a,b){return a===b};goog.array.binaryInsert=function(a,b,c){c=goog.array.binarySearch(a,b,c);return 0>c?(goog.array.insertAt(a,b,-(c+1)),!0):!1};goog.array.binaryRemove=function(a,b,c){b=goog.array.binarySearch(a,b,c);return 0<=b?goog.array.removeAt(a,b):!1};
goog.array.bucket=function(a,b,c){for(var d={},e=0;e<a.length;e++){var f=a[e],g=b.call(c,f,e,a);goog.isDef(g)&&(d[g]||(d[g]=[])).push(f)}return d};goog.array.toObject=function(a,b,c){var d={};goog.array.forEach(a,function(e,f){d[b.call(c,e,f,a)]=e});return d};goog.array.range=function(a,b,c){var d=[],e=0,f=a;c=c||1;void 0!==b&&(e=a,f=b);if(0>c*(f-e))return[];if(0<c)for(a=e;a<f;a+=c)d.push(a);else for(a=e;a>f;a+=c)d.push(a);return d};
goog.array.repeat=function(a,b){for(var c=[],d=0;d<b;d++)c[d]=a;return c};goog.array.flatten=function(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(goog.isArray(d))for(var e=0;e<d.length;e+=8192)for(var f=goog.array.slice(d,e,e+8192),f=goog.array.flatten.apply(null,f),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b};
goog.array.rotate=function(a,b){goog.asserts.assert(null!=a.length);a.length&&(b%=a.length,0<b?Array.prototype.unshift.apply(a,a.splice(-b,b)):0>b&&Array.prototype.push.apply(a,a.splice(0,-b)));return a};goog.array.moveItem=function(a,b,c){goog.asserts.assert(0<=b&&b<a.length);goog.asserts.assert(0<=c&&c<a.length);b=Array.prototype.splice.call(a,b,1);Array.prototype.splice.call(a,c,0,b[0])};
goog.array.zip=function(a){if(!arguments.length)return[];for(var b=[],c=arguments[0].length,d=1;d<arguments.length;d++)arguments[d].length<c&&(c=arguments[d].length);for(d=0;d<c;d++){for(var e=[],f=0;f<arguments.length;f++)e.push(arguments[f][d]);b.push(e)}return b};goog.array.shuffle=function(a,b){for(var c=b||Math.random,d=a.length-1;0<d;d--){var e=Math.floor(c()*(d+1)),f=a[d];a[d]=a[e];a[e]=f}};goog.array.copyByIndex=function(a,b){var c=[];goog.array.forEach(b,function(b){c.push(a[b])});return c};goog.crypt={};goog.crypt.stringToByteArray=function(a){for(var b=[],c=0,d=0;d<a.length;d++){for(var e=a.charCodeAt(d);255<e;)b[c++]=e&255,e>>=8;b[c++]=e}return b};goog.crypt.byteArrayToString=function(a){if(8192>=a.length)return String.fromCharCode.apply(null,a);for(var b="",c=0;c<a.length;c+=8192)var d=goog.array.slice(a,c,c+8192),b=b+String.fromCharCode.apply(null,d);return b};goog.crypt.byteArrayToHex=function(a){return goog.array.map(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};
goog.crypt.hexToByteArray=function(a){goog.asserts.assert(0==a.length%2,"Key string length must be multiple of 2");for(var b=[],c=0;c<a.length;c+=2)b.push(parseInt(a.substring(c,c+2),16));return b};
goog.crypt.stringToUtf8ByteArray=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};
goog.crypt.utf8ByteArrayToString=function(a){for(var b=[],c=0,d=0;c<a.length;){var e=a[c++];if(128>e)b[d++]=String.fromCharCode(e);else if(191<e&&224>e){var f=a[c++];b[d++]=String.fromCharCode((e&31)<<6|f&63)}else if(239<e&&365>e){var f=a[c++],g=a[c++],h=a[c++],e=((e&7)<<18|(f&63)<<12|(g&63)<<6|h&63)-65536;b[d++]=String.fromCharCode(55296+(e>>10));b[d++]=String.fromCharCode(56320+(e&1023))}else f=a[c++],g=a[c++],b[d++]=String.fromCharCode((e&15)<<12|(f&63)<<6|g&63)}return b.join("")};
goog.crypt.xorByteArray=function(a,b){goog.asserts.assert(a.length==b.length,"XOR array lengths must match");for(var c=[],d=0;d<a.length;d++)c.push(a[d]^b[d]);return c};goog.labs={};goog.labs.userAgent={};goog.labs.userAgent.util={};goog.labs.userAgent.util.getNativeUserAgentString_=function(){var a=goog.labs.userAgent.util.getNavigator_();return a&&(a=a.userAgent)?a:""};goog.labs.userAgent.util.getNavigator_=function(){return goog.global.navigator};goog.labs.userAgent.util.userAgent_=goog.labs.userAgent.util.getNativeUserAgentString_();goog.labs.userAgent.util.setUserAgent=function(a){goog.labs.userAgent.util.userAgent_=a||goog.labs.userAgent.util.getNativeUserAgentString_()};
goog.labs.userAgent.util.getUserAgent=function(){return goog.labs.userAgent.util.userAgent_};goog.labs.userAgent.util.matchUserAgent=function(a){var b=goog.labs.userAgent.util.getUserAgent();return goog.string.contains(b,a)};goog.labs.userAgent.util.matchUserAgentIgnoreCase=function(a){var b=goog.labs.userAgent.util.getUserAgent();return goog.string.caseInsensitiveContains(b,a)};
goog.labs.userAgent.util.extractVersionTuples=function(a){for(var b=RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g"),c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c};goog.labs.userAgent.platform={};goog.labs.userAgent.platform.isAndroid=function(){return goog.labs.userAgent.util.matchUserAgent("Android")};goog.labs.userAgent.platform.isIpod=function(){return goog.labs.userAgent.util.matchUserAgent("iPod")};goog.labs.userAgent.platform.isIphone=function(){return goog.labs.userAgent.util.matchUserAgent("iPhone")&&!goog.labs.userAgent.util.matchUserAgent("iPod")&&!goog.labs.userAgent.util.matchUserAgent("iPad")};goog.labs.userAgent.platform.isIpad=function(){return goog.labs.userAgent.util.matchUserAgent("iPad")};
goog.labs.userAgent.platform.isIos=function(){return goog.labs.userAgent.platform.isIphone()||goog.labs.userAgent.platform.isIpad()||goog.labs.userAgent.platform.isIpod()};goog.labs.userAgent.platform.isMacintosh=function(){return goog.labs.userAgent.util.matchUserAgent("Macintosh")};goog.labs.userAgent.platform.isLinux=function(){return goog.labs.userAgent.util.matchUserAgent("Linux")};goog.labs.userAgent.platform.isWindows=function(){return goog.labs.userAgent.util.matchUserAgent("Windows")};
goog.labs.userAgent.platform.isChromeOS=function(){return goog.labs.userAgent.util.matchUserAgent("CrOS")};
goog.labs.userAgent.platform.getVersion=function(){var a=goog.labs.userAgent.util.getUserAgent(),b="";goog.labs.userAgent.platform.isWindows()?(b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0"):goog.labs.userAgent.platform.isIos()?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".")):goog.labs.userAgent.platform.isMacintosh()?(b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10"):goog.labs.userAgent.platform.isAndroid()?(b=/Android\s+([^\);]+)(\)|;)/,
b=(a=b.exec(a))&&a[1]):goog.labs.userAgent.platform.isChromeOS()&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b=(a=b.exec(a))&&a[1]);return b||""};goog.labs.userAgent.platform.isVersionOrHigher=function(a){return 0<=goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(),a)};goog.object={};goog.object.forEach=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};goog.object.filter=function(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d};goog.object.map=function(a,b,c){var d={},e;for(e in a)d[e]=b.call(c,a[e],e,a);return d};goog.object.some=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return!0;return!1};goog.object.every=function(a,b,c){for(var d in a)if(!b.call(c,a[d],d,a))return!1;return!0};
goog.object.getCount=function(a){var b=0,c;for(c in a)b++;return b};goog.object.getAnyKey=function(a){for(var b in a)return b};goog.object.getAnyValue=function(a){for(var b in a)return a[b]};goog.object.contains=function(a,b){return goog.object.containsValue(a,b)};goog.object.getValues=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};goog.object.getKeys=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
goog.object.getValueByKeys=function(a,b){for(var c=goog.isArrayLike(b),d=c?b:arguments,c=c?0:1;c<d.length&&(a=a[d[c]],goog.isDef(a));c++);return a};goog.object.containsKey=function(a,b){return null!==a&&b in a};goog.object.containsValue=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};goog.object.findKey=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};goog.object.findValue=function(a,b,c){return(b=goog.object.findKey(a,b,c))&&a[b]};
goog.object.isEmpty=function(a){for(var b in a)return!1;return!0};goog.object.clear=function(a){for(var b in a)delete a[b]};goog.object.remove=function(a,b){var c;(c=b in a)&&delete a[b];return c};goog.object.add=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');goog.object.set(a,b,c)};goog.object.get=function(a,b,c){return null!==a&&b in a?a[b]:c};goog.object.set=function(a,b,c){a[b]=c};
goog.object.setIfUndefined=function(a,b,c){return b in a?a[b]:a[b]=c};goog.object.setWithReturnValueIfNotSet=function(a,b,c){if(b in a)return a[b];c=c();return a[b]=c};goog.object.equals=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0};goog.object.clone=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
goog.object.unsafeClone=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if(goog.isFunction(a.clone))return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=goog.object.unsafeClone(a[c]);return b}return a};goog.object.transpose=function(a){var b={},c;for(c in a)b[a[c]]=c;return b};goog.object.PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.object.extend=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<goog.object.PROTOTYPE_FIELDS_.length;f++)c=goog.object.PROTOTYPE_FIELDS_[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
goog.object.create=function(a){var b=arguments.length;if(1==b&&goog.isArray(arguments[0]))return goog.object.create.apply(null,arguments[0]);if(b%2)throw Error("Uneven number of arguments");for(var c={},d=0;d<b;d+=2)c[arguments[d]]=arguments[d+1];return c};goog.object.createSet=function(a){var b=arguments.length;if(1==b&&goog.isArray(arguments[0]))return goog.object.createSet.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};
goog.object.createImmutableView=function(a){var b=a;Object.isFrozen&&!Object.isFrozen(a)&&(b=Object.create(a),Object.freeze(b));return b};goog.object.isImmutableView=function(a){return!!Object.isFrozen&&Object.isFrozen(a)};goog.labs.userAgent.browser={};goog.labs.userAgent.browser.matchOpera_=function(){return goog.labs.userAgent.util.matchUserAgent("Opera")||goog.labs.userAgent.util.matchUserAgent("OPR")};goog.labs.userAgent.browser.matchIE_=function(){return goog.labs.userAgent.util.matchUserAgent("Trident")||goog.labs.userAgent.util.matchUserAgent("MSIE")};goog.labs.userAgent.browser.matchEdge_=function(){return goog.labs.userAgent.util.matchUserAgent("Edge")};goog.labs.userAgent.browser.matchFirefox_=function(){return goog.labs.userAgent.util.matchUserAgent("Firefox")};
goog.labs.userAgent.browser.matchSafari_=function(){return goog.labs.userAgent.util.matchUserAgent("Safari")&&!(goog.labs.userAgent.browser.matchChrome_()||goog.labs.userAgent.browser.matchCoast_()||goog.labs.userAgent.browser.matchOpera_()||goog.labs.userAgent.browser.matchEdge_()||goog.labs.userAgent.browser.isSilk()||goog.labs.userAgent.util.matchUserAgent("Android"))};goog.labs.userAgent.browser.matchCoast_=function(){return goog.labs.userAgent.util.matchUserAgent("Coast")};
goog.labs.userAgent.browser.matchIosWebview_=function(){return(goog.labs.userAgent.util.matchUserAgent("iPad")||goog.labs.userAgent.util.matchUserAgent("iPhone"))&&!goog.labs.userAgent.browser.matchSafari_()&&!goog.labs.userAgent.browser.matchChrome_()&&!goog.labs.userAgent.browser.matchCoast_()&&goog.labs.userAgent.util.matchUserAgent("AppleWebKit")};
goog.labs.userAgent.browser.matchChrome_=function(){return(goog.labs.userAgent.util.matchUserAgent("Chrome")||goog.labs.userAgent.util.matchUserAgent("CriOS"))&&!goog.labs.userAgent.browser.matchOpera_()&&!goog.labs.userAgent.browser.matchEdge_()};goog.labs.userAgent.browser.matchAndroidBrowser_=function(){return goog.labs.userAgent.util.matchUserAgent("Android")&&!(goog.labs.userAgent.browser.isChrome()||goog.labs.userAgent.browser.isFirefox()||goog.labs.userAgent.browser.isOpera()||goog.labs.userAgent.browser.isSilk())};
goog.labs.userAgent.browser.isOpera=goog.labs.userAgent.browser.matchOpera_;goog.labs.userAgent.browser.isIE=goog.labs.userAgent.browser.matchIE_;goog.labs.userAgent.browser.isEdge=goog.labs.userAgent.browser.matchEdge_;goog.labs.userAgent.browser.isFirefox=goog.labs.userAgent.browser.matchFirefox_;goog.labs.userAgent.browser.isSafari=goog.labs.userAgent.browser.matchSafari_;goog.labs.userAgent.browser.isCoast=goog.labs.userAgent.browser.matchCoast_;goog.labs.userAgent.browser.isIosWebview=goog.labs.userAgent.browser.matchIosWebview_;
goog.labs.userAgent.browser.isChrome=goog.labs.userAgent.browser.matchChrome_;goog.labs.userAgent.browser.isAndroidBrowser=goog.labs.userAgent.browser.matchAndroidBrowser_;goog.labs.userAgent.browser.isSilk=function(){return goog.labs.userAgent.util.matchUserAgent("Silk")};
goog.labs.userAgent.browser.getVersion=function(){function a(a){a=goog.array.find(a,d);return c[a]||""}var b=goog.labs.userAgent.util.getUserAgent();if(goog.labs.userAgent.browser.isIE())return goog.labs.userAgent.browser.getIEVersion_(b);var b=goog.labs.userAgent.util.extractVersionTuples(b),c={};goog.array.forEach(b,function(a){c[a[0]]=a[1]});var d=goog.partial(goog.object.containsKey,c);return goog.labs.userAgent.browser.isOpera()?a(["Version","Opera","OPR"]):goog.labs.userAgent.browser.isEdge()?
a(["Edge"]):goog.labs.userAgent.browser.isChrome()?a(["Chrome","CriOS"]):(b=b[2])&&b[1]||""};goog.labs.userAgent.browser.isVersionOrHigher=function(a){return 0<=goog.string.compareVersions(goog.labs.userAgent.browser.getVersion(),a)};
goog.labs.userAgent.browser.getIEVersion_=function(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];var b="",c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b};goog.labs.userAgent.engine={};goog.labs.userAgent.engine.isPresto=function(){return goog.labs.userAgent.util.matchUserAgent("Presto")};goog.labs.userAgent.engine.isTrident=function(){return goog.labs.userAgent.util.matchUserAgent("Trident")||goog.labs.userAgent.util.matchUserAgent("MSIE")};goog.labs.userAgent.engine.isEdge=function(){return goog.labs.userAgent.util.matchUserAgent("Edge")};
goog.labs.userAgent.engine.isWebKit=function(){return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit")&&!goog.labs.userAgent.engine.isEdge()};goog.labs.userAgent.engine.isGecko=function(){return goog.labs.userAgent.util.matchUserAgent("Gecko")&&!goog.labs.userAgent.engine.isWebKit()&&!goog.labs.userAgent.engine.isTrident()&&!goog.labs.userAgent.engine.isEdge()};
goog.labs.userAgent.engine.getVersion=function(){var a=goog.labs.userAgent.util.getUserAgent();if(a){var a=goog.labs.userAgent.util.extractVersionTuples(a),b=goog.labs.userAgent.engine.getEngineTuple_(a);if(b)return"Gecko"==b[0]?goog.labs.userAgent.engine.getVersionForKey_(a,"Firefox"):b[1];var a=a[0],c;if(a&&(c=a[2])&&(c=/Trident\/([^\s;]+)/.exec(c)))return c[1]}return""};
goog.labs.userAgent.engine.getEngineTuple_=function(a){if(!goog.labs.userAgent.engine.isEdge())return a[1];for(var b=0;b<a.length;b++){var c=a[b];if("Edge"==c[0])return c}};goog.labs.userAgent.engine.isVersionOrHigher=function(a){return 0<=goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(),a)};goog.labs.userAgent.engine.getVersionForKey_=function(a,b){var c=goog.array.find(a,function(a){return b==a[0]});return c&&c[1]||""};goog.userAgent={};goog.userAgent.ASSUME_IE=!1;goog.userAgent.ASSUME_EDGE=!1;goog.userAgent.ASSUME_GECKO=!1;goog.userAgent.ASSUME_WEBKIT=!1;goog.userAgent.ASSUME_MOBILE_WEBKIT=!1;goog.userAgent.ASSUME_OPERA=!1;goog.userAgent.ASSUME_ANY_VERSION=!1;goog.userAgent.BROWSER_KNOWN_=goog.userAgent.ASSUME_IE||goog.userAgent.ASSUME_EDGE||goog.userAgent.ASSUME_GECKO||goog.userAgent.ASSUME_MOBILE_WEBKIT||goog.userAgent.ASSUME_WEBKIT||goog.userAgent.ASSUME_OPERA;goog.userAgent.getUserAgentString=function(){return goog.labs.userAgent.util.getUserAgent()};
goog.userAgent.getNavigator=function(){return goog.global.navigator||null};goog.userAgent.OPERA=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_OPERA:goog.labs.userAgent.browser.isOpera();goog.userAgent.IE=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_IE:goog.labs.userAgent.browser.isIE();goog.userAgent.EDGE=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_EDGE:goog.labs.userAgent.engine.isEdge();goog.userAgent.EDGE_OR_IE=goog.userAgent.EDGE||goog.userAgent.IE;
goog.userAgent.GECKO=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_GECKO:goog.labs.userAgent.engine.isGecko();goog.userAgent.WEBKIT=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_WEBKIT||goog.userAgent.ASSUME_MOBILE_WEBKIT:goog.labs.userAgent.engine.isWebKit();goog.userAgent.isMobile_=function(){return goog.userAgent.WEBKIT&&goog.labs.userAgent.util.matchUserAgent("Mobile")};goog.userAgent.MOBILE=goog.userAgent.ASSUME_MOBILE_WEBKIT||goog.userAgent.isMobile_();goog.userAgent.SAFARI=goog.userAgent.WEBKIT;
goog.userAgent.determinePlatform_=function(){var a=goog.userAgent.getNavigator();return a&&a.platform||""};goog.userAgent.PLATFORM=goog.userAgent.determinePlatform_();goog.userAgent.ASSUME_MAC=!1;goog.userAgent.ASSUME_WINDOWS=!1;goog.userAgent.ASSUME_LINUX=!1;goog.userAgent.ASSUME_X11=!1;goog.userAgent.ASSUME_ANDROID=!1;goog.userAgent.ASSUME_IPHONE=!1;goog.userAgent.ASSUME_IPAD=!1;
goog.userAgent.PLATFORM_KNOWN_=goog.userAgent.ASSUME_MAC||goog.userAgent.ASSUME_WINDOWS||goog.userAgent.ASSUME_LINUX||goog.userAgent.ASSUME_X11||goog.userAgent.ASSUME_ANDROID||goog.userAgent.ASSUME_IPHONE||goog.userAgent.ASSUME_IPAD;goog.userAgent.MAC=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_MAC:goog.labs.userAgent.platform.isMacintosh();goog.userAgent.WINDOWS=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_WINDOWS:goog.labs.userAgent.platform.isWindows();
goog.userAgent.isLegacyLinux_=function(){return goog.labs.userAgent.platform.isLinux()||goog.labs.userAgent.platform.isChromeOS()};goog.userAgent.LINUX=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_LINUX:goog.userAgent.isLegacyLinux_();goog.userAgent.isX11_=function(){var a=goog.userAgent.getNavigator();return!!a&&goog.string.contains(a.appVersion||"","X11")};goog.userAgent.X11=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_X11:goog.userAgent.isX11_();
goog.userAgent.ANDROID=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_ANDROID:goog.labs.userAgent.platform.isAndroid();goog.userAgent.IPHONE=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPHONE:goog.labs.userAgent.platform.isIphone();goog.userAgent.IPAD=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPAD:goog.labs.userAgent.platform.isIpad();goog.userAgent.operaVersion_=function(){var a=goog.global.opera.version;try{return a()}catch(b){return a}};
goog.userAgent.determineVersion_=function(){if(goog.userAgent.OPERA&&goog.global.opera)return goog.userAgent.operaVersion_();var a="",b=goog.userAgent.getVersionRegexResult_();b&&(a=b?b[1]:"");return goog.userAgent.IE&&(b=goog.userAgent.getDocumentMode_(),b>parseFloat(a))?String(b):a};
goog.userAgent.getVersionRegexResult_=function(){var a=goog.userAgent.getUserAgentString();if(goog.userAgent.GECKO)return/rv\:([^\);]+)(\)|;)/.exec(a);if(goog.userAgent.EDGE)return/Edge\/([\d\.]+)/.exec(a);if(goog.userAgent.IE)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(goog.userAgent.WEBKIT)return/WebKit\/(\S+)/.exec(a)};goog.userAgent.getDocumentMode_=function(){var a=goog.global.document;return a?a.documentMode:void 0};goog.userAgent.VERSION=goog.userAgent.determineVersion_();
goog.userAgent.compare=function(a,b){return goog.string.compareVersions(a,b)};goog.userAgent.isVersionOrHigherCache_={};goog.userAgent.isVersionOrHigher=function(a){return goog.userAgent.ASSUME_ANY_VERSION||goog.userAgent.isVersionOrHigherCache_[a]||(goog.userAgent.isVersionOrHigherCache_[a]=0<=goog.string.compareVersions(goog.userAgent.VERSION,a))};goog.userAgent.isVersion=goog.userAgent.isVersionOrHigher;
goog.userAgent.isDocumentModeOrHigher=function(a){return Number(goog.userAgent.DOCUMENT_MODE)>=a};goog.userAgent.isDocumentMode=goog.userAgent.isDocumentModeOrHigher;goog.userAgent.DOCUMENT_MODE=function(){var a=goog.global.document,b=goog.userAgent.getDocumentMode_();return a&&goog.userAgent.IE?b||("CSS1Compat"==a.compatMode?parseInt(goog.userAgent.VERSION,10):5):void 0}();goog.userAgent.product={};goog.userAgent.product.ASSUME_FIREFOX=!1;goog.userAgent.product.ASSUME_IPHONE=!1;goog.userAgent.product.ASSUME_IPAD=!1;goog.userAgent.product.ASSUME_ANDROID=!1;goog.userAgent.product.ASSUME_CHROME=!1;goog.userAgent.product.ASSUME_SAFARI=!1;
goog.userAgent.product.PRODUCT_KNOWN_=goog.userAgent.ASSUME_IE||goog.userAgent.ASSUME_EDGE||goog.userAgent.ASSUME_OPERA||goog.userAgent.product.ASSUME_FIREFOX||goog.userAgent.product.ASSUME_IPHONE||goog.userAgent.product.ASSUME_IPAD||goog.userAgent.product.ASSUME_ANDROID||goog.userAgent.product.ASSUME_CHROME||goog.userAgent.product.ASSUME_SAFARI;goog.userAgent.product.OPERA=goog.userAgent.OPERA;goog.userAgent.product.IE=goog.userAgent.IE;goog.userAgent.product.EDGE=goog.userAgent.EDGE;
goog.userAgent.product.FIREFOX=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_FIREFOX:goog.labs.userAgent.browser.isFirefox();goog.userAgent.product.isIphoneOrIpod_=function(){return goog.labs.userAgent.platform.isIphone()||goog.labs.userAgent.platform.isIpod()};goog.userAgent.product.IPHONE=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_IPHONE:goog.userAgent.product.isIphoneOrIpod_();
goog.userAgent.product.IPAD=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_IPAD:goog.labs.userAgent.platform.isIpad();goog.userAgent.product.ANDROID=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_ANDROID:goog.labs.userAgent.browser.isAndroidBrowser();goog.userAgent.product.CHROME=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_CHROME:goog.labs.userAgent.browser.isChrome();
goog.userAgent.product.isSafariDesktop_=function(){return goog.labs.userAgent.browser.isSafari()&&!goog.labs.userAgent.platform.isIos()};goog.userAgent.product.SAFARI=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_SAFARI:goog.userAgent.product.isSafariDesktop_();goog.crypt.base64={};goog.crypt.base64.byteToCharMap_=null;goog.crypt.base64.charToByteMap_=null;goog.crypt.base64.byteToCharMapWebSafe_=null;goog.crypt.base64.ENCODED_VALS_BASE="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";goog.crypt.base64.ENCODED_VALS=goog.crypt.base64.ENCODED_VALS_BASE+"+/=";goog.crypt.base64.ENCODED_VALS_WEBSAFE=goog.crypt.base64.ENCODED_VALS_BASE+"-_.";
goog.crypt.base64.ASSUME_NATIVE_SUPPORT_=goog.userAgent.GECKO||goog.userAgent.WEBKIT&&!goog.userAgent.product.SAFARI||goog.userAgent.OPERA;goog.crypt.base64.HAS_NATIVE_ENCODE_=goog.crypt.base64.ASSUME_NATIVE_SUPPORT_||"function"==typeof goog.global.btoa;goog.crypt.base64.HAS_NATIVE_DECODE_=goog.crypt.base64.ASSUME_NATIVE_SUPPORT_||!goog.userAgent.product.SAFARI&&!goog.userAgent.IE&&"function"==typeof goog.global.atob;
goog.crypt.base64.encodeByteArray=function(a,b){goog.asserts.assert(goog.isArrayLike(a),"encodeByteArray takes an array as a parameter");goog.crypt.base64.init_();for(var c=b?goog.crypt.base64.byteToCharMapWebSafe_:goog.crypt.base64.byteToCharMap_,d=[],e=0;e<a.length;e+=3){var f=a[e],g=e+1<a.length,h=g?a[e+1]:0,k=e+2<a.length,l=k?a[e+2]:0,p=f>>2,f=(f&3)<<4|h>>4,h=(h&15)<<2|l>>6,l=l&63;k||(l=64,g||(h=64));d.push(c[p],c[f],c[h],c[l])}return d.join("")};
goog.crypt.base64.encodeString=function(a,b){return goog.crypt.base64.HAS_NATIVE_ENCODE_&&!b?goog.global.btoa(a):goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(a),b)};goog.crypt.base64.decodeString=function(a,b){if(goog.crypt.base64.HAS_NATIVE_DECODE_&&!b)return goog.global.atob(a);var c="";goog.crypt.base64.decodeStringInternal_(a,function(a){c+=String.fromCharCode(a)});return c};
goog.crypt.base64.decodeStringToByteArray=function(a,b){var c=[];goog.crypt.base64.decodeStringInternal_(a,function(a){c.push(a)});return c};goog.crypt.base64.decodeStringToUint8Array=function(a){goog.asserts.assert(!goog.userAgent.IE||goog.userAgent.isVersionOrHigher("10"),"Browser does not support typed arrays");var b=new Uint8Array(Math.ceil(3*a.length/4)),c=0;goog.crypt.base64.decodeStringInternal_(a,function(a){b[c++]=a});return b.subarray(0,c)};
goog.crypt.base64.decodeStringInternal_=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=goog.crypt.base64.charToByteMap_[c];if(null!=e)return e;if(!goog.string.isEmptyOrWhitespace(c))throw Error("Unknown base64 encoding at char: "+c);}return b}goog.crypt.base64.init_();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}};
goog.crypt.base64.init_=function(){if(!goog.crypt.base64.byteToCharMap_){goog.crypt.base64.byteToCharMap_={};goog.crypt.base64.charToByteMap_={};goog.crypt.base64.byteToCharMapWebSafe_={};for(var a=0;a<goog.crypt.base64.ENCODED_VALS.length;a++)goog.crypt.base64.byteToCharMap_[a]=goog.crypt.base64.ENCODED_VALS.charAt(a),goog.crypt.base64.charToByteMap_[goog.crypt.base64.byteToCharMap_[a]]=a,goog.crypt.base64.byteToCharMapWebSafe_[a]=goog.crypt.base64.ENCODED_VALS_WEBSAFE.charAt(a),a>=goog.crypt.base64.ENCODED_VALS_BASE.length&&
(goog.crypt.base64.charToByteMap_[goog.crypt.base64.ENCODED_VALS_WEBSAFE.charAt(a)]=a)}};jspb.ExtensionFieldInfo=function(a,b,c,d,e){this.fieldIndex=a;this.fieldName=b;this.ctor=c;this.toObjectFn=d;this.isRepeated=e};jspb.ExtensionFieldBinaryInfo=function(a,b,c,d,e,f){this.fieldInfo=a;this.binaryReaderFn=b;this.binaryWriterFn=c;this.binaryMessageSerializeFn=d;this.binaryMessageDeserializeFn=e;this.isPacked=f};jspb.ExtensionFieldInfo.prototype.isMessageType=function(){return!!this.ctor};jspb.Message=function(){};jspb.Message.GENERATE_TO_OBJECT=!0;jspb.Message.GENERATE_FROM_OBJECT=!goog.DISALLOW_TEST_ONLY_CODE;
jspb.Message.GENERATE_TO_STRING=!0;jspb.Message.ASSUME_LOCAL_ARRAYS=!1;jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS=!0;jspb.Message.SUPPORTS_UINT8ARRAY_="function"==typeof Uint8Array;jspb.Message.prototype.getJsPbMessageId=function(){return this.messageId_};jspb.Message.getIndex_=function(a,b){return b+a.arrayIndexOffset_};jspb.Message.getFieldNumber_=function(a,b){return b-a.arrayIndexOffset_};
jspb.Message.initialize=function(a,b,c,d,e,f){a.wrappers_=null;b||(b=c?[c]:[]);a.messageId_=c?String(c):void 0;a.arrayIndexOffset_=0===c?-1:0;a.array=b;jspb.Message.initPivotAndExtensionObject_(a,d);a.convertedFloatingPointFields_={};jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS||(a.repeatedFields=e);if(e)for(b=0;b<e.length;b++)c=e[b],c<a.pivot_?(c=jspb.Message.getIndex_(a,c),a.array[c]=a.array[c]||jspb.Message.EMPTY_LIST_SENTINEL_):(jspb.Message.maybeInitEmptyExtensionObject_(a),a.extensionObject_[c]=
a.extensionObject_[c]||jspb.Message.EMPTY_LIST_SENTINEL_);if(f&&f.length)for(b=0;b<f.length;b++)jspb.Message.computeOneofCase(a,f[b])};jspb.Message.EMPTY_LIST_SENTINEL_=goog.DEBUG&&Object.freeze?Object.freeze([]):[];jspb.Message.isArray_=function(a){return jspb.Message.ASSUME_LOCAL_ARRAYS?a instanceof Array:goog.isArray(a)};
jspb.Message.initPivotAndExtensionObject_=function(a,b){if(a.array.length){var c=a.array.length-1,d=a.array[c];if(d&&"object"==typeof d&&!jspb.Message.isArray_(d)&&!(jspb.Message.SUPPORTS_UINT8ARRAY_&&d instanceof Uint8Array)){a.pivot_=jspb.Message.getFieldNumber_(a,c);a.extensionObject_=d;return}}-1<b?(a.pivot_=b,a.extensionObject_=null):a.pivot_=Number.MAX_VALUE};
jspb.Message.maybeInitEmptyExtensionObject_=function(a){var b=jspb.Message.getIndex_(a,a.pivot_);a.array[b]||(a.extensionObject_=a.array[b]={})};jspb.Message.toObjectList=function(a,b,c){for(var d=[],e=0;e<a.length;e++)d[e]=b.call(a[e],c,a[e]);return d};
jspb.Message.toObjectExtension=function(a,b,c,d,e){for(var f in c){var g=c[f],h=d.call(a,g);if(null!=h){for(var k in g.fieldName)if(g.fieldName.hasOwnProperty(k))break;b[k]=g.toObjectFn?g.isRepeated?jspb.Message.toObjectList(h,g.toObjectFn,e):g.toObjectFn(e,h):h}}};
jspb.Message.serializeBinaryExtensions=function(a,b,c,d){for(var e in c){var f=c[e],g=f.fieldInfo;if(!f.binaryWriterFn)throw Error("Message extension present that was generated without binary serialization support");var h=d.call(a,g);if(null!=h)if(g.isMessageType())if(f.binaryMessageSerializeFn)f.binaryWriterFn.call(b,g.fieldIndex,h,f.binaryMessageSerializeFn);else throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");
else f.binaryWriterFn.call(b,g.fieldIndex,h)}};jspb.Message.readBinaryExtension=function(a,b,c,d,e){var f=c[b.getFieldNumber()];if(f){c=f.fieldInfo;if(!f.binaryReaderFn)throw Error("Deserializing extension whose generated code does not support binary format");var g;c.isMessageType()?(g=new c.ctor,f.binaryReaderFn.call(b,g,f.binaryMessageDeserializeFn)):g=f.binaryReaderFn.call(b);c.isRepeated&&!f.isPacked?(b=d.call(a,c))?b.push(g):e.call(a,c,[g]):e.call(a,c,g)}else b.skipField()};
jspb.Message.getField=function(a,b){if(b<a.pivot_){var c=jspb.Message.getIndex_(a,b),d=a.array[c];return d===jspb.Message.EMPTY_LIST_SENTINEL_?a.array[c]=[]:d}if(a.extensionObject_)return d=a.extensionObject_[b],d===jspb.Message.EMPTY_LIST_SENTINEL_?a.extensionObject_[b]=[]:d};
jspb.Message.getRepeatedField=function(a,b){if(b<a.pivot_){var c=jspb.Message.getIndex_(a,b),d=a.array[c];return d===jspb.Message.EMPTY_LIST_SENTINEL_?a.array[c]=[]:d}d=a.extensionObject_[b];return d===jspb.Message.EMPTY_LIST_SENTINEL_?a.extensionObject_[b]=[]:d};jspb.Message.getOptionalFloatingPointField=function(a,b){var c=jspb.Message.getField(a,b);return null==c?c:+c};
jspb.Message.getRepeatedFloatingPointField=function(a,b){var c=jspb.Message.getRepeatedField(a,b);a.convertedFloatingPointFields_||(a.convertedFloatingPointFields_={});if(!a.convertedFloatingPointFields_[b]){for(var d=0;d<c.length;d++)c[d]=+c[d];a.convertedFloatingPointFields_[b]=!0}return c};
jspb.Message.bytesAsB64=function(a){if(null==a||goog.isString(a))return a;if(jspb.Message.SUPPORTS_UINT8ARRAY_&&a instanceof Uint8Array)return goog.crypt.base64.encodeByteArray(a);goog.asserts.fail("Cannot coerce to b64 string: "+goog.typeOf(a));return null};jspb.Message.bytesAsU8=function(a){if(null==a||a instanceof Uint8Array)return a;if(goog.isString(a))return goog.crypt.base64.decodeStringToUint8Array(a);goog.asserts.fail("Cannot coerce to Uint8Array: "+goog.typeOf(a));return null};
jspb.Message.bytesListAsB64=function(a){jspb.Message.assertConsistentTypes_(a);return!a.length||goog.isString(a[0])?a:goog.array.map(a,jspb.Message.bytesAsB64)};jspb.Message.bytesListAsU8=function(a){jspb.Message.assertConsistentTypes_(a);return!a.length||a[0]instanceof Uint8Array?a:goog.array.map(a,jspb.Message.bytesAsU8)};
jspb.Message.assertConsistentTypes_=function(a){if(goog.DEBUG&&a&&1<a.length){var b=goog.typeOf(a[0]);goog.array.forEach(a,function(a){goog.typeOf(a)!=b&&goog.asserts.fail("Inconsistent type in JSPB repeated field array. Got "+goog.typeOf(a)+" expected "+b)})}};jspb.Message.getFieldWithDefault=function(a,b,c){a=jspb.Message.getField(a,b);return null==a?c:a};jspb.Message.getFieldProto3=jspb.Message.getFieldWithDefault;
jspb.Message.getMapField=function(a,b,c,d){a.wrappers_||(a.wrappers_={});if(b in a.wrappers_)return a.wrappers_[b];if(!c)return c=jspb.Message.getField(a,b),c||(c=[],jspb.Message.setField(a,b,c)),a.wrappers_[b]=new jspb.Map(c,d)};jspb.Message.setField=function(a,b,c){b<a.pivot_?a.array[jspb.Message.getIndex_(a,b)]=c:(jspb.Message.maybeInitEmptyExtensionObject_(a),a.extensionObject_[b]=c)};jspb.Message.setProto3IntField=function(a,b,c){jspb.Message.setFieldIgnoringDefault_(a,b,c,0)};
jspb.Message.setProto3StringIntField=function(a,b,c){jspb.Message.setFieldIgnoringDefault_(a,b,c,"0")};jspb.Message.setProto3FloatField=function(a,b,c){jspb.Message.setFieldIgnoringDefault_(a,b,c,0)};jspb.Message.setProto3BooleanField=function(a,b,c){jspb.Message.setFieldIgnoringDefault_(a,b,c,!1)};jspb.Message.setProto3StringField=function(a,b,c){jspb.Message.setFieldIgnoringDefault_(a,b,c,"")};jspb.Message.setProto3BytesField=function(a,b,c){jspb.Message.setFieldIgnoringDefault_(a,b,c,"")};
jspb.Message.setProto3EnumField=function(a,b,c){jspb.Message.setFieldIgnoringDefault_(a,b,c,0)};jspb.Message.setFieldIgnoringDefault_=function(a,b,c,d){c!=d?jspb.Message.setField(a,b,c):a.array[jspb.Message.getIndex_(a,b)]=null};jspb.Message.addToRepeatedField=function(a,b,c,d){a=jspb.Message.getRepeatedField(a,b);void 0!=d?a.splice(d,0,c):a.push(c)};
jspb.Message.setOneofField=function(a,b,c,d){(c=jspb.Message.computeOneofCase(a,c))&&c!==b&&void 0!==d&&(a.wrappers_&&c in a.wrappers_&&(a.wrappers_[c]=void 0),jspb.Message.setField(a,c,void 0));jspb.Message.setField(a,b,d)};jspb.Message.computeOneofCase=function(a,b){for(var c,d,e=0;e<b.length;e++){var f=b[e],g=jspb.Message.getField(a,f);null!=g&&(c=f,d=g,jspb.Message.setField(a,f,void 0))}return c?(jspb.Message.setField(a,c,d),c):0};
jspb.Message.getWrapperField=function(a,b,c,d){a.wrappers_||(a.wrappers_={});if(!a.wrappers_[c]){var e=jspb.Message.getField(a,c);if(d||e)a.wrappers_[c]=new b(e)}return a.wrappers_[c]};jspb.Message.getRepeatedWrapperField=function(a,b,c){jspb.Message.wrapRepeatedField_(a,b,c);b=a.wrappers_[c];b==jspb.Message.EMPTY_LIST_SENTINEL_&&(b=a.wrappers_[c]=[]);return b};
jspb.Message.wrapRepeatedField_=function(a,b,c){a.wrappers_||(a.wrappers_={});if(!a.wrappers_[c]){for(var d=jspb.Message.getRepeatedField(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.wrappers_[c]=e}};jspb.Message.setWrapperField=function(a,b,c){a.wrappers_||(a.wrappers_={});var d=c?c.toArray():c;a.wrappers_[b]=c;jspb.Message.setField(a,b,d)};
jspb.Message.setOneofWrapperField=function(a,b,c,d){a.wrappers_||(a.wrappers_={});var e=d?d.toArray():d;a.wrappers_[b]=d;jspb.Message.setOneofField(a,b,c,e)};jspb.Message.setRepeatedWrapperField=function(a,b,c){a.wrappers_||(a.wrappers_={});c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=c[e].toArray();a.wrappers_[b]=c;jspb.Message.setField(a,b,d)};
jspb.Message.addToRepeatedWrapperField=function(a,b,c,d,e){jspb.Message.wrapRepeatedField_(a,d,b);var f=a.wrappers_[b];f||(f=a.wrappers_[b]=[]);c=c?c:new d;a=jspb.Message.getRepeatedField(a,b);void 0!=e?(f.splice(e,0,c),a.splice(e,0,c.toArray())):(f.push(c),a.push(c.toArray()));return c};jspb.Message.toMap=function(a,b,c,d){for(var e={},f=0;f<a.length;f++)e[b.call(a[f])]=c?c.call(a[f],d,a[f]):a[f];return e};
jspb.Message.prototype.syncMapFields_=function(){if(this.wrappers_)for(var a in this.wrappers_){var b=this.wrappers_[a];if(goog.isArray(b))for(var c=0;c<b.length;c++)b[c]&&b[c].toArray();else b&&b.toArray()}};jspb.Message.prototype.toArray=function(){this.syncMapFields_();return this.array};jspb.Message.GENERATE_TO_STRING&&(jspb.Message.prototype.toString=function(){this.syncMapFields_();return this.array.toString()});
jspb.Message.prototype.getExtension=function(a){if(this.extensionObject_){this.wrappers_||(this.wrappers_={});var b=a.fieldIndex;if(a.isRepeated){if(a.isMessageType())return this.wrappers_[b]||(this.wrappers_[b]=goog.array.map(this.extensionObject_[b]||[],function(b){return new a.ctor(b)})),this.wrappers_[b]}else if(a.isMessageType())return!this.wrappers_[b]&&this.extensionObject_[b]&&(this.wrappers_[b]=new a.ctor(this.extensionObject_[b])),this.wrappers_[b];return this.extensionObject_[b]}};
jspb.Message.prototype.setExtension=function(a,b){this.wrappers_||(this.wrappers_={});jspb.Message.maybeInitEmptyExtensionObject_(this);var c=a.fieldIndex;a.isRepeated?(b=b||[],a.isMessageType()?(this.wrappers_[c]=b,this.extensionObject_[c]=goog.array.map(b,function(a){return a.toArray()})):this.extensionObject_[c]=b):a.isMessageType()?(this.wrappers_[c]=b,this.extensionObject_[c]=b?b.toArray():b):this.extensionObject_[c]=b;return this};
jspb.Message.difference=function(a,b){if(!(a instanceof b.constructor))throw Error("Messages have different types.");var c=a.toArray(),d=b.toArray(),e=[],f=0,g=c.length>d.length?c.length:d.length;a.getJsPbMessageId()&&(e[0]=a.getJsPbMessageId(),f=1);for(;f<g;f++)jspb.Message.compareFields(c[f],d[f])||(e[f]=d[f]);return new a.constructor(e)};jspb.Message.equals=function(a,b){return a==b||!(!a||!b)&&a instanceof b.constructor&&jspb.Message.compareFields(a.toArray(),b.toArray())};
jspb.Message.compareExtensions=function(a,b){a=a||{};b=b||{};var c={},d;for(d in a)c[d]=0;for(d in b)c[d]=0;for(d in c)if(!jspb.Message.compareFields(a[d],b[d]))return!1;return!0};
jspb.Message.compareFields=function(a,b){if(a==b)return!0;if(!goog.isObject(a)||!goog.isObject(b))return goog.isNumber(a)&&isNaN(a)||goog.isNumber(b)&&isNaN(b)?String(a)==String(b):!1;if(a.constructor!=b.constructor)return!1;if(jspb.Message.SUPPORTS_UINT8ARRAY_&&a.constructor===Uint8Array){if(a.length!=b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!=b[c])return!1;return!0}if(a.constructor===Array){for(var d=void 0,e=void 0,f=Math.max(a.length,b.length),c=0;c<f;c++){var g=a[c],h=b[c];g&&g.constructor==
Object&&(goog.asserts.assert(void 0===d),goog.asserts.assert(c===a.length-1),d=g,g=void 0);h&&h.constructor==Object&&(goog.asserts.assert(void 0===e),goog.asserts.assert(c===b.length-1),e=h,h=void 0);if(!jspb.Message.compareFields(g,h))return!1}return d||e?(d=d||{},e=e||{},jspb.Message.compareExtensions(d,e)):!0}if(a.constructor===Object)return jspb.Message.compareExtensions(a,b);throw Error("Invalid type in JSPB array");};jspb.Message.prototype.cloneMessage=function(){return jspb.Message.cloneMessage(this)};
jspb.Message.prototype.clone=function(){return jspb.Message.cloneMessage(this)};jspb.Message.clone=function(a){return jspb.Message.cloneMessage(a)};jspb.Message.cloneMessage=function(a){return new a.constructor(jspb.Message.clone_(a.toArray()))};
jspb.Message.copyInto=function(a,b){goog.asserts.assertInstanceof(a,jspb.Message);goog.asserts.assertInstanceof(b,jspb.Message);goog.asserts.assert(a.constructor==b.constructor,"Copy source and target message should have the same type.");for(var c=jspb.Message.clone(a),d=b.toArray(),e=c.toArray(),f=d.length=0;f<e.length;f++)d[f]=e[f];b.wrappers_=c.wrappers_;b.extensionObject_=c.extensionObject_};
jspb.Message.clone_=function(a){var b;if(goog.isArray(a)){for(var c=Array(a.length),d=0;d<a.length;d++)b=a[d],null!=b&&(c[d]="object"==typeof b?jspb.Message.clone_(goog.asserts.assert(b)):b);return c}if(jspb.Message.SUPPORTS_UINT8ARRAY_&&a instanceof Uint8Array)return new Uint8Array(a);c={};for(d in a)b=a[d],null!=b&&(c[d]="object"==typeof b?jspb.Message.clone_(goog.asserts.assert(b)):b);return c};jspb.Message.registerMessageType=function(a,b){jspb.Message.registry_[a]=b;b.messageId=a};
jspb.Message.registry_={};jspb.Message.messageSetExtensions={};jspb.Message.messageSetExtensionsBinary={};jspb.arith={};jspb.arith.UInt64=function(a,b){this.lo=a;this.hi=b};jspb.arith.UInt64.prototype.cmp=function(a){return this.hi<a.hi||this.hi==a.hi&&this.lo<a.lo?-1:this.hi==a.hi&&this.lo==a.lo?0:1};jspb.arith.UInt64.prototype.rightShift=function(){return new jspb.arith.UInt64((this.lo>>>1|(this.hi&1)<<31)>>>0,this.hi>>>1>>>0)};jspb.arith.UInt64.prototype.leftShift=function(){return new jspb.arith.UInt64(this.lo<<1>>>0,(this.hi<<1|this.lo>>>31)>>>0)};
jspb.arith.UInt64.prototype.msb=function(){return!!(this.hi&2147483648)};jspb.arith.UInt64.prototype.lsb=function(){return!!(this.lo&1)};jspb.arith.UInt64.prototype.zero=function(){return 0==this.lo&&0==this.hi};jspb.arith.UInt64.prototype.add=function(a){return new jspb.arith.UInt64((this.lo+a.lo&4294967295)>>>0>>>0,((this.hi+a.hi&4294967295)>>>0)+(4294967296<=this.lo+a.lo?1:0)>>>0)};
jspb.arith.UInt64.prototype.sub=function(a){return new jspb.arith.UInt64((this.lo-a.lo&4294967295)>>>0>>>0,((this.hi-a.hi&4294967295)>>>0)-(0>this.lo-a.lo?1:0)>>>0)};jspb.arith.UInt64.mul32x32=function(a,b){for(var c=a&65535,d=a>>>16,e=b&65535,f=b>>>16,g=c*e+65536*(c*f&65535)+65536*(d*e&65535),c=d*f+(c*f>>>16)+(d*e>>>16);4294967296<=g;)g-=4294967296,c+=1;return new jspb.arith.UInt64(g>>>0,c>>>0)};
jspb.arith.UInt64.prototype.mul=function(a){var b=jspb.arith.UInt64.mul32x32(this.lo,a);a=jspb.arith.UInt64.mul32x32(this.hi,a);a.hi=a.lo;a.lo=0;return b.add(a)};
jspb.arith.UInt64.prototype.div=function(a){if(0==a)return[];var b=new jspb.arith.UInt64(0,0),c=new jspb.arith.UInt64(this.lo,this.hi);a=new jspb.arith.UInt64(a,0);for(var d=new jspb.arith.UInt64(1,0);!a.msb();)a=a.leftShift(),d=d.leftShift();for(;!d.zero();)0>=a.cmp(c)&&(b=b.add(d),c=c.sub(a)),a=a.rightShift(),d=d.rightShift();return[b,c]};jspb.arith.UInt64.prototype.toString=function(){for(var a="",b=this;!b.zero();)var b=b.div(10),c=b[0],a=b[1].lo+a,b=c;""==a&&(a="0");return a};
jspb.arith.UInt64.fromString=function(a){for(var b=new jspb.arith.UInt64(0,0),c=new jspb.arith.UInt64(0,0),d=0;d<a.length;d++){if("0">a[d]||"9"<a[d])return null;var e=parseInt(a[d],10);c.lo=e;b=b.mul(10).add(c)}return b};jspb.arith.UInt64.prototype.clone=function(){return new jspb.arith.UInt64(this.lo,this.hi)};jspb.arith.Int64=function(a,b){this.lo=a;this.hi=b};
jspb.arith.Int64.prototype.add=function(a){return new jspb.arith.Int64((this.lo+a.lo&4294967295)>>>0>>>0,((this.hi+a.hi&4294967295)>>>0)+(4294967296<=this.lo+a.lo?1:0)>>>0)};jspb.arith.Int64.prototype.sub=function(a){return new jspb.arith.Int64((this.lo-a.lo&4294967295)>>>0>>>0,((this.hi-a.hi&4294967295)>>>0)-(0>this.lo-a.lo?1:0)>>>0)};jspb.arith.Int64.prototype.clone=function(){return new jspb.arith.Int64(this.lo,this.hi)};
jspb.arith.Int64.prototype.toString=function(){var a=0!=(this.hi&2147483648),b=new jspb.arith.UInt64(this.lo,this.hi);a&&(b=(new jspb.arith.UInt64(0,0)).sub(b));return(a?"-":"")+b.toString()};jspb.arith.Int64.fromString=function(a){var b=0<a.length&&"-"==a[0];b&&(a=a.substring(1));a=jspb.arith.UInt64.fromString(a);if(null===a)return null;b&&(a=(new jspb.arith.UInt64(0,0)).sub(a));return new jspb.arith.Int64(a.lo,a.hi)};jspb.BinaryConstants={};jspb.ConstBinaryMessage=function(){};jspb.BinaryMessage=function(){};jspb.BinaryConstants.FieldType={INVALID:-1,DOUBLE:1,FLOAT:2,INT64:3,UINT64:4,INT32:5,FIXED64:6,FIXED32:7,BOOL:8,STRING:9,GROUP:10,MESSAGE:11,BYTES:12,UINT32:13,ENUM:14,SFIXED32:15,SFIXED64:16,SINT32:17,SINT64:18,FHASH64:30,VHASH64:31};jspb.BinaryConstants.WireType={INVALID:-1,VARINT:0,FIXED64:1,DELIMITED:2,START_GROUP:3,END_GROUP:4,FIXED32:5};
jspb.BinaryConstants.FieldTypeToWireType=function(a){var b=jspb.BinaryConstants.FieldType,c=jspb.BinaryConstants.WireType;switch(a){case b.INT32:case b.INT64:case b.UINT32:case b.UINT64:case b.SINT32:case b.SINT64:case b.BOOL:case b.ENUM:case b.VHASH64:return c.VARINT;case b.DOUBLE:case b.FIXED64:case b.SFIXED64:case b.FHASH64:return c.FIXED64;case b.STRING:case b.MESSAGE:case b.BYTES:return c.DELIMITED;case b.FLOAT:case b.FIXED32:case b.SFIXED32:return c.FIXED32;default:return c.INVALID}};
jspb.BinaryConstants.INVALID_FIELD_NUMBER=-1;jspb.BinaryConstants.FLOAT32_EPS=1.401298464324817E-45;jspb.BinaryConstants.FLOAT32_MIN=1.1754943508222875E-38;jspb.BinaryConstants.FLOAT32_MAX=3.4028234663852886E38;jspb.BinaryConstants.FLOAT64_EPS=4.9E-324;jspb.BinaryConstants.FLOAT64_MIN=2.2250738585072014E-308;jspb.BinaryConstants.FLOAT64_MAX=1.7976931348623157E308;jspb.BinaryConstants.TWO_TO_20=1048576;jspb.BinaryConstants.TWO_TO_23=8388608;jspb.BinaryConstants.TWO_TO_31=2147483648;
jspb.BinaryConstants.TWO_TO_32=4294967296;jspb.BinaryConstants.TWO_TO_52=4503599627370496;jspb.BinaryConstants.TWO_TO_63=0x7fffffffffffffff;jspb.BinaryConstants.TWO_TO_64=1.8446744073709552E19;jspb.BinaryConstants.ZERO_HASH="\x00\x00\x00\x00\x00\x00\x00\x00";jspb.utils={};jspb.utils.split64Low=0;jspb.utils.split64High=0;jspb.utils.splitUint64=function(a){var b=a>>>0;a=Math.floor((a-b)/jspb.BinaryConstants.TWO_TO_32)>>>0;jspb.utils.split64Low=b;jspb.utils.split64High=a};jspb.utils.splitInt64=function(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/jspb.BinaryConstants.TWO_TO_32);a>>>=0;b&&(a=~a>>>0,c=(~c>>>0)+1,4294967295<c&&(c=0,a++,4294967295<a&&(a=0)));jspb.utils.split64Low=c;jspb.utils.split64High=a};
jspb.utils.splitZigzag64=function(a){var b=0>a;a=2*Math.abs(a);jspb.utils.splitUint64(a);a=jspb.utils.split64Low;var c=jspb.utils.split64High;b&&(0==a?0==c?c=a=4294967295:(c--,a=4294967295):a--);jspb.utils.split64Low=a;jspb.utils.split64High=c};
jspb.utils.splitFloat32=function(a){var b=0>a?1:0;a=b?-a:a;var c;0===a?0<1/a?(jspb.utils.split64High=0,jspb.utils.split64Low=0):(jspb.utils.split64High=0,jspb.utils.split64Low=2147483648):isNaN(a)?(jspb.utils.split64High=0,jspb.utils.split64Low=2147483647):a>jspb.BinaryConstants.FLOAT32_MAX?(jspb.utils.split64High=0,jspb.utils.split64Low=(b<<31|2139095040)>>>0):a<jspb.BinaryConstants.FLOAT32_MIN?(a=Math.round(a/Math.pow(2,-149)),jspb.utils.split64High=0,jspb.utils.split64Low=(b<<31|a)>>>0):(c=Math.floor(Math.log(a)/
Math.LN2),a*=Math.pow(2,-c),a=Math.round(a*jspb.BinaryConstants.TWO_TO_23)&8388607,jspb.utils.split64High=0,jspb.utils.split64Low=(b<<31|c+127<<23|a)>>>0)};
jspb.utils.splitFloat64=function(a){var b=0>a?1:0;a=b?-a:a;if(0===a)jspb.utils.split64High=0<1/a?0:2147483648,jspb.utils.split64Low=0;else if(isNaN(a))jspb.utils.split64High=2147483647,jspb.utils.split64Low=4294967295;else if(a>jspb.BinaryConstants.FLOAT64_MAX)jspb.utils.split64High=(b<<31|2146435072)>>>0,jspb.utils.split64Low=0;else if(a<jspb.BinaryConstants.FLOAT64_MIN){var c=a/Math.pow(2,-1074);a=c/jspb.BinaryConstants.TWO_TO_32;jspb.utils.split64High=(b<<31|a)>>>0;jspb.utils.split64Low=c>>>0}else{var d=
Math.floor(Math.log(a)/Math.LN2);1024==d&&(d=1023);c=a*Math.pow(2,-d);a=c*jspb.BinaryConstants.TWO_TO_20&1048575;c=c*jspb.BinaryConstants.TWO_TO_52>>>0;jspb.utils.split64High=(b<<31|d+1023<<20|a)>>>0;jspb.utils.split64Low=c}};
jspb.utils.splitHash64=function(a){var b=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),e=a.charCodeAt(3),f=a.charCodeAt(4),g=a.charCodeAt(5),h=a.charCodeAt(6);a=a.charCodeAt(7);jspb.utils.split64Low=b+(c<<8)+(d<<16)+(e<<24)>>>0;jspb.utils.split64High=f+(g<<8)+(h<<16)+(a<<24)>>>0};jspb.utils.joinUint64=function(a,b){return b*jspb.BinaryConstants.TWO_TO_32+a};
jspb.utils.joinInt64=function(a,b){var c=b&2147483648;c&&(a=~a+1>>>0,b=~b>>>0,0==a&&(b=b+1>>>0));var d=jspb.utils.joinUint64(a,b);return c?-d:d};jspb.utils.joinZigzag64=function(a,b){var c=a&1;a=(a>>>1|b<<31)>>>0;b>>>=1;c&&(a=a+1>>>0,0==a&&(b=b+1>>>0));var d=jspb.utils.joinUint64(a,b);return c?-d:d};jspb.utils.joinFloat32=function(a,b){var c=2*(a>>31)+1,d=a>>>23&255,e=a&8388607;return 255==d?e?NaN:Infinity*c:0==d?c*Math.pow(2,-149)*e:c*Math.pow(2,d-150)*(e+Math.pow(2,23))};
jspb.utils.joinFloat64=function(a,b){var c=2*(b>>31)+1,d=b>>>20&2047,e=jspb.BinaryConstants.TWO_TO_32*(b&1048575)+a;return 2047==d?e?NaN:Infinity*c:0==d?c*Math.pow(2,-1074)*e:c*Math.pow(2,d-1075)*(e+jspb.BinaryConstants.TWO_TO_52)};jspb.utils.joinHash64=function(a,b){return String.fromCharCode(a>>>0&255,a>>>8&255,a>>>16&255,a>>>24&255,b>>>0&255,b>>>8&255,b>>>16&255,b>>>24&255)};jspb.utils.DIGITS="0123456789abcdef".split("");
jspb.utils.joinUnsignedDecimalString=function(a,b){function c(a){for(var b=1E7,c=0;7>c;c++){var b=b/10,d=a/b%10>>>0;if(0!=d||h)h=!0,k+=g[d]}}if(2097151>=b)return""+(jspb.BinaryConstants.TWO_TO_32*b+a);var d=(a>>>24|b<<8)>>>0&16777215,e=b>>16&65535,f=(a&16777215)+6777216*d+6710656*e,d=d+8147497*e,e=2*e;1E7<=f&&(d+=Math.floor(f/1E7),f%=1E7);1E7<=d&&(e+=Math.floor(d/1E7),d%=1E7);var g=jspb.utils.DIGITS,h=!1,k="";(e||h)&&c(e);(d||h)&&c(d);(f||h)&&c(f);return k};
jspb.utils.joinSignedDecimalString=function(a,b){var c=b&2147483648;c&&(a=~a+1>>>0,b=~b+(0==a?1:0)>>>0);var d=jspb.utils.joinUnsignedDecimalString(a,b);return c?"-"+d:d};jspb.utils.hash64ToDecimalString=function(a,b){jspb.utils.splitHash64(a);var c=jspb.utils.split64Low,d=jspb.utils.split64High;return b?jspb.utils.joinSignedDecimalString(c,d):jspb.utils.joinUnsignedDecimalString(c,d)};
jspb.utils.hash64ArrayToDecimalStrings=function(a,b){for(var c=Array(a.length),d=0;d<a.length;d++)c[d]=jspb.utils.hash64ToDecimalString(a[d],b);return c};
jspb.utils.decimalStringToHash64=function(a){function b(a,b){for(var c=0;8>c&&(1!==a||0<b);c++){var d=a*e[c]+b;e[c]=d&255;b=d>>>8}}function c(){for(var a=0;8>a;a++)e[a]=~e[a]&255}goog.asserts.assert(0<a.length);var d=!1;"-"===a[0]&&(d=!0,a=a.slice(1));for(var e=[0,0,0,0,0,0,0,0],f=0;f<a.length;f++)b(10,jspb.utils.DIGITS.indexOf(a[f]));d&&(c(),b(1,1));return goog.crypt.byteArrayToString(e)};jspb.utils.splitDecimalString=function(a){jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a))};
jspb.utils.hash64ToHexString=function(a){var b=Array(18);b[0]="0";b[1]="x";for(var c=0;8>c;c++){var d=a.charCodeAt(7-c);b[2*c+2]=jspb.utils.DIGITS[d>>4];b[2*c+3]=jspb.utils.DIGITS[d&15]}return b.join("")};jspb.utils.hexStringToHash64=function(a){a=a.toLowerCase();goog.asserts.assert(18==a.length);goog.asserts.assert("0"==a[0]);goog.asserts.assert("x"==a[1]);for(var b="",c=0;8>c;c++)var d=jspb.utils.DIGITS.indexOf(a[2*c+2]),e=jspb.utils.DIGITS.indexOf(a[2*c+3]),b=String.fromCharCode(16*d+e)+b;return b};
jspb.utils.hash64ToNumber=function(a,b){jspb.utils.splitHash64(a);var c=jspb.utils.split64Low,d=jspb.utils.split64High;return b?jspb.utils.joinInt64(c,d):jspb.utils.joinUint64(c,d)};jspb.utils.numberToHash64=function(a){jspb.utils.splitInt64(a);return jspb.utils.joinHash64(jspb.utils.split64Low,jspb.utils.split64High)};jspb.utils.countVarints=function(a,b,c){for(var d=0,e=b;e<c;e++)d+=a[e]>>7;return c-b-d};
jspb.utils.countVarintFields=function(a,b,c,d){var e=0;d=8*d+jspb.BinaryConstants.WireType.VARINT;if(128>d)for(;b<c&&a[b++]==d;)for(e++;;){var f=a[b++];if(0==(f&128))break}else for(;b<c;){for(f=d;128<f;){if(a[b]!=(f&127|128))return e;b++;f>>=7}if(a[b++]!=f)break;for(e++;f=a[b++],0!=(f&128););}return e};jspb.utils.countFixedFields_=function(a,b,c,d,e){var f=0;if(128>d)for(;b<c&&a[b++]==d;)f++,b+=e;else for(;b<c;){for(var g=d;128<g;){if(a[b++]!=(g&127|128))return f;g>>=7}if(a[b++]!=g)break;f++;b+=e}return f};
jspb.utils.countFixed32Fields=function(a,b,c,d){return jspb.utils.countFixedFields_(a,b,c,8*d+jspb.BinaryConstants.WireType.FIXED32,4)};jspb.utils.countFixed64Fields=function(a,b,c,d){return jspb.utils.countFixedFields_(a,b,c,8*d+jspb.BinaryConstants.WireType.FIXED64,8)};
jspb.utils.countDelimitedFields=function(a,b,c,d){var e=0;for(d=8*d+jspb.BinaryConstants.WireType.DELIMITED;b<c;){for(var f=d;128<f;){if(a[b++]!=(f&127|128))return e;f>>=7}if(a[b++]!=f)break;e++;for(var g=0,h=1;f=a[b++],g+=(f&127)*h,h*=128,0!=(f&128););b+=g}return e};jspb.utils.debugBytesToTextFormat=function(a){var b='"';if(a){a=jspb.utils.byteSourceToUint8Array(a);for(var c=0;c<a.length;c++)b+="\\x",16>a[c]&&(b+="0"),b+=a[c].toString(16)}return b+'"'};
jspb.utils.debugScalarToTextFormat=function(a){return goog.isString(a)?goog.string.quote(a):a.toString()};jspb.utils.stringToByteArray=function(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++){var d=a.charCodeAt(c);if(255<d)throw Error("Conversion error: string contains codepoint outside of byte range");b[c]=d}return b};
jspb.utils.byteSourceToUint8Array=function(a){if(a.constructor===Uint8Array)return a;if(a.constructor===ArrayBuffer||a.constructor===Buffer||a.constructor===Array)return new Uint8Array(a);if(a.constructor===String)return goog.crypt.base64.decodeStringToUint8Array(a);goog.asserts.fail("Type not convertible to Uint8Array.");return new Uint8Array(0)};jspb.BinaryEncoder=function(){this.buffer_=[]};jspb.BinaryEncoder.prototype.length=function(){return this.buffer_.length};jspb.BinaryEncoder.prototype.end=function(){var a=this.buffer_;this.buffer_=[];return a};
jspb.BinaryEncoder.prototype.writeSplitVarint64=function(a,b){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(b==Math.floor(b));goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_32);for(goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_32);0<b||127<a;)this.buffer_.push(a&127|128),a=(a>>>7|b<<25)>>>0,b>>>=7;this.buffer_.push(a)};
jspb.BinaryEncoder.prototype.writeSplitFixed64=function(a,b){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(b==Math.floor(b));goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_32);goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_32);this.writeUint32(a);this.writeUint32(b)};
jspb.BinaryEncoder.prototype.writeUnsignedVarint32=function(a){goog.asserts.assert(a==Math.floor(a));for(goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_32);127<a;)this.buffer_.push(a&127|128),a>>>=7;this.buffer_.push(a)};
jspb.BinaryEncoder.prototype.writeSignedVarint32=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_31&&a<jspb.BinaryConstants.TWO_TO_31);if(0<=a)this.writeUnsignedVarint32(a);else{for(var b=0;9>b;b++)this.buffer_.push(a&127|128),a>>=7;this.buffer_.push(1)}};
jspb.BinaryEncoder.prototype.writeUnsignedVarint64=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_64);jspb.utils.splitInt64(a);this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeSignedVarint64=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_63&&a<jspb.BinaryConstants.TWO_TO_63);jspb.utils.splitInt64(a);this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeZigzagVarint32=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_31&&a<jspb.BinaryConstants.TWO_TO_31);this.writeUnsignedVarint32((a<<1^a>>31)>>>0)};jspb.BinaryEncoder.prototype.writeZigzagVarint64=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_63&&a<jspb.BinaryConstants.TWO_TO_63);jspb.utils.splitZigzag64(a);this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeZigzagVarint64String=function(a){this.writeZigzagVarint64(parseInt(a,10))};jspb.BinaryEncoder.prototype.writeUint8=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(0<=a&&256>a);this.buffer_.push(a>>>0&255)};jspb.BinaryEncoder.prototype.writeUint16=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(0<=a&&65536>a);this.buffer_.push(a>>>0&255);this.buffer_.push(a>>>8&255)};
jspb.BinaryEncoder.prototype.writeUint32=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_32);this.buffer_.push(a>>>0&255);this.buffer_.push(a>>>8&255);this.buffer_.push(a>>>16&255);this.buffer_.push(a>>>24&255)};jspb.BinaryEncoder.prototype.writeUint64=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(0<=a&&a<jspb.BinaryConstants.TWO_TO_64);jspb.utils.splitUint64(a);this.writeUint32(jspb.utils.split64Low);this.writeUint32(jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeInt8=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(-128<=a&&128>a);this.buffer_.push(a>>>0&255)};jspb.BinaryEncoder.prototype.writeInt16=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(-32768<=a&&32768>a);this.buffer_.push(a>>>0&255);this.buffer_.push(a>>>8&255)};
jspb.BinaryEncoder.prototype.writeInt32=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_31&&a<jspb.BinaryConstants.TWO_TO_31);this.buffer_.push(a>>>0&255);this.buffer_.push(a>>>8&255);this.buffer_.push(a>>>16&255);this.buffer_.push(a>>>24&255)};
jspb.BinaryEncoder.prototype.writeInt64=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_63&&a<jspb.BinaryConstants.TWO_TO_63);jspb.utils.splitInt64(a);this.writeSplitFixed64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeInt64String=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(+a>=-jspb.BinaryConstants.TWO_TO_63&&+a<jspb.BinaryConstants.TWO_TO_63);jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a));this.writeSplitFixed64(jspb.utils.split64Low,jspb.utils.split64High)};jspb.BinaryEncoder.prototype.writeFloat=function(a){goog.asserts.assert(a>=-jspb.BinaryConstants.FLOAT32_MAX&&a<=jspb.BinaryConstants.FLOAT32_MAX);jspb.utils.splitFloat32(a);this.writeUint32(jspb.utils.split64Low)};
jspb.BinaryEncoder.prototype.writeDouble=function(a){goog.asserts.assert(a>=-jspb.BinaryConstants.FLOAT64_MAX&&a<=jspb.BinaryConstants.FLOAT64_MAX);jspb.utils.splitFloat64(a);this.writeUint32(jspb.utils.split64Low);this.writeUint32(jspb.utils.split64High)};jspb.BinaryEncoder.prototype.writeBool=function(a){goog.asserts.assert(goog.isBoolean(a)||goog.isNumber(a));this.buffer_.push(a?1:0)};
jspb.BinaryEncoder.prototype.writeEnum=function(a){goog.asserts.assert(a==Math.floor(a));goog.asserts.assert(a>=-jspb.BinaryConstants.TWO_TO_31&&a<jspb.BinaryConstants.TWO_TO_31);this.writeSignedVarint32(a)};jspb.BinaryEncoder.prototype.writeBytes=function(a){this.buffer_.push.apply(this.buffer_,a)};jspb.BinaryEncoder.prototype.writeVarintHash64=function(a){jspb.utils.splitHash64(a);this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeFixedHash64=function(a){jspb.utils.splitHash64(a);this.writeUint32(jspb.utils.split64Low);this.writeUint32(jspb.utils.split64High)};
jspb.BinaryEncoder.prototype.writeString=function(a){for(var b=this.buffer_.length,c=0;c<a.length;c++){var d=a.charCodeAt(c);if(128>d)this.buffer_.push(d);else if(2048>d)this.buffer_.push(d>>6|192),this.buffer_.push(d&63|128);else if(65536>d)if(55296<=d&&56319>=d&&c+1<a.length){var e=a.charCodeAt(c+1);56320<=e&&57343>=e&&(d=1024*(d-55296)+e-56320+65536,this.buffer_.push(d>>18|240),this.buffer_.push(d>>12&63|128),this.buffer_.push(d>>6&63|128),this.buffer_.push(d&63|128),c++)}else this.buffer_.push(d>>
12|224),this.buffer_.push(d>>6&63|128),this.buffer_.push(d&63|128)}return this.buffer_.length-b};jspb.BinaryWriter=function(){this.blocks_=[];this.totalLength_=0;this.encoder_=new jspb.BinaryEncoder;this.bookmarks_=[]};jspb.BinaryWriter.prototype.appendUint8Array_=function(a){var b=this.encoder_.end();this.blocks_.push(b);this.blocks_.push(a);this.totalLength_+=b.length+a.length};
jspb.BinaryWriter.prototype.beginDelimited_=function(a){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);a=this.encoder_.end();this.blocks_.push(a);this.totalLength_+=a.length;a.push(this.totalLength_);return a};jspb.BinaryWriter.prototype.endDelimited_=function(a){var b=a.pop(),b=this.totalLength_+this.encoder_.length()-b;for(goog.asserts.assert(0<=b);127<b;)a.push(b&127|128),b>>>=7,this.totalLength_++;a.push(b);this.totalLength_++};
jspb.BinaryWriter.prototype.writeSerializedMessage=function(a,b,c){this.appendUint8Array_(a.subarray(b,c))};jspb.BinaryWriter.prototype.maybeWriteSerializedMessage=function(a,b,c){null!=a&&null!=b&&null!=c&&this.writeSerializedMessage(a,b,c)};jspb.BinaryWriter.prototype.reset=function(){this.blocks_=[];this.encoder_.end();this.totalLength_=0;this.bookmarks_=[]};
jspb.BinaryWriter.prototype.getResultBuffer=function(){goog.asserts.assert(0==this.bookmarks_.length);for(var a=new Uint8Array(this.totalLength_+this.encoder_.length()),b=this.blocks_,c=b.length,d=0,e=0;e<c;e++){var f=b[e];a.set(f,d);d+=f.length}b=this.encoder_.end();a.set(b,d);d+=b.length;goog.asserts.assert(d==a.length);this.blocks_=[a];return a};jspb.BinaryWriter.prototype.getResultBase64String=function(a){return goog.crypt.base64.encodeByteArray(this.getResultBuffer(),a)};
jspb.BinaryWriter.prototype.beginSubMessage=function(a){this.bookmarks_.push(this.beginDelimited_(a))};jspb.BinaryWriter.prototype.endSubMessage=function(){goog.asserts.assert(0<=this.bookmarks_.length);this.endDelimited_(this.bookmarks_.pop())};jspb.BinaryWriter.prototype.writeFieldHeader_=function(a,b){goog.asserts.assert(1<=a&&a==Math.floor(a));this.encoder_.writeUnsignedVarint32(8*a+b)};
jspb.BinaryWriter.prototype.writeAny=function(a,b,c){var d=jspb.BinaryConstants.FieldType;switch(a){case d.DOUBLE:this.writeDouble(b,c);break;case d.FLOAT:this.writeFloat(b,c);break;case d.INT64:this.writeInt64(b,c);break;case d.UINT64:this.writeUint64(b,c);break;case d.INT32:this.writeInt32(b,c);break;case d.FIXED64:this.writeFixed64(b,c);break;case d.FIXED32:this.writeFixed32(b,c);break;case d.BOOL:this.writeBool(b,c);break;case d.STRING:this.writeString(b,c);break;case d.GROUP:goog.asserts.fail("Group field type not supported in writeAny()");
break;case d.MESSAGE:goog.asserts.fail("Message field type not supported in writeAny()");break;case d.BYTES:this.writeBytes(b,c);break;case d.UINT32:this.writeUint32(b,c);break;case d.ENUM:this.writeEnum(b,c);break;case d.SFIXED32:this.writeSfixed32(b,c);break;case d.SFIXED64:this.writeSfixed64(b,c);break;case d.SINT32:this.writeSint32(b,c);break;case d.SINT64:this.writeSint64(b,c);break;case d.FHASH64:this.writeFixedHash64(b,c);break;case d.VHASH64:this.writeVarintHash64(b,c);break;default:goog.asserts.fail("Invalid field type in writeAny()")}};
jspb.BinaryWriter.prototype.writeUnsignedVarint32_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeUnsignedVarint32(b))};jspb.BinaryWriter.prototype.writeSignedVarint32_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSignedVarint32(b))};jspb.BinaryWriter.prototype.writeUnsignedVarint64_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeUnsignedVarint64(b))};
jspb.BinaryWriter.prototype.writeSignedVarint64_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSignedVarint64(b))};jspb.BinaryWriter.prototype.writeZigzagVarint32_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeZigzagVarint32(b))};jspb.BinaryWriter.prototype.writeZigzagVarint64_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeZigzagVarint64(b))};
jspb.BinaryWriter.prototype.writeZigzagVarint64String_=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeZigzagVarint64String(b))};jspb.BinaryWriter.prototype.writeInt32=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_31&&b<jspb.BinaryConstants.TWO_TO_31),this.writeSignedVarint32_(a,b))};
jspb.BinaryWriter.prototype.writeInt32String=function(a,b){if(null!=b){var c=parseInt(b,10);goog.asserts.assert(c>=-jspb.BinaryConstants.TWO_TO_31&&c<jspb.BinaryConstants.TWO_TO_31);this.writeSignedVarint32_(a,c)}};jspb.BinaryWriter.prototype.writeInt64=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_63&&b<jspb.BinaryConstants.TWO_TO_63),this.writeSignedVarint64_(a,b))};
jspb.BinaryWriter.prototype.writeInt64String=function(a,b){if(null!=b){var c=jspb.arith.Int64.fromString(b);this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT);this.encoder_.writeSplitVarint64(c.lo,c.hi)}};jspb.BinaryWriter.prototype.writeUint32=function(a,b){null!=b&&(goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_32),this.writeUnsignedVarint32_(a,b))};
jspb.BinaryWriter.prototype.writeUint32String=function(a,b){if(null!=b){var c=parseInt(b,10);goog.asserts.assert(0<=c&&c<jspb.BinaryConstants.TWO_TO_32);this.writeUnsignedVarint32_(a,c)}};jspb.BinaryWriter.prototype.writeUint64=function(a,b){null!=b&&(goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_64),this.writeUnsignedVarint64_(a,b))};
jspb.BinaryWriter.prototype.writeUint64String=function(a,b){if(null!=b){var c=jspb.arith.UInt64.fromString(b);this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT);this.encoder_.writeSplitVarint64(c.lo,c.hi)}};jspb.BinaryWriter.prototype.writeSint32=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_31&&b<jspb.BinaryConstants.TWO_TO_31),this.writeZigzagVarint32_(a,b))};
jspb.BinaryWriter.prototype.writeSint64=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_63&&b<jspb.BinaryConstants.TWO_TO_63),this.writeZigzagVarint64_(a,b))};jspb.BinaryWriter.prototype.writeSint64String=function(a,b){null!=b&&(goog.asserts.assert(+b>=-jspb.BinaryConstants.TWO_TO_63&&+b<jspb.BinaryConstants.TWO_TO_63),this.writeZigzagVarint64String_(a,b))};
jspb.BinaryWriter.prototype.writeFixed32=function(a,b){null!=b&&(goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_32),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED32),this.encoder_.writeUint32(b))};jspb.BinaryWriter.prototype.writeFixed64=function(a,b){null!=b&&(goog.asserts.assert(0<=b&&b<jspb.BinaryConstants.TWO_TO_64),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeUint64(b))};
jspb.BinaryWriter.prototype.writeFixed64String=function(a,b){if(null!=b){var c=jspb.arith.UInt64.fromString(b);this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64);this.encoder_.writeSplitFixed64(c.lo,c.hi)}};jspb.BinaryWriter.prototype.writeSfixed32=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_31&&b<jspb.BinaryConstants.TWO_TO_31),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED32),this.encoder_.writeInt32(b))};
jspb.BinaryWriter.prototype.writeSfixed64=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_63&&b<jspb.BinaryConstants.TWO_TO_63),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeInt64(b))};jspb.BinaryWriter.prototype.writeSfixed64String=function(a,b){if(null!=b){var c=jspb.arith.Int64.fromString(b);this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64);this.encoder_.writeSplitFixed64(c.lo,c.hi)}};
jspb.BinaryWriter.prototype.writeFloat=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED32),this.encoder_.writeFloat(b))};jspb.BinaryWriter.prototype.writeDouble=function(a,b){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeDouble(b))};jspb.BinaryWriter.prototype.writeBool=function(a,b){null!=b&&(goog.asserts.assert(goog.isBoolean(b)||goog.isNumber(b)),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeBool(b))};
jspb.BinaryWriter.prototype.writeEnum=function(a,b){null!=b&&(goog.asserts.assert(b>=-jspb.BinaryConstants.TWO_TO_31&&b<jspb.BinaryConstants.TWO_TO_31),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSignedVarint32(b))};jspb.BinaryWriter.prototype.writeString=function(a,b){if(null!=b){var c=this.beginDelimited_(a);this.encoder_.writeString(b);this.endDelimited_(c)}};
jspb.BinaryWriter.prototype.writeBytes=function(a,b){if(null!=b){var c=jspb.utils.byteSourceToUint8Array(b);this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);this.encoder_.writeUnsignedVarint32(c.length);this.appendUint8Array_(c)}};jspb.BinaryWriter.prototype.writeMessage=function(a,b,c){null!=b&&(a=this.beginDelimited_(a),c(b,this),this.endDelimited_(a))};
jspb.BinaryWriter.prototype.writeGroup=function(a,b,c){null!=b&&(this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.START_GROUP),c(b,this),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.END_GROUP))};jspb.BinaryWriter.prototype.writeFixedHash64=function(a,b){null!=b&&(goog.asserts.assert(8==b.length),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeFixedHash64(b))};
jspb.BinaryWriter.prototype.writeVarintHash64=function(a,b){null!=b&&(goog.asserts.assert(8==b.length),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeVarintHash64(b))};jspb.BinaryWriter.prototype.writeRepeatedInt32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSignedVarint32_(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedInt32String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeInt32String(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedInt64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSignedVarint64_(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedInt64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeInt64String(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedUint32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeUnsignedVarint32_(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedUint32String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeUint32String(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedUint64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeUnsignedVarint64_(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedUint64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeUint64String(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedSint32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeZigzagVarint32_(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedSint64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeZigzagVarint64_(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedSint64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeZigzagVarint64String_(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedFixed32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFixed32(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedFixed64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFixed64(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedFixed64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFixed64String(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedSfixed32=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSfixed32(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedSfixed64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSfixed64(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedSfixed64String=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeSfixed64String(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedFloat=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFloat(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedDouble=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeDouble(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedBool=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeBool(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedEnum=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeEnum(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedString=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeString(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedBytes=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeBytes(a,b[c])};jspb.BinaryWriter.prototype.writeRepeatedMessage=function(a,b,c){if(null!=b)for(var d=0;d<b.length;d++){var e=this.beginDelimited_(a);c(b[d],this);this.endDelimited_(e)}};
jspb.BinaryWriter.prototype.writeRepeatedGroup=function(a,b,c){if(null!=b)for(var d=0;d<b.length;d++)this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.START_GROUP),c(b[d],this),this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.END_GROUP)};jspb.BinaryWriter.prototype.writeRepeatedFixedHash64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeFixedHash64(a,b[c])};
jspb.BinaryWriter.prototype.writeRepeatedVarintHash64=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.writeVarintHash64(a,b[c])};jspb.BinaryWriter.prototype.writePackedInt32=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++)this.encoder_.writeSignedVarint32(b[d]);this.endDelimited_(c)}};
jspb.BinaryWriter.prototype.writePackedInt32String=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++)this.encoder_.writeSignedVarint32(parseInt(b[d],10));this.endDelimited_(c)}};jspb.BinaryWriter.prototype.writePackedInt64=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++)this.encoder_.writeSignedVarint64(b[d]);this.endDelimited_(c)}};
jspb.BinaryWriter.prototype.writePackedInt64String=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++){var e=jspb.arith.Int64.fromString(b[d]);this.encoder_.writeSplitVarint64(e.lo,e.hi)}this.endDelimited_(c)}};jspb.BinaryWriter.prototype.writePackedUint32=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++)this.encoder_.writeUnsignedVarint32(b[d]);this.endDelimited_(c)}};
jspb.BinaryWriter.prototype.writePackedUint32String=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++)this.encoder_.writeUnsignedVarint32(parseInt(b[d],10));this.endDelimited_(c)}};jspb.BinaryWriter.prototype.writePackedUint64=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++)this.encoder_.writeUnsignedVarint64(b[d]);this.endDelimited_(c)}};
jspb.BinaryWriter.prototype.writePackedUint64String=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++){var e=jspb.arith.UInt64.fromString(b[d]);this.encoder_.writeSplitVarint64(e.lo,e.hi)}this.endDelimited_(c)}};jspb.BinaryWriter.prototype.writePackedSint32=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++)this.encoder_.writeZigzagVarint32(b[d]);this.endDelimited_(c)}};
jspb.BinaryWriter.prototype.writePackedSint64=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++)this.encoder_.writeZigzagVarint64(b[d]);this.endDelimited_(c)}};jspb.BinaryWriter.prototype.writePackedSint64String=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++)this.encoder_.writeZigzagVarint64(parseInt(b[d],10));this.endDelimited_(c)}};
jspb.BinaryWriter.prototype.writePackedFixed32=function(a,b){if(null!=b&&b.length){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);this.encoder_.writeUnsignedVarint32(4*b.length);for(var c=0;c<b.length;c++)this.encoder_.writeUint32(b[c])}};jspb.BinaryWriter.prototype.writePackedFixed64=function(a,b){if(null!=b&&b.length){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);this.encoder_.writeUnsignedVarint32(8*b.length);for(var c=0;c<b.length;c++)this.encoder_.writeUint64(b[c])}};
jspb.BinaryWriter.prototype.writePackedFixed64String=function(a,b){if(null!=b&&b.length){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);this.encoder_.writeUnsignedVarint32(8*b.length);for(var c=0;c<b.length;c++){var d=jspb.arith.UInt64.fromString(b[c]);this.encoder_.writeSplitFixed64(d.lo,d.hi)}}};
jspb.BinaryWriter.prototype.writePackedSfixed32=function(a,b){if(null!=b&&b.length){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);this.encoder_.writeUnsignedVarint32(4*b.length);for(var c=0;c<b.length;c++)this.encoder_.writeInt32(b[c])}};jspb.BinaryWriter.prototype.writePackedSfixed64=function(a,b){if(null!=b&&b.length){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);this.encoder_.writeUnsignedVarint32(8*b.length);for(var c=0;c<b.length;c++)this.encoder_.writeInt64(b[c])}};
jspb.BinaryWriter.prototype.writePackedSfixed64String=function(a,b){if(null!=b&&b.length){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);this.encoder_.writeUnsignedVarint32(8*b.length);for(var c=0;c<b.length;c++)this.encoder_.writeInt64String(b[c])}};jspb.BinaryWriter.prototype.writePackedFloat=function(a,b){if(null!=b&&b.length){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);this.encoder_.writeUnsignedVarint32(4*b.length);for(var c=0;c<b.length;c++)this.encoder_.writeFloat(b[c])}};
jspb.BinaryWriter.prototype.writePackedDouble=function(a,b){if(null!=b&&b.length){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);this.encoder_.writeUnsignedVarint32(8*b.length);for(var c=0;c<b.length;c++)this.encoder_.writeDouble(b[c])}};jspb.BinaryWriter.prototype.writePackedBool=function(a,b){if(null!=b&&b.length){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);this.encoder_.writeUnsignedVarint32(b.length);for(var c=0;c<b.length;c++)this.encoder_.writeBool(b[c])}};
jspb.BinaryWriter.prototype.writePackedEnum=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++)this.encoder_.writeEnum(b[d]);this.endDelimited_(c)}};jspb.BinaryWriter.prototype.writePackedFixedHash64=function(a,b){if(null!=b&&b.length){this.writeFieldHeader_(a,jspb.BinaryConstants.WireType.DELIMITED);this.encoder_.writeUnsignedVarint32(8*b.length);for(var c=0;c<b.length;c++)this.encoder_.writeFixedHash64(b[c])}};
jspb.BinaryWriter.prototype.writePackedVarintHash64=function(a,b){if(null!=b&&b.length){for(var c=this.beginDelimited_(a),d=0;d<b.length;d++)this.encoder_.writeVarintHash64(b[d]);this.endDelimited_(c)}};jspb.BinaryIterator=function(a,b,c){this.elements_=this.nextMethod_=this.decoder_=null;this.cursor_=0;this.nextValue_=null;this.atEnd_=!0;this.init_(a,b,c)};jspb.BinaryIterator.prototype.init_=function(a,b,c){a&&b&&(this.decoder_=a,this.nextMethod_=b);this.elements_=c||null;this.cursor_=0;this.nextValue_=null;this.atEnd_=!this.decoder_&&!this.elements_;this.next()};jspb.BinaryIterator.instanceCache_=[];
jspb.BinaryIterator.alloc=function(a,b,c){if(jspb.BinaryIterator.instanceCache_.length){var d=jspb.BinaryIterator.instanceCache_.pop();d.init_(a,b,c);return d}return new jspb.BinaryIterator(a,b,c)};jspb.BinaryIterator.prototype.free=function(){this.clear();100>jspb.BinaryIterator.instanceCache_.length&&jspb.BinaryIterator.instanceCache_.push(this)};
jspb.BinaryIterator.prototype.clear=function(){this.decoder_&&this.decoder_.free();this.elements_=this.nextMethod_=this.decoder_=null;this.cursor_=0;this.nextValue_=null;this.atEnd_=!0};jspb.BinaryIterator.prototype.get=function(){return this.nextValue_};jspb.BinaryIterator.prototype.atEnd=function(){return this.atEnd_};
jspb.BinaryIterator.prototype.next=function(){var a=this.nextValue_;this.decoder_?this.decoder_.atEnd()?(this.nextValue_=null,this.atEnd_=!0):this.nextValue_=this.nextMethod_.call(this.decoder_):this.elements_&&(this.cursor_==this.elements_.length?(this.nextValue_=null,this.atEnd_=!0):this.nextValue_=this.elements_[this.cursor_++]);return a};jspb.BinaryDecoder=function(a,b,c){this.bytes_=null;this.tempHigh_=this.tempLow_=this.cursor_=this.end_=this.start_=0;this.error_=!1;a&&this.setBlock(a,b,c)};
jspb.BinaryDecoder.instanceCache_=[];jspb.BinaryDecoder.alloc=function(a,b,c){if(jspb.BinaryDecoder.instanceCache_.length){var d=jspb.BinaryDecoder.instanceCache_.pop();a&&d.setBlock(a,b,c);return d}return new jspb.BinaryDecoder(a,b,c)};jspb.BinaryDecoder.prototype.free=function(){this.clear();100>jspb.BinaryDecoder.instanceCache_.length&&jspb.BinaryDecoder.instanceCache_.push(this)};jspb.BinaryDecoder.prototype.clone=function(){return jspb.BinaryDecoder.alloc(this.bytes_,this.start_,this.end_-this.start_)};
jspb.BinaryDecoder.prototype.clear=function(){this.bytes_=null;this.cursor_=this.end_=this.start_=0;this.error_=!1};jspb.BinaryDecoder.prototype.getBuffer=function(){return this.bytes_};jspb.BinaryDecoder.prototype.setBlock=function(a,b,c){this.bytes_=jspb.utils.byteSourceToUint8Array(a);this.start_=goog.isDef(b)?b:0;this.end_=goog.isDef(c)?this.start_+c:this.bytes_.length;this.cursor_=this.start_};jspb.BinaryDecoder.prototype.getEnd=function(){return this.end_};
jspb.BinaryDecoder.prototype.setEnd=function(a){this.end_=a};jspb.BinaryDecoder.prototype.reset=function(){this.cursor_=this.start_};jspb.BinaryDecoder.prototype.getCursor=function(){return this.cursor_};jspb.BinaryDecoder.prototype.setCursor=function(a){this.cursor_=a};jspb.BinaryDecoder.prototype.advance=function(a){this.cursor_+=a;goog.asserts.assert(this.cursor_<=this.end_)};jspb.BinaryDecoder.prototype.atEnd=function(){return this.cursor_==this.end_};
jspb.BinaryDecoder.prototype.pastEnd=function(){return this.cursor_>this.end_};jspb.BinaryDecoder.prototype.getError=function(){return this.error_||0>this.cursor_||this.cursor_>this.end_};
jspb.BinaryDecoder.prototype.readSplitVarint64_=function(){for(var a,b=0,c,d=0;4>d;d++)if(a=this.bytes_[this.cursor_++],b|=(a&127)<<7*d,128>a){this.tempLow_=b>>>0;this.tempHigh_=0;return}a=this.bytes_[this.cursor_++];b|=(a&127)<<28;c=0|(a&127)>>4;if(128>a)this.tempLow_=b>>>0,this.tempHigh_=c>>>0;else{for(d=0;5>d;d++)if(a=this.bytes_[this.cursor_++],c|=(a&127)<<7*d+3,128>a){this.tempLow_=b>>>0;this.tempHigh_=c>>>0;return}goog.asserts.fail("Failed to read varint, encoding is invalid.");this.error_=
!0}};jspb.BinaryDecoder.prototype.skipVarint=function(){for(;this.bytes_[this.cursor_]&128;)this.cursor_++;this.cursor_++};jspb.BinaryDecoder.prototype.unskipVarint=function(a){for(;128<a;)this.cursor_--,a>>>=7;this.cursor_--};
jspb.BinaryDecoder.prototype.readUnsignedVarint32=function(){var a,b=this.bytes_;a=b[this.cursor_+0];var c=a&127;if(128>a)return this.cursor_+=1,goog.asserts.assert(this.cursor_<=this.end_),c;a=b[this.cursor_+1];c|=(a&127)<<7;if(128>a)return this.cursor_+=2,goog.asserts.assert(this.cursor_<=this.end_),c;a=b[this.cursor_+2];c|=(a&127)<<14;if(128>a)return this.cursor_+=3,goog.asserts.assert(this.cursor_<=this.end_),c;a=b[this.cursor_+3];c|=(a&127)<<21;if(128>a)return this.cursor_+=4,goog.asserts.assert(this.cursor_<=
this.end_),c;a=b[this.cursor_+4];c|=(a&15)<<28;if(128>a)return this.cursor_+=5,goog.asserts.assert(this.cursor_<=this.end_),c>>>0;this.cursor_+=5;128<=b[this.cursor_++]&&128<=b[this.cursor_++]&&128<=b[this.cursor_++]&&128<=b[this.cursor_++]&&128<=b[this.cursor_++]&&goog.asserts.assert(!1);goog.asserts.assert(this.cursor_<=this.end_);return c};jspb.BinaryDecoder.prototype.readSignedVarint32=jspb.BinaryDecoder.prototype.readUnsignedVarint32;jspb.BinaryDecoder.prototype.readUnsignedVarint32String=function(){return this.readUnsignedVarint32().toString()};
jspb.BinaryDecoder.prototype.readSignedVarint32String=function(){return this.readSignedVarint32().toString()};jspb.BinaryDecoder.prototype.readZigzagVarint32=function(){var a=this.readUnsignedVarint32();return a>>>1^-(a&1)};jspb.BinaryDecoder.prototype.readUnsignedVarint64=function(){this.readSplitVarint64_();return jspb.utils.joinUint64(this.tempLow_,this.tempHigh_)};
jspb.BinaryDecoder.prototype.readUnsignedVarint64String=function(){this.readSplitVarint64_();return jspb.utils.joinUnsignedDecimalString(this.tempLow_,this.tempHigh_)};jspb.BinaryDecoder.prototype.readSignedVarint64=function(){this.readSplitVarint64_();return jspb.utils.joinInt64(this.tempLow_,this.tempHigh_)};jspb.BinaryDecoder.prototype.readSignedVarint64String=function(){this.readSplitVarint64_();return jspb.utils.joinSignedDecimalString(this.tempLow_,this.tempHigh_)};
jspb.BinaryDecoder.prototype.readZigzagVarint64=function(){this.readSplitVarint64_();return jspb.utils.joinZigzag64(this.tempLow_,this.tempHigh_)};jspb.BinaryDecoder.prototype.readZigzagVarint64String=function(){return this.readZigzagVarint64().toString()};jspb.BinaryDecoder.prototype.readUint8=function(){var a=this.bytes_[this.cursor_+0];this.cursor_+=1;goog.asserts.assert(this.cursor_<=this.end_);return a};
jspb.BinaryDecoder.prototype.readUint16=function(){var a=this.bytes_[this.cursor_+0],b=this.bytes_[this.cursor_+1];this.cursor_+=2;goog.asserts.assert(this.cursor_<=this.end_);return a<<0|b<<8};jspb.BinaryDecoder.prototype.readUint32=function(){var a=this.bytes_[this.cursor_+0],b=this.bytes_[this.cursor_+1],c=this.bytes_[this.cursor_+2],d=this.bytes_[this.cursor_+3];this.cursor_+=4;goog.asserts.assert(this.cursor_<=this.end_);return(a<<0|b<<8|c<<16|d<<24)>>>0};
jspb.BinaryDecoder.prototype.readUint64=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinUint64(a,b)};jspb.BinaryDecoder.prototype.readUint64String=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinUnsignedDecimalString(a,b)};jspb.BinaryDecoder.prototype.readInt8=function(){var a=this.bytes_[this.cursor_+0];this.cursor_+=1;goog.asserts.assert(this.cursor_<=this.end_);return a<<24>>24};
jspb.BinaryDecoder.prototype.readInt16=function(){var a=this.bytes_[this.cursor_+0],b=this.bytes_[this.cursor_+1];this.cursor_+=2;goog.asserts.assert(this.cursor_<=this.end_);return(a<<0|b<<8)<<16>>16};jspb.BinaryDecoder.prototype.readInt32=function(){var a=this.bytes_[this.cursor_+0],b=this.bytes_[this.cursor_+1],c=this.bytes_[this.cursor_+2],d=this.bytes_[this.cursor_+3];this.cursor_+=4;goog.asserts.assert(this.cursor_<=this.end_);return a<<0|b<<8|c<<16|d<<24};
jspb.BinaryDecoder.prototype.readInt64=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinInt64(a,b)};jspb.BinaryDecoder.prototype.readInt64String=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinSignedDecimalString(a,b)};jspb.BinaryDecoder.prototype.readFloat=function(){var a=this.readUint32();return jspb.utils.joinFloat32(a,0)};
jspb.BinaryDecoder.prototype.readDouble=function(){var a=this.readUint32(),b=this.readUint32();return jspb.utils.joinFloat64(a,b)};jspb.BinaryDecoder.prototype.readBool=function(){return!!this.bytes_[this.cursor_++]};jspb.BinaryDecoder.prototype.readEnum=function(){return this.readSignedVarint32()};
jspb.BinaryDecoder.prototype.readString=function(a){var b=this.bytes_,c=this.cursor_;a=c+a;for(var d=[],e="";c<a;){var f=b[c++];if(128>f)d.push(f);else if(192>f)continue;else if(224>f){var g=b[c++];d.push((f&31)<<6|g&63)}else if(240>f){var g=b[c++],h=b[c++];d.push((f&15)<<12|(g&63)<<6|h&63)}else if(248>f){var g=b[c++],h=b[c++],k=b[c++],f=(f&7)<<18|(g&63)<<12|(h&63)<<6|k&63,f=f-65536;d.push((f>>10&1023)+55296,(f&1023)+56320)}8192<=d.length&&(e+=String.fromCharCode.apply(null,d),d.length=0)}e+=goog.crypt.byteArrayToString(d);
this.cursor_=c;return e};jspb.BinaryDecoder.prototype.readStringWithLength=function(){var a=this.readUnsignedVarint32();return this.readString(a)};jspb.BinaryDecoder.prototype.readBytes=function(a){if(0>a||this.cursor_+a>this.bytes_.length)return this.error_=!0,goog.asserts.fail("Invalid byte length!"),new Uint8Array(0);var b=this.bytes_.subarray(this.cursor_,this.cursor_+a);this.cursor_+=a;goog.asserts.assert(this.cursor_<=this.end_);return b};
jspb.BinaryDecoder.prototype.readVarintHash64=function(){this.readSplitVarint64_();return jspb.utils.joinHash64(this.tempLow_,this.tempHigh_)};jspb.BinaryDecoder.prototype.readFixedHash64=function(){var a=this.bytes_,b=this.cursor_,c=a[b+0],d=a[b+1],e=a[b+2],f=a[b+3],g=a[b+4],h=a[b+5],k=a[b+6],a=a[b+7];this.cursor_+=8;return String.fromCharCode(c,d,e,f,g,h,k,a)};jspb.BinaryReader=function(a,b,c){this.decoder_=jspb.BinaryDecoder.alloc(a,b,c);this.fieldCursor_=this.decoder_.getCursor();this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER;this.nextWireType_=jspb.BinaryConstants.WireType.INVALID;this.error_=!1;this.readCallbacks_=null};jspb.BinaryReader.instanceCache_=[];
jspb.BinaryReader.alloc=function(a,b,c){if(jspb.BinaryReader.instanceCache_.length){var d=jspb.BinaryReader.instanceCache_.pop();a&&d.decoder_.setBlock(a,b,c);return d}return new jspb.BinaryReader(a,b,c)};jspb.BinaryReader.prototype.alloc=jspb.BinaryReader.alloc;
jspb.BinaryReader.prototype.free=function(){this.decoder_.clear();this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER;this.nextWireType_=jspb.BinaryConstants.WireType.INVALID;this.error_=!1;this.readCallbacks_=null;100>jspb.BinaryReader.instanceCache_.length&&jspb.BinaryReader.instanceCache_.push(this)};jspb.BinaryReader.prototype.getFieldCursor=function(){return this.fieldCursor_};jspb.BinaryReader.prototype.getCursor=function(){return this.decoder_.getCursor()};
jspb.BinaryReader.prototype.getBuffer=function(){return this.decoder_.getBuffer()};jspb.BinaryReader.prototype.getFieldNumber=function(){return this.nextField_};jspb.BinaryReader.prototype.getWireType=function(){return this.nextWireType_};jspb.BinaryReader.prototype.isEndGroup=function(){return this.nextWireType_==jspb.BinaryConstants.WireType.END_GROUP};jspb.BinaryReader.prototype.getError=function(){return this.error_||this.decoder_.getError()};
jspb.BinaryReader.prototype.setBlock=function(a,b,c){this.decoder_.setBlock(a,b,c);this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER;this.nextWireType_=jspb.BinaryConstants.WireType.INVALID};jspb.BinaryReader.prototype.reset=function(){this.decoder_.reset();this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER;this.nextWireType_=jspb.BinaryConstants.WireType.INVALID};jspb.BinaryReader.prototype.advance=function(a){this.decoder_.advance(a)};
jspb.BinaryReader.prototype.nextField=function(){if(this.decoder_.atEnd())return!1;if(this.getError())return goog.asserts.fail("Decoder hit an error"),!1;this.fieldCursor_=this.decoder_.getCursor();var a=this.decoder_.readUnsignedVarint32(),b=a>>>3,a=a&7;if(a!=jspb.BinaryConstants.WireType.VARINT&&a!=jspb.BinaryConstants.WireType.FIXED32&&a!=jspb.BinaryConstants.WireType.FIXED64&&a!=jspb.BinaryConstants.WireType.DELIMITED&&a!=jspb.BinaryConstants.WireType.START_GROUP&&a!=jspb.BinaryConstants.WireType.END_GROUP)return goog.asserts.fail("Invalid wire type"),
this.error_=!0,!1;this.nextField_=b;this.nextWireType_=a;return!0};jspb.BinaryReader.prototype.unskipHeader=function(){this.decoder_.unskipVarint(this.nextField_<<3|this.nextWireType_)};jspb.BinaryReader.prototype.skipMatchingFields=function(){var a=this.nextField_;for(this.unskipHeader();this.nextField()&&this.getFieldNumber()==a;)this.skipField();this.decoder_.atEnd()||this.unskipHeader()};
jspb.BinaryReader.prototype.skipVarintField=function(){this.nextWireType_!=jspb.BinaryConstants.WireType.VARINT?(goog.asserts.fail("Invalid wire type for skipVarintField"),this.skipField()):this.decoder_.skipVarint()};jspb.BinaryReader.prototype.skipDelimitedField=function(){if(this.nextWireType_!=jspb.BinaryConstants.WireType.DELIMITED)goog.asserts.fail("Invalid wire type for skipDelimitedField"),this.skipField();else{var a=this.decoder_.readUnsignedVarint32();this.decoder_.advance(a)}};
jspb.BinaryReader.prototype.skipFixed32Field=function(){this.nextWireType_!=jspb.BinaryConstants.WireType.FIXED32?(goog.asserts.fail("Invalid wire type for skipFixed32Field"),this.skipField()):this.decoder_.advance(4)};jspb.BinaryReader.prototype.skipFixed64Field=function(){this.nextWireType_!=jspb.BinaryConstants.WireType.FIXED64?(goog.asserts.fail("Invalid wire type for skipFixed64Field"),this.skipField()):this.decoder_.advance(8)};
jspb.BinaryReader.prototype.skipGroup=function(){var a=[this.nextField_];do{if(!this.nextField()){goog.asserts.fail("Unmatched start-group tag: stream EOF");this.error_=!0;break}if(this.nextWireType_==jspb.BinaryConstants.WireType.START_GROUP)a.push(this.nextField_);else if(this.nextWireType_==jspb.BinaryConstants.WireType.END_GROUP&&this.nextField_!=a.pop()){goog.asserts.fail("Unmatched end-group tag");this.error_=!0;break}}while(0<a.length)};
jspb.BinaryReader.prototype.skipField=function(){switch(this.nextWireType_){case jspb.BinaryConstants.WireType.VARINT:this.skipVarintField();break;case jspb.BinaryConstants.WireType.FIXED64:this.skipFixed64Field();break;case jspb.BinaryConstants.WireType.DELIMITED:this.skipDelimitedField();break;case jspb.BinaryConstants.WireType.FIXED32:this.skipFixed32Field();break;case jspb.BinaryConstants.WireType.START_GROUP:this.skipGroup();break;default:goog.asserts.fail("Invalid wire encoding for field.")}};
jspb.BinaryReader.prototype.registerReadCallback=function(a,b){goog.isNull(this.readCallbacks_)&&(this.readCallbacks_={});goog.asserts.assert(!this.readCallbacks_[a]);this.readCallbacks_[a]=b};jspb.BinaryReader.prototype.runReadCallback=function(a){goog.asserts.assert(!goog.isNull(this.readCallbacks_));a=this.readCallbacks_[a];goog.asserts.assert(a);return a(this)};
jspb.BinaryReader.prototype.readAny=function(a){this.nextWireType_=jspb.BinaryConstants.FieldTypeToWireType(a);var b=jspb.BinaryConstants.FieldType;switch(a){case b.DOUBLE:return this.readDouble();case b.FLOAT:return this.readFloat();case b.INT64:return this.readInt64();case b.UINT64:return this.readUint64();case b.INT32:return this.readInt32();case b.FIXED64:return this.readFixed64();case b.FIXED32:return this.readFixed32();case b.BOOL:return this.readBool();case b.STRING:return this.readString();
case b.GROUP:goog.asserts.fail("Group field type not supported in readAny()");case b.MESSAGE:goog.asserts.fail("Message field type not supported in readAny()");case b.BYTES:return this.readBytes();case b.UINT32:return this.readUint32();case b.ENUM:return this.readEnum();case b.SFIXED32:return this.readSfixed32();case b.SFIXED64:return this.readSfixed64();case b.SINT32:return this.readSint32();case b.SINT64:return this.readSint64();case b.FHASH64:return this.readFixedHash64();case b.VHASH64:return this.readVarintHash64();
default:goog.asserts.fail("Invalid field type in readAny()")}return 0};jspb.BinaryReader.prototype.readMessage=function(a,b){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var c=this.decoder_.getEnd(),d=this.decoder_.readUnsignedVarint32(),d=this.decoder_.getCursor()+d;this.decoder_.setEnd(d);b(a,this);this.decoder_.setCursor(d);this.decoder_.setEnd(c)};
jspb.BinaryReader.prototype.readGroup=function(a,b,c){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.START_GROUP);goog.asserts.assert(this.nextField_==a);c(b,this);this.error_||this.nextWireType_==jspb.BinaryConstants.WireType.END_GROUP||(goog.asserts.fail("Group submessage did not end with an END_GROUP tag"),this.error_=!0)};
jspb.BinaryReader.prototype.getFieldDecoder=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var a=this.decoder_.readUnsignedVarint32(),b=this.decoder_.getCursor(),c=b+a,a=jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(),b,a);this.decoder_.setCursor(c);return a};jspb.BinaryReader.prototype.readInt32=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint32()};
jspb.BinaryReader.prototype.readInt32String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint32String()};jspb.BinaryReader.prototype.readInt64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint64()};jspb.BinaryReader.prototype.readInt64String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint64String()};
jspb.BinaryReader.prototype.readUint32=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readUnsignedVarint32()};jspb.BinaryReader.prototype.readUint32String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readUnsignedVarint32String()};jspb.BinaryReader.prototype.readUint64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readUnsignedVarint64()};
jspb.BinaryReader.prototype.readUint64String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readUnsignedVarint64String()};jspb.BinaryReader.prototype.readSint32=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readZigzagVarint32()};jspb.BinaryReader.prototype.readSint64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readZigzagVarint64()};
jspb.BinaryReader.prototype.readSint64String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readZigzagVarint64String()};jspb.BinaryReader.prototype.readFixed32=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32);return this.decoder_.readUint32()};jspb.BinaryReader.prototype.readFixed64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readUint64()};
jspb.BinaryReader.prototype.readFixed64String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readUint64String()};jspb.BinaryReader.prototype.readSfixed32=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32);return this.decoder_.readInt32()};jspb.BinaryReader.prototype.readSfixed32String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32);return this.decoder_.readInt32().toString()};
jspb.BinaryReader.prototype.readSfixed64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readInt64()};jspb.BinaryReader.prototype.readSfixed64String=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readInt64String()};jspb.BinaryReader.prototype.readFloat=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32);return this.decoder_.readFloat()};
jspb.BinaryReader.prototype.readDouble=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readDouble()};jspb.BinaryReader.prototype.readBool=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return!!this.decoder_.readUnsignedVarint32()};jspb.BinaryReader.prototype.readEnum=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readSignedVarint64()};
jspb.BinaryReader.prototype.readString=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var a=this.decoder_.readUnsignedVarint32();return this.decoder_.readString(a)};jspb.BinaryReader.prototype.readBytes=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var a=this.decoder_.readUnsignedVarint32();return this.decoder_.readBytes(a)};
jspb.BinaryReader.prototype.readVarintHash64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT);return this.decoder_.readVarintHash64()};jspb.BinaryReader.prototype.readFixedHash64=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64);return this.decoder_.readFixedHash64()};
jspb.BinaryReader.prototype.readPackedField_=function(a){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);for(var b=this.decoder_.readUnsignedVarint32(),b=this.decoder_.getCursor()+b,c=[];this.decoder_.getCursor()<b;)c.push(a.call(this.decoder_));return c};jspb.BinaryReader.prototype.readPackedInt32=function(){return this.readPackedField_(this.decoder_.readSignedVarint32)};jspb.BinaryReader.prototype.readPackedInt32String=function(){return this.readPackedField_(this.decoder_.readSignedVarint32String)};
jspb.BinaryReader.prototype.readPackedInt64=function(){return this.readPackedField_(this.decoder_.readSignedVarint64)};jspb.BinaryReader.prototype.readPackedInt64String=function(){return this.readPackedField_(this.decoder_.readSignedVarint64String)};jspb.BinaryReader.prototype.readPackedUint32=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint32)};jspb.BinaryReader.prototype.readPackedUint32String=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint32String)};
jspb.BinaryReader.prototype.readPackedUint64=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint64)};jspb.BinaryReader.prototype.readPackedUint64String=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint64String)};jspb.BinaryReader.prototype.readPackedSint32=function(){return this.readPackedField_(this.decoder_.readZigzagVarint32)};jspb.BinaryReader.prototype.readPackedSint64=function(){return this.readPackedField_(this.decoder_.readZigzagVarint64)};
jspb.BinaryReader.prototype.readPackedSint64String=function(){return this.readPackedField_(this.decoder_.readZigzagVarint64String)};jspb.BinaryReader.prototype.readPackedFixed32=function(){return this.readPackedField_(this.decoder_.readUint32)};jspb.BinaryReader.prototype.readPackedFixed64=function(){return this.readPackedField_(this.decoder_.readUint64)};jspb.BinaryReader.prototype.readPackedFixed64String=function(){return this.readPackedField_(this.decoder_.readUint64String)};
jspb.BinaryReader.prototype.readPackedSfixed32=function(){return this.readPackedField_(this.decoder_.readInt32)};jspb.BinaryReader.prototype.readPackedSfixed64=function(){return this.readPackedField_(this.decoder_.readInt64)};jspb.BinaryReader.prototype.readPackedSfixed64String=function(){return this.readPackedField_(this.decoder_.readInt64String)};jspb.BinaryReader.prototype.readPackedFloat=function(){return this.readPackedField_(this.decoder_.readFloat)};
jspb.BinaryReader.prototype.readPackedDouble=function(){return this.readPackedField_(this.decoder_.readDouble)};jspb.BinaryReader.prototype.readPackedBool=function(){return this.readPackedField_(this.decoder_.readBool)};jspb.BinaryReader.prototype.readPackedEnum=function(){return this.readPackedField_(this.decoder_.readEnum)};jspb.BinaryReader.prototype.readPackedVarintHash64=function(){return this.readPackedField_(this.decoder_.readVarintHash64)};
jspb.BinaryReader.prototype.readPackedFixedHash64=function(){return this.readPackedField_(this.decoder_.readFixedHash64)};jspb.Export={};exports.Map=jspb.Map;exports.Message=jspb.Message;exports.BinaryReader=jspb.BinaryReader;exports.BinaryWriter=jspb.BinaryWriter;exports.ExtensionFieldInfo=jspb.ExtensionFieldInfo;exports.ExtensionFieldBinaryInfo=jspb.ExtensionFieldBinaryInfo;exports.exportSymbol=goog.exportSymbol;exports.inherits=goog.inherits;exports.object={extend:goog.object.extend};exports.typeOf=goog.typeOf;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17), __webpack_require__(3).Buffer))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});

var _FlowableMapOperator = __webpack_require__(32);
var _FlowableMapOperator2 = _interopRequireDefault(_FlowableMapOperator);
var _FlowableTakeOperator = __webpack_require__(33);
var _FlowableTakeOperator2 = _interopRequireDefault(_FlowableTakeOperator);

var _invariant = __webpack_require__(1);
var _invariant2 = _interopRequireDefault(_invariant);
var _warning = __webpack_require__(13);
var _warning2 = _interopRequireDefault(_warning);
var _emptyFunction = __webpack_require__(11);
var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                                                                                                   * Implements the ReactiveStream `Publisher` interface with Rx-style operators.
                                                                                                                                                                                                                   */
class Flowable {
  static just(...values) {
    return new Flowable(subscriber => {
      let cancelled = false;
      let i = 0;
      subscriber.onSubscribe({
        cancel: () => {
          cancelled = true;
        },
        request: n => {
          while (!cancelled && n > 0 && i < values.length) {
            subscriber.onNext(values[i++]);
            n--;
          }
          if (!cancelled && i == values.length) {
            subscriber.onComplete();
          }
        },
      });
    });
  }

  static error(error) {
    return new Flowable(subscriber => {
      subscriber.onSubscribe({
        cancel: () => {},
        request: () => {
          subscriber.onError(error);
        },
      });
    });
  }

  static never() {
    return new Flowable(subscriber => {
      subscriber.onSubscribe({
        cancel: _emptyFunction2.default,
        request: _emptyFunction2.default,
      });
    });
  }

  constructor(source, max = Number.MAX_SAFE_INTEGER) {
    this._max = max;
    this._source = source;
  }

  subscribe(partialSubscriber) {
    const subscriber = new FlowableSubscriber(partialSubscriber, this._max);
    this._source(subscriber);
  }

  lift(onSubscribeLift) {
    return new Flowable(subscriber =>
      this._source(onSubscribeLift(subscriber)));
  }

  map(fn) {
    return this.lift(
      subscriber => new _FlowableMapOperator2.default(subscriber, fn)
    );
  }

  take(toTake) {
    return this.lift(
      subscriber => new _FlowableTakeOperator2.default(subscriber, toTake)
    );
  }
}
exports.default = Flowable;

/**
                                 * @private
                                 */
class FlowableSubscriber {
  constructor(subscriber, max) {
    this._cancel = () => {
      if (!this._active) {
        return;
      }
      this._active = false;
      if (this._subscription) {
        this._subscription.cancel();
      }
    };
    this._request = n => {
      (0, _invariant2.default)(
        Number.isInteger(n) && n >= 1 && n <= this._max,
        'Flowable: Expected request value to be an integer with a ' +
          'value greater than 0 and less than or equal to %s, got ' +
          '`%s`.',
        this._max,
        n
      );

      if (!this._active) {
        return;
      }
      if (n === this._max) {
        this._pending = this._max;
      } else {
        this._pending += n;
        if (this._pending >= this._max) {
          this._pending = this._max;
        }
      }
      if (this._subscription) {
        this._subscription.request(n);
      }
    };
    this._active = false;
    this._max = max;
    this._pending = 0;
    this._started = false;
    this._subscriber = subscriber || {};
    this._subscription = null;
  }
  onComplete() {
    if (!this._active) {
      (0, _warning2.default)(
        false,
        'Flowable: Invalid call to onComplete(): %s.',
        this._started
          ? 'onComplete/onError was already called'
          : 'onSubscribe has not been called'
      );
      return;
    }
    this._active = false;
    this._started = true;
    try {
      if (this._subscriber.onComplete) {
        this._subscriber.onComplete();
      }
    } catch (error) {
      if (this._subscriber.onError) {
        this._subscriber.onError(error);
      }
    }
  }
  onError(error) {
    if (this._started && !this._active) {
      (0, _warning2.default)(
        false,
        'Flowable: Invalid call to onError(): %s.',
        this._active
          ? 'onComplete/onError was already called'
          : 'onSubscribe has not been called'
      );
      return;
    }
    this._active = false;
    this._started = true;
    this._subscriber.onError && this._subscriber.onError(error);
  }
  onNext(data) {
    if (!this._active) {
      (0, _warning2.default)(
        false,
        'Flowable: Invalid call to onNext(): %s.',
        this._active
          ? 'onComplete/onError was already called'
          : 'onSubscribe has not been called'
      );
      return;
    }
    if (this._pending === 0) {
      (0, _warning2.default)(
        false,
        'Flowable: Invalid call to onNext(), all request()ed values have been ' +
          'published.'
      );
      return;
    }
    if (this._pending !== this._max) {
      this._pending--;
    }
    try {
      this._subscriber.onNext && this._subscriber.onNext(data);
    } catch (error) {
      if (this._subscription) {
        this._subscription.cancel();
      }
      this.onError(error);
    }
  }
  onSubscribe(subscription) {
    if (this._started) {
      (0, _warning2.default)(
        false,
        'Flowable: Invalid call to onSubscribe(): already called.'
      );
      return;
    }
    this._active = true;
    this._started = true;
    this._subscription = subscription;
    try {
      this._subscriber.onSubscribe &&
        this._subscriber.onSubscribe({
          cancel: this._cancel,
          request: this._request,
        });
    } catch (error) {
      this.onError(error);
    }
  }
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var nullthrows = function nullthrows(x) {
  if (x != null) {
    return x;
  }
  throw new Error("Got unexpected null or undefined");
};

module.exports = nullthrows;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Executes the provided `callback` once for each enumerable own property in the
 * object. The `callback` is invoked with three arguments:
 *
 *  - the property value
 *  - the property name
 *  - the object being traversed
 *
 * Properties that are added after the call to `forEachObject` will not be
 * visited by `callback`. If the values of existing properties are changed, the
 * value passed to `callback` will be the value at the time `forEachObject`
 * visits them. Properties that are deleted before being visited are not
 * visited.
 *
 * @param {?object} object
 * @param {function} callback
 * @param {*} context
 */
function forEachObject(object, callback, context) {
  for (var name in object) {
    if (hasOwnProperty.call(object, name)) {
      callback.call(context, object[name], name, object);
    }
  }
}

module.exports = forEachObject;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});
exports.BufferEncoders = (exports.Utf8Encoders = (exports.BufferEncoder = (exports.UTF8Encoder = undefined)));

var _RSocketBufferUtils = __webpack_require__(9);
var _invariant = __webpack_require__(1);
var _invariant2 = _interopRequireDefault(_invariant);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                                                                                   * Commonly used subset of the allowed Node Buffer Encoder types.
                                                                                                                                                                                                   */

/**
                                                                                                                                                                                                       * The Encoders object specifies how values should be serialized/deserialized
                                                                                                                                                                                                       * to/from binary.
                                                                                                                                                                                                       */

const UTF8Encoder = (exports.UTF8Encoder = {
  byteLength: value => (0, _RSocketBufferUtils.byteLength)(value, 'utf8'),
  decode: (buffer, start, end) => {
    return buffer.toString('utf8', start, end);
  },
  encode: (value, buffer, start, end) => {
    (0, _invariant2.default)(
      typeof value === 'string',
      'RSocketEncoding: Expected value to be a string, got `%s`.',
      value
    );

    buffer.write(value, start, end - start, 'utf8');
    return end;
  },
});

const BufferEncoder = (exports.BufferEncoder = {
  byteLength: value => {
    (0, _invariant2.default)(
      Buffer.isBuffer(value),
      'RSocketEncoding: Expected value to be a buffer, got `%s`.',
      value
    );

    return value.length;
  },
  decode: (buffer, start, end) => {
    return buffer.slice(start, end);
  },
  encode: (value, buffer, start, end) => {
    (0, _invariant2.default)(
      Buffer.isBuffer(value),
      'RSocketEncoding: Expected value to be a buffer, got `%s`.',
      value
    );

    value.copy(buffer, start, 0, value.length);
    return end;
  },
});

/**
        * Encode all values as UTF8 strings.
        */
const Utf8Encoders = (exports.Utf8Encoders = {
  data: UTF8Encoder,
  dataMimeType: UTF8Encoder,
  message: UTF8Encoder,
  metadata: UTF8Encoder,
  metadataMimeType: UTF8Encoder,
  resumeToken: UTF8Encoder,
});

/**
                               * Encode all values as buffers.
                               */
const BufferEncoders = (exports.BufferEncoders = {
  data: BufferEncoder,
  dataMimeType: UTF8Encoder,
  message: UTF8Encoder,
  metadata: BufferEncoder,
  metadataMimeType: UTF8Encoder,
  resumeToken: BufferEncoder,
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});

const MAJOR_VERSION = (exports.MAJOR_VERSION = 1);
const MINOR_VERSION = (exports.MINOR_VERSION = 0);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {const {
    Proteus,
    BrokerInfoServiceClient
} = __webpack_require__(28);

const {
    Empty
} = __webpack_require__(8);

const {
    encodeProteusMetadata
} = __webpack_require__(5);

const {
    ReactiveSocket,
    Encodable
} = __webpack_require__(10);

const {
    Flowable,
    Single
} = __webpack_require__(0);

/** Helpers **/

// For generating variable identities in order to easily tell if messages are coming from this application instance or another
const alphabet = ["Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet", "Kilo", "Lima", "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-Ray", "Yankee", "Zulu"];

const numbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateName() {
    return alphabet[getRandomInt(25)] + '-' + numbers[getRandomInt(9)] + '-' + numbers[getRandomInt(9)] + '-' + numbers[getRandomInt(9)];
}

// Convenience method to update the webpage as new messages are available
function addMessage(message, element) {
    var ul = document.getElementById(element);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(message));
    if (ul.childElementCount >= 10) {
        ul.removeChild(ul.childNodes[0]);
    }
    ul.appendChild(li);
}

/**
    This function spins up a new "PingPong" client. It has methods that "ping" a service and expect a reply (ping),
    no reply (pingFnF), and a stream of replies (pingStream).

    It will push messages via the Proteus Channel to be served by any service that registers with the target "group"

*/

function createPingPongClient(proteusGateway) {

    //Gets a handle to a ReactiveSocket, targeting the group set up in this ProteusGateway config
    const rs = proteusGateway.group(proteusGateway.myGroup());

    return {
        // Sends a single 'Ping' message in a Request/Response interaction model
        ping: function pingOnce() {
            const dataBuf = Buffer.from(proteusGateway.myDestination());
            const metadataBuf = encodeProteusMetadata('io.netifi.proteus.demo.PingPongService', 'Ping', Buffer.alloc(0));
            console.log('Pinging...');

            // This invokes the corresponding `requestResponse` method on the service, implemented below and returns a
            // "Single" of the response
            return rs.requestResponse({
                data: dataBuf,
                metadata: metadataBuf
            }).map(payload => {
                console.log('Received payload:' + JSON.stringify(payload));
                if (payload.data == null) {
                    throw new Error('data is null');
                }
                return payload.data.toString('utf8');
            });
        },

        // Sends a single 'Ping' message in a Fire and Forget interaction model
        pingFnF: function pingFnF() {
            const dataBuf = Buffer.from(proteusGateway.myDestination());
            const metadataBuf = encodeProteusMetadata('io.netifi.proteus.demo.PingPongService', 'Ping', Buffer.alloc(0));

            // This invokes the corresponding `fireAndForget` method on the service, implemented below and returns nothing
            // as this interaction model assumes the client is done as soon as the message is sent
            return rs.fireAndForget({
                data: dataBuf,
                metadata: metadataBuf
            });
        },

        // Sends a single 'Ping' message and expects a stream of 'Pong' responses
        pingStream: function pingStream() {
            const dataBuf = Buffer.from(proteusGateway.myDestination());
            const metadataBuf = encodeProteusMetadata('io.netifi.proteus.demo.PingPongService', 'Ping', Buffer.alloc(0));

            // This invokes the corresponding `requestStream` method on the service, implemented below and returns a
            // stream that represents the 0 or more 'Pong' responses from the server
            return rs.requestStream({
                data: dataBuf,
                metadata: metadataBuf
            }).map(payload => {
                console.log('Received stream payload:' + JSON.stringify(payload));
                if (payload.data == null) {
                    throw new Error('data is null');
                }
                return payload.data.toString('utf8');
            });
        }
    };
};

/**
    This function spins up a new implementation of a sample "PingPong" service. It implements all of the ReactiveSocket
    methods: fireAndForget, requestResponse, requestStream, requestChannel (not supported), and pushMetadata (not supported)

    It will service messages pushed to it via the Proteus Channel

 */
function createPingPongService(desintationId) {
    return {
        /**
         * Fire and Forget interaction model of `ReactiveSocket`. The returned
         * Publisher resolves when the passed `payload` is successfully handled.
         */
        fireAndForget: function fireAndForget(payload) {
            //: Payload<D, M>): void,
            console.log('Someone called fireAndForget');
            addMessage('SERVICE: ' + payload.data.toString('utf8') + ' pinged me... but doesn\'t care if I respond', 'fireAndForgetService');
        },

        /**
         * Request-Response interaction model of `ReactiveSocket`. The returned
         * Publisher resolves with the response.
         */
        requestResponse: function requestResponse(payload) {
            //: Payload<D, M>): Single<Payload<D, M>>,
            console.log('Someone called requestResponse');
            addMessage('SERVICE: ' + payload.data.toString('utf8') + ' pinged me, responding with PONG!', 'requestResponseService');
            return Single.of({
                data: Buffer.from('PONG! from ' + desintationId),
                metadata: Buffer.alloc(0)
            });
        },

        /**
         * Request-Stream interaction model of `ReactiveSocket`. The returned
         * Publisher returns values representing the response(s).
         */
        requestStream: function requestStream(payload) {
            //: Payload<D, M>): Flowable<Payload<D, M>>,
            console.log('Someone called requestStream');
            addMessage('SERVICE: ' + payload.data.toString('utf8') + ' has requested a PONG stream', 'requestStreamService');
            return new Flowable(subscriber => {

                /*** This block really just sets up limits on how much to stream back - random number of "values" up to 8 ***/
                let counter = 0;
                let threshold = getRandomInt(8);
                let active = true;
                let completed = false;

                const checkCounter = () => {
                    if (active && ++counter > threshold) {
                        active = false;
                    }
                    return active;
                };
                /***  ***/

                subscriber.onSubscribe({
                    cancel: () => {
                        addMessage('SERVICE: ' + payload.data.toString('utf8') + ' canceled stream', 'requestStreamService');
                        active = false;
                    },
                    request: () => {
                        if (checkCounter()) {

                            subscriber.onNext({
                                data: Buffer.from('PONG #' + counter + ' from ' + desintationId),
                                metadata: Buffer.alloc(0)
                            });
                        } else if (!completed) {
                            //Quick guard to make sure we only ever onComplete once
                            completed = true;
                            active = false;
                            subscriber.onComplete();
                        }
                    }
                });
            });
        },

        /**
         * Request-Channel interaction model of `ReactiveSocket`. The returned
         * Publisher returns values representing the response(s).
         */
        requestChannel: function requestChannel(payloads) {
            //: Flowable<Payload<D, M>>): Flowable<Payload<D, M>>,
            return Flowable.error(new Error('requestChannel() is not implemented'));
        },

        /**
         * Metadata-Push interaction model of `ReactiveSocket`. The returned Publisher
         * resolves when the passed `payload` is successfully handled.
         */
        metadataPush: function metadataPush(payload) {
            //: Payload<D, M>): Single<void>,
            return Single.error(new Error('metadataPush() is not implemented'));
        }
    };
};

function main() {
    const url = "ws://localhost:8101/";

    const sessionId = generateName();
    addMessage(sessionId, 'destination');

    // This Proteus object acts as our gateway to both send messages to services and to register services that we support
    const proteus = Proteus.create({
        setup: {
            group: 'browser-demo',
            destination: sessionId,
            accessKey: 9007199254740991,
            accessToken: 'kTBDVtfRBO4tHOnZzSyY5ym2kfY='
        },
        transport: {
            url
        }
    });

    // This section is how one would query information about available brokers. The BrokerInfoService client is packaged
    // with the proteus client library and has several query functions to find the status of active brokers and services
    const brokerInfoService = new BrokerInfoServiceClient(proteus.group('com.netifi.proteus.brokerServices'));

    brokerInfoService.brokers(new Empty(), Buffer.alloc(0)).subscribe({
        onComplete: () => console.log('complete'),
        onError: error => console.error(error),
        onNext: broker => {
            var pretty = JSON.stringify(broker.toObject());
            console.log(pretty);
            addMessage(pretty, 'messages');
        },
        onSubscribe: subscription => {
            subscription.request(100);
        }
    });

    // Here we register a "PingPong" service through our gateway. This application is telling the broker that it is
    // available to service messages bound for the "io.netifi.proteus.demo.PingPongService"
    proteus.addService('io.netifi.proteus.demo.PingPongService', createPingPongService(proteus.myDestination()));

    // Here we create a client of the ping pong service so that we may send messages to the PingPong service -
    // the service name 'io.netifi.proteus.demo.PingPongService' is included in the routing metadata in our
    // PingPong client implementation, above.
    let pingPongClient = createPingPongClient(proteus);

    // Loop a request/response PING which could be handled by any other connected service, including this browser!
    setInterval(() => {
        addMessage('CLIENT: pinging...', 'requestResponseClient');

        // The requestResponse method (underlying our 'ping') on ReactiveSockets has a
        // Single return type. This type will call onComplete with a result value exactly once or
        // onError exactly once with the error
        pingPongClient.ping().subscribe({
            onComplete: pong => {
                console.log("Pong received: " + JSON.stringify(pong));
                addMessage('CLIENT: received [' + pong + ']', 'requestResponseClient');
            },
            onError: error => {
                addMessage('CLIENT: received and ERROR[' + error + ']', 'requestResponseClient');
            }
        });
    }, 5000);

    //Loop a fire-and-forget PING
    setInterval(() => {
        addMessage('CLIENT: pinging...', 'fireAndForgetClient');

        // The fire and forget method on ReactiveSockets has a void return type because we want to fire... and forget.
        pingPongClient.pingFnF();
    }, 6000);

    //Loop every 7500 ms, ask for a stream of 'pongs' from the network
    setInterval(() => {
        addMessage('CLIENT: request pong stream...', 'requestStreamClient');
        let _subscription;

        // The requestStream method (underlying our 'pingStream') on ReactiveSockets has a
        // Flowable return type. Flowables conform to the Publisher API defined by ReactiveSocket.
        // The 'subscribe' method expects a subscriber object with the following methods
        //
        // {
        //     onSubscribe: subscription => {...},
        //     onComplete: () => {...},
        //     onError: error => {...},
        //     onNext: value => {...}
        // }
        //
        // Typically onSubscribe is called immediately in order to pass a 'subscription' handle back to the caller
        // as seen in below's 'onSubscribe' function. The subscription is persisted because it has 2 important methods.
        //
        // {
        //     cancel: () => {...},
        //     request: n => {...}
        // }
        //
        // Cancel indicates that the caller no longer wants to receive data and the Service is free
        // to tear down any state for its response stream.
        //
        // When a subscriber (client) invokes 'request(n)', it is signalling to the service that it wants up to n
        // 'onNext' calls with values.
        //
        // The service will call onComplete on the subscriber when no more values are available or onError
        // if it encounters an error while processing.

        pingPongClient.pingStream().subscribe({
            onNext: pong => {
                console.log("Pong received: " + JSON.stringify(pong));
                addMessage('CLIENT: received [' + pong + ']', 'requestStreamClient');
                _subscription.request(1);
            },
            onComplete: () => {
                addMessage('CLIENT: finished pong stream', 'requestStreamClient');
            },
            onError: error => {
                addMessage('CLIENT: received error from pong stream[' + error + ']', 'requestStreamClient');
            },
            onSubscribe: subscription => {
                _subscription = subscription;
                _subscription.request(1);
            }
        });
    }, 15000);
}

document.addEventListener('DOMContentLoaded', main);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 26 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Netifi Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Empty = exports.Event = exports.Destination = exports.Group = exports.Broker = exports.BrokerManagementServiceServer = exports.BrokerManagementServiceClient = exports.BrokerInfoServiceServer = exports.BrokerInfoServiceClient = exports.Proteus = undefined;

var _Proteus = __webpack_require__(29);

var _Proteus2 = _interopRequireDefault(_Proteus);

var _broker_info_pb = __webpack_require__(12);

var _empty_pb = __webpack_require__(8);

var _broker_info_proteus_pb = __webpack_require__(57);

var _broker_mgmt_proteus_pb = __webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The public API of the `client` package.
 */
exports.Proteus = _Proteus2.default;
exports.BrokerInfoServiceClient = _broker_info_proteus_pb.BrokerInfoServiceClient;
exports.BrokerInfoServiceServer = _broker_info_proteus_pb.BrokerInfoServiceServer;
exports.BrokerManagementServiceClient = _broker_mgmt_proteus_pb.BrokerManagementServiceClient;
exports.BrokerManagementServiceServer = _broker_mgmt_proteus_pb.BrokerManagementServiceServer;
exports.Broker = _broker_info_pb.Broker;
exports.Group = _broker_info_pb.Group;
exports.Destination = _broker_info_pb.Destination;
exports.Event = _broker_info_pb.Event;
exports.Empty = _empty_pb.Empty;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rsocketTypes = __webpack_require__(10);

var _rsocketFlowable = __webpack_require__(0);

var _rsocketCore = __webpack_require__(2);

var _proteusJsCore = __webpack_require__(41);

var _invariant = __webpack_require__(1);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2017-present, Netifi Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */

'use-strict';

var RSocketWebSocketClient = __webpack_require__(55).default;

var Proteus = function () {
  function Proteus(proteusClient, requestHandler) {
    var _this = this;

    _classCallCheck(this, Proteus);

    this._client = proteusClient;
    this._group = proteusClient.group();
    this._destination = proteusClient.destination();
    this._connect = function () {
      if (_this._connection) {
        return _rsocketFlowable.Single.of(_this._connection);
      } else if (_this._connecting) {
        return new _rsocketFlowable.Single(function (subscriber) {
          _this._connecting.subscribe(subscriber);
        });
      } else {
        /*** This is a useful Publisher implementation that wraps could feasibly wrap the Single type ***/
        /*** Might be useful to clean up and contribute back or put in a utility or something ***/
        _this._connecting = function () {
          var _subscribers = [];
          var _connection = void 0;
          var _completed = false;
          return {
            onComplete: function onComplete(connection) {
              //Memoize for future subscribers
              _completed = true;
              _connection = connection;

              _subscribers.map(function (subscriber) {
                if (subscriber.onComplete) {
                  subscriber.onComplete(connection);
                }
              });
            },

            onError: function onError(error) {
              _subscribers.map(function (subscriber) {
                if (subscriber.onError) {
                  subscriber.onError(error);
                }
              });
            },

            onSubscribe: function onSubscribe(cancel) {
              _subscribers.map(function (subscriber) {
                if (subscriber.onSubscribe) {
                  subscriber.onSubscribe(cancel);
                }
              });
            },

            subscribe: function subscribe(subscriber) {
              if (_completed) {
                subscriber.onSubscribe();
                subscriber.onComplete(_connection);
              } else {
                _subscribers.push(subscriber);
                if (subscriber.onSubscribe) {
                  subscriber.onSubscribe(function () {
                    var idx = _subscribers.indexOf(subscriber);
                    if (idx > -1) {
                      _subscribers.splice(idx, 1);
                    }
                  });
                }
              }
            }
          };
        }();

        proteusClient.connect().subscribe(_this._connecting);
        _this._connecting.subscribe({
          onComplete: function onComplete(connection) {
            _this._connection = connection;
          }
        });
        return _this._connecting;
      }
    };
    this._requestHandler = requestHandler;
  }

  Proteus.prototype.myGroup = function myGroup() {
    return this._group;
  };

  Proteus.prototype.myDestination = function myDestination() {
    return this._destination;
  };

  Proteus.prototype.broadcast = function broadcast(group) {
    return _proteusJsCore.DeferredConnectingRSocket.broadcast(this._group, this._destination, group, this._connect);
  };

  Proteus.prototype.group = function (_group) {
    function group(_x) {
      return _group.apply(this, arguments);
    }

    group.toString = function () {
      return _group.toString();
    };

    return group;
  }(function (group) {
    return _proteusJsCore.DeferredConnectingRSocket.group(this._group, this._destination, group, this._connect);
  });

  Proteus.prototype.destination = function (_destination) {
    function destination(_x2, _x3) {
      return _destination.apply(this, arguments);
    }

    destination.toString = function () {
      return _destination.toString();
    };

    return destination;
  }(function (destination, group) {
    return _proteusJsCore.DeferredConnectingRSocket.destination(this._group, this._destination, group, destination, this._connect);
  });

  Proteus.prototype.addService = function addService(service, handler) {
    this._requestHandler.addService(service, handler);
  };

  Proteus.prototype.close = function close() {
    this._client.close();
  };

  Proteus.create = function create(config) {
    (0, _invariant2.default)(config && config.setup && config.setup.accessKey && config.setup.accessToken && config.transport, 'Proteus: Falsey config is invalid. At minimum transport config, group, access key, and access token are required.');

    (0, _invariant2.default)(config.transport.connection || config.transport.url, 'Proteus: Transport config must supply a connection or a URL');

    //default to GUID-y destination ID
    var destination = config.setup.destination !== undefined ? config.setup.destination : uuidv4();
    var keepAlive = config.setup.keepAlive !== undefined ? config.setup.keepAlive : 60000 /* 60s in ms */;
    var lifetime = config.setup.lifetime !== undefined ? config.setup.lifetime : 360000 /* 360s in ms */;
    var accessKey = config.setup.accessKey;
    var accessToken = Buffer.from(config.setup.accessToken, 'base64');

    var transport = config.transport.connection !== undefined ? config.transport.connection : new RSocketWebSocketClient({
      url: config.transport.url ? config.transport.url : 'ws://'
    }, _rsocketCore.BufferEncoders);

    var requestHandler = new _proteusJsCore.RequestHandlingRSocket();
    var responder = new _proteusJsCore.UnwrappingRSocket(requestHandler);

    var finalConfig = {
      setup: {
        group: config.setup.group,
        destination: destination,
        keepAlive: keepAlive,
        lifetime: lifetime,
        accessKey: accessKey,
        accessToken: accessToken
      },
      transport: transport,
      responder: responder
    };

    if (config.responder !== undefined) {
      finalConfig.responder = config.responder;
    }

    if (config.serializers !== undefined) {
      finalConfig.serializers = config.serializers;
    }

    var client = new _proteusJsCore.ProteusClient(finalConfig);

    return new Proteus(client, requestHandler);
  };

  return Proteus;
}();

//Helper function to generate GUID-ish IDs, should a user not provide one


exports.default = Proteus;
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true,
}); /**
                                                                                 * Copyright (c) 2017-present, Facebook, Inc.
                                                                                 * All rights reserved.
                                                                                 *
                                                                                 * This source code is licensed under the BSD-style license found in the
                                                                                 * LICENSE file in the root directory of this source tree. An additional grant
                                                                                 * of patent rights can be found in the PATENTS file in the same directory.
                                                                                 *
                                                                                 * 
                                                                                 */

/**
                                                                             * Represents a network connection with input/output used by a ReactiveSocket to
                                                                             * send/receive data.
                                                                             */ const CONNECTION_STATUS = (exports.CONNECTION_STATUS = {
  CLOSED: Object.freeze({kind: 'CLOSED'}),
  CONNECTED: Object.freeze({kind: 'CONNECTED'}),
  CONNECTING: Object.freeze({kind: 'CONNECTING'}),
  NOT_CONNECTED: Object.freeze({kind: 'NOT_CONNECTED'}),
}); /**
                                                                  * Describes the connection status of a ReactiveSocket/DuplexConnection.
                                                                  * - NOT_CONNECTED: no connection established or pending.
                                                                  * - CONNECTING: when `connect()` has been called but a connection is not yet
                                                                  *   established.
                                                                  * - CONNECTED: when a connection is established.
                                                                  * - CLOSED: when the connection has been explicitly closed via `close()`.
                                                                  * - ERROR: when the connection has been closed for any other reason.
                                                                  */ /**
                                                                      * A contract providing different interaction models per the [ReactiveSocket protocol]
                                                                      (https://github.com/ReactiveSocket/reactivesocket/blob/master/Protocol.md).
                                                                      */ /**
                                                                          * A single unit of data exchanged between the peers of a `ReactiveSocket`.
                                                                          */

/**
                                                              * A type that can be written to a buffer.
                                                              */

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});

var _nullthrows = __webpack_require__(19);
var _nullthrows2 = _interopRequireDefault(_nullthrows);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                                                                                       * An operator that acts like Array.map, applying a given function to
                                                                                                                                                                                                       * all values provided by its `Subscription` and passing the result to its
                                                                                                                                                                                                       * `Subscriber`.
                                                                                                                                                                                                       */
class FlowableMapOperator {
  constructor(subscriber, fn) {
    this._fn = fn;
    this._subscriber = subscriber;
    this._subscription = null;
  }

  onComplete() {
    this._subscriber.onComplete();
  }

  onError(error) {
    this._subscriber.onError(error);
  }

  onNext(t) {
    try {
      this._subscriber.onNext(this._fn(t));
    } catch (e) {
      (0, _nullthrows2.default)(this._subscription).cancel();
      this._subscriber.onError(e);
    }
  }

  onSubscribe(subscription) {
    this._subscription = subscription;
    this._subscriber.onSubscribe(subscription);
  }
}
exports.default = FlowableMapOperator;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});

var _nullthrows = __webpack_require__(19);
var _nullthrows2 = _interopRequireDefault(_nullthrows);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                                                                                       * An operator that requests a fixed number of values from its source
                                                                                                                                                                                                       * `Subscription` and forwards them to its `Subscriber`, cancelling the
                                                                                                                                                                                                       * subscription when the requested number of items has been reached.
                                                                                                                                                                                                       */
class FlowableTakeOperator {
  constructor(subscriber, toTake) {
    this._subscriber = subscriber;
    this._subscription = null;
    this._toTake = toTake;
  }

  onComplete() {
    this._subscriber.onComplete();
  }

  onError(error) {
    this._subscriber.onError(error);
  }

  onNext(t) {
    try {
      this._subscriber.onNext(t);
      if (--this._toTake === 0) {
        this._cancelAndComplete();
      }
    } catch (e) {
      (0, _nullthrows2.default)(this._subscription).cancel();
      this._subscriber.onError(e);
    }
  }

  onSubscribe(subscription) {
    this._subscription = subscription;
    this._subscriber.onSubscribe(subscription);
    if (this._toTake <= 0) {
      this._cancelAndComplete();
    }
  }

  _cancelAndComplete() {
    (0, _nullthrows2.default)(this._subscription).cancel();
    this._subscriber.onComplete();
  }
}
exports.default = FlowableTakeOperator;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});

var _warning = __webpack_require__(13);
var _warning2 = _interopRequireDefault(_warning);
var _emptyFunction = __webpack_require__(11);
var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                                                                                                   * Represents a lazy computation that will either produce a value of type T
                                                                                                                                                                                                                   * or fail with an error. Calling `subscribe()` starts the
                                                                                                                                                                                                                   * computation and return a subscription object, which has an `unsubscribe()`
                                                                                                                                                                                                                   * method that can be called to prevent completion/error callbacks from being
                                                                                                                                                                                                                   * invoked and, where supported, to also cancel the computation.
                                                                                                                                                                                                                   * Implementations may optionally implement cancellation; if they do not
                                                                                                                                                                                                                   * `cancel()` is a no-op.
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * Note: Unlike Promise, callbacks (onComplete/onError) may be invoked
                                                                                                                                                                                                                   * synchronously.
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * Example:
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * ```
                                                                                                                                                                                                                   * const value = new Single(subscriber => {
                                                                                                                                                                                                                   *   const id = setTimeout(
                                                                                                                                                                                                                   *     () => subscriber.onComplete('Hello!'),
                                                                                                                                                                                                                   *     250
                                                                                                                                                                                                                   *   );
                                                                                                                                                                                                                   *   // Optional: Call `onSubscribe` with a cancellation callback
                                                                                                                                                                                                                   *   subscriber.onSubscribe(() => clearTimeout(id));
                                                                                                                                                                                                                   * });
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * // Start the computation. onComplete will be called after the timeout
                                                                                                                                                                                                                   * // with 'hello'  unless `cancel()` is called first.
                                                                                                                                                                                                                   * value.subscribe({
                                                                                                                                                                                                                   *   onComplete: value => console.log(value),
                                                                                                                                                                                                                   *   onError: error => console.error(error),
                                                                                                                                                                                                                   *   onSubscribe: cancel => ...
                                                                                                                                                                                                                   * });
                                                                                                                                                                                                                   * ```
                                                                                                                                                                                                                   */
class Single {
  static of(value) {
    return new Single(subscriber => {
      subscriber.onSubscribe();
      subscriber.onComplete(value);
    });
  }

  static error(error) {
    return new Single(subscriber => {
      subscriber.onSubscribe();
      subscriber.onError(error);
    });
  }

  constructor(source) {
    this._source = source;
  }

  subscribe(partialSubscriber) {
    const subscriber = new FutureSubscriber(partialSubscriber);
    try {
      this._source(subscriber);
    } catch (error) {
      subscriber.onError(error);
    }
  }

  flatMap(fn) {
    return new Single(subscriber => {
      let currentCancel;
      const cancel = () => {
        currentCancel && currentCancel();
        currentCancel = null;
      };
      this._source({
        onComplete: value => {
          fn(value).subscribe({
            onComplete: mapValue => {
              subscriber.onComplete(mapValue);
            },
            onError: error => subscriber.onError(error),
            onSubscribe: _cancel => {
              currentCancel = _cancel;
            },
          });
        },
        onError: error => subscriber.onError(error),
        onSubscribe: _cancel => {
          currentCancel = _cancel;
          subscriber.onSubscribe(cancel);
        },
      });
    });
  }

  /**
     * Return a new Single that resolves to the value of this Single applied to
     * the given mapping function.
     */
  map(fn) {
    return new Single(subscriber => {
      return this._source({
        onComplete: value => subscriber.onComplete(fn(value)),
        onError: error => subscriber.onError(error),
        onSubscribe: cancel => subscriber.onSubscribe(cancel),
      });
    });
  }

  then(successFn, errorFn) {
    this.subscribe({
      onComplete: successFn || _emptyFunction2.default,
      onError: errorFn || _emptyFunction2.default,
    });
  }
}
exports.default = Single;

/**
                               * @private
                               */
class FutureSubscriber {
  constructor(subscriber) {
    this._active = false;
    this._started = false;
    this._subscriber = subscriber || {};
  }

  onComplete(value) {
    if (!this._active) {
      (0, _warning2.default)(
        false,
        'Single: Invalid call to onComplete(): %s.',
        this._started
          ? 'onComplete/onError was already called'
          : 'onSubscribe has not been called'
      );

      return;
    }
    this._active = false;
    this._started = true;
    try {
      if (this._subscriber.onComplete) {
        this._subscriber.onComplete(value);
      }
    } catch (error) {
      if (this._subscriber.onError) {
        this._subscriber.onError(error);
      }
    }
  }

  onError(error) {
    if (this._started && !this._active) {
      (0, _warning2.default)(
        false,
        'Single: Invalid call to onError(): %s.',
        this._active
          ? 'onComplete/onError was already called'
          : 'onSubscribe has not been called'
      );

      return;
    }
    this._active = false;
    this._started = true;
    this._subscriber.onError && this._subscriber.onError(error);
  }

  onSubscribe(cancel) {
    if (this._started) {
      (0, _warning2.default)(
        false,
        'Single: Invalid call to onSubscribe(): already called.'
      );
      return;
    }
    this._active = true;
    this._started = true;
    try {
      this._subscriber.onSubscribe &&
        this._subscriber.onSubscribe(() => {
          if (!this._active) {
            return;
          }
          this._active = false;
          cancel && cancel();
        });
    } catch (error) {
      this.onError(error);
    }
  }
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});
exports.every = every;
var _Flowable = __webpack_require__(18);
var _Flowable2 = _interopRequireDefault(_Flowable);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
/**
                                                                                                                                                                                                      * Returns a Publisher that provides the current time (Date.now()) every `ms`
                                                                                                                                                                                                      * milliseconds.
                                                                                                                                                                                                      *
                                                                                                                                                                                                      * The timer is established on the first call to `request`: on each
                                                                                                                                                                                                      * interval a value is published if there are outstanding requests,
                                                                                                                                                                                                      * otherwise nothing occurs for that interval. This approach ensures
                                                                                                                                                                                                      * that the interval between `onNext` calls is as regular as possible
                                                                                                                                                                                                      * and means that overlapping `request` calls (ie calling again before
                                                                                                                                                                                                      * the previous values have been vended) behaves consistently.
                                                                                                                                                                                                      */ function every(
  ms
) {
  return new _Flowable2.default(subscriber => {
    let intervalId = null;
    let pending = 0;
    subscriber.onSubscribe({
      cancel: () => {
        if (intervalId != null) {
          clearInterval(intervalId);
          intervalId = null;
        }
      },
      request: n => {
        if (n < Number.MAX_SAFE_INTEGER) {
          pending += n;
        } else {
          pending = Number.MAX_SAFE_INTEGER;
        }
        if (intervalId != null) {
          return;
        }
        intervalId = setInterval(
          () => {
            if (pending > 0) {
              if (pending !== Number.MAX_SAFE_INTEGER) {
                pending--;
              }
              subscriber.onNext(Date.now());
            }
          },
          ms
        );
      },
    });
  });
}


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/**
 * Simple function for formatting strings.
 *
 * Replaces placeholders with values passed as extra arguments
 *
 * @param {string} format the base string
 * @param ...args the values to insert
 * @return {string} the replaced string
 */
function sprintf(format) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var index = 0;
  return format.replace(/%s/g, function (match) {
    return args[index++];
  });
}

module.exports = sprintf;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/* eslint-disable consistent-return, no-bitwise */ Object.defineProperty(
  exports,
  '__esModule',
  {value: true}
);
exports.deserializeFrameWithLength = deserializeFrameWithLength;
exports.deserializeFrames = deserializeFrames;
exports.serializeFrameWithLength = serializeFrameWithLength;
exports.deserializeFrame = deserializeFrame;
exports.serializeFrame = serializeFrame;
var _invariant = __webpack_require__(1);
var _invariant2 = _interopRequireDefault(_invariant);
var _RSocketFrame = __webpack_require__(7);
var _RSocketEncoding = __webpack_require__(22);
var _RSocketBufferUtils = __webpack_require__(9);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
/**
                                                                                                                                                                                                                                                                                                                                                                                               * Frame header is:
                                                                                                                                                                                                                                                                                                                                                                                               * - stream id (uint32 = 4)
                                                                                                                                                                                                                                                                                                                                                                                               * - type + flags (uint 16 = 2)
                                                                                                                                                                                                                                                                                                                                                                                               */ const FRAME_HEADER_SIZE = 6;
/**
                                                                                                                                                                                                                                                                                                                                                                                                                               * Size of frame length and metadata length fields.
                                                                                                                                                                                                                                                                                                                                                                                                                               */ const UINT24_SIZE = 3;
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                         * Reads a frame from a buffer that is prefixed with the frame length.
                                                                                                                                                                                                                                                                                                                                                                                                                                                         */ function deserializeFrameWithLength(
  buffer,
  encoders
) {
  const frameLength = (0, _RSocketBufferUtils.readUInt24BE)(buffer, 0);
  return deserializeFrame(
    buffer.slice(UINT24_SIZE, UINT24_SIZE + frameLength),
    encoders
  );
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Given a buffer that may contain zero or more length-prefixed frames followed
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * by zero or more bytes of a (partial) subsequent frame, returns an array of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * the frames and a buffer of the leftover bytes.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */ function deserializeFrames(
  buffer,
  encoders
) {
  const frames = [];
  let offset = 0;
  while (offset + UINT24_SIZE < buffer.length) {
    const frameLength = (0, _RSocketBufferUtils.readUInt24BE)(buffer, offset);
    const frameStart = offset + UINT24_SIZE;
    const frameEnd = frameStart + frameLength;
    if (frameEnd > buffer.length) {
      // not all bytes of next frame received
      break;
    }
    const frameBuffer = buffer.slice(frameStart, frameEnd);
    const frame = deserializeFrame(frameBuffer, encoders);
    frames.push(frame);
    offset = frameEnd;
  }
  return [frames, buffer.slice(offset, buffer.length)];
}
/**
                                                                                                                                                                                                                        * Writes a frame to a buffer with a length prefix.
                                                                                                                                                                                                                        */ function serializeFrameWithLength(
  frame,
  encoders
) {
  const buffer = serializeFrame(frame, encoders);
  const lengthPrefixed = (0, _RSocketBufferUtils.createBuffer)(
    buffer.length + UINT24_SIZE
  );
  (0, _RSocketBufferUtils.writeUInt24BE)(lengthPrefixed, buffer.length, 0);
  buffer.copy(lengthPrefixed, UINT24_SIZE, 0, buffer.length);
  return lengthPrefixed;
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * Read a frame from the buffer.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    */ function deserializeFrame(
  buffer,
  encoders
) {
  encoders = encoders || _RSocketEncoding.Utf8Encoders;
  let offset = 0;
  const streamId = buffer.readInt32BE(offset);
  offset += 4;
  (0, _invariant2.default)(
    streamId >= 0,
    'RSocketBinaryFraming: Invalid frame, expected a positive stream id, got `%s.',
    streamId
  );
  const typeAndFlags = buffer.readUInt16BE(offset);
  offset += 2;
  const type = typeAndFlags >>> _RSocketFrame.FRAME_TYPE_OFFFSET; // keep highest 6 bits
  const flags = typeAndFlags & _RSocketFrame.FLAGS_MASK; // keep lowest 10 bits
  switch (type) {
    case _RSocketFrame.FRAME_TYPES.SETUP:
      return deserializeSetupFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.PAYLOAD:
      return deserializePayloadFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.ERROR:
      return deserializeErrorFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.KEEPALIVE:
      return deserializeKeepAliveFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_FNF:
      return deserializeRequestFnfFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE:
      return deserializeRequestResponseFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_STREAM:
      return deserializeRequestStreamFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL:
      return deserializeRequestChannelFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_N:
      return deserializeRequestNFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.RESUME:
      return deserializeResumeFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.RESUME_OK:
      return deserializeResumeOkFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.CANCEL:
      return deserializeCancelFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.LEASE:
      return deserializeLeaseFrame(buffer, streamId, flags, encoders);
    default:
      (0, _invariant2.default)(
        false,
        'RSocketBinaryFraming: Unsupported frame type `%s`.',
        (0, _RSocketFrame.getFrameTypeName)(type)
      );
  }
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Convert the frame to a (binary) buffer.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */ function serializeFrame(
  frame,
  encoders
) {
  encoders = encoders || _RSocketEncoding.Utf8Encoders;
  switch (frame.type) {
    case _RSocketFrame.FRAME_TYPES.SETUP:
      return serializeSetupFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.PAYLOAD:
      return serializePayloadFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.ERROR:
      return serializeErrorFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.KEEPALIVE:
      return serializeKeepAliveFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_FNF:
    case _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE:
      return serializeRequestFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_STREAM:
    case _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL:
      return serializeRequestManyFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_N:
      return serializeRequestNFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.RESUME:
      return serializeResumeFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.RESUME_OK:
      return serializeResumeOkFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.CANCEL:
      return serializeCancelFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.LEASE:
      return serializeLeaseFrame(frame, encoders);
    default:
      (0, _invariant2.default)(
        false,
        'RSocketBinaryFraming: Unsupported frame type `%s`.',
        (0, _RSocketFrame.getFrameTypeName)(frame.type)
      );
  }
}

/**
   * Writes a SETUP frame into a new buffer and returns it.
   *
   * Prefix size is:
   * - version (2x uint16 = 4)
   * - keepalive (uint32 = 4)
   * - lifetime (uint32 = 4)
   * - mime lengths (2x uint8 = 2)
   */
const SETUP_FIXED_SIZE = 14;
const RESUME_TOKEN_LENGTH_SIZE = 2;
function serializeSetupFrame(frame, encoders) {
  const resumeTokenLength = frame.resumeToken != null
    ? encoders.resumeToken.byteLength(frame.resumeToken)
    : 0;
  const metadataMimeTypeLength = frame.metadataMimeType != null
    ? encoders.metadataMimeType.byteLength(frame.metadataMimeType)
    : 0;
  const dataMimeTypeLength = frame.dataMimeType != null
    ? encoders.dataMimeType.byteLength(frame.dataMimeType)
    : 0;
  const payloadLength = getPayloadLength(frame, encoders);
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE +
      SETUP_FIXED_SIZE + //
      (resumeTokenLength ? RESUME_TOKEN_LENGTH_SIZE + resumeTokenLength : 0) +
      metadataMimeTypeLength +
      dataMimeTypeLength +
      payloadLength
  );

  let offset = writeHeader(frame, buffer);
  offset = buffer.writeUInt16BE(frame.majorVersion, offset);
  offset = buffer.writeUInt16BE(frame.minorVersion, offset);
  offset = buffer.writeUInt32BE(frame.keepAlive, offset);
  offset = buffer.writeUInt32BE(frame.lifetime, offset);

  if (frame.flags & _RSocketFrame.FLAGS.RESUME_ENABLE) {
    offset = buffer.writeUInt16BE(resumeTokenLength, offset);
    if (frame.resumeToken != null) {
      offset = encoders.resumeToken.encode(
        frame.resumeToken,
        buffer,
        offset,
        offset + resumeTokenLength
      );
    }
  }

  offset = buffer.writeUInt8(metadataMimeTypeLength, offset);
  if (frame.metadataMimeType != null) {
    offset = encoders.metadataMimeType.encode(
      frame.metadataMimeType,
      buffer,
      offset,
      offset + metadataMimeTypeLength
    );
  }

  offset = buffer.writeUInt8(dataMimeTypeLength, offset);
  if (frame.dataMimeType != null) {
    offset = encoders.dataMimeType.encode(
      frame.dataMimeType,
      buffer,
      offset,
      offset + dataMimeTypeLength
    );
  }

  writePayload(frame, buffer, encoders, offset);
  return buffer;
}

/**
   * Reads a SETUP frame from the buffer and returns it.
   */
function deserializeSetupFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId === 0,
    'RSocketBinaryFraming: Invalid SETUP frame, expected stream id to be 0.'
  );

  let offset = FRAME_HEADER_SIZE;
  const majorVersion = buffer.readUInt16BE(offset);
  offset += 2;
  const minorVersion = buffer.readUInt16BE(offset);
  offset += 2;

  const keepAlive = buffer.readInt32BE(offset);
  offset += 4;
  (0, _invariant2.default)(
    keepAlive >= 0 && keepAlive <= _RSocketFrame.MAX_KEEPALIVE,
    'RSocketBinaryFraming: Invalid SETUP frame, expected keepAlive to be ' +
      '>= 0 and <= %s. Got `%s`.',
    _RSocketFrame.MAX_KEEPALIVE,
    keepAlive
  );

  const lifetime = buffer.readInt32BE(offset);
  offset += 4;
  (0, _invariant2.default)(
    lifetime >= 0 && lifetime <= _RSocketFrame.MAX_LIFETIME,
    'RSocketBinaryFraming: Invalid SETUP frame, expected lifetime to be ' +
      '>= 0 and <= %s. Got `%s`.',
    _RSocketFrame.MAX_LIFETIME,
    lifetime
  );

  let resumeToken = null;
  if (flags & _RSocketFrame.FLAGS.RESUME_ENABLE) {
    const resumeTokenLength = buffer.readInt16BE(offset);
    offset += 2;
    (0, _invariant2.default)(
      resumeTokenLength >= 0 &&
        resumeTokenLength <= _RSocketFrame.MAX_RESUME_LENGTH,
      'RSocketBinaryFraming: Invalid SETUP frame, expected resumeToken length ' +
        'to be >= 0 and <= %s. Got `%s`.',
      _RSocketFrame.MAX_RESUME_LENGTH,
      resumeTokenLength
    );

    resumeToken = encoders.resumeToken.decode(
      buffer,
      offset,
      offset + resumeTokenLength
    );

    offset += resumeTokenLength;
  }

  const metadataMimeTypeLength = buffer.readUInt8(offset);
  offset += 1;
  const metadataMimeType = encoders.metadataMimeType.decode(
    buffer,
    offset,
    offset + metadataMimeTypeLength
  );

  offset += metadataMimeTypeLength;

  const dataMimeTypeLength = buffer.readUInt8(offset);
  offset += 1;
  const dataMimeType = encoders.dataMimeType.decode(
    buffer,
    offset,
    offset + dataMimeTypeLength
  );

  offset += dataMimeTypeLength;

  const frame = {
    data: null,
    dataMimeType,
    flags,
    keepAlive,
    lifetime,
    majorVersion,
    metadata: null,
    metadataMimeType,
    minorVersion,
    resumeToken,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.SETUP,
  };

  readPayload(buffer, frame, encoders, offset);
  return frame;
}

/**
   * Writes an ERROR frame into a new buffer and returns it.
   *
   * Prefix size is for the error code (uint32 = 4).
   */
const ERROR_FIXED_SIZE = 4;
function serializeErrorFrame(frame, encoders) {
  const messageLength = frame.message != null
    ? encoders.message.byteLength(frame.message)
    : 0;
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + ERROR_FIXED_SIZE + messageLength
  );

  let offset = writeHeader(frame, buffer);
  offset = buffer.writeUInt32BE(frame.code, offset);
  if (frame.message != null) {
    encoders.message.encode(
      frame.message,
      buffer,
      offset,
      offset + messageLength
    );
  }
  return buffer;
}

/**
   * Reads an ERROR frame from the buffer and returns it.
   */
function deserializeErrorFrame(buffer, streamId, flags, encoders) {
  let offset = FRAME_HEADER_SIZE;
  const code = buffer.readInt32BE(offset);
  offset += 4;
  (0, _invariant2.default)(
    code >= 0 && code <= _RSocketFrame.MAX_CODE,
    'RSocketBinaryFraming: Invalid ERROR frame, expected code to be >= 0 and <= %s. Got `%s`.',
    _RSocketFrame.MAX_CODE,
    code
  );

  const messageLength = buffer.length - offset;
  let message = '';
  if (messageLength > 0) {
    message = encoders.message.decode(buffer, offset, offset + messageLength);
    offset += messageLength;
  }

  return {
    code,
    flags,
    message,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.ERROR,
  };
}

/**
   * Writes a KEEPALIVE frame into a new buffer and returns it.
   *
   * Prefix size is for the last received position (uint64 = 8).
   */
const KEEPALIVE_FIXED_SIZE = 8;
function serializeKeepAliveFrame(frame, encoders) {
  const dataLength = frame.data != null
    ? encoders.data.byteLength(frame.data)
    : 0;
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + KEEPALIVE_FIXED_SIZE + dataLength
  );

  let offset = writeHeader(frame, buffer);
  offset = (0, _RSocketBufferUtils.writeUInt64BE)(
    buffer,
    frame.lastReceivedPosition,
    offset
  );
  if (frame.data != null) {
    encoders.data.encode(frame.data, buffer, offset, offset + dataLength);
  }
  return buffer;
}

/**
   * Reads a KEEPALIVE frame from the buffer and returns it.
   */
function deserializeKeepAliveFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId === 0,
    'RSocketBinaryFraming: Invalid KEEPALIVE frame, expected stream id to be 0.'
  );

  let offset = FRAME_HEADER_SIZE;
  const lastReceivedPosition = (0, _RSocketBufferUtils.readUInt64BE)(
    buffer,
    offset
  );
  offset += 8;
  let data = null;
  if (offset < buffer.length) {
    data = encoders.data.decode(buffer, offset, buffer.length);
  }

  return {
    data,
    flags,
    lastReceivedPosition,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.KEEPALIVE,
  };
}

/**
   * Writes a LEASE frame into a new buffer and returns it.
   *
   * Prefix size is for the ttl (uint32) and requestcount (uint32).
   */
const LEASE_FIXED_SIZE = 8;
function serializeLeaseFrame(frame, encoders) {
  const metaLength = frame.metadata != null
    ? encoders.metadata.byteLength(frame.metadata)
    : 0;
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + LEASE_FIXED_SIZE + metaLength
  );

  let offset = writeHeader(frame, buffer);
  offset = buffer.writeUInt32BE(frame.ttl, offset);
  offset = buffer.writeUInt32BE(frame.requestCount, offset);
  if (frame.metadata != null) {
    encoders.metadata.encode(
      frame.metadata,
      buffer,
      offset,
      offset + metaLength
    );
  }
  return buffer;
}

/**
   * Reads a LEASE frame from the buffer and returns it.
   */
function deserializeLeaseFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId === 0,
    'RSocketBinaryFraming: Invalid LEASE frame, expected stream id to be 0.'
  );

  let offset = FRAME_HEADER_SIZE;
  const ttl = buffer.readUInt32BE(offset);
  offset += 4;
  const requestCount = buffer.readUInt32BE(offset);
  offset += 4;
  let metadata = null;
  if (offset < buffer.length) {
    metadata = encoders.metadata.decode(buffer, offset, buffer.length);
  }
  return {
    flags,
    metadata,
    requestCount,
    streamId,
    ttl,
    type: _RSocketFrame.FRAME_TYPES.LEASE,
  };
}

/**
   * Writes a REQUEST_FNF or REQUEST_RESPONSE frame to a new buffer and returns
   * it.
   *
   * Note that these frames have the same shape and only differ in their type.
   */
function serializeRequestFrame(frame, encoders) {
  const payloadLength = getPayloadLength(frame, encoders);
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + payloadLength
  );
  const offset = writeHeader(frame, buffer);
  writePayload(frame, buffer, encoders, offset);
  return buffer;
}

function deserializeRequestFnfFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid REQUEST_FNF frame, expected stream id to be > 0.'
  );

  const frame = {
    data: null,
    flags,
    metadata: null,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.REQUEST_FNF,
  };

  readPayload(buffer, frame, encoders, FRAME_HEADER_SIZE);
  return frame;
}

function deserializeRequestResponseFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid REQUEST_RESPONSE frame, expected stream id to be > 0.'
  );

  const frame = {
    data: null,
    flags,
    metadata: null,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE,
  };

  readPayload(buffer, frame, encoders, FRAME_HEADER_SIZE);
  return frame;
}

/**
   * Writes a REQUEST_STREAM or REQUEST_CHANNEL frame to a new buffer and returns
   * it.
   *
   * Note that these frames have the same shape and only differ in their type.
   *
   * Prefix size is for requestN (uint32 = 4).
   */
const REQUEST_MANY_HEADER = 4;
function serializeRequestManyFrame(frame, encoders) {
  const payloadLength = getPayloadLength(frame, encoders);
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + REQUEST_MANY_HEADER + payloadLength
  );

  let offset = writeHeader(frame, buffer);
  offset = buffer.writeUInt32BE(frame.requestN, offset);
  writePayload(frame, buffer, encoders, offset);
  return buffer;
}

function deserializeRequestStreamFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid REQUEST_STREAM frame, expected stream id to be > 0.'
  );

  let offset = FRAME_HEADER_SIZE;
  const requestN = buffer.readInt32BE(offset);
  offset += 4;
  (0, _invariant2.default)(
    requestN > 0,
    'RSocketBinaryFraming: Invalid REQUEST_STREAM frame, expected requestN to be > 0, got `%s`.',
    requestN
  );

  const frame = {
    data: null,
    flags,
    metadata: null,
    requestN,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.REQUEST_STREAM,
  };

  readPayload(buffer, frame, encoders, offset);
  return frame;
}

function deserializeRequestChannelFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid REQUEST_CHANNEL frame, expected stream id to be > 0.'
  );

  let offset = FRAME_HEADER_SIZE;
  const requestN = buffer.readInt32BE(offset);
  offset += 4;
  (0, _invariant2.default)(
    requestN > 0,
    'RSocketBinaryFraming: Invalid REQUEST_STREAM frame, expected requestN to be > 0, got `%s`.',
    requestN
  );

  const frame = {
    data: null,
    flags,
    metadata: null,
    requestN,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL,
  };

  readPayload(buffer, frame, encoders, offset);
  return frame;
}

/**
   * Writes a REQUEST_N frame to a new buffer and returns it.
   *
   * Prefix size is for requestN (uint32 = 4).
   */
const REQUEST_N_HEADER = 4;
function serializeRequestNFrame(frame, encoders) {
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + REQUEST_N_HEADER
  );
  const offset = writeHeader(frame, buffer);
  buffer.writeUInt32BE(frame.requestN, offset);
  return buffer;
}

function deserializeRequestNFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid REQUEST_N frame, expected stream id to be > 0.'
  );

  const requestN = buffer.readInt32BE(FRAME_HEADER_SIZE);
  (0, _invariant2.default)(
    requestN > 0,
    'RSocketBinaryFraming: Invalid REQUEST_STREAM frame, expected requestN to be > 0, got `%s`.',
    requestN
  );

  return {
    flags,
    requestN,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.REQUEST_N,
  };
}

/**
   * Writes a CANCEL frame to a new buffer and returns it.
   */
function serializeCancelFrame(frame, encoders) {
  const buffer = (0, _RSocketBufferUtils.createBuffer)(FRAME_HEADER_SIZE);
  writeHeader(frame, buffer);
  return buffer;
}

function deserializeCancelFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid CANCEL frame, expected stream id to be > 0.'
  );

  return {
    flags,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.CANCEL,
  };
}

/**
   * Writes a PAYLOAD frame to a new buffer and returns it.
   */
function serializePayloadFrame(frame, encoders) {
  const payloadLength = getPayloadLength(frame, encoders);
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + payloadLength
  );
  const offset = writeHeader(frame, buffer);
  writePayload(frame, buffer, encoders, offset);
  return buffer;
}

function deserializePayloadFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid PAYLOAD frame, expected stream id to be > 0.'
  );

  const frame = {
    data: null,
    flags,
    metadata: null,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.PAYLOAD,
  };

  readPayload(buffer, frame, encoders, FRAME_HEADER_SIZE);
  return frame;
}

/**
   * Writes a RESUME frame into a new buffer and returns it.
   *
   * Fixed size is:
   * - major version (uint16 = 2)
   * - minor version (uint16 = 2)
   * - token length (uint16 = 2)
   * - client position (uint64 = 8)
   * - server position (uint64 = 8)
   */
const RESUME_FIXED_SIZE = 22;
function serializeResumeFrame(frame, encoders) {
  const resumeTokenLength = encoders.resumeToken.byteLength(frame.resumeToken);
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + RESUME_FIXED_SIZE + resumeTokenLength
  );

  let offset = writeHeader(frame, buffer);
  offset = buffer.writeUInt16BE(frame.majorVersion, offset);
  offset = buffer.writeUInt16BE(frame.minorVersion, offset);
  offset = buffer.writeUInt16BE(resumeTokenLength, offset);
  offset = encoders.resumeToken.encode(
    frame.resumeToken,
    buffer,
    offset,
    offset + resumeTokenLength
  );

  offset = (0, _RSocketBufferUtils.writeUInt64BE)(
    buffer,
    frame.clientPosition,
    offset
  );
  (0, _RSocketBufferUtils.writeUInt64BE)(buffer, frame.serverPosition, offset);
  return buffer;
}

function deserializeResumeFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId === 0,
    'RSocketBinaryFraming: Invalid RESUME frame, expected stream id to be 0.'
  );

  let offset = FRAME_HEADER_SIZE;
  const majorVersion = buffer.readUInt16BE(offset);
  offset += 2;
  const minorVersion = buffer.readUInt16BE(offset);
  offset += 2;

  const resumeTokenLength = buffer.readInt16BE(offset);
  offset += 2;
  (0, _invariant2.default)(
    resumeTokenLength >= 0 &&
      resumeTokenLength <= _RSocketFrame.MAX_RESUME_LENGTH,
    'RSocketBinaryFraming: Invalid SETUP frame, expected resumeToken length ' +
      'to be >= 0 and <= %s. Got `%s`.',
    _RSocketFrame.MAX_RESUME_LENGTH,
    resumeTokenLength
  );

  const resumeToken = encoders.resumeToken.decode(
    buffer,
    offset,
    offset + resumeTokenLength
  );

  offset += resumeTokenLength;
  const clientPosition = (0, _RSocketBufferUtils.readUInt64BE)(buffer, offset);
  offset += 8;
  const serverPosition = (0, _RSocketBufferUtils.readUInt64BE)(buffer, offset);
  offset += 8;
  return {
    clientPosition,
    flags,
    majorVersion,
    minorVersion,
    resumeToken,
    serverPosition,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.RESUME,
  };
}

/**
   * Writes a RESUME_OK frame into a new buffer and returns it.
   *
   * Fixed size is:
   * - client position (uint64 = 8)
   */
const RESUME_OK_FIXED_SIZE = 8;
function serializeResumeOkFrame(frame, encoders) {
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + RESUME_OK_FIXED_SIZE
  );
  const offset = writeHeader(frame, buffer);
  (0, _RSocketBufferUtils.writeUInt64BE)(buffer, frame.clientPosition, offset);
  return buffer;
}

function deserializeResumeOkFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId === 0,
    'RSocketBinaryFraming: Invalid RESUME frame, expected stream id to be 0.'
  );

  const clientPosition = (0, _RSocketBufferUtils.readUInt64BE)(
    buffer,
    FRAME_HEADER_SIZE
  );
  return {
    clientPosition,
    flags,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.RESUME_OK,
  };
}

/**
   * Write the header of the frame into the buffer.
   */
function writeHeader(frame, buffer) {
  const offset = buffer.writeInt32BE(frame.streamId, 0);
  // shift frame to high 6 bits, extract lowest 10 bits from flags
  return buffer.writeUInt16BE(
    frame.type << _RSocketFrame.FRAME_TYPE_OFFFSET |
      frame.flags & _RSocketFrame.FLAGS_MASK,
    offset
  );
}

/**
   * Determine the length of the payload section of a frame. Only applies to
   * frame types that MAY have both metadata and data.
   */
function getPayloadLength(frame, encoders) {
  let payloadLength = 0;
  if (frame.data != null) {
    payloadLength += encoders.data.byteLength(frame.data);
  }
  if ((0, _RSocketFrame.isMetadata)(frame.flags)) {
    payloadLength += UINT24_SIZE;
    if (frame.metadata != null) {
      payloadLength += encoders.metadata.byteLength(frame.metadata);
    }
  }
  return payloadLength;
}

/**
   * Write the payload of a frame into the given buffer. Only applies to frame
   * types that MAY have both metadata and data.
   */
function writePayload(frame, buffer, encoders, offset) {
  if ((0, _RSocketFrame.isMetadata)(frame.flags)) {
    if (frame.metadata != null) {
      const metaLength = encoders.metadata.byteLength(frame.metadata);
      offset = (0, _RSocketBufferUtils.writeUInt24BE)(
        buffer,
        metaLength,
        offset
      );
      offset = encoders.metadata.encode(
        frame.metadata,
        buffer,
        offset,
        offset + metaLength
      );
    } else {
      offset = (0, _RSocketBufferUtils.writeUInt24BE)(buffer, 0, offset);
    }
  }
  if (frame.data != null) {
    encoders.data.encode(frame.data, buffer, offset, buffer.length);
  }
}

/**
   * Read the payload from a buffer and write it into the frame. Only applies to
   * frame types that MAY have both metadata and data.
   */
function readPayload(buffer, frame, encoders, offset) {
  if ((0, _RSocketFrame.isMetadata)(frame.flags)) {
    const metaLength = (0, _RSocketBufferUtils.readUInt24BE)(buffer, offset);
    offset += UINT24_SIZE;
    if (metaLength > 0) {
      frame.metadata = encoders.metadata.decode(
        buffer,
        offset,
        offset + metaLength
      );

      offset += metaLength;
    }
  }
  if (offset < buffer.length) {
    frame.data = encoders.data.decode(buffer, offset, buffer.length);
  }
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});

var _rsocketFlowable = __webpack_require__(0);
var _invariant = __webpack_require__(1);
var _invariant2 = _interopRequireDefault(_invariant);
var _RSocketFrame = __webpack_require__(7);
var _RSocketVersion = __webpack_require__(23);
var _RSocketMachine = __webpack_require__(15);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                                 * RSocketClient: A client in an RSocket connection that will communicates with
                                                                                                                                                 * the peer via the given transport client. Provides methods for establishing a
                                                                                                                                                 * connection and initiating the RSocket interactions:
                                                                                                                                                 * - fireAndForget()
                                                                                                                                                 * - requestResponse()
                                                                                                                                                 * - requestStream()
                                                                                                                                                 * - requestChannel()
                                                                                                                                                 * - metadataPush()
                                                                                                                                                 */
class RSocketClient {
  constructor(config) {
    this._cancel = null;
    this._config = config;
    this._connection = null;
    this._socket = null;
  }

  close() {
    this._config.transport.close();
  }

  connect() {
    (0, _invariant2.default)(
      !this._connection,
      'RSocketClient: Unexpected call to connect(), already connected.'
    );

    this._connection = new _rsocketFlowable.Single(subscriber => {
      const transport = this._config.transport;
      let subscription;
      transport.connectionStatus().subscribe({
        onNext: status => {
          if (status.kind === 'CONNECTED') {
            subscription && subscription.cancel();
            subscriber.onComplete(
              new RSocketClientSocket(this._config, transport)
            );
          } else if (status.kind === 'ERROR') {
            subscription && subscription.cancel();
            subscriber.onError(status.error);
          } else if (status.kind === 'CLOSED') {
            subscription && subscription.cancel();
            subscriber.onError(new Error('RSocketClient: Connection closed.'));
          }
        },
        onSubscribe: _subscription => {
          subscriber.onSubscribe(() => _subscription.cancel());
          subscription = _subscription;
          subscription.request(Number.MAX_SAFE_INTEGER);
        },
      });

      transport.connect();
    });
    return this._connection;
  }
}
exports.default = RSocketClient;

/**
                                      * @private
                                      */
class RSocketClientSocket {
  constructor(config, connection) {
    this._machine = (0, _RSocketMachine.createClientMachine)(
      connection,
      subscriber => connection.receive().subscribe(subscriber),
      config.serializers,
      config.responder
    );

    // Send SETUP
    connection.sendOne(this._buildSetupFrame(config));

    // Send KEEPALIVE frames
    const {keepAlive} = config.setup;
    const keepAliveFrames = (0, _rsocketFlowable.every)(keepAlive).map(() => ({
      data: null,
      flags: _RSocketFrame.FLAGS.RESPOND,
      lastReceivedPosition: 0,
      streamId: _RSocketFrame.CONNECTION_STREAM_ID,
      type: _RSocketFrame.FRAME_TYPES.KEEPALIVE,
    }));

    connection.send(keepAliveFrames);
  }

  fireAndForget(payload) {
    this._machine.fireAndForget(payload);
  }

  requestResponse(payload) {
    return this._machine.requestResponse(payload);
  }

  requestStream(payload) {
    return this._machine.requestStream(payload);
  }

  requestChannel(payloads) {
    return this._machine.requestChannel(payloads);
  }

  metadataPush(payload) {
    return this._machine.metadataPush(payload);
  }

  close() {
    this._machine.close();
  }

  connectionStatus() {
    return this._machine.connectionStatus();
  }

  _buildSetupFrame(config) {
    const {
      dataMimeType,
      keepAlive,
      lifetime,
      metadataMimeType,
    } = config.setup;
    return {
      data: undefined,
      dataMimeType,
      flags: 0,
      keepAlive,
      lifetime,
      majorVersion: _RSocketVersion.MAJOR_VERSION,
      metadata: undefined,
      metadataMimeType,
      minorVersion: _RSocketVersion.MINOR_VERSION,
      resumeToken: null,
      streamId: _RSocketFrame.CONNECTION_STREAM_ID,
      type: _RSocketFrame.FRAME_TYPES.SETUP,
    };
  }
}


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});

var _rsocketFlowable = __webpack_require__(0);
var _invariant = __webpack_require__(1);
var _invariant2 = _interopRequireDefault(_invariant);
var _RSocketFrame = __webpack_require__(7);

var _RSocketSerialization = __webpack_require__(14);
var _RSocketMachine = __webpack_require__(15);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                                 * RSocketServer: A server in an RSocket connection that accepts connections
                                                                                                                                                 * from peers via the given transport server.
                                                                                                                                                 */
class RSocketServer {
  constructor(config) {
    this._handleTransportComplete = () => {
      this._handleTransportError(
        new Error('RSocketServer: Connection closed unexpectedly.')
      );
    };
    this._handleTransportError = error => {
      this._connections.forEach(connection => {
        // TODO: Allow passing in error
        connection.close();
      });
    };
    this._handleTransportConnection = connection => {
      const swapper = new SubscriberSwapper();
      let subscription;
      connection.receive().subscribe(
        swapper.swap({
          onError: error => console.error(error),
          onNext: frame => {
            switch (frame.type) {
              case _RSocketFrame.FRAME_TYPES.RESUME:
                connection.sendOne({
                  code: _RSocketFrame.ERROR_CODES.REJECTED_RESUME,
                  flags: 0,
                  message: 'RSocketServer: RESUME not supported.',
                  streamId: _RSocketFrame.CONNECTION_STREAM_ID,
                  type: _RSocketFrame.FRAME_TYPES.ERROR,
                });

                connection.close();
                break;
              case _RSocketFrame.FRAME_TYPES.SETUP:
                const serializers = this._getSerializers();
                const serverMachine = (0, _RSocketMachine.createServerMachine)(
                  connection,
                  subscriber => {
                    swapper.swap(subscriber);
                  },
                  serializers
                );

                try {
                  const requestHandler = this._config.getRequestHandler(
                    serverMachine,
                    deserializePayload(serializers, frame)
                  );

                  serverMachine.setRequestHandler(requestHandler);
                  this._connections.add(serverMachine);
                } catch (error) {
                  connection.sendOne({
                    code: _RSocketFrame.ERROR_CODES.REJECTED_SETUP,
                    flags: 0,
                    message: 'Application rejected setup, reason: ' +
                      error.message,
                    streamId: _RSocketFrame.CONNECTION_STREAM_ID,
                    type: _RSocketFrame.FRAME_TYPES.ERROR,
                  });

                  connection.close();
                }

                // TODO(blom): We should subscribe to connection status
                // so we can remove the connection when it goes away
                break;
              default:
                (0, _invariant2.default)(
                  false,
                  'RSocketServer: Expected first frame to be SETUP or RESUME, ' +
                    'got `%s`.',
                  (0, _RSocketFrame.getFrameTypeName)(frame.type)
                );
            }
          },
          onSubscribe: _subscription => {
            subscription = _subscription;
            subscription.request(1);
          },
        })
      );
    };
    this._config = config;
    this._connections = new Set();
    this._started = false;
    this._subscription = null;
  }
  start() {
    (0, _invariant2.default)(
      !this._started,
      'RSocketServer: Unexpected call to start(), already started.'
    );
    this._started = true;
    this._config.transport.start().subscribe({
      onComplete: this._handleTransportComplete,
      onError: this._handleTransportError,
      onNext: this._handleTransportConnection,
      onSubscribe: subscription => {
        this._subscription = subscription;
        subscription.request(Number.MAX_SAFE_INTEGER);
      },
    });
  }
  stop() {
    if (this._subscription) {
      this._subscription.cancel();
    }
    this._config.transport.stop();
    this._handleTransportError(
      new Error('RSocketServer: Connection terminated via stop().')
    );
  }

  _getSerializers() {
    return this._config.serializers ||
      _RSocketSerialization.IdentitySerializers;
  }
}
exports.default = RSocketServer;

class SubscriberSwapper {
  constructor(target) {
    this._target = target;
  }

  swap(next) {
    this._target = next;
    if (this._subscription) {
      this._target.onSubscribe && this._target.onSubscribe(this._subscription);
    }
    return this;
  }

  onComplete() {
    (0, _invariant2.default)(this._target, 'must have target');
    this._target.onComplete && this._target.onComplete();
  }
  onError(error) {
    (0, _invariant2.default)(this._target, 'must have target');
    this._target.onError && this._target.onError(error);
  }
  onNext(value) {
    (0, _invariant2.default)(this._target, 'must have target');
    this._target.onNext && this._target.onNext(value);
  }
  onSubscribe(subscription) {
    (0, _invariant2.default)(this._target, 'must have target');
    this._subscription = subscription;
    this._target.onSubscribe && this._target.onSubscribe(subscription);
  }
}

function deserializePayload(serializers, frame) {
  return {
    data: serializers.data.deserialize(frame.data),
    metadata: serializers.metadata.deserialize(frame.metadata),
  };
}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});

var _rsocketFlowable = __webpack_require__(0);
var _invariant = __webpack_require__(1);
var _invariant2 = _interopRequireDefault(_invariant);
var _RSocketFrame = __webpack_require__(7);

var _rsocketTypes = __webpack_require__(10);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                            * NOTE: This implementation conforms to an upcoming version of the RSocket protocol
                                                                                                                                            *       and will not work with version 1.0 servers.
                                                                                                                                            *
                                                                                                                                            * An implementation of the DuplexConnection interface that supports automatic
                                                                                                                                            * resumption per the RSocket protocol.
                                                                                                                                            *
                                                                                                                                            * # Example
                                                                                                                                            *
                                                                                                                                            * Create a client instance:
                                                                                                                                            * ```
                                                                                                                                            * const client = new RSocketClient({
                                                                                                                                            *   ...,
                                                                                                                                            *   transport: new RSocketResumableTransport(
                                                                                                                                            *     () => new RSocketWebSocketClient(...), // provider for low-level transport instances
                                                                                                                                            *     {
                                                                                                                                            *       bufferSize: 10, // max number of sent & pending frames to buffer before failing
                                                                                                                                            *       resumeToken: 'abc123', // string to uniquely identify the session across connections
                                                                                                                                            *     }
                                                                                                                                            *   ),
                                                                                                                                            * })
                                                                                                                                            *
                                                                                                                                            * Open the connection. After this if the connection dies it will be auto-resumed:
                                                                                                                                            * ```
                                                                                                                                            * client.connect().subscribe(...);
                                                                                                                                            * ```
                                                                                                                                            *
                                                                                                                                            * Optionally, subscribe to the status of the connection:
                                                                                                                                            * ```
                                                                                                                                            * client.connectionStatus().subscribe(...);
                                                                                                                                            * ```
                                                                                                                                            *
                                                                                                                                            * # Implementation Notes
                                                                                                                                            *
                                                                                                                                            * This transport maintains:
                                                                                                                                            * - _currentConnection: a current low-level transport, which is null when not
                                                                                                                                            *   connected
                                                                                                                                            * - _sentFrames: a buffer of frames written to a low-level transport (which
                                                                                                                                            *   may or may not have been received by the server)
                                                                                                                                            * - _pendingFrames: a buffer of frames not yet written to the low-level
                                                                                                                                            *   connection, because they were sent while not connected.
                                                                                                                                            *
                                                                                                                                            * The initial connection is simple: connect using the low-level transport and
                                                                                                                                            * flush any _pendingFrames (write them and add them to _sentFrames).
                                                                                                                                            *
                                                                                                                                            * Thereafter if the low-level transport drops, this transport attempts resumption.
                                                                                                                                            * It obtains a fresh low-level transport from the given transport `source`
                                                                                                                                            * and attempts to connect. Once connected, it sends a RESUME frame and waits.
                                                                                                                                            * If RESUME_OK is received, _sentFrames and _pendingFrames are adjusted such
                                                                                                                                            * that:
                                                                                                                                            * - any frames the server has received are removed from _sentFrames
                                                                                                                                            * - the remaining frames are merged (in correct order) into _pendingFrames
                                                                                                                                            *
                                                                                                                                            * Then the connection proceeds as above, where all pending frames are flushed.
                                                                                                                                            * If anything other than RESUME_OK is received, resumption is considered to
                                                                                                                                            * have failed and the connection is set to the ERROR status.
                                                                                                                                            */
class RSocketResumableTransport {
  constructor(source, options) {
    (0, _invariant2.default)(
      options.bufferSize >= 0,
      'RSocketResumableTransport: bufferSize option must be >= 0, got `%s`.',
      options.bufferSize
    );

    this._bufferSize = options.bufferSize;
    this._position = {
      client: 0,
      server: 0,
    };

    this._currentConnection = null;
    this._statusSubscription = null;
    this._receiveSubscription = null;
    this._pendingFrames = [];
    this._receivers = new Set();
    this._resumeToken = options.resumeToken;
    this._senders = new Set();
    this._sentFrames = [];
    this._setupFrame = null;
    this._source = source;
    this._status = _rsocketTypes.CONNECTION_STATUS.NOT_CONNECTED;
    this._statusSubscribers = new Set();
  }

  close() {
    this._close();
  }

  connect() {
    (0, _invariant2.default)(
      !this._isTerminated(),
      'RSocketResumableTransport: Cannot connect(), connection terminated (%s).',
      this._status.kind
    );

    try {
      this._disconnect();
      this._currentConnection = null;
      this._receiveSubscription = null;
      this._statusSubscription = null;
      this._setConnectionStatus(_rsocketTypes.CONNECTION_STATUS.CONNECTING);
      const connection = this._source();
      connection.connectionStatus().subscribe({
        onNext: status => {
          if (status.kind === this._status.kind) {
            return;
          }
          if (status.kind === 'CONNECTED') {
            // (other) -> CONNECTED
            if (this._setupFrame == null) {
              this._handleConnected(connection);
            } else {
              this._handleResume(connection);
            }
          } else {
            // CONNECTED -> (other)
            this._disconnect();
            this._setConnectionStatus(
              _rsocketTypes.CONNECTION_STATUS.NOT_CONNECTED
            );
          }
        },
        onSubscribe: subscription => {
          this._statusSubscription = subscription;
          subscription.request(Number.MAX_SAFE_INTEGER);
        },
      });

      connection.connect();
    } catch (error) {
      this._close(error);
    }
  }

  connectionStatus() {
    return new _rsocketFlowable.Flowable(subscriber => {
      subscriber.onSubscribe({
        cancel: () => {
          this._statusSubscribers.delete(subscriber);
        },
        request: () => {
          this._statusSubscribers.add(subscriber);
          subscriber.onNext(this._status);
        },
      });
    });
  }

  receive() {
    return new _rsocketFlowable.Flowable(subject => {
      subject.onSubscribe({
        cancel: () => {
          this._receivers.delete(subject);
        },
        request: () => {
          this._receivers.add(subject);
        },
      });
    });
  }

  sendOne(frame) {
    try {
      this._writeFrame(frame);
    } catch (error) {
      this._close(error);
    }
  }

  send(frames) {
    let subscription;
    frames.subscribe({
      onComplete: () => {
        subscription && this._senders.delete(subscription);
      },
      onError: error => {
        subscription && this._senders.delete(subscription);
        this._close(error);
      },
      onNext: frame => this._writeFrame(frame),
      onSubscribe: _subscription => {
        subscription = _subscription;
        this._senders.add(subscription);
        subscription.request(Number.MAX_SAFE_INTEGER);
      },
    });
  }

  _close(error) {
    if (this._isTerminated()) {
      return;
    }
    if (error) {
      this._setConnectionStatus({error, kind: 'ERROR'});
    } else {
      this._setConnectionStatus(_rsocketTypes.CONNECTION_STATUS.CLOSED);
    }
    this._disconnect();
  }

  _disconnect() {
    if (this._statusSubscription) {
      this._statusSubscription.cancel();
      this._statusSubscription = null;
    }
    if (this._receiveSubscription) {
      this._receiveSubscription.cancel();
      this._receiveSubscription = null;
    }
    if (this._currentConnection) {
      this._currentConnection.close();
      this._currentConnection = null;
    }
  }

  _handleConnected(connection) {
    this._currentConnection = connection;
    this._flushFrames();
    this._setConnectionStatus(_rsocketTypes.CONNECTION_STATUS.CONNECTED);
    connection.receive().subscribe({
      onNext: frame => {
        try {
          this._receiveFrame(frame);
        } catch (error) {
          this._close(error);
        }
      },
      onSubscribe: subscription => {
        this._receiveSubscription = subscription;
        subscription.request(Number.MAX_SAFE_INTEGER);
      },
    });
  }

  _handleResume(connection) {
    connection.receive().take(1).subscribe({
      onNext: frame => {
        try {
          if (frame.type === _RSocketFrame.FRAME_TYPES.RESUME_OK) {
            const {clientPosition} = frame;
            // clientPosition indicates which frames the server is missing:
            // - anything after that still needs to be sent
            // - anything before that can be discarded
            if (clientPosition < this._position.client) {
              // Invalid RESUME_OK frame: server asked for an older
              // client frame than is available
              this._close(
                new Error(
                  'RSocketResumableTransport: Resumption failed, server is ' +
                    'missing frames that are no longer in the client buffer.'
                )
              );

              return;
            }
            // Extract "sent" frames that the server hasn't received...
            const unreceivedSentFrames = this._sentFrames.slice(
              clientPosition - this._position.client
            );

            // ...and mark them as pending again
            this._pendingFrames = [
              ...unreceivedSentFrames,
              ...this._pendingFrames,
            ];

            // Drop sent frames that the server has received
            this._sentFrames.length = clientPosition - this._position.client;
            // Continue connecting, which will flush pending frames
            this._handleConnected(connection);
          } else {
            const error = frame.type === _RSocketFrame.FRAME_TYPES.ERROR
              ? (0, _RSocketFrame.createErrorFromFrame)(frame)
              : new Error(
                  'RSocketResumableTransport: Resumption failed for an ' +
                    'unspecified reason.'
                );

            this._close(error);
          }
        } catch (error) {
          this._close(error);
        }
      },
      onSubscribe: subscription => {
        this._receiveSubscription = subscription;
        subscription.request(1);
      },
    });

    const setupFrame = this._setupFrame;
    (0, _invariant2.default)(
      setupFrame,
      'RSocketResumableTransport: Cannot resume, setup frame has not been sent.'
    );

    connection.sendOne({
      clientPosition: this._position.client,
      flags: 0,
      majorVersion: setupFrame.majorVersion,
      minorVersion: setupFrame.minorVersion,
      resumeToken: this._resumeToken,
      serverPosition: this._position.server,
      streamId: _RSocketFrame.CONNECTION_STREAM_ID,
      type: _RSocketFrame.FRAME_TYPES.RESUME,
    });
  }

  _isTerminated() {
    return this._status.kind === 'CLOSED' || this._status.kind === 'ERROR';
  }

  _setConnectionStatus(status) {
    if (status.kind === this._status.kind) {
      return;
    }
    this._status = status;
    this._statusSubscribers.forEach(subscriber => subscriber.onNext(status));
  }

  _receiveFrame(frame) {
    if ((0, _RSocketFrame.isResumePositionFrameType)(frame.type)) {
      this._position.server++;
    }
    // TODO: trim _sentFrames on KEEPALIVE frame
    this._receivers.forEach(subscriber => subscriber.onNext(frame));
  }

  _flushFrames() {
    // Writes all pending frames to the transport so long as a connection is available
    while (this._pendingFrames.length && this._currentConnection) {
      this._writeFrame(this._pendingFrames.shift());
    }
  }

  _writeFrame(frame) {
    // Ensure that SETUP frames contain the resume token
    if (frame.type === _RSocketFrame.FRAME_TYPES.SETUP) {
      (0, _invariant2.default)(
        frame.majorVersion > 1 ||
          (frame.majorVersion === 1 && frame.minorVersion > 0),
        'RSocketResumableTransport: Unsupported protocol version %s.%s. ' +
          'This class implements the v1.1 resumption protocol.',
        frame.majorVersion,
        frame.minorVersion
      );

      frame = Object.assign({}, frame, {
        flags: frame.flags | _RSocketFrame.FLAGS.RESUME_ENABLE, // eslint-disable-line no-bitwise
        resumeToken: this._resumeToken,
      });

      this._setupFrame = frame; // frame can only be a SetupFrame
    }
    // If connected, immediately write frames to the low-level transport
    // and consider them "sent". The resumption protocol will figure out
    // which frames may not have been received and recover.
    const currentConnection = this._currentConnection;
    if (currentConnection) {
      if ((0, _RSocketFrame.isResumePositionFrameType)(frame.type)) {
        this._sentFrames.push(frame);
        if (this._sentFrames.length > this._bufferSize) {
          // Buffer overflows are acceptable here, since the
          // assumption is that most frames will reach the server
          this._sentFrames.shift();
          this._position.client++;
        }
      }
      currentConnection.sendOne(frame);
    } else if (this._bufferSize > 0) {
      // Otherwise buffer pending frames. This allows an application
      // to continue interacting with a ReactiveSocket during momentary
      // losses of connection.
      (0, _invariant2.default)(
        this._pendingFrames.length < this._bufferSize,
        'RSocketResumableTransport: Buffer size of `%s` exceeded.',
        this._bufferSize
      );

      this._pendingFrames.push(frame);
    } else {
      (0, _invariant2.default)(
        false,
        'RSocketResumableTransport: Cannot sent frames while disconnected; ' +
          'buffering is disabled (bufferSize === 0).'
      );
    }
  }
}
exports.default = RSocketResumableTransport;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Netifi Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeferredConnectingRSocket = exports.ProteusClient = exports.UnwrappingRSocket = exports.RequestHandlingRSocket = undefined;

var _RequestHandlingRSocket = __webpack_require__(42);

var _RequestHandlingRSocket2 = _interopRequireDefault(_RequestHandlingRSocket);

var _UnwrappingRSocket = __webpack_require__(52);

var _UnwrappingRSocket2 = _interopRequireDefault(_UnwrappingRSocket);

var _ProteusClient = __webpack_require__(53);

var _ProteusClient2 = _interopRequireDefault(_ProteusClient);

var _DeferredConnectingRSocket = __webpack_require__(54);

var _DeferredConnectingRSocket2 = _interopRequireDefault(_DeferredConnectingRSocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The public API of the `core` package.
 */
exports.RequestHandlingRSocket = _RequestHandlingRSocket2.default;
exports.UnwrappingRSocket = _UnwrappingRSocket2.default;
exports.ProteusClient = _ProteusClient2.default;
exports.DeferredConnectingRSocket = _DeferredConnectingRSocket2.default;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rsocketFlowable = __webpack_require__(0);

var _proteusJsFrames = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2017-present, Netifi Inc.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *       http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           *
                                                                                                                                                           * 
                                                                                                                                                           */

var RequestHandlingRSocket = function () {
  function RequestHandlingRSocket() {
    _classCallCheck(this, RequestHandlingRSocket);

    this._registeredServices = new Map();
  }

  RequestHandlingRSocket.prototype.addService = function addService(service, handler) {
    this._registeredServices.set(service, handler);
  };

  RequestHandlingRSocket.prototype.fireAndForget = function fireAndForget(payload) {
    if (payload.metadata == null) {
      throw new Error('metadata is empty');
    }

    var service = (0, _proteusJsFrames.getService)(payload.metadata);
    var handler = this._registeredServices.get(service);

    if (handler == null) {
      throw new Error('can not find service ' + service);
    }

    handler.fireAndForget(payload);
  };

  RequestHandlingRSocket.prototype.requestResponse = function requestResponse(payload) {
    try {
      if (payload.metadata == null) {
        return _rsocketFlowable.Single.error(new Error('metadata is empty'));
      }

      var service = (0, _proteusJsFrames.getService)(payload.metadata);
      var handler = this._registeredServices.get(service);

      if (handler == null) {
        return _rsocketFlowable.Single.error(new Error('can not find service ' + service));
      }

      return handler.requestResponse(payload);
    } catch (error) {
      return _rsocketFlowable.Single.error(error);
    }
  };

  RequestHandlingRSocket.prototype.requestStream = function requestStream(payload) {
    try {
      if (payload.metadata == null) {
        return _rsocketFlowable.Flowable.error(new Error('metadata is empty'));
      }

      var service = (0, _proteusJsFrames.getService)(payload.metadata);
      var handler = this._registeredServices.get(service);

      if (handler == null) {
        return _rsocketFlowable.Flowable.error(new Error('can not find service ' + service));
      }

      return handler.requestStream(payload);
    } catch (error) {
      return _rsocketFlowable.Flowable.error(error);
    }
  };

  RequestHandlingRSocket.prototype.requestChannel = function requestChannel(payloads) {
    return _rsocketFlowable.Flowable.error(new Error('requestChannel() is not implemented'));
  };

  RequestHandlingRSocket.prototype.metadataPush = function metadataPush(payload) {
    return _rsocketFlowable.Single.error(new Error('metadataPush() is not implemented'));
  };

  return RequestHandlingRSocket;
}();

exports.default = RequestHandlingRSocket;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Netifi Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */



/* eslint-disable consistent-return, no-bitwise */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodeFrame = encodeFrame;
exports.decodeFrame = decodeFrame;

var _ProteusFrame = __webpack_require__(4);

var _FrameHeaderFlyweight = __webpack_require__(6);

var _BrokerSetupFlyweight = __webpack_require__(45);

var _DestinationSetupFlyweight = __webpack_require__(46);

var _DestinationFlyweight = __webpack_require__(47);

var _GroupFlyweight = __webpack_require__(48);

var _BroadcastFlyweight = __webpack_require__(49);

var _ShardFlyweight = __webpack_require__(50);

var _invariant = __webpack_require__(1);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert the frame to a (binary) buffer.
 */
function encodeFrame(frame) {
  switch (frame.type) {
    case _ProteusFrame.FrameTypes.BROKER_SETUP:
      return (0, _BrokerSetupFlyweight.encodeBrokerSetupFrame)(frame);
    case _ProteusFrame.FrameTypes.DESTINATION_SETUP:
      return (0, _DestinationSetupFlyweight.encodeDestinationSetupFrame)(frame);
    case _ProteusFrame.FrameTypes.DESTINATION:
      return (0, _DestinationFlyweight.encodeDestinationFrame)(frame);
    case _ProteusFrame.FrameTypes.GROUP:
      return (0, _GroupFlyweight.encodeGroupFrame)(frame);
    case _ProteusFrame.FrameTypes.BROADCAST:
      return (0, _BroadcastFlyweight.encodeBroadcastFrame)(frame);
    case _ProteusFrame.FrameTypes.SHARD:
      return (0, _ShardFlyweight.encodeShardFrame)(frame);
    default:
      (0, _invariant2.default)(false, 'ProteusBinaryFraming: Unsupported frame type `%s`.', (0, _ProteusFrame.getFrameTypeName)(frame.type));
  }
}

/**
 * Read a frame from the buffer.
 */
function decodeFrame(buffer) {
  var majorVersion = (0, _FrameHeaderFlyweight.getMajorVersion)(buffer);
  var minorVersion = (0, _FrameHeaderFlyweight.getMinorVersion)(buffer);
  var type = (0, _FrameHeaderFlyweight.getFrameType)(buffer);

  switch (type) {
    case _ProteusFrame.FrameTypes.BROKER_SETUP:
      return (0, _BrokerSetupFlyweight.decodeBrokerSetupFrame)(buffer, majorVersion, minorVersion);
    case _ProteusFrame.FrameTypes.DESTINATION_SETUP:
      return (0, _DestinationSetupFlyweight.decodeDestinationSetupFrame)(buffer, majorVersion, minorVersion);
    case _ProteusFrame.FrameTypes.DESTINATION:
      return (0, _DestinationFlyweight.decodeDestinationFrame)(buffer, majorVersion, minorVersion);
    case _ProteusFrame.FrameTypes.GROUP:
      return (0, _GroupFlyweight.decodeGroupFrame)(buffer, majorVersion, minorVersion);
    case _ProteusFrame.FrameTypes.BROADCAST:
      return (0, _BroadcastFlyweight.decodeBroadcastFrame)(buffer, majorVersion, minorVersion);
    case _ProteusFrame.FrameTypes.SHARD:
      return (0, _ShardFlyweight.decodeShardFrame)(buffer, majorVersion, minorVersion);
    default:
      (0, _invariant2.default)(false, 'ProteusBinaryFraming: Unsupported frame type `%s`.', (0, _ProteusFrame.getFrameTypeName)(type));
  }
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Netifi Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */



/* eslint-disable consistent-return, no-bitwise */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodeBrokerSetupFrame = encodeBrokerSetupFrame;
exports.decodeBrokerSetupFrame = decodeBrokerSetupFrame;

var _ProteusFrame = __webpack_require__(4);

var _FrameHeaderFlyweight = __webpack_require__(6);

var _rsocketCore = __webpack_require__(2);

var _RSocketBufferUtils = __webpack_require__(9);

var BROKER_ID_LENGTH_SIZE = 4;
var CLUSTER_ID_LENGTH_SIZE = 4;
var ACCESS_KEY_SIZE = 8;
var ACCESS_TOKEN_LENGTH_SIZE = 4;

function encodeBrokerSetupFrame(frame) {
  var brokerIdLength = _rsocketCore.UTF8Encoder.byteLength(frame.brokerId);
  var clusterIdLength = _rsocketCore.UTF8Encoder.byteLength(frame.clusterId);
  var accessTokenLength = _rsocketCore.BufferEncoder.byteLength(frame.accessToken);

  var buffer = (0, _rsocketCore.createBuffer)(_FrameHeaderFlyweight.FRAME_HEADER_SIZE + BROKER_ID_LENGTH_SIZE + brokerIdLength + CLUSTER_ID_LENGTH_SIZE + clusterIdLength + ACCESS_KEY_SIZE + ACCESS_TOKEN_LENGTH_SIZE + accessTokenLength);

  var offset = (0, _FrameHeaderFlyweight.encodeFrameHeader)(buffer, frame);

  offset = buffer.writeUInt32BE(brokerIdLength, offset);
  offset = _rsocketCore.UTF8Encoder.encode(frame.brokerId, buffer, offset, offset + brokerIdLength);

  offset = buffer.writeUInt32BE(clusterIdLength, offset);
  offset = _rsocketCore.UTF8Encoder.encode(frame.clusterId, buffer, offset, offset + clusterIdLength);

  offset = (0, _RSocketBufferUtils.writeUInt64BE)(buffer, frame.accessKey, offset);
  offset = buffer.writeUInt32BE(accessTokenLength, offset);
  _rsocketCore.BufferEncoder.encode(frame.accessToken, buffer, offset, offset + accessTokenLength);

  return buffer;
}

function decodeBrokerSetupFrame(buffer, majorVersion, minorVersion) {
  var offset = _FrameHeaderFlyweight.FRAME_HEADER_SIZE;

  var brokerIdLength = buffer.readUInt32BE(offset);
  offset += BROKER_ID_LENGTH_SIZE;

  var brokerId = _rsocketCore.UTF8Encoder.decode(buffer, offset, offset + brokerIdLength);
  offset += brokerIdLength;

  var clusterIdLength = buffer.readUInt32BE(offset);
  offset += CLUSTER_ID_LENGTH_SIZE;

  var clusterId = _rsocketCore.UTF8Encoder.decode(buffer, offset, offset + clusterIdLength);
  offset += clusterIdLength;

  var accessKey = (0, _RSocketBufferUtils.readUInt64BE)(buffer, offset);
  offset += ACCESS_KEY_SIZE;

  var accessTokenLength = buffer.readUInt32BE(offset);
  offset += ACCESS_TOKEN_LENGTH_SIZE;

  var accessToken = _rsocketCore.BufferEncoder.decode(buffer, offset, offset + accessTokenLength);

  return {
    type: _ProteusFrame.FrameTypes.BROKER_SETUP,
    majorVersion: majorVersion,
    minorVersion: minorVersion,
    brokerId: brokerId,
    clusterId: clusterId,
    accessKey: accessKey,
    accessToken: accessToken
  };
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Netifi Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */



/* eslint-disable consistent-return, no-bitwise */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodeDestinationSetupFrame = encodeDestinationSetupFrame;
exports.decodeDestinationSetupFrame = decodeDestinationSetupFrame;

var _ProteusFrame = __webpack_require__(4);

var _FrameHeaderFlyweight = __webpack_require__(6);

var _rsocketCore = __webpack_require__(2);

var _RSocketBufferUtils = __webpack_require__(9);

var DESTINATION_LENGTH_SIZE = 4;
var GROUP_LENGTH_SIZE = 4;
var ACCESS_KEY_SIZE = 8;
var ACCESS_TOKEN_LENGTH_SIZE = 4;

function encodeDestinationSetupFrame(frame) {
  var destinationLength = _rsocketCore.UTF8Encoder.byteLength(frame.destination);
  var groupLength = _rsocketCore.UTF8Encoder.byteLength(frame.group);
  var accessTokenLength = _rsocketCore.BufferEncoder.byteLength(frame.accessToken);

  var buffer = (0, _rsocketCore.createBuffer)(_FrameHeaderFlyweight.FRAME_HEADER_SIZE + DESTINATION_LENGTH_SIZE + destinationLength + GROUP_LENGTH_SIZE + groupLength + ACCESS_KEY_SIZE + ACCESS_TOKEN_LENGTH_SIZE + accessTokenLength);

  var offset = (0, _FrameHeaderFlyweight.encodeFrameHeader)(buffer, frame);

  offset = buffer.writeUInt32BE(destinationLength, offset);
  offset = _rsocketCore.UTF8Encoder.encode(frame.destination, buffer, offset, offset + destinationLength);

  offset = buffer.writeUInt32BE(groupLength, offset);
  offset = _rsocketCore.UTF8Encoder.encode(frame.group, buffer, offset, offset + groupLength);

  offset = (0, _RSocketBufferUtils.writeUInt64BE)(buffer, frame.accessKey, offset);
  offset = buffer.writeUInt32BE(accessTokenLength, offset);
  _rsocketCore.BufferEncoder.encode(frame.accessToken, buffer, offset, offset + accessTokenLength);

  return buffer;
}

function decodeDestinationSetupFrame(buffer, majorVersion, minorVersion) {
  var offset = _FrameHeaderFlyweight.FRAME_HEADER_SIZE;

  var destinationLength = buffer.readUInt32BE(offset);
  offset += DESTINATION_LENGTH_SIZE;

  var destination = _rsocketCore.UTF8Encoder.decode(buffer, offset, offset + destinationLength);
  offset += destinationLength;

  var groupLength = buffer.readUInt32BE(offset);
  offset += GROUP_LENGTH_SIZE;

  var group = _rsocketCore.UTF8Encoder.decode(buffer, offset, offset + groupLength);
  offset += groupLength;

  var accessKey = (0, _RSocketBufferUtils.readUInt64BE)(buffer, offset);
  offset += ACCESS_KEY_SIZE;

  var accessTokenLength = buffer.readUInt32BE(offset);
  offset += ACCESS_TOKEN_LENGTH_SIZE;

  var accessToken = _rsocketCore.BufferEncoder.decode(buffer, offset, offset + accessTokenLength);

  return {
    type: _ProteusFrame.FrameTypes.DESTINATION_SETUP,
    majorVersion: majorVersion,
    minorVersion: minorVersion,
    destination: destination,
    group: group,
    accessKey: accessKey,
    accessToken: accessToken
  };
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Netifi Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */



/* eslint-disable consistent-return, no-bitwise */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodeDestinationFrame = encodeDestinationFrame;
exports.decodeDestinationFrame = decodeDestinationFrame;

var _ProteusFrame = __webpack_require__(4);

var _FrameHeaderFlyweight = __webpack_require__(6);

var _rsocketCore = __webpack_require__(2);

var FROM_DESTINATION_LENGTH_SIZE = 4;
var FROM_GROUP_LENGTH_SIZE = 4;
var TO_DESTINATION_LENGTH_SIZE = 4;
var TO_GROUP_LENGTH_SIZE = 4;

function encodeDestinationFrame(frame) {
  var fromDestinationLength = _rsocketCore.UTF8Encoder.byteLength(frame.fromDestination);
  var fromGroupLength = _rsocketCore.UTF8Encoder.byteLength(frame.fromGroup);
  var toDestinationLength = _rsocketCore.UTF8Encoder.byteLength(frame.toDestination);
  var toGroupLength = _rsocketCore.UTF8Encoder.byteLength(frame.toGroup);
  var metadataLength = _rsocketCore.BufferEncoder.byteLength(frame.metadata);

  var buffer = (0, _rsocketCore.createBuffer)(_FrameHeaderFlyweight.FRAME_HEADER_SIZE + FROM_DESTINATION_LENGTH_SIZE + fromDestinationLength + FROM_GROUP_LENGTH_SIZE + fromGroupLength + TO_DESTINATION_LENGTH_SIZE + toDestinationLength + TO_GROUP_LENGTH_SIZE + toGroupLength + metadataLength);

  var offset = (0, _FrameHeaderFlyweight.encodeFrameHeader)(buffer, frame);

  offset = buffer.writeUInt32BE(fromDestinationLength, offset);
  offset = _rsocketCore.UTF8Encoder.encode(frame.fromDestination, buffer, offset, offset + fromDestinationLength);

  offset = buffer.writeUInt32BE(fromGroupLength, offset);
  offset = _rsocketCore.UTF8Encoder.encode(frame.fromGroup, buffer, offset, offset + fromGroupLength);

  offset = buffer.writeUInt32BE(toDestinationLength, offset);
  offset = _rsocketCore.UTF8Encoder.encode(frame.toDestination, buffer, offset, offset + toDestinationLength);

  offset = buffer.writeUInt32BE(toGroupLength, offset);
  offset = _rsocketCore.UTF8Encoder.encode(frame.toGroup, buffer, offset, offset + toGroupLength);

  _rsocketCore.BufferEncoder.encode(frame.metadata, buffer, offset, offset + metadataLength);

  return buffer;
}

function decodeDestinationFrame(buffer, majorVersion, minorVersion) {
  var offset = _FrameHeaderFlyweight.FRAME_HEADER_SIZE;

  var fromDestinationLength = buffer.readUInt32BE(offset);
  offset += FROM_DESTINATION_LENGTH_SIZE;

  var fromDestination = _rsocketCore.UTF8Encoder.decode(buffer, offset, offset + fromDestinationLength);
  offset += fromDestinationLength;

  var fromGroupLength = buffer.readUInt32BE(offset);
  offset += FROM_GROUP_LENGTH_SIZE;

  var fromGroup = _rsocketCore.UTF8Encoder.decode(buffer, offset, offset + fromGroupLength);
  offset += fromGroupLength;

  var toDestinationLength = buffer.readUInt32BE(offset);
  offset += TO_DESTINATION_LENGTH_SIZE;

  var toDestination = _rsocketCore.UTF8Encoder.decode(buffer, offset, offset + toDestinationLength);
  offset += toDestinationLength;

  var toGroupLength = buffer.readUInt32BE(offset);
  offset += TO_GROUP_LENGTH_SIZE;

  var toGroup = _rsocketCore.UTF8Encoder.decode(buffer, offset, offset + toGroupLength);
  offset += toGroupLength;

  var metadata = _rsocketCore.BufferEncoder.decode(buffer, offset, buffer.length);

  return {
    type: _ProteusFrame.FrameTypes.DESTINATION,
    majorVersion: majorVersion,
    minorVersion: minorVersion,
    fromDestination: fromDestination,
    fromGroup: fromGroup,
    toDestination: toDestination,
    toGroup: toGroup,
    metadata: metadata
  };
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Netifi Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */



/* eslint-disable consistent-return, no-bitwise */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodeGroupFrame = encodeGroupFrame;
exports.decodeGroupFrame = decodeGroupFrame;

var _ProteusFrame = __webpack_require__(4);

var _FrameHeaderFlyweight = __webpack_require__(6);

var _rsocketCore = __webpack_require__(2);

var FROM_DESTINATION_LENGTH_SIZE = 4;
var FROM_GROUP_LENGTH_SIZE = 4;
var TO_GROUP_LENGTH_SIZE = 4;

function encodeGroupFrame(frame) {
  var fromDestinationLength = _rsocketCore.UTF8Encoder.byteLength(frame.fromDestination);
  var fromGroupLength = _rsocketCore.UTF8Encoder.byteLength(frame.fromGroup);
  var toGroupLength = _rsocketCore.UTF8Encoder.byteLength(frame.toGroup);
  var metadataLength = _rsocketCore.BufferEncoder.byteLength(frame.metadata);

  var buffer = (0, _rsocketCore.createBuffer)(_FrameHeaderFlyweight.FRAME_HEADER_SIZE + FROM_DESTINATION_LENGTH_SIZE + fromDestinationLength + FROM_GROUP_LENGTH_SIZE + fromGroupLength + TO_GROUP_LENGTH_SIZE + toGroupLength + metadataLength);

  var offset = (0, _FrameHeaderFlyweight.encodeFrameHeader)(buffer, frame);

  offset = buffer.writeUInt32BE(fromDestinationLength, offset);
  offset = _rsocketCore.UTF8Encoder.encode(frame.fromDestination, buffer, offset, offset + fromDestinationLength);

  offset = buffer.writeUInt32BE(fromGroupLength, offset);
  offset = _rsocketCore.UTF8Encoder.encode(frame.fromGroup, buffer, offset, offset + fromGroupLength);

  offset = buffer.writeUInt32BE(toGroupLength, offset);
  offset = _rsocketCore.UTF8Encoder.encode(frame.toGroup, buffer, offset, offset + toGroupLength);

  _rsocketCore.BufferEncoder.encode(frame.metadata, buffer, offset, offset + metadataLength);

  return buffer;
}

function decodeGroupFrame(buffer, majorVersion, minorVersion) {
  var offset = _FrameHeaderFlyweight.FRAME_HEADER_SIZE;

  var fromDestinationLength = buffer.readUInt32BE(offset);
  offset += FROM_DESTINATION_LENGTH_SIZE;

  var fromDestination = _rsocketCore.UTF8Encoder.decode(buffer, offset, offset + fromDestinationLength);
  offset += fromDestinationLength;

  var fromGroupLength = buffer.readUInt32BE(offset);
  offset += FROM_GROUP_LENGTH_SIZE;

  var fromGroup = _rsocketCore.UTF8Encoder.decode(buffer, offset, offset + fromGroupLength);
  offset += fromGroupLength;

  var toGroupLength = buffer.readUInt32BE(offset);
  offset += TO_GROUP_LENGTH_SIZE;

  var toGroup = _rsocketCore.UTF8Encoder.decode(buffer, offset, offset + toGroupLength);
  offset += toGroupLength;

  var metadata = _rsocketCore.BufferEncoder.decode(buffer, offset, buffer.length);

  return {
    type: _ProteusFrame.FrameTypes.GROUP,
    majorVersion: majorVersion,
    minorVersion: minorVersion,
    fromDestination: fromDestination,
    fromGroup: fromGroup,
    toGroup: toGroup,
    metadata: metadata
  };
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Netifi Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */



/* eslint-disable consistent-return, no-bitwise */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodeBroadcastFrame = encodeBroadcastFrame;
exports.decodeBroadcastFrame = decodeBroadcastFrame;

var _ProteusFrame = __webpack_require__(4);

var _FrameHeaderFlyweight = __webpack_require__(6);

var _rsocketCore = __webpack_require__(2);

var FROM_DESTINATION_LENGTH_SIZE = 4;
var FROM_GROUP_LENGTH_SIZE = 4;
var TO_GROUP_LENGTH_SIZE = 4;

function encodeBroadcastFrame(frame) {
  var fromDestinationLength = _rsocketCore.UTF8Encoder.byteLength(frame.fromDestination);
  var fromGroupLength = _rsocketCore.UTF8Encoder.byteLength(frame.fromGroup);
  var toGroupLength = _rsocketCore.UTF8Encoder.byteLength(frame.toGroup);
  var metadataLength = _rsocketCore.BufferEncoder.byteLength(frame.metadata);

  var buffer = (0, _rsocketCore.createBuffer)(_FrameHeaderFlyweight.FRAME_HEADER_SIZE + FROM_DESTINATION_LENGTH_SIZE + fromDestinationLength + FROM_GROUP_LENGTH_SIZE + fromGroupLength + TO_GROUP_LENGTH_SIZE + toGroupLength + metadataLength);

  var offset = (0, _FrameHeaderFlyweight.encodeFrameHeader)(buffer, frame);

  offset = buffer.writeUInt32BE(fromDestinationLength, offset);
  offset = _rsocketCore.UTF8Encoder.encode(frame.fromDestination, buffer, offset, offset + fromDestinationLength);

  offset = buffer.writeUInt32BE(fromGroupLength, offset);
  offset = _rsocketCore.UTF8Encoder.encode(frame.fromGroup, buffer, offset, offset + fromGroupLength);

  offset = buffer.writeUInt32BE(toGroupLength, offset);
  offset = _rsocketCore.UTF8Encoder.encode(frame.toGroup, buffer, offset, offset + toGroupLength);

  _rsocketCore.BufferEncoder.encode(frame.metadata, buffer, offset, offset + metadataLength);

  return buffer;
}

function decodeBroadcastFrame(buffer, majorVersion, minorVersion) {
  var offset = _FrameHeaderFlyweight.FRAME_HEADER_SIZE;

  var fromDestinationLength = buffer.readUInt32BE(offset);
  offset += FROM_DESTINATION_LENGTH_SIZE;

  var fromDestination = _rsocketCore.UTF8Encoder.decode(buffer, offset, offset + fromDestinationLength);
  offset += fromDestinationLength;

  var fromGroupLength = buffer.readUInt32BE(offset);
  offset += FROM_GROUP_LENGTH_SIZE;

  var fromGroup = _rsocketCore.UTF8Encoder.decode(buffer, offset, offset + fromGroupLength);
  offset += fromGroupLength;

  var toGroupLength = buffer.readUInt32BE(offset);
  offset += TO_GROUP_LENGTH_SIZE;

  var toGroup = _rsocketCore.UTF8Encoder.decode(buffer, offset, offset + toGroupLength);
  offset += toGroupLength;

  var metadata = _rsocketCore.BufferEncoder.decode(buffer, offset, buffer.length);

  return {
    type: _ProteusFrame.FrameTypes.BROADCAST,
    majorVersion: majorVersion,
    minorVersion: minorVersion,
    fromDestination: fromDestination,
    fromGroup: fromGroup,
    toGroup: toGroup,
    metadata: metadata
  };
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Netifi Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */



/* eslint-disable consistent-return, no-bitwise */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodeShardFrame = encodeShardFrame;
exports.decodeShardFrame = decodeShardFrame;

var _ProteusFrame = __webpack_require__(4);

var _FrameHeaderFlyweight = __webpack_require__(6);

var _rsocketCore = __webpack_require__(2);

var FROM_DESTINATION_LENGTH_SIZE = 4;
var FROM_GROUP_LENGTH_SIZE = 4;
var TO_GROUP_LENGTH_SIZE = 4;
var SHARD_KEY_LENGTH_SIZE = 4;

function encodeShardFrame(frame) {
  var fromDestinationLength = _rsocketCore.UTF8Encoder.byteLength(frame.fromDestination);
  var fromGroupLength = _rsocketCore.UTF8Encoder.byteLength(frame.fromGroup);
  var toGroupLength = _rsocketCore.UTF8Encoder.byteLength(frame.toGroup);
  var shardKeyLength = _rsocketCore.BufferEncoder.byteLength(frame.shardKey);
  var metadataLength = _rsocketCore.BufferEncoder.byteLength(frame.metadata);

  var buffer = (0, _rsocketCore.createBuffer)(_FrameHeaderFlyweight.FRAME_HEADER_SIZE + FROM_DESTINATION_LENGTH_SIZE + fromDestinationLength + FROM_GROUP_LENGTH_SIZE + fromGroupLength + TO_GROUP_LENGTH_SIZE + toGroupLength + SHARD_KEY_LENGTH_SIZE + shardKeyLength + metadataLength);

  var offset = (0, _FrameHeaderFlyweight.encodeFrameHeader)(buffer, frame);

  offset = buffer.writeUInt32BE(fromDestinationLength, offset);
  offset = _rsocketCore.UTF8Encoder.encode(frame.fromDestination, buffer, offset, offset + fromDestinationLength);

  offset = buffer.writeUInt32BE(fromGroupLength, offset);
  offset = _rsocketCore.UTF8Encoder.encode(frame.fromGroup, buffer, offset, offset + fromGroupLength);

  offset = buffer.writeUInt32BE(toGroupLength, offset);
  offset = _rsocketCore.UTF8Encoder.encode(frame.toGroup, buffer, offset, offset + toGroupLength);

  offset = buffer.writeUInt32BE(shardKeyLength, offset);
  offset = _rsocketCore.BufferEncoder.encode(frame.shardKey, buffer, offset, offset + shardKeyLength);

  _rsocketCore.BufferEncoder.encode(frame.metadata, buffer, offset, offset + metadataLength);

  return buffer;
}

function decodeShardFrame(buffer, majorVersion, minorVersion) {
  var offset = _FrameHeaderFlyweight.FRAME_HEADER_SIZE;

  var fromDestinationLength = buffer.readUInt32BE(offset);
  offset += FROM_DESTINATION_LENGTH_SIZE;

  var fromDestination = _rsocketCore.UTF8Encoder.decode(buffer, offset, offset + fromDestinationLength);
  offset += fromDestinationLength;

  var fromGroupLength = buffer.readUInt32BE(offset);
  offset += FROM_GROUP_LENGTH_SIZE;

  var fromGroup = _rsocketCore.UTF8Encoder.decode(buffer, offset, offset + fromGroupLength);
  offset += fromGroupLength;

  var toGroupLength = buffer.readUInt32BE(offset);
  offset += TO_GROUP_LENGTH_SIZE;

  var toGroup = _rsocketCore.UTF8Encoder.decode(buffer, offset, offset + toGroupLength);
  offset += toGroupLength;

  var shardKeyLength = buffer.readUInt32BE(offset);
  offset += SHARD_KEY_LENGTH_SIZE;

  var shardKey = _rsocketCore.BufferEncoder.decode(buffer, offset, offset + shardKeyLength);
  offset += shardKeyLength;

  var metadata = _rsocketCore.BufferEncoder.decode(buffer, offset, buffer.length);

  return {
    type: _ProteusFrame.FrameTypes.SHARD,
    majorVersion: majorVersion,
    minorVersion: minorVersion,
    fromDestination: fromDestination,
    fromGroup: fromGroup,
    toGroup: toGroup,
    shardKey: shardKey,
    metadata: metadata
  };
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Netifi Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */



/* eslint-disable consistent-return, no-bitwise */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.METHOD_LENGTH_SIZE = exports.SERVICE_LENGTH_SIZE = exports.VERSION_SIZE = exports.VERSION = undefined;
exports.encodeProteusMetadata = encodeProteusMetadata;
exports.getVersion = getVersion;
exports.getService = getService;
exports.getMethod = getMethod;
exports.getMetadata = getMetadata;

var _rsocketCore = __webpack_require__(2);

/**
 * Version
 */
var VERSION = exports.VERSION = 1;

var VERSION_SIZE = exports.VERSION_SIZE = 2;
var SERVICE_LENGTH_SIZE = exports.SERVICE_LENGTH_SIZE = 2;
var METHOD_LENGTH_SIZE = exports.METHOD_LENGTH_SIZE = 2;

function encodeProteusMetadata(service, method, metadata) {
  var serviceLength = _rsocketCore.UTF8Encoder.byteLength(service);
  var methodLength = _rsocketCore.UTF8Encoder.byteLength(method);
  var metadataLength = _rsocketCore.BufferEncoder.byteLength(metadata);

  var buffer = (0, _rsocketCore.createBuffer)(VERSION_SIZE + SERVICE_LENGTH_SIZE + serviceLength + METHOD_LENGTH_SIZE + methodLength + metadataLength);

  var offset = buffer.writeUInt16BE(VERSION, 0);

  offset = buffer.writeUInt16BE(serviceLength, offset);
  offset = _rsocketCore.UTF8Encoder.encode(service, buffer, offset, offset + serviceLength);

  offset = buffer.writeUInt16BE(methodLength, offset);
  offset = _rsocketCore.UTF8Encoder.encode(method, buffer, offset, offset + methodLength);

  _rsocketCore.BufferEncoder.encode(metadata, buffer, offset, offset + metadataLength);

  return buffer;
}

function getVersion(buffer) {
  return buffer.readUInt16BE(0);
}

function getService(buffer) {
  var offset = VERSION_SIZE;

  var serviceLength = buffer.readUInt16BE(offset);
  offset += SERVICE_LENGTH_SIZE;

  return _rsocketCore.UTF8Encoder.decode(buffer, offset, offset + serviceLength);
}

function getMethod(buffer) {
  var offset = VERSION_SIZE;

  var serviceLength = buffer.readUInt16BE(offset);
  offset += SERVICE_LENGTH_SIZE + serviceLength;

  var methodLength = buffer.readUInt16BE(offset);
  offset += METHOD_LENGTH_SIZE;

  return _rsocketCore.UTF8Encoder.decode(buffer, offset, offset + methodLength);
}

function getMetadata(buffer) {
  var offset = VERSION_SIZE;

  var serviceLength = buffer.readUInt16BE(offset);
  offset += SERVICE_LENGTH_SIZE + serviceLength;

  var methodLength = buffer.readUInt16BE(offset);
  offset += METHOD_LENGTH_SIZE + methodLength;

  return _rsocketCore.BufferEncoder.decode(buffer, offset, buffer.length);
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rsocketFlowable = __webpack_require__(0);

var _proteusJsFrames = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2017-present, Netifi Inc.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *       http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           *
                                                                                                                                                           * 
                                                                                                                                                           */

var UnwrappingRSocket = function () {
  function UnwrappingRSocket(source) {
    _classCallCheck(this, UnwrappingRSocket);

    this._source = source;
  }

  UnwrappingRSocket.prototype._unwrap = function _unwrap(payload) {
    if (payload.metadata == null) {
      throw new Error('metadata is empty');
    }

    var frame = (0, _proteusJsFrames.decodeFrame)(payload.metadata);
    switch (frame.type) {
      case _proteusJsFrames.FrameTypes.DESTINATION:
      case _proteusJsFrames.FrameTypes.GROUP:
      case _proteusJsFrames.FrameTypes.BROADCAST:
      case _proteusJsFrames.FrameTypes.SHARD:
        return {
          metadata: frame.metadata,
          data: payload.data
        };

      default:
        throw new Error('unknown frame type ' + (0, _proteusJsFrames.getFrameTypeName)(frame.type));
    }
  };

  UnwrappingRSocket.prototype.fireAndForget = function fireAndForget(payload) {
    this._source.fireAndForget(this._unwrap(payload));
  };

  UnwrappingRSocket.prototype.requestResponse = function requestResponse(payload) {
    try {
      return this._source.requestResponse(this._unwrap(payload));
    } catch (error) {
      return _rsocketFlowable.Single.error(error);
    }
  };

  UnwrappingRSocket.prototype.requestStream = function requestStream(payload) {
    try {
      return this._source.requestStream(this._unwrap(payload));
    } catch (error) {
      return _rsocketFlowable.Flowable.error(error);
    }
  };

  UnwrappingRSocket.prototype.requestChannel = function requestChannel(payloads) {
    var _this = this;

    return this._source.requestChannel(payloads.map(function (payload) {
      return _this._unwrap(payload);
    }));
  };

  UnwrappingRSocket.prototype.metadataPush = function metadataPush(payload) {
    try {
      return this._source.metadataPush(this._unwrap(payload));
    } catch (error) {
      return _rsocketFlowable.Single.error(error);
    }
  };

  return UnwrappingRSocket;
}();

exports.default = UnwrappingRSocket;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Netifi Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rsocketFlowable = __webpack_require__(0);

var _invariant = __webpack_require__(1);

var _invariant2 = _interopRequireDefault(_invariant);

var _rsocketCore = __webpack_require__(2);

var _RSocketVersion = __webpack_require__(23);

var _RSocketMachine = __webpack_require__(15);

var _proteusJsFrames = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProteusClient = function () {
  function ProteusClient(config) {
    _classCallCheck(this, ProteusClient);

    this._config = config;
    this._connection = null;
  }

  ProteusClient.prototype.group = function group() {
    return this._config.setup.group;
  };

  ProteusClient.prototype.destination = function destination() {
    return this._config.setup.destination;
  };

  ProteusClient.prototype.close = function close() {
    this._config.transport.close();
  };

  ProteusClient.prototype.connect = function connect() {
    var _this = this;

    (0, _invariant2.default)(!this._connection, 'ProteusClient: Unexpected call to connect(), already connected.');
    this._connection = new _rsocketFlowable.Single(function (subscriber) {
      var transport = _this._config.transport;
      var subscription = void 0;
      transport.connectionStatus().subscribe({
        onNext: function onNext(status) {
          if (status.kind === 'CONNECTED') {
            subscription && subscription.cancel();
            subscriber.onComplete(new ProteusSocket(_this._config, transport));
          } else if (status.kind === 'ERROR') {
            subscription && subscription.cancel();
            subscriber.onError(status.error);
          } else if (status.kind === 'CLOSED') {
            subscription && subscription.cancel();
            subscriber.onError(new Error('ProteusClient: Connection closed.'));
          }
        },
        onSubscribe: function onSubscribe(_subscription) {
          subscriber.onSubscribe(function () {
            return _subscription.cancel();
          });
          subscription = _subscription;
          subscription.request(Number.MAX_SAFE_INTEGER);
        }
      });
      transport.connect();
    });
    return this._connection;
  };

  return ProteusClient;
}();

/**
 * @private
 */


exports.default = ProteusClient;

var ProteusSocket = function () {
  function ProteusSocket(config, connection) {
    _classCallCheck(this, ProteusSocket);

    this._machine = (0, _RSocketMachine.createClientMachine)(connection, function (subscriber) {
      return connection.receive().subscribe(subscriber);
    }, config.serializers, config.responder);

    // Send SETUP
    connection.sendOne(this._buildSetupFrame(config));

    // Send KEEPALIVE frames
    var keepAlive = config.setup.keepAlive;

    var keepAliveFrames = (0, _rsocketFlowable.every)(keepAlive).map(function () {
      return {
        data: null,
        flags: _rsocketCore.FLAGS.RESPOND,
        lastReceivedPosition: 0,
        streamId: _rsocketCore.CONNECTION_STREAM_ID,
        type: _rsocketCore.FRAME_TYPES.KEEPALIVE
      };
    });
    connection.send(keepAliveFrames);
  }

  ProteusSocket.prototype.fireAndForget = function fireAndForget(payload) {
    this._machine.fireAndForget(payload);
  };

  ProteusSocket.prototype.requestResponse = function requestResponse(payload) {
    return this._machine.requestResponse(payload);
  };

  ProteusSocket.prototype.requestStream = function requestStream(payload) {
    return this._machine.requestStream(payload);
  };

  ProteusSocket.prototype.requestChannel = function requestChannel(payloads) {
    return this._machine.requestChannel(payloads);
  };

  ProteusSocket.prototype.metadataPush = function metadataPush(payload) {
    return this._machine.metadataPush(payload);
  };

  ProteusSocket.prototype.close = function close() {
    this._machine.close();
  };

  ProteusSocket.prototype.connectionStatus = function connectionStatus() {
    return this._machine.connectionStatus();
  };

  ProteusSocket.prototype._buildSetupFrame = function _buildSetupFrame(config) {
    var _config$setup = config.setup,
        group = _config$setup.group,
        destination = _config$setup.destination,
        keepAlive = _config$setup.keepAlive,
        lifetime = _config$setup.lifetime,
        accessKey = _config$setup.accessKey,
        accessToken = _config$setup.accessToken;

    var metadata = (0, _proteusJsFrames.encodeFrame)({
      type: _proteusJsFrames.FrameTypes.DESTINATION_SETUP,
      majorVersion: null,
      minorVersion: null,
      destination: destination,
      group: group,
      accessKey: accessKey,
      accessToken: accessToken
    });
    return {
      flags: _rsocketCore.FLAGS.METADATA,
      keepAlive: keepAlive,
      lifetime: lifetime,
      majorVersion: _RSocketVersion.MAJOR_VERSION,
      minorVersion: _RSocketVersion.MINOR_VERSION,
      metadataMimeType: 'application/binary',
      metadata: metadata,
      dataMimeType: 'application/binary',
      data: undefined,
      resumeToken: null,
      streamId: _rsocketCore.CONNECTION_STREAM_ID,
      type: _rsocketCore.FRAME_TYPES.SETUP
    };
  };

  return ProteusSocket;
}();

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rsocketFlowable = __webpack_require__(0);

var _proteusJsFrames = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2017-present, Netifi Inc.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *       http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           *
                                                                                                                                                           * 
                                                                                                                                                           */

var DeferredConnectingRSocket = function () {
  function DeferredConnectingRSocket(transformer, connect) {
    _classCallCheck(this, DeferredConnectingRSocket);

    this._transformer = transformer;
    this._connect = connect;
  }
  // _error: Error;
  // _connected: boolean;
  // _connecting: Single<ReactiveSocket<Buffer, Buffer>>;
  // _connection: ReactiveSocket<Buffer, Buffer>;


  DeferredConnectingRSocket.broadcast = function broadcast(fromGroup, fromDestination, toGroup, connect) {
    return new DeferredConnectingRSocket(function (payload) {
      var metadata = (0, _proteusJsFrames.encodeFrame)({
        type: _proteusJsFrames.FrameTypes.BROADCAST,
        majorVersion: null,
        minorVersion: null,
        fromGroup: fromGroup,
        fromDestination: fromDestination,
        toGroup: toGroup,
        metadata: payload.metadata || Buffer.alloc(0)
      });
      return {
        data: payload.data,
        metadata: metadata
      };
    }, connect);
  };

  DeferredConnectingRSocket.group = function group(fromGroup, fromDestination, toGroup, connect) {
    return new DeferredConnectingRSocket(function (payload) {
      var metadata = (0, _proteusJsFrames.encodeFrame)({
        type: _proteusJsFrames.FrameTypes.GROUP,
        majorVersion: null,
        minorVersion: null,
        fromGroup: fromGroup,
        fromDestination: fromDestination,
        toGroup: toGroup,
        metadata: payload.metadata || Buffer.alloc(0)
      });
      return {
        data: payload.data,
        metadata: metadata
      };
    }, connect);
  };

  DeferredConnectingRSocket.destination = function destination(fromGroup, fromDestination, toGroup, toDestination, connect) {
    return new DeferredConnectingRSocket(function (payload) {
      var metadata = (0, _proteusJsFrames.encodeFrame)({
        type: _proteusJsFrames.FrameTypes.DESTINATION,
        majorVersion: null,
        minorVersion: null,
        fromGroup: fromGroup,
        fromDestination: fromDestination,
        toGroup: toGroup,
        toDestination: toDestination,
        metadata: payload.metadata || Buffer.alloc(0)
      });
      return {
        data: payload.data,
        metadata: metadata
      };
    }, connect);
  };

  DeferredConnectingRSocket.prototype.fireAndForget = function fireAndForget(payload) {
    var transformedPayload = this._transformer(payload);
    this._connect().subscribe({
      onComplete: function onComplete(connection) {
        return connection.fireAndForget(transformedPayload);
      }
    });
  };

  DeferredConnectingRSocket.prototype.requestResponse = function requestResponse(payload) {
    var _this = this;

    var self = this;
    return new _rsocketFlowable.Single(function (subscriber) {
      _this._connect().subscribe({
        onComplete: function onComplete(connection) {
          try {
            connection.requestResponse(self._transformer(payload)).subscribe(subscriber);
          } catch (error) {
            subscriber.onError(error);
          }
        },
        onError: function onError(error) {
          subscriber.onError(error);
        }
      });
    });
  };

  DeferredConnectingRSocket.prototype.requestStream = function requestStream(payload) {
    var _this2 = this;

    var self = this;
    return new _rsocketFlowable.Flowable(function (subscriber) {
      _this2._connect().subscribe({
        onComplete: function onComplete(connection) {
          try {
            connection.requestStream(self._transformer(payload)).subscribe(subscriber);
          } catch (error) {
            subscriber.onError(error);
          }
        },
        onError: function onError(error) {
          subscriber.onError(error);
        }
      });
    });
  };

  DeferredConnectingRSocket.prototype.requestChannel = function requestChannel(payloads) {
    var _this3 = this;

    var self = this;
    return new _rsocketFlowable.Flowable(function (subscriber) {
      _this3._connect().subscribe({
        onComplete: function onComplete(connection) {
          connection.requestChannel(payloads.map(function (payload) {
            return self._transformer(payload);
          })).subscribe(subscriber);
        },
        onError: function onError(error) {
          subscriber.onError(error);
        }
      });
    });
  };

  DeferredConnectingRSocket.prototype.metadataPush = function metadataPush(payload) {
    var _this4 = this;

    var self = this;
    return new _rsocketFlowable.Single(function (subscriber) {
      _this4._connect().subscribe({
        onComplete: function onComplete(connection) {
          try {
            connection.metadataPush(self._transformer(payload)).subscribe(subscriber);
          } catch (error) {
            subscriber.onError(error);
          }
        },
        onError: function onError(error) {
          subscriber.onError(error);
        }
      });
    });
  };

  DeferredConnectingRSocket.prototype.close = function close() {
    this._connect().subscribe({
      onComplete: function onComplete(connection) {
        connection.close();
      }
    });
  };

  DeferredConnectingRSocket.prototype.connectionStatus = function connectionStatus() {
    var _this5 = this;

    return new _rsocketFlowable.Flowable(function (subscriber) {
      _this5._connect().subscribe({
        onComplete: function onComplete(connection) {
          connection.connectionStatus().subscribe(subscriber);
        },
        onError: function onError(error) {
          subscriber.onError(error);
        }
      });
    });
  };

  return DeferredConnectingRSocket;
}();

// function establishConnection(
//   deferred: DeferredConnectingRSocket,
// ): Single<ReactiveSocket<Buffer, Buffer>> {
//   if (deferred._connected) {
//     return Single.of(deferred._connection);
//   } else if (deferred._error) {
//     return Single.error(deferred._error);
//   } else if (deferred._connecting) {
//     return deferred._connecting;
//   } else {
//     deferred._connecting = deferred._connect().flatMap(connection => {
//       deferred._connection = connection;
//       deferred._connected = true;
//       return Single.of(connection);
//     });
//     return deferred._connecting;
//   }
// }


exports.default = DeferredConnectingRSocket;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});

var _RSocketWebSocketClient = __webpack_require__(56);
var _RSocketWebSocketClient2 = _interopRequireDefault(_RSocketWebSocketClient);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
exports.default = _RSocketWebSocketClient2.default;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});

var _invariant = __webpack_require__(1);
var _invariant2 = _interopRequireDefault(_invariant);
var _rsocketFlowable = __webpack_require__(0);
var _rsocketCore = __webpack_require__(2);

var _rsocketTypes = __webpack_require__(10);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                            * A WebSocket transport client for use in browser environments.
                                                                                                                                            */
class RSocketWebSocketClient {
  constructor(options, encoders) {
    this._handleClosed = () => {
      this._close(
        new Error('RSocketWebSocketClient: Socket closed unexpectedly.')
      );
    };
    this._handleError = error => {
      this._close(error);
    };
    this._handleOpened = () => {
      this._setConnectionStatus(_rsocketTypes.CONNECTION_STATUS.CONNECTED);
    };
    this._handleMessage = message => {
      try {
        const frame = this._readFrame(message);
        this._receivers.forEach(subscriber => subscriber.onNext(frame));
      } catch (error) {
        this._handleError(error);
      }
    };
    this._encoders = encoders;
    this._options = options;
    this._receivers = new Set();
    this._senders = new Set();
    this._socket = null;
    this._status = _rsocketTypes.CONNECTION_STATUS.NOT_CONNECTED;
    this._statusSubscribers = new Set();
  }
  close() {
    this._close();
  }
  connect() {
    (0, _invariant2.default)(
      this._status.kind === 'NOT_CONNECTED',
      'RSocketWebSocketClient: Cannot connect(), a connection is already ' +
        'established.'
    );
    this._setConnectionStatus(_rsocketTypes.CONNECTION_STATUS.CONNECTING);
    const socket = (this._socket = new WebSocket(this._options.url));
    socket.binaryType = 'arraybuffer';
    socket.addEventListener('close', this._handleClosed);
    socket.addEventListener('error', this._handleClosed);
    socket.addEventListener('open', this._handleOpened);
    socket.addEventListener('message', this._handleMessage);
  }
  connectionStatus() {
    return new _rsocketFlowable.Flowable(subscriber => {
      subscriber.onSubscribe({
        cancel: () => {
          this._statusSubscribers.delete(subscriber);
        },
        request: () => {
          this._statusSubscribers.add(subscriber);
          subscriber.onNext(this._status);
        },
      });
    });
  }
  receive() {
    return new _rsocketFlowable.Flowable(subject => {
      subject.onSubscribe({
        cancel: () => {
          this._receivers.delete(subject);
        },
        request: () => {
          this._receivers.add(subject);
        },
      });
    });
  }
  sendOne(frame) {
    this._writeFrame(frame);
  }
  send(frames) {
    let subscription;
    frames.subscribe({
      onComplete: () => {
        subscription && this._senders.delete(subscription);
      },
      onError: error => {
        subscription && this._senders.delete(subscription);
        this._handleError(error);
      },
      onNext: frame => this._writeFrame(frame),
      onSubscribe: _subscription => {
        subscription = _subscription;
        this._senders.add(subscription);
        subscription.request(Number.MAX_SAFE_INTEGER);
      },
    });
  }
  _close(error) {
    if (this._status.kind === 'CLOSED' || this._status.kind === 'ERROR') {
      // already closed
      return;
    }
    const status = error
      ? {error, kind: 'ERROR'}
      : _rsocketTypes.CONNECTION_STATUS.CLOSED;
    this._setConnectionStatus(status);
    this._receivers.forEach(subscriber => {
      if (error) {
        subscriber.onError(error);
      } else {
        subscriber.onComplete();
      }
    });
    this._receivers.clear();
    this._senders.forEach(subscription => subscription.cancel());
    this._senders.clear();
    const socket = this._socket;
    if (socket) {
      socket.removeEventListener('close', this._handleClosed);
      socket.removeEventListener('error', this._handleClosed);
      socket.removeEventListener('open', this._handleOpened);
      socket.removeEventListener('message', this._handleMessage);
      socket.close();
      this._socket = null;
    }
  }
  _setConnectionStatus(status) {
    this._status = status;
    this._statusSubscribers.forEach(subscriber => subscriber.onNext(status));
  }
  _readFrame(message) {
    const buffer = (0, _rsocketCore.toBuffer)(message.data);
    const frame = this._options.lengthPrefixedFrames
      ? (0, _rsocketCore.deserializeFrameWithLength)(buffer, this._encoders)
      : (0, _rsocketCore.deserializeFrame)(buffer, this._encoders);
    if (false) {
      if (this._options.debug) {
        console.log((0, _rsocketCore.printFrame)(frame));
      }
    }
    return frame;
  }

  _writeFrame(frame) {
    try {
      if (false) {
        if (this._options.debug) {
          console.log((0, _rsocketCore.printFrame)(frame));
        }
      }
      const buffer = this._options.lengthPrefixedFrames
        ? (0, _rsocketCore.serializeFrameWithLength)(frame, this._encoders)
        : (0, _rsocketCore.serializeFrame)(frame, this._encoders);
      (0, _invariant2.default)(
        this._socket,
        'RSocketWebSocketClient: Cannot send frame, not connected.'
      );

      this._socket.send(buffer);
    } catch (error) {
      this._handleError(error);
    }
  }
}
exports.default = RSocketWebSocketClient;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {// GENERATED CODE -- DO NOT EDIT!



var proteus_js_frames = __webpack_require__(5);
var rsocket_flowable = __webpack_require__(0);
var proteus_broker_info_pb = __webpack_require__(12);
var google_protobuf_empty_pb = __webpack_require__(8);

var BrokerInfoServiceClient = function () {
  function BrokerInfoServiceClient(rs) {
    this._rs = rs;
  }
  BrokerInfoServiceClient.prototype.brokers = function brokers(message, metadata) {
    var dataBuf = Buffer.from(message.serializeBinary());
    var metadataBuf = proteus_js_frames.encodeProteusMetadata('io.netifi.proteus.broker.info.BrokerInfoService', 'Brokers', metadata);
    return this._rs.requestStream({
      data: dataBuf,
      metadata: metadataBuf
    }).map(function (payload) {
      if (payload.data == null) {
        throw new Error('data is null');
      }
      return proteus_broker_info_pb.Broker.deserializeBinary(payload.data);
    });
  };
  BrokerInfoServiceClient.prototype.groups = function groups(message, metadata) {
    var dataBuf = Buffer.from(message.serializeBinary());
    var metadataBuf = proteus_js_frames.encodeProteusMetadata('io.netifi.proteus.broker.info.BrokerInfoService', 'Groups', metadata);
    return this._rs.requestStream({
      data: dataBuf,
      metadata: metadataBuf
    }).map(function (payload) {
      if (payload.data == null) {
        throw new Error('data is null');
      }
      return proteus_broker_info_pb.Group.deserializeBinary(payload.data);
    });
  };
  BrokerInfoServiceClient.prototype.destinations = function destinations(message, metadata) {
    var dataBuf = Buffer.from(message.serializeBinary());
    var metadataBuf = proteus_js_frames.encodeProteusMetadata('io.netifi.proteus.broker.info.BrokerInfoService', 'Destinations', metadata);
    return this._rs.requestStream({
      data: dataBuf,
      metadata: metadataBuf
    }).map(function (payload) {
      if (payload.data == null) {
        throw new Error('data is null');
      }
      return proteus_broker_info_pb.Destination.deserializeBinary(payload.data);
    });
  };
  BrokerInfoServiceClient.prototype.destinationsByBrokerAndGroup = function destinationsByBrokerAndGroup(message, metadata) {
    var dataBuf = Buffer.from(message.serializeBinary());
    var metadataBuf = proteus_js_frames.encodeProteusMetadata('io.netifi.proteus.broker.info.BrokerInfoService', 'DestinationsByBrokerAndGroup', metadata);
    return this._rs.requestStream({
      data: dataBuf,
      metadata: metadataBuf
    }).map(function (payload) {
      if (payload.data == null) {
        throw new Error('data is null');
      }
      return proteus_broker_info_pb.Destination.deserializeBinary(payload.data);
    });
  };
  BrokerInfoServiceClient.prototype.destinationsByGroup = function destinationsByGroup(message, metadata) {
    var dataBuf = Buffer.from(message.serializeBinary());
    var metadataBuf = proteus_js_frames.encodeProteusMetadata('io.netifi.proteus.broker.info.BrokerInfoService', 'DestinationsByGroup', metadata);
    return this._rs.requestStream({
      data: dataBuf,
      metadata: metadataBuf
    }).map(function (payload) {
      if (payload.data == null) {
        throw new Error('data is null');
      }
      return proteus_broker_info_pb.Destination.deserializeBinary(payload.data);
    });
  };
  BrokerInfoServiceClient.prototype.brokersWithGroup = function brokersWithGroup(message, metadata) {
    var dataBuf = Buffer.from(message.serializeBinary());
    var metadataBuf = proteus_js_frames.encodeProteusMetadata('io.netifi.proteus.broker.info.BrokerInfoService', 'BrokersWithGroup', metadata);
    return this._rs.requestStream({
      data: dataBuf,
      metadata: metadataBuf
    }).map(function (payload) {
      if (payload.data == null) {
        throw new Error('data is null');
      }
      return proteus_broker_info_pb.Broker.deserializeBinary(payload.data);
    });
  };
  BrokerInfoServiceClient.prototype.brokerWithDestination = function brokerWithDestination(message, metadata) {
    var dataBuf = Buffer.from(message.serializeBinary());
    var metadataBuf = proteus_js_frames.encodeProteusMetadata('io.netifi.proteus.broker.info.BrokerInfoService', 'BrokerWithDestination', metadata);
    return this._rs.requestResponse({
      data: dataBuf,
      metadata: metadataBuf
    }).map(function (payload) {
      if (payload.data == null) {
        throw new Error('data is null');
      }
      return proteus_broker_info_pb.Broker.deserializeBinary(payload.data);
    });
  };
  BrokerInfoServiceClient.prototype.streamGroupEvents = function streamGroupEvents(message, metadata) {
    var dataBuf = Buffer.from(message.serializeBinary());
    var metadataBuf = proteus_js_frames.encodeProteusMetadata('io.netifi.proteus.broker.info.BrokerInfoService', 'streamGroupEvents', metadata);
    return this._rs.requestStream({
      data: dataBuf,
      metadata: metadataBuf
    }).map(function (payload) {
      if (payload.data == null) {
        throw new Error('data is null');
      }
      return proteus_broker_info_pb.Event.deserializeBinary(payload.data);
    });
  };
  BrokerInfoServiceClient.prototype.streamDestinationEvents = function streamDestinationEvents(message, metadata) {
    var dataBuf = Buffer.from(message.serializeBinary());
    var metadataBuf = proteus_js_frames.encodeProteusMetadata('io.netifi.proteus.broker.info.BrokerInfoService', 'streamDestinationEvents', metadata);
    return this._rs.requestStream({
      data: dataBuf,
      metadata: metadataBuf
    }).map(function (payload) {
      if (payload.data == null) {
        throw new Error('data is null');
      }
      return proteus_broker_info_pb.Event.deserializeBinary(payload.data);
    });
  };
  BrokerInfoServiceClient.prototype.streamBrokerEvents = function streamBrokerEvents(message, metadata) {
    var dataBuf = Buffer.from(message.serializeBinary());
    var metadataBuf = proteus_js_frames.encodeProteusMetadata('io.netifi.proteus.broker.info.BrokerInfoService', 'streamBrokerEvents', metadata);
    return this._rs.requestStream({
      data: dataBuf,
      metadata: metadataBuf
    }).map(function (payload) {
      if (payload.data == null) {
        throw new Error('data is null');
      }
      return proteus_broker_info_pb.Event.deserializeBinary(payload.data);
    });
  };
  return BrokerInfoServiceClient;
}();

exports.BrokerInfoServiceClient = BrokerInfoServiceClient;

var BrokerInfoServiceServer = function () {
  function BrokerInfoServiceServer(service) {
    this._service = service;
  }
  BrokerInfoServiceServer.prototype.fireAndForget = function fireAndForget(payload) {
    return rsocket_flowable.Single.error(new Error('fireAndForget() is not implemented'));
  };
  BrokerInfoServiceServer.prototype.requestResponse = function requestResponse(payload) {
    try {
      if (payload.metadata == null) {
        return rsocket_flowable.Single.error(new Error('metadata is empty'));
      }
      var method = proteus_js_frames.getMethod(payload.metadata);
      switch (method) {
        case 'BrokerWithDestination':
          return this._service.brokerWithDestination(proteus_broker_info_pb.Destination.deserializeBinary(payload.data), payload.metadata);
        default:
          return rsocket_flowable.Single.error(new Error('unknown method'));
      }
    } catch (error) {
      return rsocket_flowable.Single.error(error);
    }
  };
  BrokerInfoServiceServer.prototype.requestStream = function requestStream(payload) {
    try {
      if (payload.metadata == null) {
        return rsocket_flowable.Flowable.error(new Error('metadata is empty'));
      }
      var method = proteus_js_frames.getMethod(payload.metadata);
      switch (method) {
        case 'Brokers':
          return this._service.brokers(google_protobuf_empty_pb.Empty.deserializeBinary(payload.data), payload.metadata);
        case 'Groups':
          return this._service.groups(proteus_broker_info_pb.Broker.deserializeBinary(payload.data), payload.metadata);
        case 'Destinations':
          return this._service.destinations(proteus_broker_info_pb.Broker.deserializeBinary(payload.data), payload.metadata);
        case 'DestinationsByBrokerAndGroup':
          return this._service.destinationsByBrokerAndGroup(proteus_broker_info_pb.Group.deserializeBinary(payload.data), payload.metadata);
        case 'DestinationsByGroup':
          return this._service.destinationsByGroup(proteus_broker_info_pb.Group.deserializeBinary(payload.data), payload.metadata);
        case 'BrokersWithGroup':
          return this._service.brokersWithGroup(proteus_broker_info_pb.Group.deserializeBinary(payload.data), payload.metadata);
        case 'streamGroupEvents':
          return this._service.streamGroupEvents(proteus_broker_info_pb.Group.deserializeBinary(payload.data), payload.metadata);
        case 'streamDestinationEvents':
          return this._service.streamDestinationEvents(proteus_broker_info_pb.Destination.deserializeBinary(payload.data), payload.metadata);
        case 'streamBrokerEvents':
          return this._service.streamBrokerEvents(google_protobuf_empty_pb.Empty.deserializeBinary(payload.data), payload.metadata);
        default:
          return rsocket_flowable.Flowable.error(new Error('unknown method'));
      }
    } catch (error) {
      return rsocket_flowable.Flowable.error(error);
    }
  };
  BrokerInfoServiceServer.prototype.requestChannel = function requestChannel(payload) {
    return rsocket_flowable.Flowable.error(new Error('requestChannel() is not implemented'));
  };
  BrokerInfoServiceServer.prototype.metadataPush = function metadataPush(payload) {
    return rsocket_flowable.Single.error(new Error('metadataPush() is not implemented'));
  };
  return BrokerInfoServiceServer;
}();

exports.BrokerInfoServiceServer = BrokerInfoServiceServer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {// GENERATED CODE -- DO NOT EDIT!



var proteus_js_frames = __webpack_require__(5);
var rsocket_flowable = __webpack_require__(0);
var proteus_broker_mgmt_pb = __webpack_require__(59);
var google_protobuf_empty_pb = __webpack_require__(8);
var proteus_broker_info_pb = __webpack_require__(12);

var BrokerManagementServiceClient = function () {
  function BrokerManagementServiceClient(rs) {
    this._rs = rs;
  }
  // Shutdowns down a broker process
  BrokerManagementServiceClient.prototype.shutdown = function shutdown(message, metadata) {
    var dataBuf = Buffer.from(message.serializeBinary());
    var metadataBuf = proteus_js_frames.encodeProteusMetadata('io.netifi.proteus.broker.info.BrokerManagementService', 'shutdown', metadata);
    return this._rs.requestResponse({
      data: dataBuf,
      metadata: metadataBuf
    }).map(function (payload) {
      if (payload.data == null) {
        throw new Error('data is null');
      }
      return google_protobuf_empty_pb.Empty.deserializeBinary(payload.data);
    });
  };
  // Broker leaves the cluster, but stays running
  BrokerManagementServiceClient.prototype.leave = function leave(message, metadata) {
    var dataBuf = Buffer.from(message.serializeBinary());
    var metadataBuf = proteus_js_frames.encodeProteusMetadata('io.netifi.proteus.broker.info.BrokerManagementService', 'leave', metadata);
    return this._rs.requestResponse({
      data: dataBuf,
      metadata: metadataBuf
    }).map(function (payload) {
      if (payload.data == null) {
        throw new Error('data is null');
      }
      return proteus_broker_mgmt_pb.Ack.deserializeBinary(payload.data);
    });
  };
  // Rejoins the cluster it  has seed information for
  BrokerManagementServiceClient.prototype.rejoin = function rejoin(message, metadata) {
    var dataBuf = Buffer.from(message.serializeBinary());
    var metadataBuf = proteus_js_frames.encodeProteusMetadata('io.netifi.proteus.broker.info.BrokerManagementService', 'rejoin', metadata);
    return this._rs.requestResponse({
      data: dataBuf,
      metadata: metadataBuf
    }).map(function (payload) {
      if (payload.data == null) {
        throw new Error('data is null');
      }
      return proteus_broker_mgmt_pb.Ack.deserializeBinary(payload.data);
    });
  };
  // Tells the Broker to join using the provided Brokers
  BrokerManagementServiceClient.prototype.join = function join(message, metadata) {
    var dataBuf = Buffer.from(message.serializeBinary());
    var metadataBuf = proteus_js_frames.encodeProteusMetadata('io.netifi.proteus.broker.info.BrokerManagementService', 'join', metadata);
    return this._rs.requestResponse({
      data: dataBuf,
      metadata: metadataBuf
    }).map(function (payload) {
      if (payload.data == null) {
        throw new Error('data is null');
      }
      return proteus_broker_mgmt_pb.Ack.deserializeBinary(payload.data);
    });
  };
  // Closes connections to a specific set of destinations
  BrokerManagementServiceClient.prototype.closeDestination = function closeDestination(messages, metadata) {
    var once = false;
    return this._rs.requestChannel(messages.map(function (message) {
      var dataBuf = Buffer.from(message.serializeBinary());
      if (!once) {
        once = true;
        var metadataBuf = proteus_js_frames.encodeProteusMetadata('io.netifi.proteus.broker.info.BrokerManagementService', 'closeDestination', metadata);
      } else {
        metadataBuf = Buffer.alloc(0);
      }
      return {
        data: dataBuf,
        metadata: metadataBuf
      };
    })).map(function (payload) {
      if (payload.data == null) {
        throw new Error('data is null');
      }
      return proteus_broker_mgmt_pb.Ack.deserializeBinary(payload.data);
    });
  };
  // Closes connections to a specific set of groups
  BrokerManagementServiceClient.prototype.closeGroup = function closeGroup(messages, metadata) {
    var once = false;
    return this._rs.requestChannel(messages.map(function (message) {
      var dataBuf = Buffer.from(message.serializeBinary());
      if (!once) {
        once = true;
        var metadataBuf = proteus_js_frames.encodeProteusMetadata('io.netifi.proteus.broker.info.BrokerManagementService', 'closeGroup', metadata);
      } else {
        metadataBuf = Buffer.alloc(0);
      }
      return {
        data: dataBuf,
        metadata: metadataBuf
      };
    })).map(function (payload) {
      if (payload.data == null) {
        throw new Error('data is null');
      }
      return proteus_broker_mgmt_pb.Ack.deserializeBinary(payload.data);
    });
  };
  // Closes connections to a specific set of brokers
  BrokerManagementServiceClient.prototype.closeBroker = function closeBroker(messages, metadata) {
    var once = false;
    return this._rs.requestChannel(messages.map(function (message) {
      var dataBuf = Buffer.from(message.serializeBinary());
      if (!once) {
        once = true;
        var metadataBuf = proteus_js_frames.encodeProteusMetadata('io.netifi.proteus.broker.info.BrokerManagementService', 'closeBroker', metadata);
      } else {
        metadataBuf = Buffer.alloc(0);
      }
      return {
        data: dataBuf,
        metadata: metadataBuf
      };
    })).map(function (payload) {
      if (payload.data == null) {
        throw new Error('data is null');
      }
      return proteus_broker_mgmt_pb.Ack.deserializeBinary(payload.data);
    });
  };
  // Closes all connections on the broker - except broker to broker connections
  BrokerManagementServiceClient.prototype.closeDestinations = function closeDestinations(message, metadata) {
    var dataBuf = Buffer.from(message.serializeBinary());
    var metadataBuf = proteus_js_frames.encodeProteusMetadata('io.netifi.proteus.broker.info.BrokerManagementService', 'closeDestinations', metadata);
    return this._rs.requestResponse({
      data: dataBuf,
      metadata: metadataBuf
    }).map(function (payload) {
      if (payload.data == null) {
        throw new Error('data is null');
      }
      return proteus_broker_mgmt_pb.Ack.deserializeBinary(payload.data);
    });
  };
  // Closes connections to all other brokers
  BrokerManagementServiceClient.prototype.closeBrokers = function closeBrokers(message, metadata) {
    var dataBuf = Buffer.from(message.serializeBinary());
    var metadataBuf = proteus_js_frames.encodeProteusMetadata('io.netifi.proteus.broker.info.BrokerManagementService', 'closeBrokers', metadata);
    return this._rs.requestResponse({
      data: dataBuf,
      metadata: metadataBuf
    }).map(function (payload) {
      if (payload.data == null) {
        throw new Error('data is null');
      }
      return proteus_broker_mgmt_pb.Ack.deserializeBinary(payload.data);
    });
  };
  // Closes all connections on the broker including broker to broker connections
  BrokerManagementServiceClient.prototype.closeAll = function closeAll(message, metadata) {
    var dataBuf = Buffer.from(message.serializeBinary());
    var metadataBuf = proteus_js_frames.encodeProteusMetadata('io.netifi.proteus.broker.info.BrokerManagementService', 'closeAll', metadata);
    return this._rs.requestResponse({
      data: dataBuf,
      metadata: metadataBuf
    }).map(function (payload) {
      if (payload.data == null) {
        throw new Error('data is null');
      }
      return proteus_broker_mgmt_pb.Ack.deserializeBinary(payload.data);
    });
  };
  return BrokerManagementServiceClient;
}();

exports.BrokerManagementServiceClient = BrokerManagementServiceClient;

var BrokerManagementServiceServer = function () {
  function BrokerManagementServiceServer(service) {
    this._service = service;
  }
  BrokerManagementServiceServer.prototype.fireAndForget = function fireAndForget(payload) {
    try {
      if (payload.metadata == null) {
        return rsocket_flowable.Single.error(new Error('metadata is empty'));
      }
      var method = proteus_js_frames.getMethod(payload.metadata);
      switch (method) {
        case 'shutdown':
          return this._service.shutdown(google_protobuf_empty_pb.Empty.deserializeBinary(payload.data), payload.metadata);
        default:
          return rsocket_flowable.Single.error(new Error('unknown method'));
      }
    } catch (error) {
      return rsocket_flowable.Single.error(error);
    }
  };
  BrokerManagementServiceServer.prototype.requestResponse = function requestResponse(payload) {
    try {
      if (payload.metadata == null) {
        return rsocket_flowable.Single.error(new Error('metadata is empty'));
      }
      var method = proteus_js_frames.getMethod(payload.metadata);
      switch (method) {
        case 'leave':
          return this._service.leave(google_protobuf_empty_pb.Empty.deserializeBinary(payload.data), payload.metadata);
        case 'rejoin':
          return this._service.rejoin(google_protobuf_empty_pb.Empty.deserializeBinary(payload.data), payload.metadata);
        case 'join':
          return this._service.join(proteus_broker_mgmt_pb.Brokers.deserializeBinary(payload.data), payload.metadata);
        case 'closeDestinations':
          return this._service.closeDestinations(google_protobuf_empty_pb.Empty.deserializeBinary(payload.data), payload.metadata);
        case 'closeBrokers':
          return this._service.closeBrokers(google_protobuf_empty_pb.Empty.deserializeBinary(payload.data), payload.metadata);
        case 'closeAll':
          return this._service.closeAll(google_protobuf_empty_pb.Empty.deserializeBinary(payload.data), payload.metadata);
        default:
          return rsocket_flowable.Single.error(new Error('unknown method'));
      }
    } catch (error) {
      return rsocket_flowable.Single.error(error);
    }
  };
  BrokerManagementServiceServer.prototype.requestStream = function requestStream(payload) {
    return rsocket_flowable.Flowable.error(new Error('requestStream() is not implemented'));
  };
  BrokerManagementServiceServer.prototype.requestChannel = function requestChannel(payload) {
    return rsocket_flowable.Flowable.error(new Error('requestChannel() is not implemented'));
  };
  BrokerManagementServiceServer.prototype.metadataPush = function metadataPush(payload) {
    return rsocket_flowable.Single.error(new Error('metadataPush() is not implemented'));
  };
  return BrokerManagementServiceServer;
}();

exports.BrokerManagementServiceServer = BrokerManagementServiceServer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = __webpack_require__(16);
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = __webpack_require__(8);
var proteus_broker_info_pb = __webpack_require__(12);
goog.exportSymbol('proto.io.netifi.proteus.broker.info.Ack', null, global);
goog.exportSymbol('proto.io.netifi.proteus.broker.info.Brokers', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.netifi.proteus.broker.info.Ack = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.netifi.proteus.broker.info.Ack, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.io.netifi.proteus.broker.info.Ack.displayName = 'proto.io.netifi.proteus.broker.info.Ack';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.io.netifi.proteus.broker.info.Ack.prototype.toObject = function (opt_includeInstance) {
    return proto.io.netifi.proteus.broker.info.Ack.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.io.netifi.proteus.broker.info.Ack} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.io.netifi.proteus.broker.info.Ack.toObject = function (includeInstance, msg) {
    var f,
        obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.netifi.proteus.broker.info.Ack}
 */
proto.io.netifi.proteus.broker.info.Ack.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.netifi.proteus.broker.info.Ack();
  return proto.io.netifi.proteus.broker.info.Ack.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.netifi.proteus.broker.info.Ack} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.netifi.proteus.broker.info.Ack}
 */
proto.io.netifi.proteus.broker.info.Ack.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.netifi.proteus.broker.info.Ack.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.io.netifi.proteus.broker.info.Ack.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.netifi.proteus.broker.info.Ack} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.netifi.proteus.broker.info.Ack.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.netifi.proteus.broker.info.Brokers = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.io.netifi.proteus.broker.info.Brokers.repeatedFields_, null);
};
goog.inherits(proto.io.netifi.proteus.broker.info.Brokers, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.io.netifi.proteus.broker.info.Brokers.displayName = 'proto.io.netifi.proteus.broker.info.Brokers';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.io.netifi.proteus.broker.info.Brokers.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.io.netifi.proteus.broker.info.Brokers.prototype.toObject = function (opt_includeInstance) {
    return proto.io.netifi.proteus.broker.info.Brokers.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.io.netifi.proteus.broker.info.Brokers} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.io.netifi.proteus.broker.info.Brokers.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      brokersList: jspb.Message.toObjectList(msg.getBrokersList(), proteus_broker_info_pb.Broker.toObject, includeInstance)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.netifi.proteus.broker.info.Brokers}
 */
proto.io.netifi.proteus.broker.info.Brokers.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.netifi.proteus.broker.info.Brokers();
  return proto.io.netifi.proteus.broker.info.Brokers.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.netifi.proteus.broker.info.Brokers} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.netifi.proteus.broker.info.Brokers}
 */
proto.io.netifi.proteus.broker.info.Brokers.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proteus_broker_info_pb.Broker();
        reader.readMessage(value, proteus_broker_info_pb.Broker.deserializeBinaryFromReader);
        msg.addBrokers(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.netifi.proteus.broker.info.Brokers.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.io.netifi.proteus.broker.info.Brokers.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.netifi.proteus.broker.info.Brokers} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.netifi.proteus.broker.info.Brokers.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getBrokersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proteus_broker_info_pb.Broker.serializeBinaryToWriter);
  }
};

/**
 * repeated Broker brokers = 1;
 * @return {!Array<!proto.io.netifi.proteus.broker.info.Broker>}
 */
proto.io.netifi.proteus.broker.info.Brokers.prototype.getBrokersList = function () {
  return (/** @type{!Array<!proto.io.netifi.proteus.broker.info.Broker>} */jspb.Message.getRepeatedWrapperField(this, proteus_broker_info_pb.Broker, 1)
  );
};

/** @param {!Array<!proto.io.netifi.proteus.broker.info.Broker>} value */
proto.io.netifi.proteus.broker.info.Brokers.prototype.setBrokersList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.io.netifi.proteus.broker.info.Broker=} opt_value
 * @param {number=} opt_index
 * @return {!proto.io.netifi.proteus.broker.info.Broker}
 */
proto.io.netifi.proteus.broker.info.Brokers.prototype.addBrokers = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.io.netifi.proteus.broker.info.Broker, opt_index);
};

proto.io.netifi.proteus.broker.info.Brokers.prototype.clearBrokersList = function () {
  this.setBrokersList([]);
};

goog.object.extend(exports, proto.io.netifi.proteus.broker.info);

/***/ })
/******/ ]);