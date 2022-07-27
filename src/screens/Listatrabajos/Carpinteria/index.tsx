import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import carp1 from '../../LogIn/assets/carpinteria1.jpg';
import carp2 from '../../LogIn/assets/carpinteria2.jpg';

import styles from './styles.module.scss';

function Carpinteria() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.trabajoContainer}>
          <h1 className={styles.trabajoTitulo}>Carpintería</h1>
          <p className={styles.trabajoContenido}>
            El oficio de la carpintería sirve para construir objetos a base de leña. Una vez que tengas un
            serrucho deberás equiparlo con la tecla Equipar (E) y luego presionar tecla Usar (U o doble
            click). De esta forma se abrirá una ventana que mostrará el listado de objetos que el personaje
            podrá construir según la clase y puntos de habilidad en carpintería.
          </p>
          <br />
          <p className={styles.trabajoContenido}>
            El Trabajador con el oficio en Carpintería podra crear una gran variedad de objetos (todos los del
            listado) mientras que el resto de las clases sólo podrá crear una menor cantidad (limitados).
          </p>
        </div>
        <div className={styles.listaItems}>
          <h1 className={styles.trabajoTitulo}>Items de Carpintería </h1>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Item</th>
              <th className={styles.tableContent}>Descripción</th>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Serrucho</td>
              <td className={styles.tableContent2}>
                Item necesario para la construcción con madera, se vende en el NPC “Vendedor”
              </td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Leña</td>
              <td className={styles.tableContent2}>
                Recurso extraido desde un Arbol para la elaboración de objetos
              </td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Leña Élfica </td>
              <td className={styles.tableContent2}>
                Recurso extraido desde un Arbol Élfico para la elaboración de objetos
              </td>
            </tr>
          </table>
          <div className={styles.creacion}>
            <div className={styles.imagenContainer}>
              <p className={styles.trabajoContenido}>Útilizando el Serrucho abrimos el menú de creación.</p>
              <img className={styles.img} src={carp1} alt="" />
            </div>
            <div className={styles.imagenContainer}>
              <p className={styles.trabajoContenido}>
                Seleccionamos el objeto a construir junto con su cantidad.
              </p>
              <img className={styles.img} src={carp2} alt="" />
            </div>
          </div>
          <h1 className={styles.trabajoTitulo1}>Lista de Objetos de Creación</h1>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Item</th>
              <th className={styles.tableContent}>Leña</th>
              <th className={styles.tableContent}>Leña Elfica</th>
              <th className={styles.tableContent}>Skills</th>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Cuchara</td>
              <td className={styles.tableContent2}>3</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>5</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Caña de Pescar </td>
              <td className={styles.tableContent2}>70</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>12</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Arco Simple</td>
              <td className={styles.tableContent2}>42</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>20</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Flecha</td>
              <td className={styles.tableContent2}>1</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>20</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Flecha +1</td>
              <td className={styles.tableContent2}>3</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>40</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Flecha +2</td>
              <td className={styles.tableContent2}>5</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>60</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Flecha +3</td>
              <td className={styles.tableContent2}>7</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>90</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Barca (Navegas 5% más rápido)</td>
              <td className={styles.tableContent2}>10.000</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>80</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Galera (Navegas 10% más rápido)</td>
              <td className={styles.tableContent2}>45.000</td>
              <td className={styles.tableContent2}>25.000</td>
              <td className={styles.tableContent2}>90</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Galeón (Navegas 15% más rápido)</td>
              <td className={styles.tableContent2}>90.000</td>
              <td className={styles.tableContent2}>50.000</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Tambor</td>
              <td className={styles.tableContent2}>800</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>75</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Flauta</td>
              <td className={styles.tableContent2}>800</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>75</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Arco de Oro</td>
              <td className={styles.tableContent2}>1.500</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>80</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Bastón Nudoso</td>
              <td className={styles.tableContent2}>2.500</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>80</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Arco de Perla Azul</td>
              <td className={styles.tableContent2}>3.500</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>90</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Flauta mágica</td>
              <td className={styles.tableContent2}>3.000</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Laúd Mágico</td>
              <td className={styles.tableContent2}>3.000</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Ballesta</td>
              <td className={styles.tableContent2}>3.000</td>
              <td className={styles.tableContent2}>300</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Báculo Engarzado</td>
              <td className={styles.tableContent2}>4.500</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Flauta Élfico</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>3.650</td>
              <td className={styles.tableContent2}>100</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Laúd Élfico</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>3.650</td>
              <td className={styles.tableContent2}>100</td>
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

export default Carpinteria;
