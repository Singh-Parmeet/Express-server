"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = '';
const createEquilateral = (size) => {
    for (let i = 1; i <= size; i++) {
        for (let s = size - 1; s >= i; s--) {
            str += ' ';
        }
        for (let j = 1; j <= i; j++) {
            str += '* ';
        }
        str += '\n';
    }
    console.log(str);
};
// const size = process.argv.slice(2);
// let a = Number(size);
// createEquilateral(a);
exports.default = createEquilateral;
//# sourceMappingURL=equilateral.js.map