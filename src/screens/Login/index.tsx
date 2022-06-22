import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { Link, Navigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import i18next from 'i18next';
import { ApiResponse } from 'apisauce';

import { PATH_NAMES } from 'constants/constantsPaths';
import { CREDENTIALS } from 'constants/constantsCredentials';
import Input from 'components/Input';
import { INPUT_NAMES } from 'constants/constantsUser';
import { Usuario } from 'utils/UsersTypes';
import { login } from 'services/LoginService';
import LocalStorageService from 'services/LocalStorageService';
import { STORAGE_KEYS } from 'constants/constantsLocalStorage';

import styles from './styles.module.scss';
import wolox from './assets/wolox.png';

function Login() {
  const { register, handleSubmit, errors } = useForm<Usuario>();
  const [error, setError] = useState('');

  const { mutate, isSuccess, isLoading } = useMutation<ApiResponse<unknown>, { message: string }, Usuario>(
    (formData: Usuario) => login(formData),
    {
      onSuccess: response => {
        if (!response.ok) {
          throw Error('Credenciales Invalidas');
        }
        if (response.headers) {
          LocalStorageService.setValue(STORAGE_KEYS.token, response.headers[CREDENTIALS.token]);
          LocalStorageService.setValue(STORAGE_KEYS.client, response.headers.client);
          LocalStorageService.setValue(STORAGE_KEYS.uid, response.headers.uid);
        }
      },
      onError: err => {
        setError(err.message);
      }
    }
  );
  const onSubmit: SubmitHandler<Usuario> = formData => mutate(formData);
  if (isSuccess) {
    console.log(isSuccess, 'hola');
    return <Navigate to={PATH_NAMES.navBar} />;
  }
  console.log(isSuccess);

  return (
    <div className={styles.app}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span className={styles.rectangleTop} />
        <img src={wolox} alt="" className={styles.woloxImg} />

        <Input
          label={i18next.t('LogIn:emailInput')}
          name={INPUT_NAMES.email}
          id={INPUT_NAMES.email}
          errors={errors?.email?.message}
          register={register({
            required: { value: true, message: i18next.t('LogIn:emailError') },
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: i18next.t('LogIn:invalidEmail')
            }
          })}
        />

        <Input
          label={i18next.t('LogIn:passwordInput')}
          name={INPUT_NAMES.password}
          id={INPUT_NAMES.password}
          type="password"
          errors={errors?.password?.message}
          register={register({
            required: { value: true, message: i18next.t('LogIn:passwordError') }
          })}
        />

        <button type="submit" className={styles.sign}>
          {isLoading ? 'Cargando' : i18next.t('LogIn:logIn')}
        </button>

        <Link to={PATH_NAMES.signup} className={styles.login}>
          <span className={styles.signUpBtn}>{i18next.t('LogIn:signUp')}</span>
        </Link>
        {error && <div className={styles.invalidInput}>{error}</div>}
      </form>
    </div>
  );
}

export default Login;
