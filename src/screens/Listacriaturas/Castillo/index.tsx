import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Castillo() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.criaturasContainer}>
          <h1 className={styles.criaturasTitle}>Dungeon Castillo</h1>
          <p className={styles.criaturasContenido}>
            Está situado en el Mapa 62 y para poder ingresar deberemos de ser mínimamente Nivel 25. Aquí
            habitan poderosos Guerreros y Magos de todo tipo protectores de los Items Únicos. El Castillo
            guarda una cámara donde secretos yacen. Aquí encontraremos:
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
              <td className={styles.tableContent2}>Arquero del Castillo</td>
              <td className={styles.tableContent2}>1.400</td>
              <td className={styles.tableContent2}>25/50</td>
              <td className={styles.tableContent2}>20</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>80</td>
              <td className={styles.tableContent2}>140</td>
              <td className={styles.tableContent2}>Lanza Flechazos a Distancia</td>
              <td className={styles.tableContent2}>23.000</td>
              <td className={styles.tableContent2}>1200</td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 1% - Armadura De Piel de Golem Alado (G/E)
              </td>
              <td className={styles.tableContent2}>81-84</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Plebello del Castillo</td>
              <td className={styles.tableContent2}>1.650</td>
              <td className={styles.tableContent2}>50/70</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>27.750</td>
              <td className={styles.tableContent2}>1440</td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 1% - Armadura De La Daga Sangrienta (G/E)
              </td>
              <td className={styles.tableContent2}>81</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Guerrero Armado del Castillo</td>
              <td className={styles.tableContent2}>2.450</td>
              <td className={styles.tableContent2}>240/320</td>
              <td className={styles.tableContent2}>40</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>350</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>43.500</td>
              <td className={styles.tableContent2}>1160</td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 1% - Armadura De Piel de Golem Alado
              </td>
              <td className={styles.tableContent2}>82-83-84</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Mago del Castillo</td>
              <td className={styles.tableContent2}>2.060</td>
              <td className={styles.tableContent2}>75/156</td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>Lanza Paralizar, Núcleo de Plasma y Rélampago</td>
              <td className={styles.tableContent2}>38.550</td>
              <td className={styles.tableContent2}>1.040</td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 1% - Túnica Del Dios Thaos (G/E)
              </td>
              <td className={styles.tableContent2}>82-83</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Archimago del Castillo</td>
              <td className={styles.tableContent2}>3.150</td>
              <td className={styles.tableContent2}>75/126</td>
              <td className={styles.tableContent2}>40</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>Lanza Paralizar, Núcleo de Plasma y Rafaga Ardiente</td>
              <td className={styles.tableContent2}>51.000</td>
              <td className={styles.tableContent2}>3000</td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 1% - Túnica Del Dios
                Thaos
              </td>
              <td className={styles.tableContent2}>83-84</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Paladin del Castillo</td>
              <td className={styles.tableContent2}>3.630</td>
              <td className={styles.tableContent2}>200/250</td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>250</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>61.250</td>
              <td className={styles.tableContent2}>3.300</td>
              <td className={styles.tableContent2}>
                {' '}
                15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User)
              </td>
              <td className={styles.tableContent2}>33</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Arcangel Armado del Castillo</td>
              <td className={styles.tableContent2}>4.770</td>
              <td className={styles.tableContent2}>150/200</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>300</td>
              <td className={styles.tableContent2}>120</td>
              <td className={styles.tableContent2}>Lanza Paralizar, Rafaga Ardiente y Sombra de la Muerte</td>
              <td className={styles.tableContent2}>87.500</td>
              <td className={styles.tableContent2}>3.900</td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos
                de User), 3% - Armadura De La Daga Sangrienta
              </td>
              <td className={styles.tableContent2}>83-84</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Balrog de fuego (1)</td>
              <td className={styles.tableContent2}>30.000</td>
              <td className={styles.tableContent2}>170/270</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>300</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>Imparalizable - Lanza Drenar y Tormenta de Fuego</td>
              <td className={styles.tableContent2}>225.000</td>
              <td className={styles.tableContent2}>6.000</td>
              <td className={styles.tableContent2}>
                {' '}
                25% - Gema de Clan (2), 15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User),
                5% - Gema Verde (5 Ptos de User), 5% - Armadura de Placas Completa, 5% - Armadura de Placas
                Completa (E/G), 5% - Armadura de Placas Rojas (Mujer), 5% - Hacha Guerrera de Dos Filos
              </td>
              <td className={styles.tableContent2}>85</td>
            </tr>
          </table>
          <p className={styles.criaturasContenido}>
            (1) - Criatura que solo podremos acceder a través de una Invocación.
          </p>
          <br />
          <p className={styles.criaturasContenido}>
            (2) - Objeto necesario para poder crear o subir nivel del Clan.{' '}
          </p>
        </div>
        <Link to="/manual/criaturas">
          <h1 className={styles.volver}>Volver</h1>
        </Link>
      </div>
    </div>
  );
}

export default Castillo;
