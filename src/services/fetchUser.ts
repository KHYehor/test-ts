'use strict';

import process from 'process';
import fetch from 'node-fetch';

import obj from '../crypto';

export default async () => {
  const randomUser = await fetch(process.env.RANDOM_USER || 'https://randomuser.me/api/', { method: 'GET' })
    .then(res => res.json());
  const user = randomUser.results[0];
  const hashedPassword = await obj.hashPassword(user.login.password);
  return {
    name: user.name,
    gender: user.gender,
    email: user.email,
    picture: user.picture,
    password: hashedPassword,
    removed: false
  };
};
