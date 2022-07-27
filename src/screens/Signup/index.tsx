import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Input from 'components/Input';

import styles from './styles.module.scss';

function Signup() {
  type Usuario = {
    email: string;
    password: string;
    passwordConfir: string;
  };
  const { register, handleSubmit, errors } = useForm<Usuario>();
  const onSubmit: SubmitHandler<Usuario> = formData => console.log(formData);

  return (
    <header>
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

          <Input
            label="Confirmación de password"
            name="password_confirmation"
            id="password_confirmation"
            type="password"
            errors={errors?.password?.message}
            register={register({
              required: { value: true, message: 'Password obligatorio' }
            })}
          />

          <button type="submit" className={styles.buttonLogin}>
            Registrarse
          </button>
          <Link to="/" className={styles.buttonLogin}>
            <span className={styles.login}>Login</span>
          </Link>
        </form>
      </div>
    </header>
  );
}

export default Signup;
