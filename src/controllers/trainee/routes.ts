import { Router } from 'express';
import traineeController from './Controller';


const router = Router();

router
     .get('/', traineeController.get)
     .post('/', traineeController.create)
     .put('/', traineeController.update)
     .delete('/', traineeController.delete);

export default router;