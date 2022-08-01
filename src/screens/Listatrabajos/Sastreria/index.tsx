import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import cost1 from '../../LogIn/assets/costuriando1.jpg';
import cost2 from '../../LogIn/assets/costuriando2.jpg';

import styles from './styles.module.scss';

function Sastreria() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.trabajoContainer}>
          <h1 className={styles.trabajoTitulo}>Sastrería</h1>
          <p className={styles.trabajoContenido}>
            El oficio de la Sastrería sirve para construir Vestimentas y Túnicas a base de Ovillos. Una vez
            que tengas un Costurero deberás equiparlo con la tecla Equipar (E) y luego presionar tecla Usar (U
            o doble click). De esta forma se abrirá una ventana que mostrará el listado de objetos que el
            personaje podrá construir según la clase y puntos de habilidad en Sastrería.
          </p>
          <br />
          <p className={styles.trabajoContenido}>
            El Trabajador con el oficio en Sastería podra crear una gran variedad de objetos (todos los del
            listado) mientras que el resto de las clases sólo podrá crear una menor cantidad (limitados).
          </p>
        </div>
        <div className={styles.listaItems}>
          <h1 className={styles.trabajoTitulo}>Items de Sastreria</h1>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Item</th>
              <th className={styles.tableContent}>Descripción</th>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Costurero </td>
              <td className={styles.tableContent2}>
                Item necesario para la creación con Ovillos, se vende en el NPC “Vendedor”.
              </td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Ovillo de Oveja </td>
              <td className={styles.tableContent2}>Recurso hilado de Lana de Oveja</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Ovillo de Cabra </td>
              <td className={styles.tableContent2}>Recurso hilado de Lana de Cabra</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Ovillo de Llama </td>
              <td className={styles.tableContent2}>Recurso hilado de Lana de Llama</td>
            </tr>
          </table>
          <h1 className={styles.trabajoTitulo}>Creación</h1>
          <div className={styles.creacion}>
            <div className={styles.imagenContainer}>
              <p className={styles.trabajoContenido}>
                Útilizando nuestro Costurero abrimos el menú de creación.
              </p>
              <img className={styles.img} src={cost1} alt="" />
            </div>
            <div className={styles.imagenContainer}>
              <p className={styles.trabajoContenido}>Seleccionamos item y cantidad</p>
              <img className={styles.img} src={cost2} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.trabajosLista}>
          <Link className={styles.links} to="/manual/trabajos/sastreria/tunicas">
            Items de Sastre
          </Link>
        </div>
        <Link to="/manual/trabajos">
          <h1 className={styles.volver}>Volver</h1>
        </Link>
      </div>
    </div>
  );
}

export default Sastreria;
