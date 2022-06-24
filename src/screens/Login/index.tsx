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
import { PATTERNS } from 'constants/constantsPatterns';
import { STORAGE_VALUES } from 'constants/constantsStorageValues';

import styles from './styles.module.scss';
import wolox from './assets/wolox.png';

function Login() {
  const { register, handleSubmit, errors } = useForm<Usuario>();
  const [error, setError] = useState('');

  /* crear interfaz con { message: string } */
  const { mutate, isSuccess, isLoading } = useMutation<ApiResponse<unknown>, { message: string }, Usuario>(
    (formData: Usuario) => login(formData),
    {
      onSuccess: response => {
        if (!response.ok) {
          throw Error('Credenciales Invalidas');
        }
        if (response.headers) {
          LocalStorageService.setValue(
            STORAGE_VALUES.tokenValue,
            JSON.stringify(response.headers[CREDENTIALS.token])
          );
        }
      },
      onError: err => {
        setError(err.message);
      }
    }
  );
  const onSubmit: SubmitHandler<Usuario> = formData => mutate(formData);
  if (isSuccess) {
    return <Navigate to={PATH_NAMES.navBar} replace />;
  }

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
              value: PATTERNS.email,
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
          {isLoading ? i18next.t('LogIn:cargando') : i18next.t('LogIn:logIn')}
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
