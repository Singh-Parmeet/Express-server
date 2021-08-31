import { getUsers } from "../interfaces";
//import permission from "../constants";
// const permission ={
//   getUsers: {
//   all: ['head-trainer'],
//   read : ['trainee', 'trainer'],
//   write : ['trainer'],
//   delete: [],
// }

// }

// deconstruct the getUsers
//const { getUsers }  = permission;

const hasPermission = (moduleName: getUsers, role:string, levelofPermission:string) => {
    return moduleName[levelofPermission].includes(role)
}

//The output if trainee/trainer/head-trainer has read permission than true otherwise false.

// console.log(hasPermission(getUsers,"trainee", "read"))
// console.log(hasPermission(getUsers,"trainee", "write"))
// console.log(hasPermission(getUsers,"trainer", "write"))
export default hasPermission;
