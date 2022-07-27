import React from 'react';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Arghal() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.hechizosTitle}>Ciudad de Arghal</h1>
        <p className={styles.contenido}>
          La Ciudad de Arghal se encuentra situada en el Mapa 35 y en ella encontraremos:{' '}
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
            <td className={styles.tableContent2}>Elemental de Fuego (Mago/Bardo/Clerigo)</td>
            <td className={styles.tableContent2}>1.850.000</td>
            <td className={styles.tableContent2}>100</td>
            <td className={styles.tableContent2}>1.000</td>
            <td className={styles.tableContent2}>145</td>
            <td className={styles.tableContent2}>
              {' '}
              Invoca un Elemental de Fuego que acudira en tu ayuda, Lanza Tormenta de Fuego a los Usuarios
              Objetivos. Para poder lanzar esta magia necesitas tener equpiado alguno de los siguientes
              objetos: Baculo Engarzado, Vara de Mago, Baculo Luminozo, Laud Magico o Laud Elfico Solo las
              Clases Mago y Bardo
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Elemental de Fuego (Druida)</td>
            <td className={styles.tableContent2}>1.850.000</td>
            <td className={styles.tableContent2}>100</td>
            <td className={styles.tableContent2}>750</td>
            <td className={styles.tableContent2}>105</td>
            <td className={styles.tableContent2}>
              Invoca un Elemental de Fuego que acudira en tu ayuda, Lanza Tormenta de Fuego a los Usuarios
              Objetivos. Para poder lanzar esta magia necesitas tener equpiado alguno de los siguientes
              objetos: Flauta Mágica o Flauta Elfica
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Elemental de Agua (Mago/Bardo/Clerigo)</td>
            <td className={styles.tableContent2}>1.250.000</td>
            <td className={styles.tableContent2}>100</td>
            <td className={styles.tableContent2}>1.000</td>
            <td className={styles.tableContent2}>130</td>
            <td className={styles.tableContent2}>Invoca un Elemental de Agua que acudira en tu ayuda</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Elemental de Agua (Druida)</td>
            <td className={styles.tableContent2}>1.250.000</td>
            <td className={styles.tableContent2}>100</td>
            <td className={styles.tableContent2}>750</td>
            <td className={styles.tableContent2}>90</td>
            <td className={styles.tableContent2}>Invoca un Elemental de Agua que acudira en tu ayuda</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Elemental de Tierra (Bardo/Clerigo)</td>
            <td className={styles.tableContent2}>1.550.000</td>
            <td className={styles.tableContent2}>90</td>
            <td className={styles.tableContent2}>1.000</td>
            <td className={styles.tableContent2}>131</td>
            <td className={styles.tableContent2}>
              {' '}
              Invoca un Elemental de Tierra que acudira en tu ayuda, Lanza Paralizar a los Usuarios Objetivos.
              Para poder lanzar esta magia necesitas tener equpiado alguno de los siguientes objetos: Laud
              Magico o Laud Elfico Solo la Clase Bardo
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Elemental de Tierra (Druida)</td>
            <td className={styles.tableContent2}>1.550.000</td>
            <td className={styles.tableContent2}>97</td>
            <td className={styles.tableContent2}>750</td>
            <td className={styles.tableContent2}>120</td>
            <td className={styles.tableContent2}>
              Invoca un Elemental de Tierra que acudira en tu ayuda, Lanza Paralizar a los Usuarios Objetivos.
              Para poder lanzar esta magia necesitas tener equpiado alguno de los siguientes objetos: Flauta
              Mágica o Flauta Elfica
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Invisibilidad (Paladin/Asesino)</td>
            <td className={styles.tableContent2}>650.000</td>
            <td className={styles.tableContent2}>87</td>
            <td className={styles.tableContent2}>400</td>
            <td className={styles.tableContent2}>75</td>
            <td className={styles.tableContent2}>Vuelve invisble al Objetivo, solo funciona en Usuarios</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Explosion Faustica (Mago)</td>
            <td className={styles.tableContent2}>5.000.000</td>
            <td className={styles.tableContent2}>99</td>
            <td className={styles.tableContent2}>1.700</td>
            <td className={styles.tableContent2}>175</td>
            <td className={styles.tableContent2}>
              Inflinge entre 97 a 103 de Daño Magico al Objetivo. Para poder lanzar esta magia necesitas tener
              equpiado alguno de los siguientes objetos: Baculo Engarzado, Vara de Mago o Baculo Luminozo
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Explosion Faustica (Bardo)</td>
            <td className={styles.tableContent2}>5.000.000</td>
            <td className={styles.tableContent2}>99</td>
            <td className={styles.tableContent2}>1.700</td>
            <td className={styles.tableContent2}>175</td>
            <td className={styles.tableContent2}>
              {' '}
              Inflinge entre 110 a 115 de Daño Magico al Objetivo. Para poder lanzar esta magia necesitas
              tener equpiado alguno de los siguientes objetos: Laud Magico o Laud Elfico
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Explosion Faustica (Druida)</td>
            <td className={styles.tableContent2}>5.000.000</td>
            <td className={styles.tableContent2}>99</td>
            <td className={styles.tableContent2}>1.700</td>
            <td className={styles.tableContent2}>175</td>
            <td className={styles.tableContent2}>
              {' '}
              Inflinge entre 103 a 107 de Daño Magico al Objetivo. Para poder lanzar esta magia necesitas
              tener equpiado alguno de los siguientes objetos: Flauta Mágica o Flauta Elfica
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Implorar Ayuda (Druida)</td>
            <td className={styles.tableContent2}>5.000.000</td>
            <td className={styles.tableContent2}>99</td>
            <td className={styles.tableContent2}>1.700</td>
            <td className={styles.tableContent2}>175</td>
            <td className={styles.tableContent2}>
              Invoca un Fuego Fatuo que acudira en tu ayuda, Lanza Paralizar y Descarga Electrica a los
              Usuarios Objetivos. Para poder lanzar esta magia necesitas tener equpiado alguno de los
              siguientes objetos: Flauta Mágica o Flauta Elfica
            </td>
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

export default Arghal;
