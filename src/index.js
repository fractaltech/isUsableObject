const {
  isObject,
  isArray,
  isFunction,
  isRegExp,
  isNumber,
  isString,
  isElement,
  isDate
} = require('lodash');

function isUsableObject(val) {
  return isObject(val) && !(
    isArray(val) || isFunction(val) || isRegExp(val) || isNumber(val) || isString(val) ||
    isElement(val) || isDate(val)
  );
}

module.exports = isUsableObject;
