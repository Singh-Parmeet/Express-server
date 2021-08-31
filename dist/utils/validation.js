"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
// const users = [{
//   traineeEmail: 'trainee1@successive.tech',
//   reviewerEmail: 'reviewer1@successive.tech',
// }]
//We are validating the email which have @successive.tech
// const validateEmail = (email) =>{
//     const reg = /^[A-Za-z0-9._%+-]+@successive.tech$/
//     return reg.test(email)
// }
// Two open arrays are defined in which length and valid email address will be pushed
function validateUsers(usersArg) {
    let validUsers = [];
    let invalidUsers = [];
    //forEach is used to check if email is valid than push to valid user arr or vice versa
    usersArg.forEach((userObj) => {
        const { traineeEmail, reviewerEmail } = userObj;
        (0, helpers_1.validateEmail)(traineeEmail) ? validUsers.push(traineeEmail) : invalidUsers.push(traineeEmail);
        (0, helpers_1.validateEmail)(reviewerEmail) ? validUsers.push(reviewerEmail) : invalidUsers.push(reviewerEmail);
    });
    console.log(validUsers.length > 1 ? (`valid users: ${validUsers}, count: ${validUsers.length}`) : "No Valid users found");
    console.log(invalidUsers.length > 1 ? (`invalid users: ${invalidUsers}, count: ${invalidUsers.length}`) : "No Invalid user found");
}
// validateUsers(users);
exports.default = validateUsers;
//# sourceMappingURL=validation.js.map