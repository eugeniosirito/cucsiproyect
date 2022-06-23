import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { STORAGE_KEYS } from 'constants/constantsLocalStorage';
import LocalStorageService from 'services/LocalStorageService';
import { getDetails } from 'services/getDetails';

import styles from './styles.module.scss';
/* import badge from './assets/badge.png'; */
import arrow from './assets/arrow.png';

function Details() {
  const { id } = useParams();
  const token = LocalStorageService.getValue(STORAGE_KEYS.token);
  const uid = LocalStorageService.getValue(STORAGE_KEYS.uid);
  const client = LocalStorageService.getValue(STORAGE_KEYS.client);
  const headers = { token, uid, client, id };

  const { data } = useQuery('details', () => getDetails(headers).then(response => response.data?.page));
  console.log(data);

  return (
    <div>
      <div className={styles.atrasArrow}>
        <img src={arrow} alt="" className={styles.arrow} />
        <a href="/nav_bar" className={styles.atras}>
          Atrás
        </a>
      </div>
      <div className={styles.container}>
        <img src={data?.image_url} className={styles.book} />
        <div className={styles.contenido}>
          <h2 className={styles.title}>
            {data?.title} ({data?.genre})
          </h2>
          <p className={styles.text}>{`Autor del libro: ${data?.author}`}</p>
          <p className={styles.text}>{`Editorial: ${data?.editor}`}</p>
          <p className={styles.text}>{`Año de publicación: ${data?.year}`}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
