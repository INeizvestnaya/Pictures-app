import { useContext } from 'react';
import { Navigate } from 'react-router';

import { LOGIN } from '../constants/routes';
import Context from '../context';

interface Props {
  children: JSX.Element;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { user } = useContext(Context);

  if (!user) {
    return <Navigate to={LOGIN} />;
  }

  return children;
};

export default PrivateRoute;
