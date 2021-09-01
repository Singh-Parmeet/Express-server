
import { getUsers } from './constants';

interface Email1 {
    traineeEmail: string;
    reviewerEmail: string;
}

interface GetUsers {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
}

interface Permission {
    getUsers: GetUsers;
}



export { Email1, GetUsers, Permission };