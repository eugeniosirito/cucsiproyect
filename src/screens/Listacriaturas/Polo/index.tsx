import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Polo() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.criaturasContainer}>
          <h1 className={styles.criaturasTitle}>Polo</h1>
          <p className={styles.criaturasContenido}>
            Al Sur de la ciudad Terminus encontraremos el lugar más frío de toda la tierra Cucsi, Polo, el
            cual se encuentra situado en el Mapa78. Aquí prospera la riqueza en todas sus criaturas que las
            habitan por tal motivo todos los aventureros se inician su travesía a las frías tierras para
            hacerse con ella. No obstante dado al clima fríamente drástico que lo acompaña deberán de estar
            adecuadamente vestidos para ello deberán de utilizar la Túnica Invernal ya que caso contrario
            MORIREMOS de frío. Adentrándonos al interior del Polo podremos descubrir los misterios que en ella
            se encuentran, recorriendo y explorando la zona, la cual nos toparemos con unas catacumbas que nos
            remitirán al Laberinto Congelado que si logramos avanzar y superar el desafío llegaremos a
            encontrar la Ciudad Perdida en donde habita una bestia legendaria dormida. Deberemos de ser Nivel
            25 y las criaturas que hallaremos aquí son:
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
              <td className={styles.tableContent2}>1.500 </td>
              <td className={styles.tableContent2}>20/60 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>25</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>1.500</td>
              <td className={styles.tableContent2}>2.400</td>
              <td className={styles.tableContent2}>15% - Gema Azul (1 Pto de User)</td>
              <td className={styles.tableContent2}>78</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Lobo Polar </td>
              <td className={styles.tableContent2}>2.600 </td>
              <td className={styles.tableContent2}>60/80 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>80</td>
              <td className={styles.tableContent2}>35</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>2.500</td>
              <td className={styles.tableContent2}>3.200</td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User),10% - Gema Naranja (3 Ptos de User)
              </td>
              <td className={styles.tableContent2}>78</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Oso Polar </td>
              <td className={styles.tableContent2}>1.700</td>
              <td className={styles.tableContent2}>1/18 </td>
              <td className={styles.tableContent2}>65/100 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>120</td>
              <td className={styles.tableContent2}>65</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>7.000</td>
              <td className={styles.tableContent2}>90</td>
              <td className={styles.tableContent2}>100% - Piel de Oso Polar</td>
              <td className={styles.tableContent2}>78</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Golem Junior de Hielo </td>
              <td className={styles.tableContent2}>8.000 </td>
              <td className={styles.tableContent2}>150/300 </td>
              <td className={styles.tableContent2}>65/100 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>20.000 </td>
              <td className={styles.tableContent2}>12.000</td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos
                de User)
              </td>
              <td className={styles.tableContent2}>78</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Rey Golem de Polo </td>
              <td className={styles.tableContent2}>12.000 </td>
              <td className={styles.tableContent2}>250/400 </td>
              <td className={styles.tableContent2}>65/100 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>25.000</td>
              <td className={styles.tableContent2}>17.000 </td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos
                de User), 3% - Túnica Invernal (Hombre), 3% - Túnica Invernal (Mujer), 3% - Túnica Invernal
                (Bajos)
              </td>
              <td className={styles.tableContent2}>78</td>
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

export default Polo;
