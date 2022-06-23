import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import i18next from 'i18next';

import { PATH_NAMES } from 'constants/constantsPaths';
import { CREDENTIALS } from 'constants/constantsCredentials';
import Input from 'components/Input';
import { INPUT_NAMES } from 'constants/constantsUser';
import { Usuario } from 'utils/UsersTypes';
import { login } from 'services/LoginService';
import { PATTERNS } from 'constants/constantsPatterns';

import styles from './styles.module.scss';
import wolox from './assets/wolox.png';

function Login() {
  const { register, handleSubmit, errors } = useForm<Usuario>();
  const [error, setError] = useState(null);

  const onSubmit: SubmitHandler<Usuario> = formData => {
    login(formData)
      .then(res => {
        if (!res.ok) {
          throw Error('Credenciales Invalidas');
        }
        if (res.headers) {
          console.log(res.headers.client);
          console.log(res.headers.uid);
          console.log(res.headers[CREDENTIALS.token]);
          console.log(res);
        }
      })
      .catch(err => {
        setError(err.message);
      });
  };

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
          {i18next.t('LogIn:logIn')}
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
