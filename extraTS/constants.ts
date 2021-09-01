import { Permission } from './interfaces';
const permission = {
  getUsers: {
  all: ['head-trainer'],
  read : ['trainee', 'trainer'],
  write : ['trainer'],
  delete: [],
}

};

const { getUsers }  = permission;

const users = [{
  traineeEmail: 'trainee1@successive.tech',
  reviewerEmail: 'reviewer1@successive.tech',
}];

export { getUsers, users };
