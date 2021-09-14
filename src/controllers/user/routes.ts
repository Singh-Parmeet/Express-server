import { Router } from 'express';
import userController from './Controller';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { getUsers } from '../../../extraTS/constants';

const router = Router();

router
     .get('/', authMiddleWare(getUsers, 'read'), userController.getAll)
     .post('/', authMiddleWare(getUsers, 'write'), userController.create)
     .put('/', authMiddleWare(getUsers, 'write'),  userController.update)
     .delete('/', authMiddleWare(getUsers, 'delete'),  userController.delete)
     .post('/createToken', userController.createToken);

export default router;