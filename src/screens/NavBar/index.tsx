import React from 'react';
import i18next from 'i18next';

import BookList from 'screens/BookList';
import LocalStorageService from 'services/LocalStorageService';

import wolox from '../Home/assets/wolox.png';

import styles from './styles.module.scss';

function NavBar() {
  const deleteToken = () => {
    LocalStorageService.removeValue('token');
    LocalStorageService.removeValue('client');
    LocalStorageService.removeValue('uid');
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.rectangleTop} />
        <img src={wolox} alt="" className={styles.woloxImg} />
        <nav className={styles.navBar}>
          <a href="/" onClick={deleteToken} className={styles.logOut}>
            {i18next.t('LogIn:logOut')}
          </a>
        </nav>
      </div>
      <BookList />
    </div>
  );
}

export default NavBar;
