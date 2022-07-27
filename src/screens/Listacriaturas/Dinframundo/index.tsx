import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Cementerio() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.criaturasContainer}>
          <h1 className={styles.criaturasTitle}>Dungeon Inframundo</h1>
          <p className={styles.criaturasContenido}>
            Se encuentra situado en el Mapa 66, dado a ser las puertas al infierno el mismo está custodiado
            por Guardias Reales y Guardias del Caos por lo que se dificultará nuestro entrenamiento en esté
            lugar pero las criaturas que habitan aquí son realmente poderosas y llenas de experiencia. Para
            poder ingresar deberemos de ser mínimamente Nivel 30. Las criaturas que habitan aquí son:
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
              <td className={styles.tableContent2}>126</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Serpiente de Anthares</td>
              <td className={styles.tableContent2}>1.400</td>
              <td className={styles.tableContent2}>10/45</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>20.050</td>
              <td className={styles.tableContent2}>1.020</td>
              <td className={styles.tableContent2}>15% - Gema Azul (1 Pto de User)</td>
              <td className={styles.tableContent2}>126</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Bruja</td>
              <td className={styles.tableContent2}>4.000</td>
              <td className={styles.tableContent2}>75/140</td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>250</td>
              <td className={styles.tableContent2}>Lanza Núcleo Plasma y Tormenta de Fuego</td>
              <td className={styles.tableContent2}>60.000</td>
              <td className={styles.tableContent2}>800</td>
              <td className={styles.tableContent2}>
                {' '}
                15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Sombrero de Mago
              </td>
              <td className={styles.tableContent2}>126</td>
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
              <td className={styles.tableContent2}>126</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Medusa</td>
              <td className={styles.tableContent2}>5.000</td>
              <td className={styles.tableContent2}>105/155</td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>175</td>
              <td className={styles.tableContent2}>135</td>
              <td className={styles.tableContent2}>
                {' '}
                Lanza Paralizar, Tormenta de Fuego y Descarga Electrica
              </td>
              <td className={styles.tableContent2}>115.000</td>
              <td className={styles.tableContent2}>3.000</td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 5% - Gema Naranja (3 Ptos de User), 5% - Cota de Mallas, 5% -
                Cota de Mallas (Mujer), 5% - Cota de Mallas (E/G)
              </td>
              <td className={styles.tableContent2}>126</td>
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
              <td className={styles.tableContent2}>Leviatán</td>
              <td className={styles.tableContent2}>7.000</td>
              <td className={styles.tableContent2}>60/250</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>220</td>
              <td className={styles.tableContent2}>180</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>91.000</td>
              <td className={styles.tableContent2}>3.500</td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos
                de User), 5% - Casco de Hierro Completo, 5% - Escudo Imperial
              </td>
              <td className={styles.tableContent2}>126</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Golem Dorado</td>
              <td className={styles.tableContent2}>15.000</td>
              <td className={styles.tableContent2}>200/400</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>80</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>250.000</td>
              <td className={styles.tableContent2}>2.000</td>
              <td className={styles.tableContent2}>
                {' '}
                15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos
                de User), 3% - 1000 Minerales de Oro
              </td>
              <td className={styles.tableContent2}>126</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Golem Alado </td>
              <td className={styles.tableContent2}>25.000 </td>
              <td className={styles.tableContent2}>200/400 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>200/400 </td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>400.000</td>
              <td className={styles.tableContent2}>4.000</td>
              <td className={styles.tableContent2}>
                {' '}
                15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos
                de User), 5% - Armadura de Placas Completa , 5% - Armadura de Placas Completa (E/G)
              </td>
              <td className={styles.tableContent2}>126</td>
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

export default Cementerio;
