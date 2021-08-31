
import { getUsers } from "./constants";

interface Email1{
    traineeEmail: string;
    reviewerEmail: string;
}

interface getUsers{
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
}

interface permission{
    getUsers: getUsers;
}



export { Email1, getUsers, permission };