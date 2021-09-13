import * as jwt from 'jsonwebtoken';
import hasPermission from '../../../extraTS/utils/permission';
import config from '../../config/configuration';

export default (module, permissionType) => async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        next({error: 'unauthorized', message: 'Token not found', status: 403});
    }
    const {secret} = config;
    let user;
    try {
         user = jwt.verify(token, secret);
    } catch (err) {
        next({error: 'Unauthorized', message: 'User not authorized', status: 403});
    }

    if (!user) {
        next({error: 'Unauthorized', message: 'User not authorized', status: 403});
    }
    if (!hasPermission(module, user.role, permissionType)) {
        next({error: 'Unauthorized', message: 'Permission Denied', status: 403});
    }
    req.user = user;
    next();
};