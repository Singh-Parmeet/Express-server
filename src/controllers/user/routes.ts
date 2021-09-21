import { Router } from 'express';
import userController from './Controller';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import { getUsers } from '../../../extraTS/constants';

const router = Router();

router
     .get('/', authMiddleWare(getUsers, 'read'), validationHandler(validation.get), userController.getAll)
     .post('/', authMiddleWare(getUsers, 'write'), validationHandler(validation.create), userController.create)
     .put('/', authMiddleWare(getUsers, 'write'), validationHandler(validation.update),  userController.update)
     .delete('/', authMiddleWare(getUsers, 'delete'), validationHandler(validation.delete),  userController.delete)
     .post('/createToken', userController.createToken);

export default router;