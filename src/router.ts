import { Router } from 'express';
import traineeRouter from './controllers/trainee';

const router = Router();
 router.use('/trainee', traineeRouter);

 export default router;