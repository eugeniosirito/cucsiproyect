import React from 'react';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Nix() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.hechizosTitle}>Ciudad de Nix</h1>
        <p className={styles.contenido}>
          La Ciudad de Nix se encuentra situada en el Mapa 13 y en ella encontraremos:{' '}
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
            <td className={styles.tableContent2}>Envenenar</td>
            <td className={styles.tableContent2}>950.000</td>
            <td className={styles.tableContent2}>90</td>
            <td className={styles.tableContent2}>500</td>
            <td className={styles.tableContent2}>100</td>
            <td className={styles.tableContent2}>Envenena al objetivo</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Curar Heridas Graves</td>
            <td className={styles.tableContent2}>20.000</td>
            <td className={styles.tableContent2}>50</td>
            <td className={styles.tableContent2}>40</td>
            <td className={styles.tableContent2}>20</td>
            <td className={styles.tableContent2}>Restaura la Salud del Objetivo entre 12 y 35</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Bola de Fuego</td>
            <td className={styles.tableContent2}>4500</td>
            <td className={styles.tableContent2}>22</td>
            <td className={styles.tableContent2}>20</td>
            <td className={styles.tableContent2}>5</td>
            <td className={styles.tableContent2}>Inflinge entre 12 a 20 de Daño Magico al Objetivo</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Nucleo Plasma</td>
            <td className={styles.tableContent2}>12.000</td>
            <td className={styles.tableContent2}>38</td>
            <td className={styles.tableContent2}>50</td>
            <td className={styles.tableContent2}>15</td>
            <td className={styles.tableContent2}>Inflinge entre 30 a 35 de Daño Magico al Objetivo</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Paralizar</td>
            <td className={styles.tableContent2}>175.000</td>
            <td className={styles.tableContent2}>60</td>
            <td className={styles.tableContent2}>400</td>
            <td className={styles.tableContent2}>65</td>
            <td className={styles.tableContent2}>Paraliza al Objetivo por unos segundos</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Remover Paralisis</td>
            <td className={styles.tableContent2}>10.000</td>
            <td className={styles.tableContent2}>45</td>
            <td className={styles.tableContent2}>300</td>
            <td className={styles.tableContent2}>60</td>
            <td className={styles.tableContent2}>Remueve la Paralisis al Objetivo</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Resucitar (Mago/Druida/Bardo)</td>
            <td className={styles.tableContent2}>2.000.000</td>
            <td className={styles.tableContent2}>100</td>
            <td className={styles.tableContent2}>2000</td>
            <td className={styles.tableContent2}>450</td>
            <td className={styles.tableContent2}>
              Resucita al Objetivo, Solo funciona en Usuarios. Para poder lanzar esta magia necesitas tener
              equpiado alguno de los siguientes objetos: Baculo Engarzado, Vara de Mago, Baculo Luminozo,
              Flauta Mágica, Flauta Elfica, Laud Magico o Laud Elfico
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Curacion Divina (Clerigo)</td>
            <td className={styles.tableContent2}>550.000</td>
            <td className={styles.tableContent2}>80</td>
            <td className={styles.tableContent2}>500</td>
            <td className={styles.tableContent2}>650</td>
            <td className={styles.tableContent2}>Restaura la Salud del Objetivo entre 90 y 180</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Curar Heridas Mortales (Paladin)</td>
            <td className={styles.tableContent2}>100.000</td>
            <td className={styles.tableContent2}>100</td>
            <td className={styles.tableContent2}>300</td>
            <td className={styles.tableContent2}>100</td>
            <td className={styles.tableContent2}>Restaura la Salud del Objetivo entre 50 y 75 </td>
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

export default Nix;
