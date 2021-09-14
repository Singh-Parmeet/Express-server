import { Router } from 'express';
import userController from './Controller';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { getUsers } from '../../../extraTS/constants';

const router = Router();

router
     .get('/', userController.getAll)
     .post('/', userController.create)
     .put('/',  userController.update)
     .delete('/',  userController.delete)
     .post('/createToken', userController.createToken);

export default router;