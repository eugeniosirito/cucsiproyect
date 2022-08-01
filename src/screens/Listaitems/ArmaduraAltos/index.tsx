import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function ArmadurasAltos() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.armadurasContainer}>
          <h1 className={styles.armadurasTitle}>Armaduras</h1>
          <p className={styles.armadurasContenido}>
            Las armaduras son objetos que al equiparse en un personaje nos proporcionaran defensa física y/o
            defensa mágica contra los ataques recibidos. Algunas armaduras podrán ser adquiridas por otro en
            diferentes comerciantes (NPCs) mientras que otras deberán de ser obtenidas por medio de su
            construcción. Las armaduras que un personaje puede utilizar dependerán según su clase, raza o
            género.
          </p>
          <p className={styles.armadurasContenido}>
            Las armaduras de herrero son los items que podrás adquirir forjándolos a través de una clase
            Trabajadora (Trabajador) pero para poder realizar los mismos deberán de poseer los skiles
            necesarios en herrería como así también los recursos que se informan a continuación para crearlos:
          </p>
        </div>
        <div className={styles.tabla}>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Item</th>
              <th className={styles.tableContent}>Defensa Corporal</th>
              <th className={styles.tableContent}>Defensa Magica </th>
              <th className={styles.tableContent}>Clases Permitidas </th>
              <th className={styles.tableContent}>Lingotes de Hierro </th>
              <th className={styles.tableContent}>Lingotes de Plata </th>
              <th className={styles.tableContent}>Lingotes de Oro </th>
              <th className={styles.tableContent}>Skills</th>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Armadura de Cuero </td>
              <td className={styles.tableContent2}>5/8 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Todas menos MAGO </td>
              <td className={styles.tableContent2}>60</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>10</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Cotas de Malla [DefMag] </td>
              <td className={styles.tableContent2}>3/5 </td>
              <td className={styles.tableContent2}>5/10 </td>
              <td className={styles.tableContent2}>Todas menos MAGO, DRUIDA, TRABAJADOR y PIRATA </td>
              <td className={styles.tableContent2}>900</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>60</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Cotas de Malla (Mujer) [DefMag] </td>
              <td className={styles.tableContent2}>3/5 </td>
              <td className={styles.tableContent2}>5/10 </td>
              <td className={styles.tableContent2}>Todas menos MAGO, DRUIDA, TRABAJADOR y PIRATA </td>
              <td className={styles.tableContent2}>900</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>60</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Armadura de Placas Azul (H/E/EO-M) </td>
              <td className={styles.tableContent2}>16/17 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Guerrero, Bandido, Paladin y Cazador </td>
              <td className={styles.tableContent2}>540</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>70</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Armadura de Placas Completas +1 </td>
              <td className={styles.tableContent2}>14/16 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Guerrero, Bandido, Paladin, Cazador y Clerigo </td>
              <td className={styles.tableContent2}>700</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>70</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Armadura de Placas Completas +2 </td>
              <td className={styles.tableContent2}>18/20 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Guerrero, Bandido, Paladin, Cazador y Clerigo </td>
              <td className={styles.tableContent2}>900</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>80</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Armadura de Placas de Gala (H/E/EO-M) </td>
              <td className={styles.tableContent2}>18/22 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Guerrero, Bandido, Paladin y Cazador </td>
              <td className={styles.tableContent2}>950</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>97</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Armadura de la Ciénega </td>
              <td className={styles.tableContent2}>24/27 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Guerrero, Paladin y Cazador </td>
              <td className={styles.tableContent2}>800</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>97</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Armadura de Caballero [DefCorp] </td>
              <td className={styles.tableContent2}>20/25 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Asesino, Guerrero, Bandido, Paladin y Clerigo </td>
              <td className={styles.tableContent2}>1100 </td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>0</td>
              <td className={styles.tableContent2}>97</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Armadura de Caballero [DefMag] </td>
              <td className={styles.tableContent2}>8/11 </td>
              <td className={styles.tableContent2}>6/14</td>
              <td className={styles.tableContent2}>Asesino, Guerrero, Bandido, Paladin y Clerigo </td>
              <td className={styles.tableContent2}>1000 </td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>97</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Armadura de Caballero [DefCorp] </td>
              <td className={styles.tableContent2}>20/25 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Asesino, Guerrero, Bandido, Paladin y Clerigo </td>
              <td className={styles.tableContent2}>1100 </td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>97</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Armadura Mercenaria [DefCorp] </td>
              <td className={styles.tableContent2}>28/31 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Asesino, Guerrero, Bandido, Paladin y Clerigo </td>
              <td className={styles.tableContent2}>850 </td>
              <td className={styles.tableContent2}>250</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>97</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Armadura de Placas de Gala Dorada </td>
              <td className={styles.tableContent2}>32/35 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Druida, Guerrero, Paladin, Cazador y Clerigo </td>
              <td className={styles.tableContent2}>1000 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>98</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Armadura Legendaria </td>
              <td className={styles.tableContent2}>34/39 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Guerrero, Bandido, Paladin y Cazador </td>
              <td className={styles.tableContent2}>750 </td>
              <td className={styles.tableContent2}>350</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>98</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Armadura Escarlata </td>
              <td className={styles.tableContent2}>33/33 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Guerrero, Paladin y Clerigo </td>
              <td className={styles.tableContent2}>900 </td>
              <td className={styles.tableContent2}>250</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Dama de las Tinieblas (H/E/EO-M) </td>
              <td className={styles.tableContent2}>35/37 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Guerrero, Bandido y Paladin </td>
              <td className={styles.tableContent2}>500 </td>
              <td className={styles.tableContent2}>300</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Armadura de Epsilon [DefCorp] </td>
              <td className={styles.tableContent2}>36/41 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Bandido, Guerrero, Paladin y Cazador </td>
              <td className={styles.tableContent2}>800 </td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>220</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Armadura de Epsilon [DefMag] </td>
              <td className={styles.tableContent2}>16/21 </td>
              <td className={styles.tableContent2}>8/16 </td>
              <td className={styles.tableContent2}>Bandido, Guerrero, Paladin y Cazador </td>
              <td className={styles.tableContent2}>1150 </td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>250</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Armadura de Omega [DefCorp] </td>
              <td className={styles.tableContent2}>39/43 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Guerrero, Paladin y Cazador </td>
              <td className={styles.tableContent2}>900 </td>
              <td className={styles.tableContent2}>750</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Armadura de Omega [DefMag] </td>
              <td className={styles.tableContent2}>21/25 </td>
              <td className={styles.tableContent2}>10/18 </td>
              <td className={styles.tableContent2}>Guerrero, Paladin y Cazador </td>
              <td className={styles.tableContent2}>1300 </td>
              <td className={styles.tableContent2}>700</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Armadura de Dragón (Hombre) </td>
              <td className={styles.tableContent2}>42/45 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Bandido, Guerrero, Paladin y Cazador </td>
              <td className={styles.tableContent2}>900 </td>
              <td className={styles.tableContent2}>500</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Armadura de Dragón (Mujer) </td>
              <td className={styles.tableContent2}>42/45 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Bandido, Guerrero, Paladin y Cazador </td>
              <td className={styles.tableContent2}>900 </td>
              <td className={styles.tableContent2}>500</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
          </table>
        </div>
        <Link to="/manual/trabajos/herreria">
          <h1 className={styles.volver}>Volver</h1>
        </Link>
      </div>
    </div>
  );
}

export default ArmadurasAltos;
