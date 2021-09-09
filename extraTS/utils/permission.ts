import { GetUsers } from '../interfaces';
const hasPermission = (moduleName: GetUsers, role: string, levelofPermission: string): boolean => {
    return moduleName[levelofPermission].includes(role);
};

export default hasPermission;
