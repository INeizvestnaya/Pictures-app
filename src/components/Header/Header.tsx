import classNames from 'classnames';
import { memo, useContext } from 'react';
import { useNavigate } from 'react-router';

import logoutImg from '../../assets/logout.png';
import { LOGIN as LOGIN_PATH, PICTURES } from '../../constants/routes';
import Context from '../../context';
import classes from './Header.module.css';

const MAIN = 'Main';
const LOGIN = 'Login';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const { user, logout } = useContext(Context);

  const handleLogout = () => logout();

  const handleRedirect = () => {
    navigate(user ? PICTURES : LOGIN_PATH);
  };

  return (
    <header className={classes.header}>
      <h1 className={classes['header-name']}>LOREM</h1>
      <h2 className={classes.username}>{user?.toUpperCase()}</h2>
      <button
        type="button"
        className={classes['button-text']}
        onClick={handleRedirect}
      >
        {user ? MAIN : LOGIN}
      </button>
      {user && (
        <button type="button" onClick={handleLogout}>
          <img
            src={logoutImg}
            alt="logout"
            className={classes['logout-image']}
          />
          <span
            className={classNames(
              classes['button-text'],
              classes['logout-text']
            )}
          >
            Logout
          </span>
        </button>
      )}
    </header>
  );
};

export default memo(Header);
