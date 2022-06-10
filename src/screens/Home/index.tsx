import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import i18next from 'i18next';

import Input from 'components/Input';
import defaultFormData from 'constants/constants';

import wolox from './assets/wolox.png';
import styles from './styles.module.scss';

function Home() {
  const [formData, setFormData] = useState(defaultFormData);
  const { nombre, apellido, email, password, confPass } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));

  const onSubmit = () => {
    const user = { nombre, apellido, email, password, confPass };
    console.log(user);
    setFormData(defaultFormData);
  };

  const { register, errors, handleSubmit } = useForm();

  return (
    <>
      <div className={styles.app}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span className={styles.rectangleTop} />
          <img src={wolox} alt="" className={styles.woloxImg} />

          <Input
            label={i18next.t('LogIn:nameInput')}
            name="nombre"
            id="nombre"
            value={nombre}
            errors={errors?.nombre?.message}
            onChange={onChange}
            register={register({
              required: { value: true, message: 'Nombre obligatorio' }
            })}
          />

          <Input
            label={i18next.t('LogIn:surnameInput')}
            name="apellido"
            id="apellido"
            value={apellido}
            errors={errors?.apellido?.message}
            onChange={onChange}
            register={register({
              required: { value: true, message: 'Apellido obligatorio' }
            })}
          />

          <Input
            label={i18next.t('LogIn:emailInput')}
            name="email"
            id="email"
            value={email}
            errors={errors?.email?.message}
            onChange={onChange}
            register={register({
              required: { value: true, message: 'Email obligatorio' }
            })}
          />

          <Input
            label={i18next.t('LogIn:passwordInput')}
            name="password"
            id="password"
            type="password"
            value={password}
            errors={errors?.password?.message}
            onChange={onChange}
            register={register({
              required: { value: true, message: 'Password obligatorio' }
            })}
          />

          <Input
            label={i18next.t('LogIn:confPasswordInput')}
            name="password2"
            id="confPass"
            type="password"
            value={confPass}
            errors={errors?.password2?.message}
            onChange={onChange}
            register={register({
              required: { value: true, message: 'Confirmacion de password obligatorio' }
            })}
          />

          {/* <div className={styles.field}>
          <label className={styles.confPass}>{i18next.t('LogIn:confPasswordInput')}</label>
          <br />
          <input
            name="password2"
            type="password"
            id="confPass"
            className={styles.input}
            value={confPass}
            onChange={onChange}
            ref={register({
              required: { value: true, message: 'Password obligatorio' }
            })}
          />
          <span>{errors?.password2?.message}</span>
        </div> */}

          <button type="submit" className={styles.sign}>
            Sign Up
          </button>

          <div className={styles.rectangleBot} />

          <button type="submit" className={styles.login}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Home;
