import * as jwt from 'jsonwebtoken';
import hasPermission from '../../../extraTS/utils/permission';
import config from '../../config/configuration';
import UserRepository from '../../repositories/user/UserRepository';

const userRepository = new UserRepository();

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
    const userData = await userRepository.findOne({_id: user.id});

    if (!userData) {
        next({error: 'unauthorized', message: 'User not found', status: 403});
    }

    if (!hasPermission(module, userData.role, permissionType)) {
        next({error: 'Unauthorized', message: 'Permission Denied', status: 403});
        console.log('Error in Has');

    }

    req.user = user;
    next();
};