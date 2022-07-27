import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Oro() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.criaturasContainer}>
          <h1 className={styles.criaturasTitle}>Minas de Oro - Dungeon Veriil</h1>
          <p className={styles.criaturasContenido}>
            Su entrada es por el Mapa 39 y se situa en el Mapa 75 y las criaturas que encontraremos aquí son:
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
              <td className={styles.tableContent2}>Golem de Oro</td>
              <td className={styles.tableContent2}>5.000</td>
              <td className={styles.tableContent2}>100/180</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>160</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>25.000</td>
              <td className={styles.tableContent2}>300</td>
              <td className={styles.tableContent2}>
                100% - Yacimientos de Oro (250), 15% - Gema Azul (1 Pto de User)
              </td>
              <td className={styles.tableContent2}>75</td>
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

export default Oro;
