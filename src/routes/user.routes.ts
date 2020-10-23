import Router from 'express';
import { getRepository, getCustomRepository } from 'typeorm';

import User from '../models/User';

import CreateUserService from '../services/users/CreateUserService';
import UpdateUserService from '../services/users/UpdateUserService';
import DeleteUserService from '../services/users/DeleteUserService';
import UserRepository from '../repositories/UserRepository';

const userRoutes = Router();

userRoutes.get('/', async (Request, Response) => {
  const userRepository = getRepository(User);

  const users = await userRepository.find();

  Response.json(users);
});

userRoutes.get('/:name', async (request, Response) => {
  const { name } = request.params;
  const userRepository = getCustomRepository(UserRepository);

  const users = await userRepository.findByName(name);

  Response.json(users);
});

userRoutes.post('/', async (request, Response) => {
  const { name, email, password } = request.body;

  const createUserService = new CreateUserService();

  const newUSer = await createUserService.execute({
    name,
    email,
    password,
  });

  newUSer.password = '';

  Response.json(newUSer);
});

userRoutes.put('/:id', async (request, Response) => {
  const { id } = request.params;
  const { name } = request.body;

  const updateUserService = new UpdateUserService();

  const newUSer = await updateUserService.execute({
    id,
    name,
  });

  newUSer.password = '';

  Response.json(newUSer);
});

userRoutes.delete('/:id', async (request, Response) => {
  const { id } = request.params;

  const deleteUserService = new DeleteUserService();

  await deleteUserService.execute({ id });

  Response.json({ message: 'User ha been deleted' });
});

export default userRoutes;
