'use strict';

var _require = require('lodash');

var isObject = _require.isObject;
var isArray = _require.isArray;
var isFunction = _require.isFunction;
var isRegExp = _require.isRegExp;
var isNumber = _require.isNumber;
var isString = _require.isString;
var isElement = _require.isElement;
var isDate = _require.isDate;


function isUsableObject(val) {
  return isObject(val) && !(isArray(val) || isFunction(val) || isRegExp(val) || isNumber(val) || isString(val) || isElement(val) || isDate(val));
}

module.exports = isUsableObject;