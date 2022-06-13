import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import i18next from 'i18next';

import Input from 'components/Input';
import { INPUT_NAMES } from 'constants/constantsInput';
import { Usuario } from 'utils/UsersTypes';

import wolox from './assets/wolox.png';
import styles from './styles.module.scss';

function Home() {
  const { register, handleSubmit, errors } = useForm<Usuario>();
  const onSubmit: SubmitHandler<Usuario> = formData => console.log(formData);

  return (
    <>
      <div className={styles.app}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span className={styles.rectangleTop} />
          <img src={wolox} alt="" className={styles.woloxImg} />

          <Input
            label={i18next.t('LogIn:nameInput')}
            name={INPUT_NAMES.nombre}
            id={INPUT_NAMES.nombre}
            errors={errors?.nombre?.message}
            register={register({
              required: { value: true, message: 'Nombre obligatorio' }
            })}
          />

          <Input
            label={i18next.t('LogIn:surnameInput')}
            name={INPUT_NAMES.apellido}
            id={INPUT_NAMES.apellido}
            errors={errors?.apellido?.message}
            register={register({
              required: { value: true, message: 'Apellido obligatorio' }
            })}
          />

          <Input
            label={i18next.t('LogIn:emailInput')}
            name={INPUT_NAMES.email}
            id={INPUT_NAMES.email}
            errors={errors?.email?.message}
            register={register({
              required: { value: true, message: 'Email obligatorio' }
            })}
          />

          <Input
            label={i18next.t('LogIn:passwordInput')}
            name={INPUT_NAMES.password}
            id={INPUT_NAMES.password}
            type="password"
            errors={errors?.password?.message}
            register={register({
              required: { value: true, message: 'Password obligatorio' }
            })}
          />

          <Input
            label={i18next.t('LogIn:confPasswordInput')}
            name={INPUT_NAMES.confPass}
            id={INPUT_NAMES.confPass}
            type="password"
            errors={errors?.confPass?.message}
            register={register({
              required: { value: true, message: 'Confirmacion de password obligatorio' }
            })}
          />
          <button type="submit" className={styles.sign}>
            {i18next.t('LogIn:signUp')}
          </button>

          <div className={styles.rectangleBot} />

          <button type="submit" className={styles.login}>
            {i18next.t('LogIn:logIn')}
          </button>
        </form>
      </div>
    </>
  );
}

export default Home;
