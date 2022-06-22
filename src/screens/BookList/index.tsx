// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from 'react';

import { getBooks } from 'services/getBookService';
import LocalStorageService from 'services/LocalStorageService';
import Libro from 'utils/LibrosTypes';
import { STORAGE_KEYS } from 'constants/constantsLocalStorage';

import styles from './styles.module.scss';

function BookList() {
  const [libros, setLibros] = useState<Libro[]>([]);
  const token = LocalStorageService.getValue(STORAGE_KEYS.token);
  const uid = LocalStorageService.getValue(STORAGE_KEYS.uid);
  const client = LocalStorageService.getValue(STORAGE_KEYS.client);
  const headers = { token, uid, client };

  const fetchLibros = () => {
    getBooks(headers).then(response => {
      const data = response.data as any;
      setLibros(data.page as Libro[]);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {libros.map(libro => (
          <div key={libro.id}>
            <img src={libro.image_url} className={styles.portada} />
            <div className={styles.textContainer}>
              <label className={styles.title}>{libro.title}</label>
              <label className={styles.author}>{libro.author}</label>
            </div>
          </div>
        ))}
      </div>

      <button type="submit" onClick={fetchLibros}>
        Traer Libros
      </button>
    </div>
  );
}

export default BookList;
