'use strict';

import fetchUser from './fetchUser';
import { user } from '../validation';
import obj from '../crypto';

interface User {
  email: string;
  password: string;
}

export default class UserService {
  private userModel: any;
  constructor(userModel: any) {
    this.userModel = userModel;
  }

  public generateUser = async () => {
    const fetchedUser = await fetchUser();
    const userCreated = await this.userModel.create(fetchedUser);
    return userCreated;
  }

  public getUsers = async () => {
    const users = await this.userModel.findUsers();
    return users;
  }

  public updateUser = async (userId: any, userBody: any) => {
    if (!user.checkId(userId) && !user.checkUser(userBody)) return false;
    userBody.password = await obj.hashPassword(userBody.password);
    const updated = await this.userModel.updateUser(userId, userBody);
    return updated;
  }

  public deleteUser = async (userId: any) => {
    if (!user.checkId(userId)) return false;
    const deleted = await this.userModel.deleteUser(userId);
    return deleted;
  }

  public checkUser = async ({ email, password }: User) => {
    const hashedPassword = await obj.hashPassword(password);
    const foundUser = await this.userModel.find({ email, password: hashedPassword });
    return foundUser;
  }
}
