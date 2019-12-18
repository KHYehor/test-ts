'use strict';

import { Types } from 'mongoose';
import { ObjectId } from 'bson';
const { ObjectId: ObjectID } = Types;

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export default {
  checkId: (id: string | number | ObjectId) => ObjectID.isValid(id),
  checkUser: (user: any) => {
    const isName = (
      'name' in user &&
      'title' in user &&
      'first' in user && 
      'last' in user
    );
    const isGender = 'gender' in user;
    const isEmail = 'email' in user;
    const isPucture = (
      'large' in user.picture &&
      'medium' in user.picture &&
      'last' in user.picture
    );
    const isPassword = 'password' in user;
    if (isName && isGender && isEmail && isPucture && isPassword) return true;
    return false;
  }
}
