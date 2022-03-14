import UserProfile from '../pages/UserProfile';
import UsersList from '../pages/Users';

export const routes = [
  { path: '/', element: <UsersList /> },
  { path: '/users', element: <UsersList /> },
  { path: '/profile/:id', element: <UserProfile /> },
];
