import { getRepository } from 'typeorm';

import AppError from '../../errors/AppError';

import User from '../../models/User';

interface Request {
  id: string;
}

class UpdateUserService {
  public async execute({ id }: Request): Promise<void> {
    const userRepository = getRepository(User);

    const userExist = await userRepository.findOne(id);

    if (!userExist) throw new AppError('user not found');

    await userRepository.delete(id);
  }
}

export default UpdateUserService;
