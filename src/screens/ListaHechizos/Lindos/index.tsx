import React from 'react';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Lindos() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.hechizosTitle}>Ciudad de Lindos</h1>
        <p className={styles.contenido}>
          La Ciudad de Lindos se encuentra situada en el Mapa 54 y en ella encontraremos:{' '}
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
            <td className={styles.tableContent2}>Provocar Hambre</td>
            <td className={styles.tableContent2}>200</td>
            <td className={styles.tableContent2}>5</td>
            <td className={styles.tableContent2}>20</td>
            <td className={styles.tableContent2}>2</td>
            <td className={styles.tableContent2}>Provoca la perdida de Hambre entre 20 a 50 puntos</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Manada Hambrienta</td>
            <td className={styles.tableContent2}>14.000</td>
            <td className={styles.tableContent2}>40</td>
            <td className={styles.tableContent2}>120</td>
            <td className={styles.tableContent2}>16</td>
            <td className={styles.tableContent2}>Invoca 3 Lobos Salvajes que acudiran en tu ayuda</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Nigromancia</td>
            <td className={styles.tableContent2}>20.000</td>
            <td className={styles.tableContent2}>51</td>
            <td className={styles.tableContent2}>400</td>
            <td className={styles.tableContent2}>31</td>
            <td className={styles.tableContent2}>Invoca 3 Zombies que acudiran en tu ayuda</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Torpeza</td>
            <td className={styles.tableContent2}>135.000</td>
            <td className={styles.tableContent2}>20</td>
            <td className={styles.tableContent2}>20</td>
            <td className={styles.tableContent2}>2</td>
            <td className={styles.tableContent2}>
              Reduce el Atributo de Celeridad del Objetivo entre 2 a 5, solo funciona en Usuarios
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Celeridad Total (Clerigo)</td>
            <td className={styles.tableContent2}>50.000</td>
            <td className={styles.tableContent2}>60</td>
            <td className={styles.tableContent2}>150</td>
            <td className={styles.tableContent2}>75</td>
            <td className={styles.tableContent2}>
              Aumenta el Atributo de Celeridad del Objetivo al Maximo, solo funciona en Usuarios{' '}
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Fuerza Total (Clerigo)</td>
            <td className={styles.tableContent2}>50.000</td>
            <td className={styles.tableContent2}>60</td>
            <td className={styles.tableContent2}>150</td>
            <td className={styles.tableContent2}>75</td>
            <td className={styles.tableContent2}>
              Aumenta el Atributo de Fuerza del Objetivo al Maximo, solo funciona en Usuarios
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Celeridad</td>
            <td className={styles.tableContent2}>15.000</td>
            <td className={styles.tableContent2}>20</td>
            <td className={styles.tableContent2}>40</td>
            <td className={styles.tableContent2}>5</td>
            <td className={styles.tableContent2}>
              Aumenta el Atributo de Celeridad del Objetivo entre 2 a 5, solo funciona en Usuarios
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Fuerza</td>
            <td className={styles.tableContent2}>15.000</td>
            <td className={styles.tableContent2}>35</td>
            <td className={styles.tableContent2}>50</td>
            <td className={styles.tableContent2}>6</td>
            <td className={styles.tableContent2}>
              Aumenta el Atributo de Fuerza del Objetivo entre 2 a 5, solo funciona en Usuarios
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Vitalidad (Clerigo/Paladin)</td>
            <td className={styles.tableContent2}>1.500.000</td>
            <td className={styles.tableContent2}>60</td>
            <td className={styles.tableContent2}>150</td>
            <td className={styles.tableContent2}>50</td>
            <td className={styles.tableContent2}>
              Recupera Estamina, Comida y Bebida sobre el Objetivo, Solo funciona en Usuarios
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Curar Heridas Mortales (Druida/Bardo)</td>
            <td className={styles.tableContent2}>100.000</td>
            <td className={styles.tableContent2}>100</td>
            <td className={styles.tableContent2}>500</td>
            <td className={styles.tableContent2}>100</td>
            <td className={styles.tableContent2}>Restaura la Salud del Objetivo entre 50 y 70</td>
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

export default Lindos;
