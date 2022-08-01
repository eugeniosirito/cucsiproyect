/* eslint-disable max-lines */
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Tunicas() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.armadurasContainer}>
          <h1 className={styles.armadurasTitle}>Vestimentas y Túnicas </h1>
          <p className={styles.armadurasContenido}>
            Las Vestimentas y Túnicas son objetos que al equiparse en un personaje nos proporcionaran defensa
            física y/o defensa mágica contra los ataques recibidos. Las Vestimentas y Túnicas podrán ser
            adquiridas en diferentes comerciantes (NPCs) mientras que otras deberán de ser obtenidas por medio
            de su construcción (TRABAJADOR) . Las Vestimentas y Túnicas que un personaje puede utilizar
            dependerán según su clase, raza o género.
          </p>
          <p className={styles.armadurasContenido}>
            Las Vestimentas y Túnicas de Trabajador son los items que podrás adquirir forjándolos a través de
            una clase Trabajadora (Trabajador) pero para poder realizar los mismos deberán de poseer los
            skiles necesarios en sastrería como así también los recursos que se informan a continuación para
            crearlos:
          </p>
        </div>
        <div className={styles.tabla}>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Item</th>
              <th className={styles.tableContent}>Defensa Corporal </th>
              <th className={styles.tableContent}>Defensa Magica </th>
              <th className={styles.tableContent}>Clases Permitidas </th>
              <th className={styles.tableContent}>Ovillos de Oveja </th>
              <th className={styles.tableContent}>Ovillos de Cabra </th>
              <th className={styles.tableContent}>Ovillos de Llama </th>
              <th className={styles.tableContent}>Skills</th>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Vestimentas Comunes </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>Todas </td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>10</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Vestimenta de Mujer (M) </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>Todas </td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>10</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Ropa de Enano (E/G) </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>Todas </td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>10</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Ropa de Enana (E/G-M) </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>Todas </td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>10</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Invernal </td>
              <td className={styles.tableContent2}>10/10 </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>Todas </td>
              <td className={styles.tableContent2}>200 </td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>30</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Invernal(M) </td>
              <td className={styles.tableContent2}>10/10 </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>Todas </td>
              <td className={styles.tableContent2}>200 </td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>30</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Invernal (E/G) </td>
              <td className={styles.tableContent2}>10/10 </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>Todas </td>
              <td className={styles.tableContent2}>200 </td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>30</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Negra (E/G) [DefCorp] </td>
              <td className={styles.tableContent2}>10/10 </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>Mago/Bardo/Druida </td>
              <td className={styles.tableContent2}>250</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>40</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Roja [DefCorp] </td>
              <td className={styles.tableContent2}>10/10 </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>Mago/Bardo/Druida </td>
              <td className={styles.tableContent2}>250</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>40</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Tamuzz [DefCorp] </td>
              <td className={styles.tableContent2}>11/13 </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>Mago/Bardo/Druida </td>
              <td className={styles.tableContent2}>350</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>50</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Roja (E/G) [DefCorp] </td>
              <td className={styles.tableContent2}>11/13 </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>Mago/Bardo/Druida </td>
              <td className={styles.tableContent2}>350</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>50</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Legendaria [DefCorp] </td>
              <td className={styles.tableContent2}>10/15 </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>Mago/Bardo/Druida </td>
              <td className={styles.tableContent2}>400</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>60</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Infernal [DefCorp] </td>
              <td className={styles.tableContent2}>10/18 </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>Mago/Bardo/Druida </td>
              <td className={styles.tableContent2}>400</td>
              <td className={styles.tableContent2}>250</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>60</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Infernal (G/E) [DefCorp] </td>
              <td className={styles.tableContent2}>10/18 </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>Mago/Bardo/Druida </td>
              <td className={styles.tableContent2}>400</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>60</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Gaia [DefCorp] </td>
              <td className={styles.tableContent2}>13/14 </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>Mago/Bardo/Druida </td>
              <td className={styles.tableContent2}>600</td>
              <td className={styles.tableContent2}>450</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>75</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Negra (E/G) [DefMag] </td>
              <td className={styles.tableContent2}>1/1 </td>
              <td className={styles.tableContent2}>6/12 </td>
              <td className={styles.tableContent2}>Mago/Bardo/Druida </td>
              <td className={styles.tableContent2}>450</td>
              <td className={styles.tableContent2}>250</td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>75</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Vestido de Bruja (M) </td>
              <td className={styles.tableContent2}>14/16 </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>Mago/Bardo/Druida </td>
              <td className={styles.tableContent2}>700</td>
              <td className={styles.tableContent2}>500</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>80</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica de Druida [DefCorp] </td>
              <td className={styles.tableContent2}>14/16 </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>Mago/Bardo/Druida </td>
              <td className={styles.tableContent2}>700</td>
              <td className={styles.tableContent2}>500</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>80</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Roja (E/G) [DefMag] </td>
              <td className={styles.tableContent2}>1/2 </td>
              <td className={styles.tableContent2}>10/18 </td>
              <td className={styles.tableContent2}>Mago/Bardo/Druida </td>
              <td className={styles.tableContent2}>800</td>
              <td className={styles.tableContent2}>300</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>80</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Tamuzz [DefMag] </td>
              <td className={styles.tableContent2}>1/2 </td>
              <td className={styles.tableContent2}>10/18 </td>
              <td className={styles.tableContent2}>Mago/Bardo/Druida </td>
              <td className={styles.tableContent2}>800</td>
              <td className={styles.tableContent2}>300</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>80</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica de Druida [DefMag] </td>
              <td className={styles.tableContent2}>1/11 </td>
              <td className={styles.tableContent2}>4/17 </td>
              <td className={styles.tableContent2}>Mago/Bardo/Druida </td>
              <td className={styles.tableContent2}>700</td>
              <td className={styles.tableContent2}>500</td>
              <td className={styles.tableContent2}>60</td>
              <td className={styles.tableContent2}>85</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Maléfica [DefCorp] </td>
              <td className={styles.tableContent2}>15/16 </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>Mago/Bardo/Druida </td>
              <td className={styles.tableContent2}>900</td>
              <td className={styles.tableContent2}>750</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>90</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Maléfica (G/E) [DefCorp] </td>
              <td className={styles.tableContent2}>15/16 </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>Mago/Bardo/Druida </td>
              <td className={styles.tableContent2}>900</td>
              <td className={styles.tableContent2}>750</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>90</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Gaia [DefMag] </td>
              <td className={styles.tableContent2}>2/3 </td>
              <td className={styles.tableContent2}>15/20 </td>
              <td className={styles.tableContent2}>Mago/Bardo/Druida </td>
              <td className={styles.tableContent2}>900</td>
              <td className={styles.tableContent2}>600</td>
              <td className={styles.tableContent2}>70</td>
              <td className={styles.tableContent2}>95</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Marrón Combinada (E/G) [DefMag] </td>
              <td className={styles.tableContent2}>2/3 </td>
              <td className={styles.tableContent2}>15/20 </td>
              <td className={styles.tableContent2}>Mago/Bardo/Druida </td>
              <td className={styles.tableContent2}>950</td>
              <td className={styles.tableContent2}>600</td>
              <td className={styles.tableContent2}>70</td>
              <td className={styles.tableContent2}>95</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Verde Combinada (E/G-M) [DefMag] </td>
              <td className={styles.tableContent2}>2/3 </td>
              <td className={styles.tableContent2}>15/20 </td>
              <td className={styles.tableContent2}>Mago/Bardo/Druida </td>
              <td className={styles.tableContent2}>950</td>
              <td className={styles.tableContent2}>600</td>
              <td className={styles.tableContent2}>70</td>
              <td className={styles.tableContent2}>95</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Maléfica [DefMag] </td>
              <td className={styles.tableContent2}>3/3 </td>
              <td className={styles.tableContent2}>20/25 </td>
              <td className={styles.tableContent2}>Mago/Bardo/Druida </td>
              <td className={styles.tableContent2}>1300</td>
              <td className={styles.tableContent2}>700</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Maléfica (G/E) [DefMag] </td>
              <td className={styles.tableContent2}>3/3 </td>
              <td className={styles.tableContent2}>20/25 </td>
              <td className={styles.tableContent2}>Mago/Bardo/Druida </td>
              <td className={styles.tableContent2}>1300</td>
              <td className={styles.tableContent2}>700</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Vestimenta de la Oscuridad (1) </td>
              <td className={styles.tableContent2}>1/1 </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>Guerrero/Cazador </td>
              <td className={styles.tableContent2}>300</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Vestimenta de la Oscuridad (G/E) (1) </td>
              <td className={styles.tableContent2}>1/1 </td>
              <td className={styles.tableContent2}>0/0 </td>
              <td className={styles.tableContent2}>Guerrero/Cazador </td>
              <td className={styles.tableContent2}>300</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
          </table>
          <p className={styles.armadurasContenido}>
            (1) - Solo las Clases Guerrero y Cazador caminaran oculto con esta vestimenta.
          </p>
        </div>
        <div className={styles.armadurasContainer}>
          <h1 className={styles.armadurasTitle}>Túnica Invernal</h1>
          <p className={styles.armadurasContenido}>
            La Túnica Invernal es uno de la vestimentas necesarias para poder recorrer las tierras del Polo
            dado a las bajas temeperaturas ya que sín ella Moriremos de frío.
          </p>
        </div>
        <div className={styles.tabla}>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Item</th>
              <th className={styles.tableContent}>Defensa Corporal </th>
              <th className={styles.tableContent}>Defensa Magica </th>
              <th className={styles.tableContent}>Clases Permitidas </th>
              <th className={styles.tableContent}>Ovillos de Oveja </th>
              <th className={styles.tableContent}>Ovillos de Cabra </th>
              <th className={styles.tableContent}>Ovillos de Llama </th>
              <th className={styles.tableContent}>Skills</th>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Invernal </td>
              <td className={styles.tableContent2}>10/10 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Todas</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>30</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Invernal(M) </td>
              <td className={styles.tableContent2}>10/10 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Todas</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>30</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Túnica Invernal (E/G) </td>
              <td className={styles.tableContent2}>10/10 </td>
              <td className={styles.tableContent2}>- </td>
              <td className={styles.tableContent2}>Todas</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>30</td>
            </tr>
          </table>
        </div>
        <p className={styles.armadurasContenido}>
          Para poder hacerse con ella deberémos de poseer un Trabajador con la habilidad de Esquilar y
          Sastrería para poder crearla.
        </p>
        <Link to="/manual/trabajos/sastreria/tunicas">
          <h1 className={styles.volver}>Volver</h1>
        </Link>
      </div>
    </div>
  );
}

export default Tunicas;
