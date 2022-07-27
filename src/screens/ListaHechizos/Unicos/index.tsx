import React from 'react';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Unicos() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.hechizosTitle}>Hechizos Unicos</h1>
        <p className={styles.contenido}>
          Los Hechizos Unicos solo podremos adquirirlos a través de nuestro sistema de Quest{' '}
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
            <td className={styles.tableContent2}>
              Meteoro (Solo Criaturas/Paladin/Clerigo/Asesino/Bardo/Bandido/Druida/Mago)
            </td>
            <td className={styles.tableContent2}>-</td>
            <td className={styles.tableContent2}>38</td>
            <td className={styles.tableContent2}>50</td>
            <td className={styles.tableContent2}>15</td>
            <td className={styles.tableContent2}>
              Inflinge entre 35 a 55 de Daño Magico al Objetivo, solo funciona en Criaturas
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>
              Mascota de Entrenamiento (Paladin/Clerigo/Asesino/Bardo/Bandido/Druida/Mago)
            </td>
            <td className={styles.tableContent2}>-</td>
            <td className={styles.tableContent2}>38</td>
            <td className={styles.tableContent2}>220</td>
            <td className={styles.tableContent2}>50</td>
            <td className={styles.tableContent2}>Invoca 3 Tortugas que acudiran en tu ayuda</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>
              Mascota de Entrenamiento (Pirata/Cazador/Ladron/Guerrero/Trabajador)
            </td>
            <td className={styles.tableContent2}>-</td>
            <td className={styles.tableContent2}>0</td>
            <td className={styles.tableContent2}>0</td>
            <td className={styles.tableContent2}>200</td>
            <td className={styles.tableContent2}>Invoca 3 Osos que acudiran en tu ayuda</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>
              Primeros Auxilios (Paladin/Clerigo/Asesino/Bardo/Bandido/Druida/Mago)
            </td>
            <td className={styles.tableContent2}>-</td>
            <td className={styles.tableContent2}>38</td>
            <td className={styles.tableContent2}>40</td>
            <td className={styles.tableContent2}>20</td>
            <td className={styles.tableContent2}>Restaura la Salud del Objetivo entre 10 y 20</td>
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

export default Unicos;
