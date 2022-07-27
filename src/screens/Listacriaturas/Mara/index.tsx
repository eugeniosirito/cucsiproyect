/* eslint-disable max-lines */
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Mara() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.criaturasContainer}>
          <h1 className={styles.criaturasTitle}>Isla Mara</h1>
          <p className={styles.criaturasContenido}>
            Isla Mara es una zona desterrada que solo podrás acceder a ella por medio de un portal el cual
            aparece aleatoreamente en cualquier mapa del mundo y solo permanece abierto 15 min, luego podrás
            permanecer en la isla por una hora. (Isla Mara). Las criaturas que encontraremos aquí son:
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
              <td className={styles.tableContent2}>Paria</td>
              <td className={styles.tableContent2}>1.000</td>
              <td className={styles.tableContent2}>10/50</td>
              <td className={styles.tableContent2}>1</td>
              <td className={styles.tableContent2}>1</td>
              <td className={styles.tableContent2}>15</td>
              <td className={styles.tableContent2}>15</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>4.700</td>
              <td className={styles.tableContent2}>70</td>
              <td className={styles.tableContent2}>
                {' '}
                10% - Pocion Roja (250), 10% - Pocion Azul (100), 10% - Pocion Verde (30), 10% - Pocion
                Amarillas (30)
              </td>
              <td className={styles.tableContent2}>-</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Vampiresa</td>
              <td className={styles.tableContent2}>3.700</td>
              <td className={styles.tableContent2}>50/135 </td>
              <td className={styles.tableContent2}>5 </td>
              <td className={styles.tableContent2}>5 </td>
              <td className={styles.tableContent2}>65</td>
              <td className={styles.tableContent2}>65</td>
              <td className={styles.tableContent2}>Lanza Paralizar</td>
              <td className={styles.tableContent2}>62.000</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>
                {' '}
                5% - Túnica Maléfica [DefCorp], 5% - Túnica Maléfica [DefCorp] (E/G), 5% - Corona, 7% -
                Cimitarra, 5% - Vara de Mago, 5% - Laúd Élfico, 5% - Flauta Élfica, 5% - Sable de Pirata
              </td>
              <td className={styles.tableContent2}>-</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Ciclope</td>
              <td className={styles.tableContent2}>4.100</td>
              <td className={styles.tableContent2}>90/110 </td>
              <td className={styles.tableContent2}>7</td>
              <td className={styles.tableContent2}>7</td>
              <td className={styles.tableContent2}>80</td>
              <td className={styles.tableContent2}>95</td>
              <td className={styles.tableContent2}> Tormenta de Fuego (+2)</td>
              <td className={styles.tableContent2}>67.500 </td>
              <td className={styles.tableContent2}>250</td>
              <td className={styles.tableContent2}>
                5% - Armadura De Placas De Gala Dorada [DefCorp], 5% - Armadura Mercenario [DefCorp], 7% -
                Hacha de Barbaro, 7% - Espada Helada, 7% - Espada de Plata, 5% - Escudo de Plata, 7% - Puñal,
                5% - Casco de Plata
              </td>
              <td className={styles.tableContent2}>-</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Aparicion</td>
              <td className={styles.tableContent2}>4.600</td>
              <td className={styles.tableContent2}>70/130 </td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>110</td>
              <td className={styles.tableContent2}>135</td>
              <td className={styles.tableContent2}> Descarga Electrica (+1)</td>
              <td className={styles.tableContent2}>74.500 </td>
              <td className={styles.tableContent2}>300</td>
              <td className={styles.tableContent2}>
                5% - Túnica Maléfica [DefMag], 5% - Túnica Maléfica [DefMag] (E/G), 5% - Corona, 7% -
                Cimitarra, 5% - Vara de Mago, 5% - Laúd Élfico, 5% - Flauta Élfica, 5% - Sable de Pirata
              </td>
              <td className={styles.tableContent2}>-</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Djinn de Viento</td>
              <td className={styles.tableContent2}>5.100</td>
              <td className={styles.tableContent2}>150/150 </td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>115</td>
              <td className={styles.tableContent2}>Descarga Electrica (+1) </td>
              <td className={styles.tableContent2}>82.000</td>
              <td className={styles.tableContent2}>340</td>
              <td className={styles.tableContent2}>
                {' '}
                5% - Vestimenta de la Oscuridad, 5% - Vestimenta de la Oscuridad (E/G), 5% - Ballesta, 7% -
                Flecha +3 (1.000), 5% - Escudo Rustico, 5% - Rodela de Madera Reforzada, 5% - Casco del Gran
                Maestre, 5% - Casco de Gran Maestre Oscuro{' '}
              </td>
              <td className={styles.tableContent2}>-</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Bestia Guerrera </td>
              <td className={styles.tableContent2}>5.400</td>
              <td className={styles.tableContent2}>100/180 </td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>135</td>
              <td className={styles.tableContent2}>135</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>91.000 </td>
              <td className={styles.tableContent2}>360</td>
              <td className={styles.tableContent2}>
                0 5% - Vestimenta de la Oscuridad, 5% - Vestimenta de la Oscuridad (E/G), 5% - Ballesta, 7% -
                Flecha +3 (1.000), 5% - Escudo Rustico, 5% - Rodela de Madera Reforzada, 5% - Casco del Gran
                Maestre, 5% - Casco de Gran Maestre Oscuro{' '}
              </td>
              <td className={styles.tableContent2}>-</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Elemental de Tierra Errante </td>
              <td className={styles.tableContent2}>5.950 </td>
              <td className={styles.tableContent2}>100/180 </td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>Inmovilizar</td>
              <td className={styles.tableContent2}>102.000</td>
              <td className={styles.tableContent2}>400</td>
              <td className={styles.tableContent2}>
                {' '}
                5% - Armadura De Placas De Gala Dorada [DefCorp], 5% - Armadura Mercenario [DefCorp], 7% -
                Hacha de Barbaro, 7% - Espada Helada, 7% - Espada de Plata, 5% - Escudo de Plata, 7% - Puñal,
                5% - Casco de Plata
              </td>
              <td className={styles.tableContent2}>-</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Elemental de Agua Errante</td>
              <td className={styles.tableContent2}>5.950 </td>
              <td className={styles.tableContent2}>100/180 </td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>Descarga Electrica (+1)</td>
              <td className={styles.tableContent2}>102.000</td>
              <td className={styles.tableContent2}>400</td>
              <td className={styles.tableContent2}>
                {' '}
                5% - Armadura De Placas De Gala Dorada [DefCorp], 5% - Armadura Mercenario [DefCorp], 7% -
                Hacha de Barbaro, 7% - Espada Helada, 7% - Espada de Plata, 5% - Escudo de Plata, 7% - Puñal,
                5% - Casco de Plata
              </td>
              <td className={styles.tableContent2}>-</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Elemental de Fuego Errante </td>
              <td className={styles.tableContent2}>5.950 </td>
              <td className={styles.tableContent2}>100/180 </td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>Tormenta de Fuego (+2)</td>
              <td className={styles.tableContent2}>102.000</td>
              <td className={styles.tableContent2}>400</td>
              <td className={styles.tableContent2}>
                {' '}
                5% - Armadura De Placas De Gala Dorada [DefCorp], 5% - Armadura Mercenario [DefCorp], 7% -
                Hacha de Barbaro, 7% - Espada Helada, 7% - Espada de Plata, 5% - Escudo de Plata, 7% - Puñal,
                5% - Casco de Plata
              </td>
              <td className={styles.tableContent2}>-</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Inferno</td>
              <td className={styles.tableContent2}>6.475 </td>
              <td className={styles.tableContent2}>70/150 </td>
              <td className={styles.tableContent2}>15</td>
              <td className={styles.tableContent2}>15</td>
              <td className={styles.tableContent2}>115</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}> Tormenta de Fuego (+2)</td>
              <td className={styles.tableContent2}>120.000</td>
              <td className={styles.tableContent2}>450 </td>
              <td className={styles.tableContent2}>
                {' '}
                5% - Armadura de Omega [DefCorp], 5% - Armadura de Caballero [DefCorp], 5% - Armadura de
                Epsilon [DefCorp], 5% - Armadura de Omega (G/E) [DefCorp], 5% - Armadura de Tawnos (G/E)
                [DefCorp], 5% - Armadura de Tawnos Dorada (G/E) [DefCorp], 5% - Daga Dhanab, 7% - Rompe
                Cascos, 5% - Rompe Cascos Superior, 5% - Escudo del Gran Imperio, 5% - Escudo Oscuro, 5% -
                Casco de Caballero, 7% - Casco Incompleto
              </td>
              <td className={styles.tableContent2}>-</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Devastador </td>
              <td className={styles.tableContent2}>6.950 </td>
              <td className={styles.tableContent2}>100/200 </td>
              <td className={styles.tableContent2}>20</td>
              <td className={styles.tableContent2}>20</td>
              <td className={styles.tableContent2}>110</td>
              <td className={styles.tableContent2}>125</td>
              <td className={styles.tableContent2}>Descarga Electrica (+1) </td>
              <td className={styles.tableContent2}>147.000 </td>
              <td className={styles.tableContent2}>500</td>
              <td className={styles.tableContent2}>
                {' '}
                5% - Armadura de Omega [DefMag], 5% - Armadura de Caballero [DefMag], 5% - Armadura de Epsilon
                [DefMag], 5% - Armadura de Omega (G/E) [DefMag], 5% - Armadura de Tawnos (G/E) [DefMag], 5% -
                Armadura de Tawnos Dorada (G/E) [DefMag], 5% - Daga Dhanab, 7% - Rompe Cascos, 5% - Rompe
                Cascos Superior, 5% - Escudo del Gran Imperio, 5% - Escudo Oscuro, 5% - Casco de Caballero, 7%
                - Casco Incompleto
              </td>
              <td className={styles.tableContent2}>-</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Gran Dragón Negro </td>
              <td className={styles.tableContent2}>10.775 </td>
              <td className={styles.tableContent2}>130/210 </td>
              <td className={styles.tableContent2}>25</td>
              <td className={styles.tableContent2}>25</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}> Imparalizable - Llamarada, Apocalipsis</td>
              <td className={styles.tableContent2}>232.000 </td>
              <td className={styles.tableContent2}>600</td>
              <td className={styles.tableContent2}>
                {' '}
                5% - Armadura de Dragón (Hombre) [DefCorp], 5% - Armadura de Dragón (Mujer) [DefCorp], 5% -
                Armadura de Dragón (G/E) [DefCorp], 5% -Daga Dhanab, 7% - Rompe Cascos, 5% - Rompe Cascos
                Superior, 5% - Escudo del Gran Imperio, 5% - Escudo Oscuro, 5% - Casco de Caballero, 7% -
                Casco Incompleto
              </td>
              <td className={styles.tableContent2}>37-60-61-62</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Gran Dragón Negro </td>
              <td className={styles.tableContent2}>10.775 </td>
              <td className={styles.tableContent2}>130/210 </td>
              <td className={styles.tableContent2}>25</td>
              <td className={styles.tableContent2}>25</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}> Imparalizable - Llamarada, Apocalipsis</td>
              <td className={styles.tableContent2}>232.000 </td>
              <td className={styles.tableContent2}>600</td>
              <td className={styles.tableContent2}>
                {' '}
                5% - Armadura de Dragón (Hombre) [DefCorp], 5% - Armadura de Dragón (Mujer) [DefCorp], 5% -
                Armadura de Dragón (G/E) [DefCorp], 5% -Daga Dhanab, 7% - Rompe Cascos, 5% - Rompe Cascos
                Superior, 5% - Escudo del Gran Imperio, 5% - Escudo Oscuro, 5% - Casco de Caballero, 7% -
                Casco Incompleto
              </td>
              <td className={styles.tableContent2}>37-60-61-62</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Gran Dragón Plateado </td>
              <td className={styles.tableContent2}>14.650 </td>
              <td className={styles.tableContent2}>200/250 </td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>180</td>
              <td className={styles.tableContent2}> Imparalizable - Llamarada, Apocalipsis</td>
              <td className={styles.tableContent2}>285.000 </td>
              <td className={styles.tableContent2}>700</td>
              <td className={styles.tableContent2}>
                {' '}
                5% - Armadura de Dragón (Hombre) [DefCorp], 5% - Armadura de Dragón (Mujer) [DefCorp], 5% -
                Armadura de Dragón (G/E) [DefCorp], 5% -Ballesta, 7% - Flecha +3 (1.000), 5% - Escudo Rustico,
                5% - Rodela de Madera Reforzada, 5% - Casco del Gran Maestre, 5% - Casco de Gran Maestre
                Oscuro, 5% - Daga Dhanab, 7% - Rompe Cascos, 5% - Rompe Cascos Superior, 5% - Escudo del Gran
                Imperio, 5% - Escudo Oscuro, 5% - Casco de Caballero, 7% - Casco Incompleto
              </td>
              <td className={styles.tableContent2}>37-60-61-62</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Lord Belithuz </td>
              <td className={styles.tableContent2}>17.345 </td>
              <td className={styles.tableContent2}>250/350 </td>
              <td className={styles.tableContent2}>40</td>
              <td className={styles.tableContent2}>40</td>
              <td className={styles.tableContent2}>230</td>
              <td className={styles.tableContent2}>175</td>
              <td className={styles.tableContent2}> Imparalizable - Maldecir, Sombra de la Muerte</td>
              <td className={styles.tableContent2}>400.000 </td>
              <td className={styles.tableContent2}>1.000</td>
              <td className={styles.tableContent2}>
                {' '}
                5% - Armadura de Dragón (Hombre) [DefCorp], 5% - Armadura de Dragón (Mujer) [DefCorp], 5% -
                Armadura de Dragón (G/E) [DefCorp], 5% - Daga De la Oscuridad, 5% - Maza Oscura, 5% - Martillo
                Sagrado, 5% - Espada Argentum, 5% - Excalibur II, 5% - Casco de Guerrero Completo, 5% - Casco
                MAESTRE Dorado, 5% - Casco Oscuro, 5% - Escudo de Tres Puntas, 5% - Escudo del Gran Imperio
                +1, 5% - Escudo de Caballero, 5% - Casco de Caballero, 7% - Casco Incompleto, 5% - Corona, 5%
                - Vara de Mago, 5% - Laúd Élfico, 5% - Flauta Élfica, 5% - Sable de Pirata
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

export default Mara;
