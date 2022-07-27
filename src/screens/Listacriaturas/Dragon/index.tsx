import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Dragon() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.criaturasContainer}>
          <h1 className={styles.criaturasTitle}>Dungeon Dragon</h1>
          <p className={styles.criaturasContenido}>
            Mejor conocido como DD se encuentra situado en el Mapa 47 pero poder ingresar deberemos de ser
            mínimamente Nivel 40. Un territorio infestados de poderosos Dragones los cuales deberemos de ir
            bien preparados para enfrentarnos a ellos pero muy bastos de experiencia. Aquí nos toparemos con:
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
              <td className={styles.tableContent2}>Dragón Rojo </td>
              <td className={styles.tableContent2}>3.000</td>
              <td className={styles.tableContent2}>100/150 </td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>380</td>
              <td className={styles.tableContent2}>250</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>49.500</td>
              <td className={styles.tableContent2}>400</td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 5% - Gema Naranja (3 Ptos de User)
              </td>
              <td className={styles.tableContent2}>77</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Gran Dragón Rojo</td>
              <td className={styles.tableContent2}>25.000</td>
              <td className={styles.tableContent2}>100/150 </td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>300</td>
              <td className={styles.tableContent2}>250</td>
              <td className={styles.tableContent2}>Imparalizable - Lanza Tormenta de Fuego y Apocalipsis</td>
              <td className={styles.tableContent2}>355.000</td>
              <td className={styles.tableContent2}>5.000</td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos
                de User), 5% - Armadura de Placas Completa, 5% - Armadura de Placas Completa (Mujer), 5% -
                Armadura de Placas Completa (E/G)
              </td>
              <td className={styles.tableContent2}>77</td>
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

export default Dragon;
