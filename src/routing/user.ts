'use strict';

// Creating userRouter instance
import { Router } from 'express';
const userRouter = Router();


export default (userController: any) => {
  userRouter.get('/generate', userController.getGenerateUser)
  userRouter.get('/', userController.getUsers);
  userRouter.put('/:userId', userController.putUser);
  userRouter.delete('/:userId', userController.deleteUser);
  userRouter.post('/login', userController.postUser);
  return userRouter;
};
