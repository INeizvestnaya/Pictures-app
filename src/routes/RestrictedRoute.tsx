import { useContext } from 'react';
import { Navigate } from 'react-router';

import { PICTURES } from '../constants/routes';
import Context from '../context';

interface Props {
  children: JSX.Element;
}

const RestrictedRoute: React.FC<Props> = ({ children }) => {
  const { user } = useContext(Context);

  if (user) {
    return <Navigate to={PICTURES} />;
  }

  return children;
};

export default RestrictedRoute;
