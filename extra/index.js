import { createDiamondShape, createEquilateral} from "./pattern";
import { hasPermission } from "./utils"
import {getUsers, users} from "./constants";
import {validateUsers} from "./utils";

createDiamondShape(5);
createEquilateral(5);
console.log(hasPermission(getUsers,'head-trainer','write'));
validateUsers(users);
