'use strict';

import bcrypt from 'bcrypt';

export default {
  hashPassword: async (password: any) => await bcrypt.hash(password, process.env.SALT || ''),
}
