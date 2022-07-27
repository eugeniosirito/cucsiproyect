import React from 'react';

import Navbar from 'screens/Navbar';
import Panel from 'screens/Panel';
import Shortcut from 'screens/Shortcut/index,';

import styles from './styles.module.scss';

function Staff() {
  return (
    <div>
      <Navbar />
      <Shortcut />
      <div className={styles.componentContainer}>
        <div className={styles.container}>
          <div className={styles.admin}>
            <div className={styles.administradores}>Administradores.</div>
          </div>
          <div className={styles.dioses}>
            <p className={styles.texto}>CHOTS: Administrador, Programacion, Web design. </p>
            <p className={styles.texto}>BelerianD: Administrador, Programacion. </p>
            <p className={styles.texto}>
              Oni Bara: Administrador, Director de Eventos,Community Management.{' '}
            </p>
            <p className={styles.texto}>
              MKILA: Director de Rol Masters, Mapeador, Ideas Generales & Eventos{' '}
            </p>
            <p className={styles.texto}>
              NegroSama: Indexador, Dateador, Rol Master, Ideas Generales & Soporte{' '}
            </p>
            <p className={styles.texto}>JaMeLa: Administrador, Programacion. </p>
          </div>
          <div className={styles.directorGm}>
            <div className={styles.director}>Director de GMs.</div>
          </div>
          <div className={styles.semiDioses}>
            <p className={styles.texto}>Alf: Diseño Grafico & Soporte</p>
          </div>
          <div className={styles.directorGm}>
            <div className={styles.director}>Director de GMs.</div>
          </div>
          <div className={styles.otros}>
            <p className={styles.texto}>Azarith: Director de soporte </p>
            <p className={styles.texto}>Shockwave: Soporte & Eventos </p>
            <p className={styles.texto}>Coolblack: Soporte & Eventos </p>
          </div>
        </div>
        <Panel />
      </div>
    </div>
  );
}

export default Staff;
