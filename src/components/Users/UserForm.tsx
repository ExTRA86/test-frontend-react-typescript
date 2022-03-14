import React, { FC } from 'react';
import '../../styles/UserForm.scss';
import { IUser } from '../../types/types';

interface UserFormProps {
  user: IUser;
  setUser: (_value: any) => void;
  disable: boolean;
}

const UserForm: FC<UserFormProps> = ({ user, setUser, disable }) => {
  function send(e: React.MouseEvent<HTMLButtonElement>) {
    if (
      user.name &&
      user.username &&
      user.email &&
      user.address.street &&
      user.address.city &&
      user.address.zipcode &&
      user.phone &&
      user.website
    ) {
      e.preventDefault();
      console.log(JSON.stringify(user));
    }
  }

  return (
    <form className='user-form'>
      <div>
        <p>Name</p>
        <input
          className='user-form__input'
          value={user.name}
          type='text'
          disabled={disable}
          onChange={e => setUser({ ...user, name: e.target.value })}
          required
        />
      </div>
      <div>
        <p>User name</p>
        <input
          className='user-form__input'
          value={user.username}
          type='text'
          disabled={disable}
          onChange={e => setUser({ ...user, username: e.target.value })}
          required
        />
      </div>
      <div>
        <p>E-mail</p>
        <input
          className='user-form__input'
          value={user.email}
          type='text'
          disabled={disable}
          onChange={e => setUser({ ...user, email: e.target.value })}
          required
        />
      </div>
      <div>
        <p>Street</p>
        <input
          className='user-form__input'
          value={user.address.street}
          type='text'
          disabled={disable}
          onChange={e =>
            setUser({
              ...user,
              address: { ...user.address, street: e.target.value },
            })
          }
          required
        />
      </div>
      <div>
        <p>City</p>
        <input
          className='user-form__input'
          value={user.address.city}
          type='text'
          disabled={disable}
          onChange={e =>
            setUser({
              ...user,
              address: { ...user.address, city: e.target.value },
            })
          }
          required
        />
      </div>
      <div>
        <p>Zip code</p>
        <input
          className='user-form__input'
          value={user.address.zipcode}
          type='text'
          disabled={disable}
          onChange={e =>
            setUser({
              ...user,
              address: { ...user.address, zipcode: e.target.value },
            })
          }
          required
        />
      </div>
      <div>
        <p>Phone</p>
        <input
          className='user-form__input'
          value={user.phone}
          type='text'
          disabled={disable}
          onChange={e => setUser({ ...user, phone: e.target.value })}
          required
        />
      </div>
      <div>
        <p>Website</p>
        <input
          className='user-form__input'
          value={user.website}
          type='text'
          disabled={disable}
          onChange={e => setUser({ ...user, website: e.target.value })}
          required
        />
      </div>
      <div>
        <p>Comment</p>
        <textarea
          className='user-form__comment'
          disabled={disable}
          onChange={e => setUser({ ...user, comment: e.target.value })}
        />
      </div>
      <button
        disabled={disable}
        className={`btn user-form__btn ${disable ? '' : 'active'}`}
        onClick={send}
      >
        Отправить
      </button>
    </form>
  );
};

export default UserForm;
