import { EntityRepository, Repository, Like } from 'typeorm';
import User from '../models/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async findByName(name: string): Promise<User[] | null> {
    const findAppointment = await this.find({
      name: Like(`%${name}%`),
    });

    return findAppointment || null;
  }
}

export default UserRepository;
