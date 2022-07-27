import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import craft1 from '../../LogIn/assets/crafteando1.jpg';
import craft2 from '../../LogIn/assets/crafteando2.jpg';
import craft3 from '../../LogIn/assets/crafteando3.jpg';

import styles from './styles.module.scss';

function Herreria() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.trabajoContainer}>
          <h1 className={styles.trabajoTitulo}>Herrería</h1>
          <p className={styles.trabajoContenido}>
            El oficio de la Herrería sirve para la construcción de poderosas Armas, Armaduras, Cascos, Escudos
            e Items Mágico a base de Lingotes de Hierro, Plata y Oro. Una vez que tengas un Martillo de
            Herrero y nuestros Lingotes deberemos de dirigirnos hasta la casa del comerciante Herrero las
            cuales están ubicadas en todas las ciudades de las Tierras. Nos acercaremos hasta el Yunque y,
            equipando nuestro Martillo de Herrero con la tecla (E), presionaremos la tecla Usar (U o doble
            click) sobre el Yunque y se nos abrirá el menú de creación.
          </p>
          <br />
          <p className={styles.trabajoContenido}>
            El Trabajador con el oficio en Herrería podra crear una gran variedad de objetos (todos los del
            listado) mientras que el resto de las clases sólo podrá crear una menor cantidad (limitados).
          </p>
        </div>
        <div className={styles.listaItems}>
          <h1 className={styles.trabajoTitulo}>Items de Herrería </h1>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Item</th>
              <th className={styles.tableContent}>Descripción</th>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Martillo de Herrero </td>
              <td className={styles.tableContent2}>
                Item necesario para la creación con Lingotes, se vende en el NPC “Vendedor”.
              </td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Yunque </td>
              <td className={styles.tableContent2}>Lugar donde podremos crear nuestros objetos.</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Lingote de Hierro </td>
              <td className={styles.tableContent2}>Recurso fundido de los Minerales de Hierro</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Lingote de Plata </td>
              <td className={styles.tableContent2}>Recurso fundido de los Minerales de Plata</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Lingote de Oro </td>
              <td className={styles.tableContent2}>Recurso fundido de los Minerales de Oro</td>
            </tr>
          </table>
          <h1 className={styles.trabajoTitulo1}>Creación</h1>
          <p className={styles.trabajoContenido}>
            Con nuestro Trabajador y su herramienta de trabajo Piquete de Minero nos dirigiremos a zona
            insegura para empezar nuestra extracción de minerales las cuales se hayan en lo profundo de las
            catacumbas o dungeons.
          </p>
          <div className={styles.creacion}>
            <div className={styles.imagenContainer}>
              <p className={styles.trabajoContenido}>
                Útilizando el Martillo de Herrero y haciendo click en el Yunque abrimos el menú de creación.
              </p>
              <img className={styles.img} src={craft1} alt="" />
            </div>
            <div className={styles.imagenContainer}>
              <p className={styles.trabajoContenido}>
                Podremos seleccionar Armas o Armaduras (Armaduras/Cascos y Escudos).
              </p>
              <img className={styles.img} src={craft2} alt="" />
            </div>
            <div className={styles.imagenContainer}>
              <p className={styles.trabajoContenido}>
                Seleccionamos el objeto a construir junto con su cantidad.
              </p>
              <img className={styles.img} src={craft3} alt="" />
            </div>
          </div>
        </div>
        <h1 className={styles.trabajoTitulo1}>Lista de Objetos de Herrería</h1>
        <div className={styles.trabajosLista}>
          <Link className={styles.links} to="/manual/trabajos/pesca">
            Armaduras Altos (Hombre/Mujer)
          </Link>
          <Link className={styles.links} to="/manual/trabajos/tala">
            Armaduras Bajos (Enano/Gnomo)
          </Link>
          <Link className={styles.links} to="/manual/trabajos/carpinteria">
            Armas
          </Link>
          <Link className={styles.links} to="/manual/trabajos/botanica">
            Escudos y Cascos
          </Link>
        </div>
        <Link to="/manual/trabajos">
          <h1 className={styles.volver}>Volver</h1>
        </Link>
      </div>
    </div>
  );
}

export default Herreria;
