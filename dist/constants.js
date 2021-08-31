"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.getUsers = void 0;
const permission = {
    getUsers: {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }
};
const { getUsers } = permission;
exports.getUsers = getUsers;
const users = [{
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
    }];
exports.users = users;
//# sourceMappingURL=constants.js.map