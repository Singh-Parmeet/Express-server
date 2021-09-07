import { Router } from 'express';
import traineeController from './Controller';


const router = Router();

router
     .get('/', traineeController.create)
     .post('/', traineeController.read)
     .put('/', traineeController.update)
     .delete('/', traineeController.delete);

export default router;