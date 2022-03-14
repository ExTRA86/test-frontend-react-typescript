import React, { FC } from 'react';
import { IAllUsers } from '../../types/types';
import UsersItem from './UsersItem';

interface UsersListProps {
  users: IAllUsers[];
}

const UsersList: FC<UsersListProps> = ({ users }) => {
  console.log(users);
  if (!users.length) {
    return <h1>Пользователи не найдены!</h1>;
  }

  return (
    <div className='users__list'>
      {users.map(user => (
        <UsersItem user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UsersList;
