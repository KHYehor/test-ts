'use strict';

import process from 'process';
import mongoose from 'mongoose';

mongoose.connect(process.env.URL || '', { useNewUrlParser: true, useUnifiedTopology: true });

// Remove deprecation warnings
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

import userModel from './user';

export { userModel };
