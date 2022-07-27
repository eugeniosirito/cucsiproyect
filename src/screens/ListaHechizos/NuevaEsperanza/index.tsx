import React from 'react';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function NuevaEsperanza() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.hechizosTitle}>Ciudad de Nueva Esperanza</h1>
        <p className={styles.contenido}>
          La Ciudad de Nueva Esperanza se encuentra situada en el Mapa 58 y en ella encontraremos:{' '}
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
            <td className={styles.tableContent2}>Rafaga Ardiente (Mago)</td>
            <td className={styles.tableContent2}>2.500.000</td>
            <td className={styles.tableContent2}>98</td>
            <td className={styles.tableContent2}>1.100</td>
            <td className={styles.tableContent2}>125</td>
            <td className={styles.tableContent2}>
              Inflinge entre 83 a 88 de Daño Magico al Objetivo. Para poder lanzar esta magia necesitas tener
              equpiado alguno de los siguientes objetos: Vara de Fresno, Baston Nudoso, Baculo Engarzado, Vara
              de Mago o Baculo Luminozo{' '}
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Ceguera (Mago)</td>
            <td className={styles.tableContent2}>3.000.000</td>
            <td className={styles.tableContent2}>100</td>
            <td className={styles.tableContent2}>2.500</td>
            <td className={styles.tableContent2}>300</td>
            <td className={styles.tableContent2}>
              Embrujo que quita la vision al Usuario. Para poder lanzar esta magia necesitas tener equpiado
              alguno de los siguientes objetos: Baculo Engarzado, Vara de Mago o Baculo Luminozo{' '}
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Maldecir (Mago)</td>
            <td className={styles.tableContent2}>3.000.000</td>
            <td className={styles.tableContent2}>70</td>
            <td className={styles.tableContent2}>500</td>
            <td className={styles.tableContent2}>300</td>
            <td className={styles.tableContent2}>
              Maldice al Usuario haciendo que camine erraticamente. Para poder lanzar esta magia necesitas
              tener equpiado alguno de los siguientes objetos: Baculo Engarzado, Vara de Mago o Baculo
              Luminozo{' '}
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Apocalipsis (Mago)</td>
            <td className={styles.tableContent2}>2.750.000</td>
            <td className={styles.tableContent2}>99</td>
            <td className={styles.tableContent2}>1300</td>
            <td className={styles.tableContent2}>150</td>
            <td className={styles.tableContent2}>
              {' '}
              Inflinge entre 90 a 95 de Daño Magico al Objetivo. Para poder lanzar esta magia necesitas tener
              equpiado alguno de los siguientes objetos: Baculo Engarzado, Vara de Mago o Baculo Luminozo
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Descarga Electrica</td>
            <td className={styles.tableContent2}>250.000</td>
            <td className={styles.tableContent2}>75</td>
            <td className={styles.tableContent2}>400</td>
            <td className={styles.tableContent2}>85</td>
            <td className={styles.tableContent2}>Inflinge entre 55 a 65 de Daño Magico al Objetivo</td>
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

export default NuevaEsperanza;
