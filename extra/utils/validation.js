import { validateEmail } from "./helpers"
const validateUsers = usersArg => {
  let validUsers = []
  let invalidUsers = []

  //forEach is used to check if email is valid than push to valid user arr or vice versa
  usersArg.forEach((userObj,) => {
    const { traineeEmail, reviewerEmail } = userObj;
    validateEmail(traineeEmail) ? validUsers.push(traineeEmail) : invalidUsers.push(traineeEmail)
    validateEmail(reviewerEmail) ? validUsers.push(reviewerEmail) : invalidUsers.push(reviewerEmail)

  })

  console.log(validUsers.length > 1 ? (`valid users: ${validUsers}, count: ${validUsers.length}`) : "No Valid users found");
  console.log(invalidUsers.length > 1 ? (`invalid users: ${invalidUsers}, count: ${invalidUsers.length}`) : "No Invalid user found");

}
// validateUsers(users);
export default validateUsers;
