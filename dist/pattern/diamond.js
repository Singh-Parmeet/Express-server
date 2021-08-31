"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = '';
const createDiamondShape = (n) => {
    let space = n - 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < space; j++) {
            str += (' ');
        }
        for (let j = 0; j <= i; j++) {
            str += ('* ');
        }
        str += '\n';
        space--;
    }
    space = 0;
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < space; j++) {
            str += (' ');
        }
        for (let j = 0; j < i; j++) {
            str += ('* ');
        }
        str += '\n';
        space++;
    }
    console.log(str);
};
// const size:string = process.argv.slice(2);
// let a:number = Number(size);
exports.default = createDiamondShape;
//# sourceMappingURL=diamond.js.map