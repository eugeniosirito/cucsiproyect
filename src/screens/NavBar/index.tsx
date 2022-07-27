/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


import cucsi from '../LogIn/assets/logo.png';

import styles from './styles.module.scss';

function Navbar() {
  const navigate = useNavigate();
  const redirect = () => {
    navigate('/home');
  };

  return (
    <div className={styles.navBar}>
      <img onClick={redirect} src={cucsi} className={styles.cucsi} />
      <div className={styles.navegacion}>
        <Link to="/home" className={styles.a}>
          Home
        </Link>
        <Link to="/ranking" className={styles.a}>
          Ranking
        </Link>
        <Link to="/manual" className={styles.a}>
          Manual
        </Link>
        <Link to="/staff" className={styles.a}>
          Staff
        </Link>
        <Link to="/galeria" className={styles.a}>
          Galeria
        </Link>
        <Link to="/reglamento" className={styles.a}>
          Reglamento
        </Link>
        <Link to="/contact" className={styles.a}>
          Contacto
        </Link>
        <Link to="/" className={styles.a}>
          Log Out
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
