"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const buttonGroup = require("./src/button-group.vue.js");
const install = require("../../utils/vue/install.js");
const wdButtonGroup = install.withInstall(buttonGroup.default);
exports.default = wdButtonGroup;
exports.wdButtonGroup = wdButtonGroup;
