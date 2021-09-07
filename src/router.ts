import { Router } from 'express';
import userRouter from './controllers/trainee';

const router = Router();
 router.use('/user', userRouter);

 export default router;