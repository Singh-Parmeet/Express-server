import { Router } from 'express';
import userController from './Controller';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { getUsers } from '../../../extraTS/constants';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *        User:
 *             properties:
 *                  _id:
 *                       type: string
 *                  id:
 *                       type: string
 *                  originalId:
 *                       type: string
 *                  name:
 *                       type: string
 *                  email:
 *                       type: string
 *                       format: email
 *                  password:
 *                       type: string
 *                  createdAt:
 *                       type: string
 *                  deletedAt:
 *                       type: string
 *        Users:
 *             type: array
 *             items:
 *                  type: string
 *             $ref: '#/components/schemas/User'
 *        UserListResponse:
 *             properties:
 *                  message:
 *                       type: string
 *                       example: Success
 *                  status:
 *                       type: integer
 *                       example: 200
 *                  data:
 *                       $ref: '#/components/schemas/Users'
 *        UserByIdGetResponse:
 *             properties:
 *                  message:
 *                       type: string
 *                       example: Success
 *                  status:
 *                       type: integer
 *                       example: 200
 *                  data:
 *                       $ref: '#/components/schemas/Users'
 */

router
     .get('/', authMiddleWare(getUsers, 'read'), validationHandler(validation.get), userController.getAll)

/**
 * @swagger
 * /user:
 *   get:
 *        tags: [Users]
 *        description: Returns all the user
 *        produces:
 *             -application/json
 *        security:
 *             - bearerAuth: []
 *        responses :
 *             200:
 *                  description: Array of user
 *                  schema:
 *                       $ref: '#/components/UserListResponse'
 */

     .post('/', authMiddleWare(getUsers, 'write'), validationHandler(validation.create), userController.create)
     .get('/me', authMiddleWare(getUsers, 'read'), userController.getMe)

/**
 * @swagger
 * /user:
 *  post:
 *      tags: [Users]
 *      requestBody:
 *          description: Enter details of user to create data.
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - name
 *                          - role
 *                          - email
 *                          - password
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: Peter
 *                          role:
 *                              type: string
 *                              example: trainer
 *                          email:
 *                              type: string
 *                              example: peter@successive.tech
 *                          password:
 *                              type: string
 *                              example: Training@123
 *      security:
 *                   - bearerAuth: []
 *      responses:
 *          200:
 *              description: User created successfully!
 *          403:
 *              description: User not created successfully!
 */

     .put('/', authMiddleWare(getUsers, 'write'), validationHandler(validation.update), userController.update)

/**
 * @swagger
 * /user:
 *  put:
 *      tags: [Users]
 *      requestBody:
 *          description: Enter OriginalId of user to update.
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - originalId
 *                          - name
 *                          - role
 *                          - email
 *                          - password
 *                      properties:
 *                          originalId:
 *                              type: string
 *                          name:
 *                              type: string
 *                              example: Peter
 *                          role:
 *                              type: string
 *                              example: trainer
 *                          email:
 *                              type: string
 *                              example: Peter@successive.tech
 *                          password:
 *                              type: string
 *                              example: Training@123
 *      security:
 *                   - bearerAuth: []
 *      responses:
 *          200:
 *              description: User Updated successfully!
 *          403:
 *              description: Unable to read the originalId
 */

     .delete('/', authMiddleWare(getUsers, 'delete'), validationHandler(validation.delete), userController.delete)

/**
 * @swagger
 * /user:
 *  delete:
 *      tags: [Users]
 *      requestBody:
 *          description: Enter OriginalId of user to delete.
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - originalId
 *                      properties:
 *                          originalId:
 *                              type: string
 *      security:
 *                   - bearerAuth: []
 *      responses:
 *          200:
 *              description: User Deleted successfully!
 *          403:
 *              description: Data not available
 */

     .post('/createtoken', userController.createToken);

/**
 * @swagger
 * /user/createtoken:
 *  post:
 *      tags: [Users]
 *      requestBody:
 *          description: Enter email and password to create/generate authorization token.
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - email
 *                          - password
 *                      properties:
 *                          email:
 *                              type: string
 *                              example: Peter@successive.tech
 *                          password:
 *                              type: string
 *                              example: Training@123
 *      responses:
 *          200:
 *              description: Token created successfully!
 *          403:
 *              description: User does not exists!
 */

/**
 * @swagger
 * /user/review:
 *   put:
 *      tags: [Users]
 *      requestBody:
 *          description: Enter OriginalId of the trainee and feedback.
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - originalId
 *                          - feedback
 *                      properties:
 *                          originalId:
 *                              type: string
 *                              example: 6144d6e125db5004ae7cce47
 *                          feedback:
 *                              type: string
 *                              example: { codequality = "10", communication = "7", redmine = "8" }
 *      security:
 *                   - bearerAuth: []
 *      responses:
 *          200:
 *              description: Feedback Updated successfully!
 *          403:
 *              description: Unable to read the originalId
 */
router.put('/review', authMiddleWare(getUsers, 'review'), validationHandler(validation.feedback), userController.review);

export default router;