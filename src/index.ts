'use strict';

import express from 'express';

import { userRouter } from './routing';
import { error } from './middlewares';
const app = express();

// Middlewares
app.use(express.json());
app.use('/api/users', userRouter);
app.use(error);

app.listen(process.env.PORT || 3000, () => console.log('listening...'));
