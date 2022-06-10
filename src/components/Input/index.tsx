import React from 'react';

import styles from './styles.module.scss';

interface Props {
  label: string;
  name: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register: React.ComponentProps<'input'>['ref'];
  errors?: string;
  type?: 'text' | 'password';
}

function Input({ label, name, id, value, onChange, register, errors, type = 'text' }: Props) {
  return (
    <div className={styles.field}>
      <label className={styles.nombre}>{label}</label>
      <br />
      <input
        name={name}
        type={type}
        id={id}
        className={styles.input}
        value={value}
        onChange={onChange}
        ref={register}
      />
      <br />
      <span className={styles.error}>{errors}</span>
    </div>
  );
}

export default Input;
