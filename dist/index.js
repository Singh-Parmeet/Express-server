"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pattern_1 = require("./pattern");
const utils_1 = require("./utils");
const constants_1 = require("./constants");
const utils_2 = require("./utils");
(0, pattern_1.createDiamondShape)(5);
(0, pattern_1.createEquilateral)(5);
console.log((0, utils_1.hasPermission)(constants_1.getUsers, 'trainer', 'write'));
(0, utils_2.validateUsers)(constants_1.users);
//# sourceMappingURL=index.js.map