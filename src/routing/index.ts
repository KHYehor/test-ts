'use strict';

import { userController } from '../controllers';

import userRouting from './user';

// Dependency Injection
const userRouter = userRouting(userController);

export { userRouter };
