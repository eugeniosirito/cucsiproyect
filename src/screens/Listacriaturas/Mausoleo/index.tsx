import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Mausoleo() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.criaturasContainer}>
          <h1 className={styles.criaturasTitle}>Mausoleo</h1>
          <p className={styles.criaturasContenido}>
            El Cementerio (Mapa 79), es un lugar donde los guerreros descansan pero no todo es así ya que a su
            vez es una de las zonas más tétricas dado a que esta infestados de criaturas las cuales no
            pudieron encontrar el descanso eterno. En una de sus criptas se esconde el Mausoleo (Mapa 101)
            plagado de criaturas, en esta zona encontrarás:
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
              <td className={styles.tableContent2}>Licántropo</td>
              <td className={styles.tableContent2}>2.500</td>
              <td className={styles.tableContent2}>15/45 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>25</td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>10.000 </td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}> 35% - Leña (250), 15% - Gema Azul (1 Pto de User)</td>
              <td className={styles.tableContent2}>101</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Ave de las Profundidades </td>
              <td className={styles.tableContent2}>2.500</td>
              <td className={styles.tableContent2}>30/60 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>40</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>10.000 </td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>
                35% - Yacimientos de Hierro (250), 15% - Gema Azul (1 Pto de User)
              </td>
              <td className={styles.tableContent2}>101</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Arpia</td>
              <td className={styles.tableContent2}>2.500</td>
              <td className={styles.tableContent2}>45/55 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>35</td>
              <td className={styles.tableContent2}>60</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>10.000</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>
                35% - Lana de Oveja (250), 15% - Gema Azul (1 Pto de User)
              </td>
              <td className={styles.tableContent2}>101</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Momia</td>
              <td className={styles.tableContent2}>2.500</td>
              <td className={styles.tableContent2}>60/70</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>40</td>
              <td className={styles.tableContent2}>60</td>
              <td className={styles.tableContent2}>20</td>
              <td className={styles.tableContent2}>10.000</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>
                35% - Yacimientos de Plata (250),15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos
                de User)
              </td>
              <td className={styles.tableContent2}>101</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Hada Oscura</td>
              <td className={styles.tableContent2}>2.500</td>
              <td className={styles.tableContent2}>45/85 0</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>45</td>
              <td className={styles.tableContent2}>40</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>10.000 </td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>
                {' '}
                35% - Lana de Cabra (250),15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User){' '}
              </td>
              <td className={styles.tableContent2}>101</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Rey Scroll </td>
              <td className={styles.tableContent2}>2.500</td>
              <td className={styles.tableContent2}>55/100</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>55</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>10.000 </td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>
                35% - Raíz (250), 15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User){' '}
              </td>
              <td className={styles.tableContent2}>101</td>
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

export default Mausoleo;
