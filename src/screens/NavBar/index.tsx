import React from 'react';
import i18next from 'i18next';

import wolox from '../Home/assets/wolox.png';

import styles from './styles.module.scss';

function NavBar() {
  const deleteToken = () => {
    localStorage.removeItem('logged');
  };

  return (
    <div className={styles.container}>
      <div className={styles.rectangleTop} />
      <img src={wolox} alt="" className={styles.woloxImg} />
      <nav className={styles.navBar}>
        <a href="/" onClick={deleteToken} className={styles.logOut}>
          {i18next.t('LogIn:logOut')}
        </a>
      </nav>
    </div>
  );
}

export default NavBar;
