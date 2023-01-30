import { ReactElement, useMemo, useState } from 'react';

import { LOCAL_STORAGE_ITEM } from '../constants';
import Context from './index';

interface Props {
  children: ReactElement;
}

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem(LOCAL_STORAGE_ITEM));

  const contextValue = useMemo(
    () => ({
      user,
      login: (loggedUser: string) => {
        setUser(loggedUser);
        localStorage.setItem(LOCAL_STORAGE_ITEM, loggedUser);
      },
      logout: () => {
        setUser(null);
        localStorage.removeItem(LOCAL_STORAGE_ITEM);
      }
    }),
    [user]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
