import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Trabajos() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.trabajoContainer}>
          <h1 className={styles.trabajoTitle}>Trabajo</h1>
          <p className={styles.trabajoContenido}>
            En las tierras de CucsiAO, el trabajo es un medio muy importante para el progreso de tu personaje
            o de un clan en sí. Existe una clase llamada “Trabajador”, que será la que mejor se desempeñe en
            las tareas que en breve describiremos. Estas son los diferentes trabajos que tu personaje podrá
            realizar:
          </p>
        </div>
        <div className={styles.trabajosLista}>
          <Link className={styles.links} to="/manual/trabajos/pesca">
            Pesca
          </Link>
          <Link className={styles.links} to="/manual/trabajos/tala">
            Tala
          </Link>
          <Link className={styles.links} to="/manual/trabajos/carpinteria">
            Carpintería
          </Link>
          <Link className={styles.links} to="/manual/trabajos/botanica">
            Botánica
          </Link>
          <Link className={styles.links} to="/manual/trabajos/alquimia">
            Alquimia
          </Link>
          <Link className={styles.links} to="/manual/trabajos/mineria">
            Minería
          </Link>
          <Link className={styles.links} to="/manual/trabajos/fragua">
            Fragua
          </Link>
          <Link className={styles.links} to="/manual/trabajos/herreria">
            Herrería
          </Link>
          <Link className={styles.links} to="/manual/trabajos/esquila">
            Esquila
          </Link>
          <Link className={styles.links} to="/manual/trabajos/hilado">
            Hilado
          </Link>
          <Link className={styles.links} to="/manual/trabajos/sastreria">
            Sastrería
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Trabajos;
