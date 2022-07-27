import React from 'react';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Terminus() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.hechizosTitle}>Ciudad de Terminus</h1>
        <p className={styles.contenido}>
          La Ciudad de Terminus se encuentra situada en el Mapa 22 y en ella encontraremos:
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
            <td className={styles.tableContent2}>Debilidad</td>
            <td className={styles.tableContent2}>140.000</td>
            <td className={styles.tableContent2}>35</td>
            <td className={styles.tableContent2}>45</td>
            <td className={styles.tableContent2}>6</td>
            <td className={styles.tableContent2}>
              Reduce el Atributo de Fuerza del Objetivo entre 2 a 5, solo funciona en Usuarios
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Inmovilizar (Solo Criaturas)</td>
            <td className={styles.tableContent2}>30.000</td>
            <td className={styles.tableContent2}>40</td>
            <td className={styles.tableContent2}>300</td>
            <td className={styles.tableContent2}>25</td>
            <td className={styles.tableContent2}>
              Inmoviliza al Objetivo por unos segundos, Solo funciona en Criaturas
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Resurrección Divina (Clerigo)</td>
            <td className={styles.tableContent2}>2.850.000</td>
            <td className={styles.tableContent2}>99</td>
            <td className={styles.tableContent2}>1000</td>
            <td className={styles.tableContent2}>400</td>
            <td className={styles.tableContent2}>
              Resucita al Objetivo y lo Cura Levemente, Solo funciona en Usuarios
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Invisibilidad (Bardo/Clerigo/Druida)</td>
            <td className={styles.tableContent2}>600.000</td>
            <td className={styles.tableContent2}>87</td>
            <td className={styles.tableContent2}>500</td>
            <td className={styles.tableContent2}>75</td>
            <td className={styles.tableContent2}>Vuelve invisible al Objetivo, solo funciona en Usuarios</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Curar Heridas Mortales (Clerigo)</td>
            <td className={styles.tableContent2}>100.000</td>
            <td className={styles.tableContent2}>80</td>
            <td className={styles.tableContent2}>200</td>
            <td className={styles.tableContent2}>100</td>
            <td className={styles.tableContent2}>Restaura la Salud del Objetivo entre 50 y 70</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Llamarada</td>
            <td className={styles.tableContent2}>1.150.000</td>
            <td className={styles.tableContent2}>98</td>
            <td className={styles.tableContent2}>700</td>
            <td className={styles.tableContent2}>100</td>
            <td className={styles.tableContent2}>Inflinge entre 72 a 80 de Daño Magico al Objetivo</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Sombra de la Muerte (Mago)</td>
            <td className={styles.tableContent2}>7.000.000</td>
            <td className={styles.tableContent2}>99</td>
            <td className={styles.tableContent2}>2800</td>
            <td className={styles.tableContent2}>250</td>
            <td className={styles.tableContent2}>
              Inflinge entre 115 a 120 de Daño Magico al Objetivo. Para poder lanzar esta magia necesitas
              tener equpiado alguno de los siguientes objetos: Baculo Engarzado, Vara de Mago o Baculo
              Luminozo{' '}
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

export default Terminus;
