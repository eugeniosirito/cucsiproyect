import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Plata() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.criaturasContainer}>
          <h1 className={styles.criaturasTitle}>Minas de Plata - Catacumbas de Inframundo</h1>
          <p className={styles.criaturasContenido}>
            Su entrada se situa en el Mapa 9 y las criaturas que encontraremos aquí son:
          </p>
        </div>
        <div className={styles.tabla}>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Criatura</th>
              <th className={styles.tableContent}>Vida</th>
              <th className={styles.tableContent}>Daño</th>
              <th className={styles.tableContent}>Defensa</th>
              <th className={styles.tableContent}>Def.Mágica</th>
              <th className={styles.tableContent}>PoderAtk</th>
              <th className={styles.tableContent}>Evasión</th>
              <th className={styles.tableContent}>Mágia</th>
              <th className={styles.tableContent}>EXP</th>
              <th className={styles.tableContent}>ORO</th>
              <th className={styles.tableContent}>Drop</th>
              <th className={styles.tableContent}>Ubicación/Mapa</th>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Golem de Plata</td>
              <td className={styles.tableContent2}>5.000</td>
              <td className={styles.tableContent2}>75/155</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>140</td>
              <td className={styles.tableContent2}>80</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>21.000</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>
                100% - Yacimientos de Plata (250), 15% - Gema Azul (1 Pto de User)
              </td>
              <td className={styles.tableContent2}>44</td>
            </tr>
          </table>
        </div>
        <Link to="/manual/criaturas">
          <h1 className={styles.volver}>Volver</h1>
        </Link>
      </div>
    </div>
  );
}

export default Plata;
