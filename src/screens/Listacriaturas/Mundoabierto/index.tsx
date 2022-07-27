/* eslint-disable max-lines */
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Mundoabierto() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.criaturasContainer}>
          <h1 className={styles.criaturasTitle}>Mundo Abierto</h1>
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
              <td className={styles.tableContent2}>Gallo Salvaje</td>
              <td className={styles.tableContent2}>15 </td>
              <td className={styles.tableContent2}>1/1 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>5</td>
              <td className={styles.tableContent2}>5</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>75</td>
              <td className={styles.tableContent2}>2</td>
              <td className={styles.tableContent2}>90% - Pollo</td>
              <td className={styles.tableContent2}>8-9-14-16</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Rata Salvaje </td>
              <td className={styles.tableContent2}>15</td>
              <td className={styles.tableContent2}>2/4 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>20</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>80</td>
              <td className={styles.tableContent2}>0</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>2-9</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Murciélago</td>
              <td className={styles.tableContent2}>15</td>
              <td className={styles.tableContent2}>2/4</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>3</td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>90</td>
              <td className={styles.tableContent2}>2</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>2-5-14-16-17</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Murciélago</td>
              <td className={styles.tableContent2}>22</td>
              <td className={styles.tableContent2}>1/1</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2} />
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>110</td>
              <td className={styles.tableContent2}>4</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>2-3-5-8-14-16-17-20-21-23-24</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Escorpión</td>
              <td className={styles.tableContent2}>32</td>
              <td className={styles.tableContent2}>1/3 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>3</td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>250</td>
              <td className={styles.tableContent2}>2</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>20-21</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Esqueleto</td>
              <td className={styles.tableContent2}>50 </td>
              <td className={styles.tableContent2}>1/8 </td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>350</td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>3-4-18</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Pequeña Araña</td>
              <td className={styles.tableContent2}>125</td>
              <td className={styles.tableContent2}>3/8 </td>
              <td className={styles.tableContent2}>4</td>
              <td className={styles.tableContent2}>5</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>20</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>375 </td>
              <td className={styles.tableContent2}>2</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>12</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Goblin</td>
              <td className={styles.tableContent2}>110</td>
              <td className={styles.tableContent2}>2/12 </td>
              <td className={styles.tableContent2}>15</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>60</td>
              <td className={styles.tableContent2}>40</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>710</td>
              <td className={styles.tableContent2}>22</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>3-25</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Lobo</td>
              <td className={styles.tableContent2}>75</td>
              <td className={styles.tableContent2}>1/18 </td>
              <td className={styles.tableContent2}>8</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>80</td>
              <td className={styles.tableContent2}>25</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>735</td>
              <td className={styles.tableContent2}>74</td>
              <td className={styles.tableContent2}>100% - Piel de Lobo, 5% - Chuleta, 5% - Casco de Lobo.</td>
              <td className={styles.tableContent2}>2-3-7-17</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Zombie</td>
              <td className={styles.tableContent2}>250</td>
              <td className={styles.tableContent2}>4/12 </td>
              <td className={styles.tableContent2}>20</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>20</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>1.430</td>
              <td className={styles.tableContent2}>72</td>
              <td className={styles.tableContent2}>10% - Ropa de Clan</td>
              <td className={styles.tableContent2}>4-18</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Orco</td>
              <td className={styles.tableContent2}>350</td>
              <td className={styles.tableContent2}>5/35 </td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>75</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>1.750</td>
              <td className={styles.tableContent2}>90</td>
              <td className={styles.tableContent2}>70% - Hacha</td>
              <td className={styles.tableContent2}>9-28</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Tortuga Gigante</td>
              <td className={styles.tableContent2}>315</td>
              <td className={styles.tableContent2}>35/55 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>45</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>2.520 </td>
              <td className={styles.tableContent2}>314</td>
              <td className={styles.tableContent2}>100% - Escudo de Tortuga</td>
              <td className={styles.tableContent2}>6-16-31</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Bandido</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>15/39 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>70</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>2.500 </td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}> 40% - Ropa de Pordiosero</td>
              <td className={styles.tableContent2}>3</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Araña de Los Rincones</td>
              <td className={styles.tableContent2}>650</td>
              <td className={styles.tableContent2}>35/75</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>110</td>
              <td className={styles.tableContent2}>70</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>3.500</td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>12</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Oso Polar</td>
              <td className={styles.tableContent2}>1.700</td>
              <td className={styles.tableContent2}>65/100</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>250</td>
              <td className={styles.tableContent2}>65</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>4.250</td>
              <td className={styles.tableContent2}>960</td>
              <td className={styles.tableContent2}>100% - Piel de Oso Polar</td>
              <td className={styles.tableContent2}>59</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Oso Pardo</td>
              <td className={styles.tableContent2}>625</td>
              <td className={styles.tableContent2}>65/100 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>250</td>
              <td className={styles.tableContent2}>65</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>6.250 </td>
              <td className={styles.tableContent2}>624</td>
              <td className={styles.tableContent2}>100% - Piel de Oso Pardo</td>
              <td className={styles.tableContent2}>6-12</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Araña</td>
              <td className={styles.tableContent2}>1.000</td>
              <td className={styles.tableContent2}>50/75</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>20</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>11.500</td>
              <td className={styles.tableContent2}>340</td>
              <td className={styles.tableContent2}>20% - 5 Pociones Violeta</td>
              <td className={styles.tableContent2}>12</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Araña Gigante</td>
              <td className={styles.tableContent2}>1.100 </td>
              <td className={styles.tableContent2}>75/100 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>75</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>11.865</td>
              <td className={styles.tableContent2}>440</td>
              <td className={styles.tableContent2}>
                {' '}
                5% - Martillo de Guerra, 5% - Armadura de Cuero, 5% - Armadura de Cuero (E/G)
              </td>
              <td className={styles.tableContent2}>8-9-20-21-23-24</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Asesino</td>
              <td className={styles.tableContent2}>1.100</td>
              <td className={styles.tableContent2}>15/139 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>200 </td>
              <td className={styles.tableContent2}>200 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>14.115 </td>
              <td className={styles.tableContent2}>440</td>
              <td className={styles.tableContent2}>
                5% - Armadura de las Sombras, 5% - Armadura de las Sombras (E/G)
              </td>
              <td className={styles.tableContent2}>26</td>
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
              <td className={styles.tableContent2}>1.280</td>
              <td className={styles.tableContent2}>15% - Gema Azul (1 Pto de User)</td>
              <td className={styles.tableContent2}>59</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Mago Malvado </td>
              <td className={styles.tableContent2}>1.700 </td>
              <td className={styles.tableContent2}>75/126 </td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}> Lanza Paralizar, Núcleo Plasma y Tormenta de Fuego</td>
              <td className={styles.tableContent2}>15.000 </td>
              <td className={styles.tableContent2}>1.040</td>
              <td className={styles.tableContent2}>
                {' '}
                15% - Gema Azul (1 Pto de User), 5% - Bastón Nudoso, 5% - Túnica de Mago, 5% - Túnica de Mago
                (E/G)
              </td>
              <td className={styles.tableContent2}>59</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Lord Orco </td>
              <td className={styles.tableContent2}>1.500 </td>
              <td className={styles.tableContent2}>200/200 </td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>170</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>16.000 </td>
              <td className={styles.tableContent2}>1.200 </td>
              <td className={styles.tableContent2}>15% - Gema Azul (1 Pto de User) </td>
              <td className={styles.tableContent2}>59</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Orco Brujo </td>
              <td className={styles.tableContent2}>1.500 </td>
              <td className={styles.tableContent2}>75/120 </td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>180</td>
              <td className={styles.tableContent2}>Lanza Núcleo Plasma</td>
              <td className={styles.tableContent2}>19.500 </td>
              <td className={styles.tableContent2}>1.200 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>59</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Ogro</td>
              <td className={styles.tableContent2}>1.800</td>
              <td className={styles.tableContent2}>88/232 </td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>260</td>
              <td className={styles.tableContent2}>230</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>22.805 </td>
              <td className={styles.tableContent2}>1.440</td>
              <td className={styles.tableContent2}>100% - Garrote, 15% - Gema Azul (1 Pto de User)</td>
              <td className={styles.tableContent2}>28</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Liche Infernal </td>
              <td className={styles.tableContent2}>4.600 </td>
              <td className={styles.tableContent2}>120/200 </td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>220</td>
              <td className={styles.tableContent2}>230</td>
              <td className={styles.tableContent2}>Lanza Paralizar, Núcleo Plasma y Tormenta de Fuego</td>
              <td className={styles.tableContent2}>63.500 </td>
              <td className={styles.tableContent2}>2.000</td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos
                de User), 5% - Hechizo: Núcleo Plasma, 5% - Túnica de Monje, 5% - Túnica de Monje (E/G)
              </td>
              <td className={styles.tableContent2}>59</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Leviatan</td>
              <td className={styles.tableContent2}>7.000</td>
              <td className={styles.tableContent2}>60/250 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>220</td>
              <td className={styles.tableContent2}>180</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>91.000 </td>
              <td className={styles.tableContent2}>3.500</td>
              <td className={styles.tableContent2}>
                15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos
                de User), 5% - Casco de Hierro Completo, 5% - Escudo Imperial
              </td>
              <td className={styles.tableContent2}>59</td>
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

export default Mundoabierto;
