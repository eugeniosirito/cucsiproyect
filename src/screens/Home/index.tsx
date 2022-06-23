import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import i18next from 'i18next';

import Input from 'components/Input';
import { INPUT_NAMES } from 'constants/constantsUser';
import { Usuario } from 'utils/UsersTypes';
import { signUp } from 'services/SignupService';

import wolox from './assets/wolox.png';
import styles from './styles.module.scss';

function Home() {
  const { register, handleSubmit, errors } = useForm<Usuario>();
  const [error, setError] = useState(null);

  const onSubmit: SubmitHandler<Usuario> = formData => {
    signUp(formData)
      .then(res => {
        if (!res.ok) {
          throw Error('Invalid input information');
        }
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return (
    <form className={styles.app} onSubmit={handleSubmit(onSubmit)}>
      <span className={styles.rectangleTop} />
      <img src={wolox} alt="" className={styles.woloxImg} />

      <Input
        label={i18next.t('LogIn:nameInput')}
        name={INPUT_NAMES.first_name}
        id={INPUT_NAMES.first_name}
        errors={errors?.first_name?.message}
        register={register({
          required: { value: true, message: i18next.t('LogIn:nameError') }
        })}
      />

      <Input
        label={i18next.t('LogIn:surnameInput')}
        name={INPUT_NAMES.last_name}
        id={INPUT_NAMES.last_name}
        errors={errors?.last_name?.message}
        register={register({
          required: { value: true, message: i18next.t('LogIn:surnameError') }
        })}
      />

      <Input
        label={i18next.t('LogIn:emailInput')}
        name={INPUT_NAMES.email}
        id={INPUT_NAMES.email}
        errors={errors?.email?.message}
        register={register({
          required: { value: true, message: i18next.t('LogIn:emailError') }
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

      <Input
        label={i18next.t('LogIn:confPasswordInput')}
        name={INPUT_NAMES.password_confirmation}
        id={INPUT_NAMES.password_confirmation}
        type="password"
        errors={errors?.password_confirmation?.message}
        register={register({
          required: { value: true, message: i18next.t('LogIn:confPasswordError') }
        })}
      />
      <button type="submit" className={styles.sign}>
        {i18next.t('LogIn:signUp')}
      </button>

      <button type="submit" className={styles.login}>
        {i18next.t('LogIn:logIn')}
      </button>
      {error && <div className={styles.invalidInput}>{error}</div>}
    </form>
  );
}

export default Home;
