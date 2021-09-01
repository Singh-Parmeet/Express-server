

const hasPermission = (moduleName, role, levelofPermission) => {
    return moduleName[levelofPermission].includes(role)
}

export default hasPermission;
