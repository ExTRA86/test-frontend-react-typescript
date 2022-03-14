import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/UserItem.scss';
import { IAllUsers } from '../../types/types';

interface UsersItemProps {
  user: IAllUsers;
}

const UsersItem: FC<UsersItemProps> = ({ user }) => {
  const router = useNavigate();

  return (
    <div className='users__list user-item'>
      <p>
        <span>ФИО: </span>
        {user.name}
      </p>
      <p>
        <span>город: </span>
        {user.address.city}
      </p>
      <p>
        <span>компания: </span>
        {user.company.name}
      </p>
      <p
        className='user-item__details'
        onClick={() => router('/profile/' + user.id)}
      >
        Подробнее
      </p>
    </div>
  );
};

export default UsersItem;
