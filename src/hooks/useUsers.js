import { useMemo } from 'react';

export const useStartedUsers = (users, sort) => {
  const sortedUsers = useMemo(() => {
    if (sort[1]) {
      return [...users].sort((a, b) =>
        a[sort[0]][sort[1]].localeCompare(b[sort[0]][sort[1]]),
      );
    } else if (sort[0]) {
      return [...users].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return users;
  }, [sort, users]);

  return sortedUsers;
};
