const User = require('../model/Course')

const { HTTP_STATUS } = require('../utils/constant')

//getAllUser
export const getAllUser = async (req: Request, res: Response) => {
  res.status(HTTP_STATUS.SUCCESS).json("This is get all user");
};

//getUserById
export const getUserById = async (req: Request, res: Response) => {
  res.status(HTTP_STATUS.SUCCESS).json("This is get user by id");
};

export const addUser = async (req: Request, res: Response) => {
  res.status(HTTP_STATUS.SUCCESS).json("This is add user");
};

//Edit user, active, deactive
export const editUser = async (req: Request, res: Response) => {
  res.status(HTTP_STATUS.SUCCESS).json("This is edit user");
};
