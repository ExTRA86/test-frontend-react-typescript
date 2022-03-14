import axios from 'axios';
import { IAllUsers, IUser } from '../types/types';

export default class UsersService {
  static async getAll() {
    const response = await axios.get<IAllUsers[]>(
      `https://jsonplaceholder.typicode.com/users`,
    );
    return response;
  }

  static async getById(id: number) {
    const response = await axios.get<IUser>(
      `https://jsonplaceholder.typicode.com/users/` + id,
    );
    return response;
  }
}
