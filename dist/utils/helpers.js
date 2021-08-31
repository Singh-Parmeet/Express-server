"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = void 0;
function validateEmail(email) {
    const reg = /^[A-Za-z0-9._%+-]+@successive.tech$/;
    return reg.test(email);
}
exports.validateEmail = validateEmail;
//# sourceMappingURL=helpers.js.map