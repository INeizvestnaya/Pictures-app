import { createContext } from 'react';

import { LOCAL_STORAGE_ITEM } from '../constants';

interface ContextType {
  user: string | null;
  login: (user: string) => void;
  logout: () => void;
}

const defaultValue: ContextType = {
  user: localStorage.getItem(LOCAL_STORAGE_ITEM),
  login: () => {},
  logout: () => {}
};

const Context = createContext(defaultValue);

export default Context;
