'use strict';

import { model, Schema, Types } from 'mongoose';

const userSchema = new Schema({
  name: {
    title: {
      type: String,
      required: true,
    },
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique : true,
  },
  picture: {
    large: {
      type: String,
      required: true,
    },
    medium: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  password: {
    type: String,
    required: true,
  },
  removed: {
    type: Boolean,
    required: true,
  },
}, {
  writeConcern: {
    w: 'majority'  
  }
});

userSchema.statics.findUsers = async function() {
  return await this.find({ removed: false });
};

userSchema.statics.deleteUser = async function(userId: any) {
  return await this.findOneAndUpdate({ 
    _id: userId, 
    removed: false 
  }, { 
    removed: true 
  }, { 
    new: true 
  });
};

userSchema.statics.updateUser = async function(userId: any, user: any) {
  return await this.findOneAndUpdate({ 
    _id: userId, 
    removed: false, 
  }, 
  user, { 
    new: true 
  });
};

const userModel = model('User', userSchema);

export default userModel;
