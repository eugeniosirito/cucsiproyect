import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import Input from 'components/Input';

import styles from './styles.module.scss';

function Login() {
  type Usuario = {
    email: string;
    password: string;
  };
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Usuario> = formData => {
    console.log(formData);
    navigate('/home');
  };

  const { register, handleSubmit, errors } = useForm<Usuario>();
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            name="email"
            id="email"
            errors={errors?.email?.message}
            register={register({
              required: { value: true, message: 'Email obligatorio' },
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'Formato Invalido'
              }
            })}
          />
          <Input
            label="Password"
            name="password"
            id="password"
            type="password"
            errors={errors?.password?.message}
            register={register({
              required: { value: true, message: 'Password obligatorio' }
            })}
          />

          <button type="submit" className={styles.buttonLogin}>
            Login
          </button>
          <Link to="/signup" className={styles.buttonRegister}>
            <span className={styles.register}>Registrarse</span>
          </Link>
        </form>
      </div>
    </header>
  );
}

export default Login;
