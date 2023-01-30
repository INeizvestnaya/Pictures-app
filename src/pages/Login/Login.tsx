import background from '../../assets/background.png';
import LoginForm from '../../components/LoginForm';
import classes from './Login.module.css';

const Login: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <img src={background} alt="background" className={classes.img} />
      <div className={classes['form-wrapper']}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
