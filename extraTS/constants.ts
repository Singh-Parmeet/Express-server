import { Permission, EmailType } from './interfaces';
const permission: Permission = {
  getUsers: {
  all: ['head-trainer'],
  read : ['trainee', 'trainer', 'head-trainer'],
  write : ['trainer', 'head-trainer', 'trainee'],
  delete: ['head-trainer', 'trainee'],
  },

};

const { getUsers }  = permission;

const users: EmailType[] = [{
  traineeEmail: 'trainee1@successive.tech',
  reviewerEmail: 'reviewer1@successive.tech',
}];

export { getUsers, users };