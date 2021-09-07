import { Router } from 'express';
import userController from './Controller';


const router = Router();

router
     .get('/', userController.get)
     .post('/', userController.post)
     .put('/', userController.put)
     .delete('/', userController.del);

export default router;