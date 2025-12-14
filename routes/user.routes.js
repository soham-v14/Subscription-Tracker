import { Router } from 'express';
import { getUser, getUsers } from '../controllers/user.controller.js';
import authorize from '../middlewares/auth.middleware.js';

const userRouter = Router();

//GET /users -> et all users
//GET /users/:id -> get users by id //Eg:- 123/443/555

userRouter.get('/', getUsers);

userRouter.get('/:id', authorize, getUser);

userRouter.post('/', (req, res) => res.send({title: 'Create all users'}));

userRouter.put('/:id', (req, res) => res.send({title: 'Update the users by id'}));

userRouter.delete('/:id', (req, res) => res.send({title: 'Delete a users'}));

export default userRouter;