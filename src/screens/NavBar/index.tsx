import React from 'react';
import i18next from 'i18next';
import { useNavigate } from 'react-router-dom';

import LocalStorageService from 'services/LocalStorageService';
import { PATH_NAMES } from 'constants/constantsPaths';
import BookList from 'screens/BookList';

import wolox from '../Home/assets/wolox.png';

import styles from './styles.module.scss';

function NavBar() {
  const navigate = useNavigate();
  const deleteToken = () => {
    LocalStorageService.removeValue('token');
    LocalStorageService.removeValue('client');
    LocalStorageService.removeValue('uid');
    navigate(PATH_NAMES.login);
  };

  return (
    <nav className={styles.container}>
      <div className={styles.rectangleTop} />
      <img src={wolox} alt="" className={styles.woloxImg} />
      <div className={styles.navBar}>
        <button type="button" onClick={deleteToken} className={styles.logOut}>
          {i18next.t('LogIn:logOut')}
        </button>
      </div>
      <BookList />
    </nav>
  );
}

export default NavBar;
