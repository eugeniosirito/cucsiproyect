import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Altamar() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.criaturasContainer}>
          <h1 className={styles.criaturasTitle}>Zona de Alta Mar</h1>
          <p className={styles.criaturasContenido}>
            Las Aguas abiertas del mundo Cucsi habitan criaturas de todo tipo por dicho motivo recomendamos
            tomar tus debidos recaudos a la hora de embarcarte y navegar. En nuestros recorrido por las aguas,
            al norte de la ciudad de Banderbill, podremos toparnos con el famoso Barco Pirata ubicado en el
            Mapa 33 pero deberás estará preparado para enfrentarte a los temibles Piratas que deseosos de
            hacerse con tus pertenencias como botín. También al Suroeste de la ciudad Terminus podremos
            toparnos con un Barco Abandonado ubicado en el Mapa 49 infestado por poderosísimas criaturas
            prehistóricas. En nuestra odisea por las aguas abiertas del mundo podremos encontrar las
            siguientes criaturas:
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
              <td className={styles.tableContent2}>Piraña</td>
              <td className={styles.tableContent2}>800</td>
              <td className={styles.tableContent2}>75/110</td>
              <td className={styles.tableContent2}>15</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>70</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>5.750</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>33-49</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Sirena</td>
              <td className={styles.tableContent2}>1.300</td>
              <td className={styles.tableContent2}>85/110</td>
              <td className={styles.tableContent2}>25</td>
              <td className={styles.tableContent2}>15</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>70</td>
              <td className={styles.tableContent2}>Lanza Paralizar</td>
              <td className={styles.tableContent2}>13.650</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>15% - Gema Azul (1 Pto de User)</td>
              <td className={styles.tableContent2}>33</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Lutra</td>
              <td className={styles.tableContent2}>2.100</td>
              <td className={styles.tableContent2}>60/115</td>
              <td className={styles.tableContent2}>20</td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>22.050</td>
              <td className={styles.tableContent2}>250</td>
              <td className={styles.tableContent2}>15% - Gema Azul (1 Pto de User)</td>
              <td className={styles.tableContent2}>33</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Tiburón</td>
              <td className={styles.tableContent2}>2.500</td>
              <td className={styles.tableContent2}>100/175</td>
              <td className={styles.tableContent2}>15</td>
              <td className={styles.tableContent2}>5</td>
              <td className={styles.tableContent2}>220</td>
              <td className={styles.tableContent2}>180</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>27.500</td>
              <td className={styles.tableContent2}>300</td>
              <td className={styles.tableContent2}>15% - Gema Azul (1 Pto de User)</td>
              <td className={styles.tableContent2}>33-49</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Pirata</td>
              <td className={styles.tableContent2}>2.250</td>
              <td className={styles.tableContent2}>200/300</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>300</td>
              <td className={styles.tableContent2}>130</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>33.350</td>
              <td className={styles.tableContent2}>900</td>
              <td className={styles.tableContent2}>
                {' '}
                15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User)
              </td>
              <td className={styles.tableContent2}>33</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Dinosaurio</td>
              <td className={styles.tableContent2}>3.000</td>
              <td className={styles.tableContent2}>250/350</td>
              <td className={styles.tableContent2}>20</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>300</td>
              <td className={styles.tableContent2}>130</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>46.450</td>
              <td className={styles.tableContent2}>1.200</td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 5% - Casco de Hierro Completo, 5% - Escudo Imperial
              </td>
              <td className={styles.tableContent2}>49</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Leviatan</td>
              <td className={styles.tableContent2}>7.000</td>
              <td className={styles.tableContent2}>60/250</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>220</td>
              <td className={styles.tableContent2}>180</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>91.100</td>
              <td className={styles.tableContent2}>3.500</td>
              <td className={styles.tableContent2}>
                {' '}
                15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos
                de User), 5% - Casco de Hierro Completo, 5% - Escudo Imperial
              </td>
              <td className={styles.tableContent2}>37-60-61-62</td>
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

export default Altamar;
