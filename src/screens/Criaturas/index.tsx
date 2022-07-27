import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Criaturas() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.criaturasContainer}>
          <h1 className={styles.criaturasTitle}>Criaturas</h1>
          <p className={styles.criaturasContenido}>
            En las tierras de Cucsi nos encontraremos gran variedad de criaturas a las cual enfrentarnos ya
            sea en tierra, alta mar o en los peligrosos Dungeons para así ir dotándonos y adquiriendo la
            experiencias necesarias para subir de nivel.
          </p>
        </div>
        <div className={styles.criaturasLista}>
          <Link className={styles.links} to="/manual/criaturas/newbie">
            Newbie Dungeon
          </Link>
          <Link className={styles.links} to="/manual/criaturas/mundoabierto">
            Mundo Abierto
          </Link>
          <Link className={styles.links} to="/manual/criaturas/catacumbas">
            Catacumbas
          </Link>
          <Link className={styles.links} to="/manual/criaturas/inframundo">
            Inframundo
          </Link>
          <Link className={styles.links} to="/manual/criaturas/altamar">
            Alta Mar
          </Link>
          <Link className={styles.links} to="/manual/criaturas/polo">
            Polo
          </Link>
          <Link className={styles.links} to="/manual/criaturas/laberinto">
            Laberinto Congelado
          </Link>
          <Link className={styles.links} to="/manual/criaturas/marabel">
            Dungeon Marabel
          </Link>
          <Link className={styles.links} to="/manual/criaturas/castillo">
            Dungeon Castillo
          </Link>
          <Link className={styles.links} to="/manual/criaturas/dinframundo">
            Dungeon Inframundo
          </Link>
          <Link className={styles.links} to="/manual/criaturas/verill">
            Dungeon Verill
          </Link>
          <Link className={styles.links} to="/manual/criaturas/dragon">
            Dungeon Dragon
          </Link>
          <Link className={styles.links} to="/manual/criaturas/hierro">
            Minas de Hierro
          </Link>
          <Link className={styles.links} to="/manual/criaturas/plata">
            Minas de Plata
          </Link>
          <Link className={styles.links} to="/manual/criaturas/oro">
            Minas de Oro
          </Link>
          <Link className={styles.links} to="/manual/criaturas/lana">
            Catacumbas de Lana
          </Link>
          <Link className={styles.links} to="/manual/criaturas/cementerio">
            Cementerio
          </Link>
          <Link className={styles.links} to="/manual/criaturas/mausoleo">
            Mausoleo
          </Link>
          <Link className={styles.links} to="/manual/criaturas/elfico">
            Bosque Elfico
          </Link>
          <Link className={styles.links} to="/manual/criaturas/mara">
            Isla Mara
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Criaturas;
