import { Router } from 'express';
import traineeController from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { getUsers } from '../../../extraTS/constants';

const router = Router();

router
     .get('/', authMiddleWare(getUsers, 'read'), validationHandler(validation.get), traineeController.get)
     .post('/', authMiddleWare(getUsers, 'write'), validationHandler(validation.create), traineeController.create)
     .put('/', authMiddleWare(getUsers, 'write'), validationHandler(validation.update), traineeController.update)
     .delete('/', authMiddleWare(getUsers, 'delete'), validationHandler(validation.delete), traineeController.delete)
     .post('/createToken', traineeController.createToken);

export default router;