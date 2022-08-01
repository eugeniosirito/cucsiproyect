import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Items() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.contenido}>
          <h1 className={styles.clases}>Items de las Tierras CucsiAO</h1>
        </div>
        <div className={styles.tipoItem}>
          <div className={styles.itemDiv1}>
            <h1 className={styles.clases}>Items de comerciante</h1>
          </div>
          <div className={styles.itemDiv2}>
            <h1 className={styles.clases}>Items de creación</h1>
          </div>
        </div>
        <div className={styles.lista}>
          <div className={styles.listaClases1}>
            <Link className={styles.links} to="/manual/clases/asesino">
              Armas
            </Link>
            <Link className={styles.links} to="/manual/clases/bandido">
              Armaduras
            </Link>
            <Link className={styles.links} to="/manual/clases/bardo">
              Escudos
            </Link>
            <Link className={styles.links} to="/manual/clases/bardo">
              Cascos
            </Link>
            <Link className={styles.links} to="/manual/clases/bardo">
              Carpinteria
            </Link>
            <Link className={styles.links} to="/manual/clases/bardo">
              Tunicas
            </Link>
          </div>
          <div className={styles.listaClases2}>
            <Link className={styles.links} to="/manual/clases/asesino">
              Armas
            </Link>
            <Link className={styles.links} to="/manual/clases/bandido">
              Armaduras
            </Link>
            <Link className={styles.links} to="/manual/clases/bardo">
              Escudos
            </Link>
            <Link className={styles.links} to="/manual/clases/bardo">
              Cascos
            </Link>
            <Link className={styles.links} to="/manual/clases/bardo">
              Carpinteria
            </Link>
            <Link className={styles.links} to="/manual/clases/bardo">
              Tunicas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
