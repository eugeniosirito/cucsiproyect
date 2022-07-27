import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import raices from '../../LogIn/assets/raices.jpg';

import styles from './styles.module.scss';

function Botanica() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.trabajoContainer}>
          <h1 className={styles.trabajoTitulo}>Botánica</h1>
          <p className={styles.trabajoContenido}>
            La botánica es el trabajo dedicado a la extración de los recursos de raíces de los arboles para
            luego poder elbarorar complejas pociones de un grado superior a las que podremos encontrar en el
            comerciante con el arte de la Alquimia.
          </p>
          <br />
          <p className={styles.trabajoContenido}>
            La extración de raíces es un arte pura y exclusivamente de la clase DRUIDA mientras que con el
            resto de las clases sólo podrá obtener una a la vez.
          </p>
        </div>
        <div className={styles.listaItems}>
          <h1 className={styles.trabajoTitulo}>Items de Botánica</h1>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Item</th>
              <th className={styles.tableContent}>Descripción</th>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Tijeras</td>
              <td className={styles.tableContent2}>
                Item necesario para la creación de pociones, se vende en el NPC “Vendedor”
              </td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Raíz</td>
              <td className={styles.tableContent2}>Recurso extraido desde un Arbol</td>
            </tr>
          </table>
          <h1 className={styles.trabajoTitulo1}>Extracción de Raíces </h1>
          <p className={styles.trabajoContenido}>
            Con nuestro Druida y su herramienta de trabajo Tijeras nos dirigiremos a zona insegura para
            empezar nuestra recolección:
          </p>
          <h1 className={styles.trabajoTitulo1}>Cálculo de Extración </h1>
          <p className={styles.trabajoContenido}>
            Para saber cuantos leña extraermos influiran los siguientes factores:
          </p>
          <ul className={styles.lista}>
            <li>
              <span className={styles.bonificacion}>Nivel 1 a 44:</span> extraemos entre 2 a 4 Raices sin
              importar tu nivel.
            </li>
            <li>
              <span className={styles.bonificacion}>Nivel 45 o Mas:</span> extraermos (Minimo: TuNivel -42 /
              Maximo: TuNivel -38) *2.
            </li>
            <li>Osea si somos Nivel 45 extraermos entre 6 y 14 Raices.</li>
            <li>[ Nivel45 -42 (Resultado: 3) / Nivel45 -38 (Resultado: 7) ] * 2 = 6/14</li>
          </ul>
          <p className={styles.trabajoContenido}>
            <span className={styles.bonificacion}>IMPORTANTE:</span> Mientras más nivel tenga nuestro Druida
            más recursos extraerá.{' '}
          </p>
          <img className={styles.img} src={raices} alt="" />
        </div>
        <Link to="/manual/trabajos">
          <h1 className={styles.volver}>Volver</h1>
        </Link>
      </div>
    </div>
  );
}

export default Botanica;
