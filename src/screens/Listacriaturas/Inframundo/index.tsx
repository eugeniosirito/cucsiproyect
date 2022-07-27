import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Inframundo() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.criaturasContainer}>
          <h1 className={styles.criaturasTitle}>Catacumbas del Inframundo</h1>
          <p className={styles.criaturasContenido}>
            Las Catacumbas del Inframundo son un lugar muy peligroso perteneciente a las Fuerzas del Caos la
            cuales son fuertemente custodiadas por sus lacayos (Guardias del Caos). La particularidad de esta
            zona es que las artes oscuras o mejor conocidas como las magias están prohibidas tanto para el
            usuario como para las criaturas que habitan en él, en ellas solo se podrán realizar ataques cuerpo
            a cuerpo o larga distancia. Son consideradas una zona predilecta para el entrenamiento de las
            clases Cazadores o Guerreros dado a los factores anteriormente mencionados. Estás Catacumbas son
            conocidas por ser un laberinto, él “Laberinto del Inframundo”, pero a su vez proporciona
            conexiones a diversas partes del mundo Cucsi como así zonas ocultas por tal motivo deberán de ser
            muy bien inspeccionadas. Las entradas a ella podrán ubicarlas en los Mapas 21, 42, 45, 50, 56, 59
            y las criaturas que habitan en ella son:
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
              <td className={styles.tableContent2}>125</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Beholder</td>
              <td className={styles.tableContent2}>1.250</td>
              <td className={styles.tableContent2}>45/300</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>350</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>17.500</td>
              <td className={styles.tableContent2}>1.000</td>
              <td className={styles.tableContent2}>15% - Gema Azul (1 Pto de User)</td>
              <td className={styles.tableContent2}>125</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Orco Brujo</td>
              <td className={styles.tableContent2}>1.500</td>
              <td className={styles.tableContent2}>75/120</td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>180</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>19.500</td>
              <td className={styles.tableContent2}>1.200</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>125</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Liche Infernal</td>
              <td className={styles.tableContent2}>4.600</td>
              <td className={styles.tableContent2}>120/200</td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>220</td>
              <td className={styles.tableContent2}>190</td>
              <td className={styles.tableContent2}>
                {' '}
                Lanza Paralizar, Tormenta de Fuego y Descarga Electrica
              </td>
              <td className={styles.tableContent2}>63.500</td>
              <td className={styles.tableContent2}>2.000</td>
              <td className={styles.tableContent2}>
                {' '}
                15% - Gema Azul (1 Pto de User),5% - Gema Verde (5 Ptos de User), 5% - Hechizo: Núcleo Plasma,
                5% - Túnica de Monje, 5% - Túnica de Monje (E/G)
              </td>
              <td className={styles.tableContent2}>125</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Enano de las Profundidades</td>
              <td className={styles.tableContent2}>2.300</td>
              <td className={styles.tableContent2}>30/60 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>40</td>
              <td className={styles.tableContent2}>60</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>25.000</td>
              <td className={styles.tableContent2}>700</td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User) 5% - Cotas de Mallas, 5% - Cotas de Mallas (E/G)
              </td>
              <td className={styles.tableContent2}>125</td>
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
              <td className={styles.tableContent2}>Dinosaurio</td>
              <td className={styles.tableContent2}>3.000</td>
              <td className={styles.tableContent2}>250/350 </td>
              <td className={styles.tableContent2}>20</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>300</td>
              <td className={styles.tableContent2}>130</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>46.450 </td>
              <td className={styles.tableContent2}>1.200</td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 5% - Casco de Hierro Completo, 5% - Escudo Imperial
              </td>
              <td className={styles.tableContent2}>125</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Bruja</td>
              <td className={styles.tableContent2}>4.000</td>
              <td className={styles.tableContent2}>75/140 </td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>250</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>60.000</td>
              <td className={styles.tableContent2}>800</td>
              <td className={styles.tableContent2}>
                {' '}
                20% - Gema Azul (1 Pto de User), 15% - Gema Naranja (3 Ptos de User), 10% - Sombrero de Mago{' '}
              </td>
              <td className={styles.tableContent2}>125</td>
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

export default Inframundo;
