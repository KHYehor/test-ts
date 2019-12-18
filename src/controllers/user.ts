'use strict';

export default class UserController {
  private userService: any;
  constructor(userService: any) {
    this.userService = userService;
  }
  public getGenerateUser = async (req: any, res: any, next: any) => {
    try {
      const generatedUser = await this.userService.generateUser();
      res.status(200).send(generatedUser);
    } catch (error) {
      next(error);
    }
  }
  public getUsers = async(req: any, res: any, next: any) => {
    try {
      const users = await this.userService.getUsers();
      res.status(200).send(users);
    } catch (error) {
      next(error);
    }
  }
  public putUser = async (req: any, res: any, next: any) => {
    try {
      const { userId } = req.params;
      const { body } = req;
      const updated = await this.userService.updateUser(userId, body);
      if (updated === false) return res.status(400).end();
      if (updated === null) return res.status(404).end();
      return res.status(200).send(updated);
    } catch (error) {
      next(error);
    }
  }
  public deleteUser = async (req: any, res: any, next: any) => {
    try {
      const { userId } = req.params;
      const userDeleted = await this.userService.deleteUser(userId);
      if (userDeleted === false) return res.status(400).end();
      if (userDeleted === null) return res.status(404).end();
      return res.status(200).send(userDeleted);
    } catch (error) {
      next(error);
    }
  }
  public postUser = async (req: any, res: any, next: any) => {
    try {
      const userExists = await this.userService.checkUser(req.body);
      if (userExists.length) return res.status(200).end();
      return res.status(404).end();
    } catch (error) {
      next(error);
    }
  }
}
