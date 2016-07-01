'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Routes = require('./component-router/Routes');

Object.keys(_Routes).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Routes[key];
    }
  });
});