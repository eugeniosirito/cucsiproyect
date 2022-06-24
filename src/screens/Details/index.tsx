import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import i18next from 'i18next';

import { STORAGE_KEYS } from 'constants/constantsLocalStorage';
import LocalStorageService from 'services/LocalStorageService';
import { getDetails } from 'services/getDetails';
import { PATH_NAMES } from 'constants/constantsPaths';

import styles from './styles.module.scss';
import badge from './assets/badge.png';
import arrow from './assets/arrow.png';

function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = LocalStorageService.getValue(STORAGE_KEYS.token);
  const uid = LocalStorageService.getValue(STORAGE_KEYS.uid);
  const client = LocalStorageService.getValue(STORAGE_KEYS.client);
  const headers = { token, uid, client, id };

  const { data } = useQuery('details', () => getDetails(headers).then(response => response.data));

  const goBack = () => {
    navigate(PATH_NAMES.navBar);
  };

  return (
    <div>
      <div className={styles.atrasArrow}>
        <img src={arrow} alt="" className={styles.arrow} />
        <button type="button" onClick={goBack} className={styles.atras}>
          {i18next.t('LogIn:atras')}
        </button>
      </div>
      <div className={styles.container}>
        <img src={badge} alt="" className={styles.badge} />
        <img src={data?.image_url} className={styles.book} />
        <div className={styles.contenido}>
          <h2 className={styles.title}>
            {data?.title} <p className={styles.genre}>({data?.genre})</p>
          </h2>
          <p className={styles.text}>
            {i18next.t('LogIn:author')}
            <p className={styles.textContent}>{data?.author}</p>
          </p>
          <p className={styles.text}>
            {i18next.t('LogIn:editor')}
            <p className={styles.textContent}>{data?.editor}</p>
          </p>
          <p className={styles.text}>
            {i18next.t('LogIn:year')}
            <p className={styles.textContent}>{data?.year}</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
