"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function elementRealLeft(element) {
  let actualLeft = element.offsetLeft;
  let current = element.offsetParent;
  while (current !== null) {
    actualLeft += current.offsetLeft;
    current = current.offsetParent;
  }
  actualLeft -= window.scrollX;
  return actualLeft;
}
function elementRealTop(element) {
  let actualTop = element.offsetTop;
  let current = element.offsetParent;
  while (current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }
  actualTop -= window.scrollY;
  return actualTop;
}
exports.elementRealLeft = elementRealLeft;
exports.elementRealTop = elementRealTop;
