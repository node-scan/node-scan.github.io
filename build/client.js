var defineProperty = Object.defineProperty;
Object.defineProperty = function (exports, name) {
  if (name === '__esModule') {
    exports[name] = true;
    return;
  }
  return defineProperty.apply(this, arguments);
};
