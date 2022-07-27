import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Marabel() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.criaturasContainer}>
          <h1 className={styles.criaturasTitle}>Dungeon Marabel</h1>
          <p className={styles.criaturasContenido}>
            Mejor conocido como DM se encuentra situado en el Mapa 28 pero para poder ingresar deberemos de
            ser mínimamente Nivel 20 y las criaturas que encontraremos aquí son:
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
              <td className={styles.tableContent2}>Mago Malvado</td>
              <td className={styles.tableContent2}>1.700</td>
              <td className={styles.tableContent2}>75/126</td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>Lanza Paralizar, Núcleo Plasma y Tormenta de Fuego</td>
              <td className={styles.tableContent2}>15.000</td>
              <td className={styles.tableContent2}>1.040</td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 5% - Bastón Nudoso, 5% - Túnica de Mago, 5% - Túnica de Mago
                (E/G)
              </td>
              <td className={styles.tableContent2}>68</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Liche</td>
              <td className={styles.tableContent2}>1.300</td>
              <td className={styles.tableContent2}>120/250 </td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>220</td>
              <td className={styles.tableContent2}>190</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>14.500</td>
              <td className={styles.tableContent2}>1.280 </td>
              <td className={styles.tableContent2}> 15% - Gema Azul (1 Pto de User)</td>
              <td className={styles.tableContent2}>68</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Lord Orco</td>
              <td className={styles.tableContent2}>1.500</td>
              <td className={styles.tableContent2}>200/200 </td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>170</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>16.000</td>
              <td className={styles.tableContent2}>1.200</td>
              <td className={styles.tableContent2}> 15% - Gema Azul (1 Pto de User)</td>
              <td className={styles.tableContent2}>69</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Beholder</td>
              <td className={styles.tableContent2}>1.250</td>
              <td className={styles.tableContent2}>45/300 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>190</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>17.500</td>
              <td className={styles.tableContent2}>1.000</td>
              <td className={styles.tableContent2}> 15% - Gema Azul (1 Pto de User)</td>
              <td className={styles.tableContent2}>68</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Orco Brujo</td>
              <td className={styles.tableContent2}>1.500</td>
              <td className={styles.tableContent2}>75/120 </td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>180</td>
              <td className={styles.tableContent2}> Lanza Núcleo Plasma</td>
              <td className={styles.tableContent2}>19.500 </td>
              <td className={styles.tableContent2}>1.200</td>
              <td className={styles.tableContent2} />
              <td className={styles.tableContent2}>68-69</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Demonio</td>
              <td className={styles.tableContent2}>8.000 </td>
              <td className={styles.tableContent2}>150/350 </td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>230</td>
              <td className={styles.tableContent2}>180</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>115.000</td>
              <td className={styles.tableContent2}>4.000</td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos
                de User), 5% - Armadura de Cazador, 5% - Armadura de Cazador (E/G)
              </td>
              <td className={styles.tableContent2}>126</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Liche Infernal </td>
              <td className={styles.tableContent2}>4.600</td>
              <td className={styles.tableContent2}>120/200 </td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>220</td>
              <td className={styles.tableContent2}>190</td>
              <td className={styles.tableContent2}>
                Lanza Paralizar, Tormenta de Fuego y Descarga Electrica
              </td>
              <td className={styles.tableContent2}>63.500 </td>
              <td className={styles.tableContent2}>2.000</td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos
                de User), 5% - Hechizo: Núcleo Plasma, 5% - Túnica de Monje, 5% - Túnica de Monje (E/G)
              </td>
              <td className={styles.tableContent2}>68</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Golem de Piedra</td>
              <td className={styles.tableContent2}>30.000 </td>
              <td className={styles.tableContent2}>200/400 </td>
              <td className={styles.tableContent2}>20</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>220 </td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>250.000</td>
              <td className={styles.tableContent2}>3.000</td>
              <td className={styles.tableContent2}>
                {' '}
                15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos
                de User), 5% - 200 Lingotes de Hierro
              </td>
              <td className={styles.tableContent2}>69</td>
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

export default Marabel;
