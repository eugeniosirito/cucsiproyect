import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Laberinto() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.criaturasContainer}>
          <h1 className={styles.criaturasTitle}>Laberinto Congelado</h1>
          <p className={styles.criaturasContenido}>
            Aquí yace el camino a la Ciudad Perdida de Polo pero para poder acceder deberemos de atravesar
            dicho laberinto el cual está infestado de criaturas y caminos errantes hasta dar con el correcto y
            encontrar la entrada a esta Ciudad. Pero para poder acceder al Laberinto Congelado deberemos de
            ser Nivel 30 y las criaturas que encontraremos son:
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
              <td className={styles.tableContent2}>Pingüino</td>
              <td className={styles.tableContent2}>1.500</td>
              <td className={styles.tableContent2}>20/60</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>25</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>1.500</td>
              <td className={styles.tableContent2}>2.400</td>
              <td className={styles.tableContent2}>15% - Gema Azul (1 Pto de User)</td>
              <td className={styles.tableContent2}>138</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Lobo Polar</td>
              <td className={styles.tableContent2}>2.600</td>
              <td className={styles.tableContent2}>60/80</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>60/80 </td>
              <td className={styles.tableContent2}>35</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>2.500</td>
              <td className={styles.tableContent2}>3.200</td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User){' '}
              </td>
              <td className={styles.tableContent2}>138</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Hombre de las Nieves </td>
              <td className={styles.tableContent2}>4.300</td>
              <td className={styles.tableContent2}>80/120 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>135</td>
              <td className={styles.tableContent2}>25</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>5.000</td>
              <td className={styles.tableContent2}>6.000</td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User){' '}
              </td>
              <td className={styles.tableContent2}>138</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Beholder Polar </td>
              <td className={styles.tableContent2}>4.900</td>
              <td className={styles.tableContent2}>100/200 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>125</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>6.250</td>
              <td className={styles.tableContent2}>8.000</td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User){' '}
              </td>
              <td className={styles.tableContent2}>138</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Gorila Polar </td>
              <td className={styles.tableContent2}>5.700</td>
              <td className={styles.tableContent2}>95/145 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>45</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>7.500 </td>
              <td className={styles.tableContent2}>10.000 </td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User){' '}
              </td>
              <td className={styles.tableContent2}>138</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Rey Golem de Polo </td>
              <td className={styles.tableContent2}>12.000 </td>
              <td className={styles.tableContent2}>250/400 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>25.000 </td>
              <td className={styles.tableContent2}>17.000 </td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 10% - Gema Verde (5 Ptos
                de User), 3% - Túnica Invernal (Hombre), 3% - Túnica Invernal (Mujer), 3% - Túnica Invernal
                (Bajos){' '}
              </td>
              <td className={styles.tableContent2}>138</td>
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

export default Laberinto;
