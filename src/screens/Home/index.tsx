import React, { useState } from 'react';

import wolox from './assets/wolox.png';
import styles from './styles.module.scss';

function Home() {
  type Usuario = {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    confPass: string;
  };
  const defaultFormData: Usuario = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confPass: ''
  };

  const [formData, setFormData] = useState(defaultFormData);
  const { nombre, apellido, email, password, confPass } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = { nombre, apellido, email, password, confPass };
    console.log(user);
    setFormData(defaultFormData);
  };

  return (
    <div className={styles.app}>
      <form onSubmit={onSubmit}>
        <img src={wolox} alt="" />

        <div className={styles.field}>
          <label htmlFor="nombre" className={styles.nombre}>
            Nombre
          </label>
          <br />
          <input type="text" id="nombre" className={styles.input} value={nombre} onChange={onChange} />
          <br />
        </div>

        <div className={styles.field}>
          <label htmlFor="apellido" className={styles.apellido}>
            Apellido
          </label>
          <br />
          <input type="text" id="apellido" className={styles.input} value={apellido} onChange={onChange} />
          <br />
        </div>

        <div className={styles.field}>
          <label htmlFor="email" className={styles.email}>
            Email
          </label>
          <br />
          <input type="mail" id="email" className={styles.input} value={email} onChange={onChange} />
          <br />
        </div>

        <div className={styles.field}>
          <label htmlFor="password" className={styles.password}>
            Password
          </label>
          <br />
          <input
            type="password"
            id="password"
            className={styles.input}
            value={password}
            onChange={onChange}
          />
          <br />
        </div>

        <div className={styles.field}>
          <label htmlFor="confPass" className={styles.confPass}>
            Confirmación de Password
          </label>
          <br />
          <input
            type="password"
            id="confPass"
            className={styles.input}
            value={confPass}
            onChange={onChange}
          />
        </div>
        <br />
        <button type="submit" className={styles.sign}>
          Sign Up
        </button>
        <hr />
        <button type="submit" className={styles.log}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Home;
