import React from 'react';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Ullathorpe() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.hechizosTitle}>Ciudad de Ullathorpe</h1>
        <p className={styles.contenido}>
          La Ciudad de Ullathorpe se encuentra situada en el Mapa 1 y en ella encontraremos:
        </p>
        <table>
          <tr className={styles.tableStyle}>
            <th className={styles.tableContent}>Nombre</th>
            <th className={styles.tableContent}>Precio</th>
            <th className={styles.tableContent}>Skills</th>
            <th className={styles.tableContent}>Mana</th>
            <th className={styles.tableContent}>Stamina</th>
            <th className={styles.tableContent}>Descripción</th>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Curar veneno</td>
            <td className={styles.tableContent2}>200</td>
            <td className={styles.tableContent2}>10</td>
            <td className={styles.tableContent2}>10</td>
            <td className={styles.tableContent2}>1</td>
            <td className={styles.tableContent2}>Cura el veneno</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Destello Arcano</td>
            <td className={styles.tableContent2}>500</td>
            <td className={styles.tableContent2}>6</td>
            <td className={styles.tableContent2}>4</td>
            <td className={styles.tableContent2}>1</td>
            <td className={styles.tableContent2}>Inflinge entre 4 a 7 de Daño Magico al Objetivo</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Impulso Arcano</td>
            <td className={styles.tableContent2}>2300</td>
            <td className={styles.tableContent2}>12</td>
            <td className={styles.tableContent2}>10</td>
            <td className={styles.tableContent2}>5</td>
            <td className={styles.tableContent2}>Inflinge entre 6 a 12 de Daño Magico al Objetivo</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Curar heridas leves</td>
            <td className={styles.tableContent2}>500</td>
            <td className={styles.tableContent2}>15</td>
            <td className={styles.tableContent2}>10</td>
            <td className={styles.tableContent2}>1</td>
            <td className={styles.tableContent2}>Restaura la Salud del Objetivo entre 1 y 5</td>
          </tr>
        </table>
        <p className={styles.contenido}>
          <span className={styles.aclaracion}>Aclaración: </span>Los precios mencionados son con 0 puntos en
          comercio.
        </p>
      </div>
    </div>
  );
}

export default Ullathorpe;
