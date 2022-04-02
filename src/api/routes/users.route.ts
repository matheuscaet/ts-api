import { Router} from "express";
import { Container } from 'typedi'
import { UsersController } from "@controllers/_index";

const users = Router();
const usersController = Container.get(UsersController);

users
    .route('/users')
    .get(usersController.getAllUsers)
    .post(usersController.createUser);

users
    .route('/user/:id')
    .get(usersController.getUser)
    .put(usersController.updateUser)
    .delete(usersController.deleteUser);

users
    .route('/users/migrate')
    .get(usersController.getAllUsersFromApi);


export { users };