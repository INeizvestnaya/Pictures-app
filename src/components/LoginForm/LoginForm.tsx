import classNames from 'classnames';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import Context from '../../context';
import userData from '../../userData';
import classes from './LoginForm.module.css';

interface FormDataType {
  name: string;
  password: string;
}

interface InputsType {
  props: {
    type: string;
    className: string;
    placeholder: string;
  };
  registerName: 'name' | 'password';
}

const inputs: InputsType[] = [
  {
    props: {
      type: 'text',
      className: classes.input,
      placeholder: 'Enter your name'
    },
    registerName: 'name'
  },
  {
    props: {
      type: 'password',
      className: classNames(classes.input, classes['input-gap']),
      placeholder: 'Enter your password'
    },
    registerName: 'password'
  }
];

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError
  } = useForm<FormDataType>();

  const { login } = useContext(Context);

  const submitHandler = ({ name, password }: FormDataType) => {
    if (name !== userData.name) {
      reset();
      setError('name', { type: 'custom' });
      return;
    }

    if (password !== userData.password) {
      reset();
      setError('password', { type: 'custom' });
      return;
    }

    login(name);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
      <h1 className={classNames(classes.label, classes['center-text'])}>
        Log in
      </h1>
      <div className={classes['inputs-wrapper']}>
        {inputs.map(({ props, registerName }) => (
          <input
            key={props.placeholder}
            {...props}
            {...register(registerName)}
          />
        ))}
        <span
          style={{
            visibility: errors.name || errors.password ? 'initial' : 'hidden'
          }}
          className={classNames(classes['error-label'], classes['center-text'])}
        >
          Wrong name or password. Please, try again
        </span>
      </div>
      <button type="submit" className={classes.submit}>
        Continue
      </button>
    </form>
  );
};

export default LoginForm;
