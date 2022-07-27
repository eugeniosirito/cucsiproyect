import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Clases() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.contenido}>
          <h1 className={styles.clases}>Clases</h1>
          <p className={styles.texto}>
            Al iniciar tu aventura eligiras que clase quieres ser, esto definirá tu características tales como
            el daño físico que infligirás, tu mana, tu vida, tu evasión, tu chance de acierto, tu
            equipamiento, entre otras cosas. Cada clase posee características propias de si mismo, y se
            diferencian siempre las unas de las otras.
          </p>
        </div>
        <div className={styles.listaClases}>
          <Link className={styles.links} to="/manual/clases/asesino">
            Asesino
          </Link>
          <Link className={styles.links} to="/manual/clases/bandido">
            Bandido
          </Link>
          <Link className={styles.links} to="/manual/clases/bardo">
            Bardo
          </Link>
          <Link className={styles.links} to="/manual/clases/cazador">
            Cazador
          </Link>
          <Link className={styles.links} to="/manual/clases/clerigo">
            Clérigo
          </Link>
          <Link className={styles.links} to="/manual/clases/druida">
            Druida
          </Link>
          <Link className={styles.links} to="/manual/clases/guerrero">
            Guerrero
          </Link>
          <Link className={styles.links} to="/manual/clases/ladron">
            Ladron
          </Link>
          <Link className={styles.links} to="/manual/clases/mago">
            Mago
          </Link>
          <Link className={styles.links} to="/manual/clases/paladin">
            Paladín
          </Link>
          <Link className={styles.links} to="/manual/clases/pirata">
            Pirata
          </Link>
          <Link className={styles.links} to="/manual/clases/trabajador">
            Trabajador
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Clases;
