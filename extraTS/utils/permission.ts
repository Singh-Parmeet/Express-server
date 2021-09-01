import { GetUsers } from '../interfaces';


const hasPermission = (moduleName: GetUsers, role: string, levelofPermission: string): void => {
    return moduleName[levelofPermission].includes(role);
};

export default hasPermission;
