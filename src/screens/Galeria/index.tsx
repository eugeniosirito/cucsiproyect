import React from 'react';

import Navbar from 'screens/Navbar';
import Panel from 'screens/Panel';
import Shortcut from 'screens/Shortcut/index,';

import styles from './styles.module.scss';

function Galeria() {
  return (
    <div>
      <Navbar />
      <Shortcut />
      <div className={styles.componentContainer}>
        <div className={styles.container}>
          <div className={styles.guerra}>
            <div className={styles.salaGuerra}>Sala de Guerra</div>
          </div>
          <div className={styles.video1}>
            <video controls>
              <source src="video1.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={styles.guerra}>
            <div className={styles.salaGuerra}>Guerra de facciones</div>
          </div>
          <div className={styles.video1}>
            <video controls>
              <source src="video1.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={styles.guerra}>
            <div className={styles.salaGuerra}>Torneo 1vs1</div>
          </div>
          <div className={styles.video1}>
            <video controls>
              <source src="video1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <Panel />
      </div>
    </div>
  );
}

export default Galeria;
