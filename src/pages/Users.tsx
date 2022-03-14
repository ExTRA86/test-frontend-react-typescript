import React, { FC, useContext, useEffect, useState } from 'react';
import UsersService from '../API/UsersService';
import Loader from '../components/Loader/Loader';
import UsersList from '../components/Users/UsersList';
import { SortContext } from '../context';
import { useFetching } from '../hooks/useFetching';
import { useStartedUsers } from '../hooks/useUsers';
import '../styles/Users.scss';
import { IAllUsers } from '../types/types';

const Users: FC = () => {
  const [users, setUsers] = useState<IAllUsers[] | []>([]);
  const { sort } = useContext(SortContext);

  const sortedUsers = useStartedUsers(users, sort);

  const [fetchUsers, isUsersLoading, usersError] = useFetching(async () => {
    const response = await UsersService.getAll();
    setUsers([...users, ...response.data]);
  });

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='users'>
      <div className='users__header'>Список пользователей</div>
      {usersError && <h1>Произошла ошибка {usersError}</h1>}
      {isUsersLoading ? <Loader /> : <UsersList users={sortedUsers} />}
      <div className='users__footer'>
        {users.length ? `Найдено ${users.length} пользователей` : ''}
      </div>
    </div>
  );
};

export default Users;
