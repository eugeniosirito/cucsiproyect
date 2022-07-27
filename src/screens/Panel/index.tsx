import React from 'react';

import styles from './styles.module.scss';

function Panel() {
  return (
    <div className={styles.container}>
      <div className={styles.descargar}>
        <h1>Jugar CucsiAo</h1>
        <button type="button" className={styles.button}>
          Descargar cliente
        </button>
      </div>
      <button type="button" className={styles.control}>
        Panel de control del usuario
      </button>
      <div className={styles.stats}>
        <span className={styles.textoStats}>Estado del servidor:</span>
        <span className={styles.textoStats}>Usuarios Online:</span>
        <span className={styles.textoStats}>Record:</span>
      </div>
      <div className={styles.castillos}>
        <span className={styles.castilloTitle}>Castillos</span>
        <span className={styles.nombreCastillo}>Norte</span>
        <span className={styles.nombreCastillo}>Sur</span>
        <span className={styles.nombreCastillo}>Este</span>
        <span className={styles.nombreCastillo}>Oeste</span>
      </div>
    </div>
  );
}

export default Panel;
