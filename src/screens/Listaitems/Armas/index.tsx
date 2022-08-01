/* eslint-disable max-lines */
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Armas() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.armadurasContainer}>
          <h1 className={styles.armadurasTitle}>Armas</h1>
          <p className={styles.armadurasContenido}>
            Las armas permiten a los personajes infligir más daño son sus ataques y pueden alterar la
            modalidad con la que estos combaten variando los modificadores a contemplar ya sean de combate sin
            armas, combate cuerpo a cuerpo o combate a distancia. Algunas armas poseen funciones especiales
            como brindar la posibilidad de apuñalar, daño mágico entre otras características. Algunas armas
            podrán ser adquiridas con oro a través de los comerciantes (NPCs) de las ciudades mientras que
            otras deberán de ser obtenidas por medio de su construcción.
          </p>
          <p className={styles.armadurasContenido}>
            Las armas de herrero son los items que podrás adquirir forjándolos a través de una clase
            Trabajadora (Trabajador) pero para poder realizar los mismos deberán de poseer los skiles
            necesarios en herrería como así también los recursos que se informan a continuación para crearlos:
          </p>
          <h1 className={styles.armadurasTitle}>Armas Armas de Una Mano</h1>
          <p className={styles.armadurasContenido}>
            Las armas de Una Mano nos brindan la posibilidad de equiparnos un Escudo para así aumentar nuestra
            defensa física.
          </p>
        </div>
        <div className={styles.tabla}>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Item</th>
              <th className={styles.tableContent}>Daño</th>
              <th className={styles.tableContent}>Clases Permitidas</th>
              <th className={styles.tableContent}>Lingotes de Hierro </th>
              <th className={styles.tableContent}>Lingotes de Plata </th>
              <th className={styles.tableContent}>Lingotes de Oro </th>
              <th className={styles.tableContent}>Skills</th>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Cimitarra </td>
              <td className={styles.tableContent2}>5/12 </td>
              <td className={styles.tableContent2}>Todas menos MAGO, DRUIDA, LADRON y PIRATA </td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>50</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Hacha de Bárbaro </td>
              <td className={styles.tableContent2}>5/14 </td>
              <td className={styles.tableContent2}>Guerrerio, Bandido, Paladin, Cazador y Trabajador </td>
              <td className={styles.tableContent2}>160</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>55</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Espada Helada </td>
              <td className={styles.tableContent2}>7/18 </td>
              <td className={styles.tableContent2}>Guerrero, Paladin y Clerigo </td>
              <td className={styles.tableContent2}>300</td>
              <td className={styles.tableContent2}>60</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>85</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Espada de Plata </td>
              <td className={styles.tableContent2}>9/19 </td>
              <td className={styles.tableContent2}>Paladin, Guerrero y Cazador </td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>400</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>85</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Rompe Casco </td>
              <td className={styles.tableContent2}>10/19 </td>
              <td className={styles.tableContent2}>Asesino, Guerrero, Bandido, Paladin y Clerigo </td>
              <td className={styles.tableContent2}>450</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>95</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Espada Vikinga +1 </td>
              <td className={styles.tableContent2}>7/14 </td>
              <td className={styles.tableContent2}>Bandido </td>
              <td className={styles.tableContent2}>600</td>
              <td className={styles.tableContent2}>300</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Rompe Casco Superior </td>
              <td className={styles.tableContent2}>15/19 </td>
              <td className={styles.tableContent2}>Asesino, Guerrero, Bandido, Paladin y Clerigo </td>
              <td className={styles.tableContent2}>600</td>
              <td className={styles.tableContent2}>300</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Sable de Pirata </td>
              <td className={styles.tableContent2}>7/17 </td>
              <td className={styles.tableContent2}>
                Todas menos MAGO, DRUIDA, LADRON, CAZADOR y TRABAJADOR{' '}
              </td>
              <td className={styles.tableContent2}>900</td>
              <td className={styles.tableContent2}>400</td>
              <td className={styles.tableContent2}>140</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Excalibur II </td>
              <td className={styles.tableContent2}>15/22 </td>
              <td className={styles.tableContent2}>Bandido, Guerrero y Paladin </td>
              <td className={styles.tableContent2}>750</td>
              <td className={styles.tableContent2}>400</td>
              <td className={styles.tableContent2}>126</td>
              <td className={styles.tableContent2}>100</td>
            </tr>{' '}
            <tr>
              <td className={styles.tableContent2}>Espada Argentum </td>
              <td className={styles.tableContent2}>22/26 </td>
              <td className={styles.tableContent2}>Guerrero </td>
              <td className={styles.tableContent2}>900</td>
              <td className={styles.tableContent2}>600</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
          </table>
        </div>
        <div className={styles.armadurasContainer}>
          <h1 className={styles.armadurasTitle}>Armas de Dos Manos</h1>
          <p className={styles.armadurasContenido}>
            Al contrario de las armas de una mano no podremos equiparnos Escudos pero obtendremos el beneficio
            de inflingir un mayor daño a la víctima.
          </p>
        </div>
        <div className={styles.tabla}>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Item</th>
              <th className={styles.tableContent}>Daño</th>
              <th className={styles.tableContent}>Clases Permitidas</th>
              <th className={styles.tableContent}>Lingotes de Hierro </th>
              <th className={styles.tableContent}>Lingotes de Plata </th>
              <th className={styles.tableContent}>Lingotes de Oro </th>
              <th className={styles.tableContent}>Skills</th>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Espada Helada +1 (Dos Manos) </td>
              <td className={styles.tableContent2}>8/19 </td>
              <td className={styles.tableContent2}>Guerrero, Paladin y Clerigo </td>
              <td className={styles.tableContent2}>380</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>85</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Hacha de Acero (Dos Manos) </td>
              <td className={styles.tableContent2}>17/21 </td>
              <td className={styles.tableContent2}>Guerrero, Clerigo y Pirata </td>
              <td className={styles.tableContent2}>950</td>
              <td className={styles.tableContent2}>800</td>
              <td className={styles.tableContent2}>175</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Maza Oscura (Dos Manos) (1) </td>
              <td className={styles.tableContent2}>3/6 </td>
              <td className={styles.tableContent2}>Guerrero </td>
              <td className={styles.tableContent2}>1000</td>
              <td className={styles.tableContent2}>600</td>
              <td className={styles.tableContent2}>175</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Martillo Sagrado (Dos Manos) (1) </td>
              <td className={styles.tableContent2}>4/9 </td>
              <td className={styles.tableContent2}>Paladin</td>
              <td className={styles.tableContent2}>1000</td>
              <td className={styles.tableContent2}>600 </td>
              <td className={styles.tableContent2}>175</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Espada Mata Dragones (Dos Manos) (2) </td>
              <td className={styles.tableContent2}>1000/1000 </td>
              <td className={styles.tableContent2}>Todos menos MAGO, DRUIDA, LADRON, BARDO y TRABAJADOR </td>
              <td className={styles.tableContent2}>750</td>
              <td className={styles.tableContent2}>500</td>
              <td className={styles.tableContent2}>250</td>
              <td className={styles.tableContent2}>95</td>
            </tr>
          </table>

          <ul>
            <p className={styles.armadurasContenido}>
              (1) - Poderosas armas con la habilidad especial de realizar un DOBLE GOLPE, de acertar el primer
              golpe infringiremos Instantáneamente un segundo golpe (100%) a la víctima. El daño tanto del
              primer como segundo golpe variara según nuestro daño mínimo y máximo del personaje.
            </p>
            <p className={styles.armadurasContenido}>
              (2) - Con esta arma podremos infringir un daño letal por golpe a las criaturas DRAGONES la cual
              de acertar el último golpe e matando a la criatura instantáneamente la espada se romperá
              desapareciéndola de tu inventario. A esto se lo conoce como vulgarmente “Quemar/Quemarla”. A su
              vez si intentamos pegarle a un usuario y/o otra criatura que no sean DRAGONES el daño de nuestra
              arma será de 1/1 y no se destruirá en caso de matar al usuario y/o criatura.
            </p>
          </ul>
        </div>
        <div className={styles.armadurasContainer}>
          <h1 className={styles.armadurasTitle}>Dagas</h1>
          <p className={styles.armadurasContenido}>
            Estas armas poseen la posibilidad de apuñalar a su objetivo al acertar el golpe inicial a la
            víctima (cuerpo a cuerpo). El daño producido con apuñalar es superior a cualquier otro daño
            provocado con un arma simple.
          </p>
        </div>
        <div className={styles.tabla}>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Item</th>
              <th className={styles.tableContent}>Daño</th>
              <th className={styles.tableContent}>Clases Permitidas</th>
              <th className={styles.tableContent}>Lingotes de Hierro </th>
              <th className={styles.tableContent}>Lingotes de Plata </th>
              <th className={styles.tableContent}>Lingotes de Oro </th>
              <th className={styles.tableContent}>Skills</th>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Daga </td>
              <td className={styles.tableContent2}>1/3 </td>
              <td className={styles.tableContent2}>Todas </td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>10</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Daga +3 </td>
              <td className={styles.tableContent2}>4/6 </td>
              <td className={styles.tableContent2}>
                Todas menos MAGO, PIRATA, BANDIDO, LADRON y TRABAJADOR{' '}
              </td>
              <td className={styles.tableContent2}>60</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>40</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Daga +4 </td>
              <td className={styles.tableContent2}>5/7 </td>
              <td className={styles.tableContent2}>Asesino </td>
              <td className={styles.tableContent2}>116</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>60</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Daga Gris </td>
              <td className={styles.tableContent2}>6/8 </td>
              <td className={styles.tableContent2}>
                Todas menos MAGO, PIRATA, BANDIDO, LADRON y TRABAJADOR{' '}
              </td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>10 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>85</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Puñal </td>
              <td className={styles.tableContent2}>5/8 </td>
              <td className={styles.tableContent2}>
                Todas menos MAGO, PIRATA, BANDIDO, LADRON y TRABAJADOR{' '}
              </td>
              <td className={styles.tableContent2}>130</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>85</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Daga Dhanab </td>
              <td className={styles.tableContent2}>5/9 </td>
              <td className={styles.tableContent2}>Asesino, Guerrero, Paladin, Cazador y Clerigo </td>
              <td className={styles.tableContent2}>300</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>90</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Daga De la Oscuridad </td>
              <td className={styles.tableContent2}>8/10 </td>
              <td className={styles.tableContent2}>Asesino </td>
              <td className={styles.tableContent2}>950</td>
              <td className={styles.tableContent2}>400</td>
              <td className={styles.tableContent2}>140</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
          </table>
        </div>
        <div className={styles.armadurasContainer}>
          <h1 className={styles.armadurasTitle}>Items Mágicos </h1>
          <p className={styles.armadurasContenido}>
            Son items exclusivos de las clases mágicas dotados con una bonificación y/o necesarios para
            conjurar hechizos.
          </p>
        </div>
        <div className={styles.tabla}>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Item</th>
              <th className={styles.tableContent}>Daño</th>
              <th className={styles.tableContent}>Clases Permitidas</th>
              <th className={styles.tableContent}>Lingotes de Hierro </th>
              <th className={styles.tableContent}>Lingotes de Plata </th>
              <th className={styles.tableContent}>Lingotes de Oro </th>
              <th className={styles.tableContent}>Skills</th>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Vara de Mago (34% Bonificacion Magica) </td>
              <td className={styles.tableContent2}>5/5 </td>
              <td className={styles.tableContent2}>Mago </td>
              <td className={styles.tableContent2}>950</td>
              <td className={styles.tableContent2}>400</td>
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

export default Armas;
