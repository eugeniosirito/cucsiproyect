import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Manual() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <h1 className={styles.working}>*WORK IN PROGRESS</h1>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/manual/razas">
            Razas
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/manual/clases">
            Clases
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/manual/atributos">
            Atributos
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/manual/hechizos">
            Hechizos
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/manual/criaturas">
            Criaturas
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/manual/trabajos">
            Trabajadores
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Mapa*
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Guia de entrenamiento*
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Items*
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Crear cuenta*
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Dungeons*
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Eventos*
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Poder de cypher*
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Clanes*
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Puntos de usuario*
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Exp. x Nivel y Skills Naturales*
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Party*
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Quest*
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Domar animales*
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Guerras de clan*
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Castillos*
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Invocaciones*
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Isla Mara*
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Nobleza*
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Gema de liberación*
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Cofres*
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Cucsi puntos*
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Datos utiles*
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Solución de errores*
          </Link>
        </div>
        <div className={styles.links}>
          <Link className={styles.linkName} to="/home">
            Reglamento*
          </Link>
        </div>
      </div>
    </>
  );
}

export default Manual;
