import { Router } from 'express';
import userController from './Controller';

const router = Router();

router
     .get('/', userController.getAll)
     .post('/', userController.create)
     .put('/',  userController.update)
     .delete('/',  userController.delete)
     .post('/createToken', userController.createToken);

export default router;