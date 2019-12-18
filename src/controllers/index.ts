'use strict';

import { userService } from '../services';
import UserController from './user';

// Dependency Injection
const userController = new UserController(userService);

export { userController };