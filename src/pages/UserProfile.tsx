import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UsersService from '../API/UsersService';
import UserForm from '../components/Users/UserForm';
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/Loader/Loader';
import '../styles/UserProfile.scss';
import { IUser } from '../types/types';

const UserProfile: FC = () => {
  const params = useParams();
  const [user, setUser] = useState<IUser | null>(null);
  const [disable, setDisable] = useState<boolean>(true);

  const edit = () => {
    setDisable(false);
  };

  const [fetchUserByID, , userError] = useFetching(async (id: number) => {
    const response = await UsersService.getById(id);
    setUser(response.data);
  });

  useEffect(() => {
    fetchUserByID(params.id);
    // eslint-disable-next-line
  }, []);

  return (
    <div className='user-profile'>
      <button className='btn user-profile__btn' onClick={edit}>
        Редактировать
      </button>
      <p className='user-profile__header'>Профиль пользователя</p>
      {userError && <h1>Произошла ошибка {userError}</h1>}
      {user ? (
        <UserForm user={user} setUser={setUser} disable={disable} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default UserProfile;
