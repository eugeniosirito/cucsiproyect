import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Fragua() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.trabajoContainer}>
          <h1 className={styles.trabajoTitulo}>Lingotes</h1>
          <p className={styles.trabajoContenido}>
            La habilidad del Trabajador con el oficio en Minería es quién posee la habilidad de fundir los
            minerales extraidos de los yacimientos para poder convertirlos en Lingotes los cuales son un
            recurso muy bien pago dado a que con ellos podremos forjar poderosos objetos con nuestro Herrero.
            Para poder fundir los materiales nos acercaremos hasta la casa del comerciante Herrero las cuales
            están úbicadas en todas las ciudades de las Tierras. Nos hacercaremos hasta la Fragua y,
            seleccionando de nuestro inventario los minerales, presionar tecla Usar (U o doble click) y
            clickear sobre la fragua.
          </p>
          <br />
          <p className={styles.trabajoContenido}>
            La fundición la podremos realizar con nuestro Trabajador con el oficio en Minería ya que es él
            quién podra fundir todos los tipos de materiales como el Hierro, la Plata o el Oro. El resto de
            las clases sólo podrá fundir minerales de hierro.
          </p>
        </div>
        <div className={styles.listaItems}>
          <h1 className={styles.trabajoTitulo}>Itemas para la Fundición</h1>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Item</th>
              <th className={styles.tableContent}>Descripción</th>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Fragua</td>
              <td className={styles.tableContent2}>Lugar donde podremos fundir nuestros minerales.</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Mineral de Hierro </td>
              <td className={styles.tableContent2}>Recurso extraido desde un Yacimiento de Hierro</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Mineral de Plata </td>
              <td className={styles.tableContent2}>Recurso extraido desde un Yacimiento de Plata</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Mineral de Oro </td>
              <td className={styles.tableContent2}>Recurso extraido desde un Yacimiento de Oro</td>
            </tr>
          </table>
          <div className={styles.creacion}>
            <h1 className={styles.trabajoTitulo}>Fundición de Minerales</h1>
            <p className={styles.trabajoContenido}>
              Con nuestro Trabajador nos acercaremos hasta la casa del Herrero para fundir los minerales en la
              fragua:
            </p>
          </div>
          <h1 className={styles.trabajoTitulo1}>Cantidad de Minerales por Lingote</h1>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Minerales</th>
              <th className={styles.tableContent}>Cantidad</th>
              <th className={styles.tableContent}>Lingote</th>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Mineral de Hierro </td>
              <td className={styles.tableContent2}>70</td>
              <td className={styles.tableContent2}>5 Lingote de Hierro </td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Mineral de Plata </td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>5 Lingote de Plata </td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Mineral de Oro </td>
              <td className={styles.tableContent2}>175</td>
              <td className={styles.tableContent2}>5 Lingote de Oro</td>
            </tr>
          </table>
        </div>
        <Link to="/manual/trabajos">
          <h1 className={styles.volver}>Volver</h1>
        </Link>
      </div>
    </div>
  );
}

export default Fragua;
