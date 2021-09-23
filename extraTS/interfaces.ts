

interface EmailType {
    traineeEmail: string;
    reviewerEmail: string;
}

interface GetUsers {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
    review: string[];
}

interface Permission {
    getUsers: GetUsers;
}



export { EmailType, GetUsers, Permission };