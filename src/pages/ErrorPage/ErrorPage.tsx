import Header from '../../components/Header';
import classes from './ErrorPage.module.css';

const ErrorPage: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <p className={classes.label}>No such page</p>
    </div>
  );
};

export default ErrorPage;
