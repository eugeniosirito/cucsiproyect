import React from 'react';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Banderbill() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.hechizosTitle}>Ciudad de Banderbill</h1>
        <p className={styles.contenido}>
          La Ciudad de Banderbill se encuentra situada en el Mapa 30 y en ella encontraremos:{' '}
        </p>
        <table>
          <tr className={styles.tableStyle}>
            <th className={styles.tableContent}>Nombre</th>
            <th className={styles.tableContent}>Precio</th>
            <th className={styles.tableContent}>Skills</th>
            <th className={styles.tableContent}>Mana</th>
            <th className={styles.tableContent}>Stamina</th>
            <th className={styles.tableContent}>Descripción</th>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Resucitar (Mago/Druida/Bardo)</td>
            <td className={styles.tableContent2}>2.000.000</td>
            <td className={styles.tableContent2}>100</td>
            <td className={styles.tableContent2}>2.000</td>
            <td className={styles.tableContent2}>450</td>
            <td className={styles.tableContent2}>
              Resucita al Objetivo, Solo funciona en Usuarios. Para poder lanzar esta magia necesitas tener
              equpiado alguno de los siguientes objetos: Baculo Engarzado, Vara de Mago, Baculo Luminozo,
              Flauta Mágica, Flauta Elfica, Laud Magico o Laud Elfico
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Invisibilidad (Mago)</td>
            <td className={styles.tableContent2}>550.000</td>
            <td className={styles.tableContent2}>87</td>
            <td className={styles.tableContent2}>600</td>
            <td className={styles.tableContent2}>75</td>
            <td className={styles.tableContent2}>Vuelve invisible al Objetivo, solo funciona en Usuarios</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Relampago (Solo Criaturas)</td>
            <td className={styles.tableContent2}>150.000</td>
            <td className={styles.tableContent2}>60</td>
            <td className={styles.tableContent2}>100</td>
            <td className={styles.tableContent2}>20</td>
            <td className={styles.tableContent2}>
              Inflinge entre 37 a 47 de Daño Magico al Objetivo, solo funciona en Criaturas
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Llamarada (Mago)</td>
            <td className={styles.tableContent2}>1.750.000</td>
            <td className={styles.tableContent2}>98</td>
            <td className={styles.tableContent2}>700</td>
            <td className={styles.tableContent2}>100</td>
            <td className={styles.tableContent2}>Inflinge entre 69 a 75 de Daño Magico al Objetivo</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Rafaga Ardiente (Asesino/Paladin/Bardo/Clerigo)</td>
            <td className={styles.tableContent2}>2.500.000</td>
            <td className={styles.tableContent2}>98</td>
            <td className={styles.tableContent2}>1.100</td>
            <td className={styles.tableContent2}>125</td>
            <td className={styles.tableContent2}>Inflinge entre 93 a 98 de Daño Magico al Objetivo </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Apocalipsis (Bardo/Clerigo)</td>
            <td className={styles.tableContent2}>2.750.000</td>
            <td className={styles.tableContent2}>100</td>
            <td className={styles.tableContent2}>1.300</td>
            <td className={styles.tableContent2}>150</td>
            <td className={styles.tableContent2}>
              Inflinge entre 97 a 102 de Daño Magico al Objetivo. Para poder lanzar esta magia necesitas tener
              equpiado alguno de los siguientes objetos: Laud Magico o Laud Elfico Solo Clase Bardo
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Apocalipsis (Druida)</td>
            <td className={styles.tableContent2}>2.750.000</td>
            <td className={styles.tableContent2}>100</td>
            <td className={styles.tableContent2}>1.300</td>
            <td className={styles.tableContent2}>150</td>
            <td className={styles.tableContent2}>
              Inflinge entre 98 a 103 de Daño Magico al Objetivo. Para poder lanzar esta magia necesitas tener
              equpiado alguno de los siguientes objetos: Flauta Mágica o Flauta Elfica
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Rafaga Ardiente (Druida)</td>
            <td className={styles.tableContent2}>2.500.000</td>
            <td className={styles.tableContent2}>98</td>
            <td className={styles.tableContent2}>1.100</td>
            <td className={styles.tableContent2}>125</td>
            <td className={styles.tableContent2}>Inflinge entre 94 a 98 de Daño Magico al Objetivo</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Tormenta de Fuego(Paladin)</td>
            <td className={styles.tableContent2}>25.000</td>
            <td className={styles.tableContent2}>75</td>
            <td className={styles.tableContent2}>150</td>
            <td className={styles.tableContent2}>29</td>
            <td className={styles.tableContent2}>Inflinge entre 37 a 47 de Daño Magico al Objetivo</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Mimetismo</td>
            <td className={styles.tableContent2}>400.000</td>
            <td className={styles.tableContent2}>75</td>
            <td className={styles.tableContent2}>800</td>
            <td className={styles.tableContent2}>44</td>
            <td className={styles.tableContent2}>Copia temporalmente la apariencia del Objetivo</td>
          </tr>
        </table>
        <p className={styles.contenido}>
          <span className={styles.aclaracion}>Aclaración: </span>Los precios mencionados son con 0 puntos en
          comercio.
        </p>
      </div>
    </div>
  );
}

export default Banderbill;
