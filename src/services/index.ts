'use strict';

import { userModel } from '../models';

import UserService from './user';

// Dependency Injection
const userService = new UserService(userModel);

export { userService };
