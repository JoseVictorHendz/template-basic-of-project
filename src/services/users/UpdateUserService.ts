import { getRepository } from 'typeorm';

import User from '../../models/User';

interface Request {
  id: string;
  name: string;
}

class UpdateUserService {
  public async execute({ id, name }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const updatedUser = await userRepository.save({
      id,
      name,
    });

    return updatedUser;
  }
}

export default UpdateUserService;
