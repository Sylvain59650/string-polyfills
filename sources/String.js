/**
 * @license
 * String  0.0.1
 * Copyright Sylvain Longepee
 * Released under MIT license
 */

;
(function(moduleName, root, factory) {
  if (typeof define === 'function' && define.amd) {} else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.String = factory();
  }
}("StringModule", this, function() {
  'use strict';

  function isWhiteSpace(char) {
    return char == ' ' || char == '\n';
  }

  if (String.prototype.trimStart) {
    String.prototype.trimStart = function() {
      var i = 0;
      while (i < this.length && isWhiteSpace(this[i])) i++;
      return this.substring(i);
    }
  }

  if (String.prototype.trimStart) {
    String.prototype.trimEnd = function() {
      var i = this.length - 1;
      while (i >= 0 && isWhiteSpace(this[i])) i--;
      return this.substring(0, i + 1);
    }
  }

  return String;
}));