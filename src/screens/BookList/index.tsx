// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

import { getBooks } from 'services/getBookService';
import LocalStorageService from 'services/LocalStorageService';
import { STORAGE_KEYS } from 'constants/constantsLocalStorage';

import styles from './styles.module.scss';

function BookList() {
  const token = LocalStorageService.getValue(STORAGE_KEYS.token);
  const uid = LocalStorageService.getValue(STORAGE_KEYS.uid);
  const client = LocalStorageService.getValue(STORAGE_KEYS.client);
  const headers = { token, uid, client };

  const { data } = useQuery('books', () => getBooks(headers).then(response => response.data?.page));

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {data?.map(libro => (
          <div key={libro.id} className={styles.border}>
            <Link to={`/books/${libro.id}`}>
              <img src={libro.image_url} className={styles.portada} />
            </Link>
            <div className={styles.textContainer}>
              <label className={styles.title}>{libro.title}</label>
              <label className={styles.author}>{libro.author}</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
