/* eslint-disable max-lines */
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Escudos() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.armadurasContainer}>
          <h1 className={styles.armadurasTitle}>Escudos</h1>
          <p className={styles.armadurasContenido}>
            Los escudos son objetos que al equiparse en un personaje nos proporcionan la chance de bloquear
            los ataques físicos y también reducen el dañó infligido por los golpes recibidos. Algunos de los
            escudos podrán ser adquiridos por otro en diferentes comerciantes (NPCs) mientras que otras
            deberán de ser obtenidas por medio de su construcción. Las escudos que un personaje puede utilizar
            dependerán según su clase, raza o género.
          </p>
          <p className={styles.armadurasContenido}>
            Los Escudos de herrero son los items que podrás adquirir forjándolos a través de una clase
            Trabajadora (Trabajador) pero para poder realizar los mismos deberán de poseer los skiles
            necesarios en herrería como así también los recursos que se informan a continuación para crearlos:
          </p>
        </div>
        <div className={styles.tabla}>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Item</th>
              <th className={styles.tableContent}>Defensa Corporal </th>
              <th className={styles.tableContent}>Defensa Magica </th>
              <th className={styles.tableContent}>Clases Permitidas </th>
              <th className={styles.tableContent}>Lingotes de Hierro </th>
              <th className={styles.tableContent}>Lingotes de Plata </th>
              <th className={styles.tableContent}>Lingotes de Oro </th>
              <th className={styles.tableContent}>Skills</th>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Rodela de Madera Reforzada </td>
              <td className={styles.tableContent2}>9/14 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Druida </td>
              <td className={styles.tableContent2}>750</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>73</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Escudo de Tres Puntas </td>
              <td className={styles.tableContent2}>10/15 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Bandido, Asesino </td>
              <td className={styles.tableContent2}>750</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>73</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Escudo Rustico </td>
              <td className={styles.tableContent2}>11/16 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Bardo, Asesino, Guerrero, Paladin y Cazador </td>
              <td className={styles.tableContent2}>850</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>80</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Escudo Oscuro </td>
              <td className={styles.tableContent2}>12/15 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Asesino, Guerrero, Paladin, Cazador y Clerigo </td>
              <td className={styles.tableContent2}>500</td>
              <td className={styles.tableContent2}>250</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>97</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Escudo de Plata </td>
              <td className={styles.tableContent2}>12/17 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Guerrero, Paladin y Clerigo </td>
              <td className={styles.tableContent2}>500</td>
              <td className={styles.tableContent2}>250</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>98</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Escudo del Gran Imperio </td>
              <td className={styles.tableContent2}>14/18 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Guerrero, Paladin, Cazador y Clerigo </td>
              <td className={styles.tableContent2}>600</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>99</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Escudo del Gran Imperio +1 </td>
              <td className={styles.tableContent2}>14/19 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Guerrero, Paladin y Clerigo </td>
              <td className={styles.tableContent2}>700</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Escudo de Caballero </td>
              <td className={styles.tableContent2}>15/20 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Bandido, Guerrero, Paladin y Cazador </td>
              <td className={styles.tableContent2}>800</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
          </table>
        </div>
        <div className={styles.armadurasContainer}>
          <h1 className={styles.armadurasTitle}>Cascos</h1>
          <p className={styles.armadurasContenido}>
            Los cascos son objetos que al equiparse en un personaje nos proporcionaran defensa contra los
            ataques físicos recibidos en la cabeza y en algunos casos defensa contra los ataques mágicos.
            Algunos de los cascos podrán ser adquiridos por otro en diferentes comerciantes (NPCs) mientras
            que otras deberán de ser obtenidas por medio de su construcción. Las cascos que un personaje puede
            utilizar dependerán según su clase, raza o género.
          </p>
          <p className={styles.armadurasContenido}>
            Los Cascos de herrero son los items que podrás adquirir forjándolos a través de una clase
            Trabajadora (Trabajador) pero para poder realizar los mismos deberán de poseer los skiles
            necesarios en herrería como así también los recursos que se informan a continuación para crearlos:
          </p>
        </div>
        <div className={styles.tabla}>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Item</th>
              <th className={styles.tableContent}>Defensa Corporal </th>
              <th className={styles.tableContent}>Defensa Magica </th>
              <th className={styles.tableContent}>Clases Permitidas </th>
              <th className={styles.tableContent}>Lingotes de Hierro </th>
              <th className={styles.tableContent}>Lingotes de Plata </th>
              <th className={styles.tableContent}>Lingotes de Oro </th>
              <th className={styles.tableContent}>Skills</th>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Casco de Miliciano </td>
              <td className={styles.tableContent2}>5/10 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>
                Asesino, Guerrero, Bandido, Paladin, Cazador y Clerigo{' '}
              </td>
              <td className={styles.tableContent2}>300</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>25</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Casco Incompleto </td>
              <td className={styles.tableContent2}>15/20 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>
                Asesino, Guerrero, Bandido, Paladin, Cazador y Clerigo{' '}
              </td>
              <td className={styles.tableContent2}>450</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>60</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Casco de Plata </td>
              <td className={styles.tableContent2}>4/8 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Todas menos MAGO, DRUIDA, LADRON, BARDO y PIRATA </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>130</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>85</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Casco de Caballero </td>
              <td className={styles.tableContent2}>17/25 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>
                Asesino, Guerrero, Bandido, Paladin, Cazador y Clerigo{' '}
              </td>
              <td className={styles.tableContent2}>300</td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>97</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Casco Oscuro </td>
              <td className={styles.tableContent2}>20/30 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>
                Asesino, Guerrero, Bandido, Paladin, Cazador y Clerigo{' '}
              </td>
              <td className={styles.tableContent2}>400</td>
              <td className={styles.tableContent2}>105</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>97</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Casco de Gran Maestre Oscuro </td>
              <td className={styles.tableContent2}>25/35 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Guerrero, Paladin y Cazador </td>
              <td className={styles.tableContent2}>550</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>97</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Casco de Guerrero Completo </td>
              <td className={styles.tableContent2}>23/35 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>
                Asesino, Guerrero, Bandido, Paladin, Cazador y Clerigo{' '}
              </td>
              <td className={styles.tableContent2}>500 </td>
              <td className={styles.tableContent2}>110</td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>98</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Casco de Gran Maestre </td>
              <td className={styles.tableContent2}>25/40 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Bandido, Guerrero, Paladin y Cazador </td>
              <td className={styles.tableContent2}>600</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>99</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Casco MAESTRE Dorado </td>
              <td className={styles.tableContent2}>35/50 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Guerrero, Paladin y Cazador </td>
              <td className={styles.tableContent2}>750</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Corona </td>
              <td className={styles.tableContent2}>16/20 </td>
              <td className={styles.tableContent2}>3/5 </td>
              <td className={styles.tableContent2}>Mago, Druida y Bardo </td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>100</td>
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

export default Escudos;
