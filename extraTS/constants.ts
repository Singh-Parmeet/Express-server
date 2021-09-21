import { Permission, EmailType } from './interfaces';
const permission: Permission = {
  getUsers: {
  all: ['head-trainer'],
  read : ['trainee', 'trainer', 'head-trainer'],
  write : ['trainer', 'head-trainer'],
  delete: ['head-trainer'],
  },

};

const { getUsers }  = permission;

const users: EmailType[] = [{
  traineeEmail: 'trainee1@successive.tech',
  reviewerEmail: 'reviewer1@successive.tech',
}];

export { getUsers, users };
export const BCRYPT_SALT_ROUNDS: number = 6;