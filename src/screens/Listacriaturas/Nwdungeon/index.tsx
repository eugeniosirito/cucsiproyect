/* eslint-disable max-lines */
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Newbie() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.criaturasContainer}>
          <h1 className={styles.criaturasTitle}>Newbie Dungeon</h1>
          <p className={styles.criaturasContenido}>
            Los primeros son dados en el Newbie Dungeon el cual es una mazmorra para los primeros niveles y
            así comenzar nuestra en estas tierras Cucsi:
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
              <td className={styles.tableContent2}>Gallo Salvaje</td>
              <td className={styles.tableContent2}>15 </td>
              <td className={styles.tableContent2}>1/1 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>5</td>
              <td className={styles.tableContent2}>5</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>75</td>
              <td className={styles.tableContent2}>2</td>
              <td className={styles.tableContent2}>90% - Pollo</td>
              <td className={styles.tableContent2}>19</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Serpiente</td>
              <td className={styles.tableContent2}>22 </td>
              <td className={styles.tableContent2}>1/1 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>110</td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>19</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Lobo</td>
              <td className={styles.tableContent2}>75</td>
              <td className={styles.tableContent2}>1/18 </td>
              <td className={styles.tableContent2}>8</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>80</td>
              <td className={styles.tableContent2}>25</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>735</td>
              <td className={styles.tableContent2}>74</td>
              <td className={styles.tableContent2}>100% - Piel de Lobo, 5% - Chuleta, 5% - Casco de Lobo.</td>
              <td className={styles.tableContent2}>19</td>
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

export default Newbie;
