import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Hilado() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.trabajoContainer}>
          <h1 className={styles.trabajoTitulo}>Hilado</h1>
          <p className={styles.trabajoContenido}>
            La habilidad del Trabajador con el oficio en Esquilación es quién posee la habilidad de hilar la
            lanas extraidas de los animales para poder convertirlos en Ovillos los cuales son un recurso muy
            bien pago dado a que con ellos podremos forjar poderosos objetos con nuestro Sastre. Para poder
            hilar las lanas en ovillos nos acercaremos hasta la casa del comerciante Sastre los cuales están
            úbicadas en todas las ciudades de las Tierras. Nos hacercaremos hasta el Telar y, seleccionando de
            nuestro inventario las lanas, presionar tecla Usar (U o doble click) y clickear sobre la fragua.
          </p>
          <br />
          <p className={styles.trabajoContenido}>
            La Hilación la podremos realizar con nuestro Trabajador con el oficio en Esquilación ya que es él
            quién podra hilar todos los tipos de Lanas como Oveja, Cabra y Llama. El resto de las clases sólo
            podrá hilar Lanas de Oveja.
          </p>
        </div>
        <div className={styles.listaItems}>
          <h1 className={styles.trabajoTitulo}>Items para Hilar</h1>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Item</th>
              <th className={styles.tableContent}>Descripción</th>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Telar</td>
              <td className={styles.tableContent2}>Lugar donde podremos hilar nuestras lanas </td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Lana de Oveja </td>
              <td className={styles.tableContent2}>Recurso extraido de una Oveja </td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Lana de Cabra </td>
              <td className={styles.tableContent2}>Recurso extraido de una Cabra </td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Lana de Llama </td>
              <td className={styles.tableContent2}>Recurso extraido de una Llama </td>
            </tr>
          </table>
          <div className={styles.creacion}>
            <h1 className={styles.trabajoTitulo}>Convirtiendo en Ovillos</h1>
            <p className={styles.trabajoContenido}>
              Con nuestro Trabajador nos acercaremos hasta la casa del Sastre para hilar con el telar:
            </p>
            <ul className={styles.listaHilado}>
              <li className={styles.contenidoHilado}>
                Necesitaremos 25 skilles en Esquilación para hilar Ovillos de Oveja con un Trabajador y 75
                skilles para el resto de las clases.
              </li>
              <li className={styles.contenidoHilado}>
                Necesitaremos 50 skilles en Esquilación para hilar Ovillos de Cabra.
              </li>
              <li className={styles.contenidoHilado}>
                Necesitaremos 100 skilles en Esquilación para hilar Ovillos de Llama.
              </li>
            </ul>
          </div>
          <h1 className={styles.trabajoTitulo1}>Cantidad de Lanas por Ovillo</h1>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Lanas</th>
              <th className={styles.tableContent}>Cantidad</th>
              <th className={styles.tableContent}>Ovillos</th>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Lana de Oveja </td>
              <td className={styles.tableContent2}>70</td>
              <td className={styles.tableContent2}>5 Ovillo de Oveja </td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Lana de Cabra </td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>5 Ovillo de Cabra </td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Lana de Llama </td>
              <td className={styles.tableContent2}>175</td>
              <td className={styles.tableContent2}>5 Ovillo de Llama</td>
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

export default Hilado;
