import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import alc1 from '../../LogIn/assets/alquimia1.jpg';
import alc2 from '../../LogIn/assets/alquimia2.jpg';

import styles from './styles.module.scss';

function Alquimia() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.trabajoContainer}>
          <h1 className={styles.trabajoTitulo}>Alquimia</h1>
          <p className={styles.trabajoContenido}>
            El Alquimia es el Arte de las viejas brujas la cual sirve para la creación de poderosas pociones a
            base de raíces. Una vez que tengas una Olla deberás equiparlo con la tecla Equipar (E) y luego
            presionar tecla Usar (U o doble click). De esta forma se abrirá una ventana que mostrará el
            listado de objetos que el personaje podrá construir según la clase y puntos de habilidad en
            Alquimia.
          </p>
          <br />
          <p className={styles.trabajoContenido}>
            El Druida con el oficio en Alquimia es quién podra crear una gran variedad de objetos (todos los
            del listado) mientras que el resto de las clases sólo podrá crear una menor cantidad (limitados).
          </p>
        </div>
        <div className={styles.listaItems}>
          <h1 className={styles.trabajoTitulo}>Items de Alquimia</h1>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Item</th>
              <th className={styles.tableContent}>Descripción</th>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Olla</td>
              <td className={styles.tableContent2}>
                Item necesario para la construcción con raíces, se vende en el NPC “Vendedor”
              </td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Raíz</td>
              <td className={styles.tableContent2}>
                Recurso extraido desde un Arbol para elaboración de pociones
              </td>
            </tr>
          </table>
          <div className={styles.creacion}>
            <div className={styles.imagenContainer}>
              <p className={styles.trabajoContenido}>Útilizando la Olla abrimos el menú de creación. </p>
              <img className={styles.img} src={alc1} alt="" />
            </div>
            <div className={styles.imagenContainer}>
              <p className={styles.trabajoContenido}>
                Seleccionamos el objeto a construir junto con su cantidad.
              </p>
              <img className={styles.img} src={alc2} alt="" />
            </div>
          </div>
          <h1 className={styles.trabajoTitulo1}>Lista de Objetos de Creación</h1>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Item</th>
              <th className={styles.tableContent}>Estado</th>
              <th className={styles.tableContent}>Bonificación</th>
              <th className={styles.tableContent}>Raices</th>
              <th className={styles.tableContent}>Skills</th>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Poción Violeta (Druida)</td>
              <td className={styles.tableContent2}>Cura el veneno </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>10</td>
              <td className={styles.tableContent2}>10</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Poción Roja</td>
              <td className={styles.tableContent2}>Recupera Vida</td>
              <td className={styles.tableContent2}>28-30 </td>
              <td className={styles.tableContent2}>14</td>
              <td className={styles.tableContent2}>10</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Poción Roja (Druida)</td>
              <td className={styles.tableContent2}>Recupera Más Vida</td>
              <td className={styles.tableContent2}>38-38</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>60</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Poción Azul</td>
              <td className={styles.tableContent2}>Recupera Mana</td>
              <td className={styles.tableContent2}>50-75</td>
              <td className={styles.tableContent2}>14</td>
              <td className={styles.tableContent2}>60</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Poción Azul (Druida)</td>
              <td className={styles.tableContent2}>Recupera Más Mana</td>
              <td className={styles.tableContent2}>100-150</td>
              <td className={styles.tableContent2}>200</td>
              <td className={styles.tableContent2}>50</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Poción de Energía </td>
              <td className={styles.tableContent2}>Recupera energía </td>
              <td className={styles.tableContent2}>25-50 </td>
              <td className={styles.tableContent2}>50</td>
              <td className={styles.tableContent2}>30</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Poción de Energía (Druida) </td>
              <td className={styles.tableContent2}>Recupera Más energía </td>
              <td className={styles.tableContent2}>50-100 </td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>30</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Poción Amarilla </td>
              <td className={styles.tableContent2}>Aumenta la agilidad </td>
              <td className={styles.tableContent2}>4-6 </td>
              <td className={styles.tableContent2}>14</td>
              <td className={styles.tableContent2}>60</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Poción Amarilla (Druida) </td>
              <td className={styles.tableContent2}>Aumenta más la agilidad </td>
              <td className={styles.tableContent2}>8-10 </td>
              <td className={styles.tableContent2}>250</td>
              <td className={styles.tableContent2}>70</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Poción Verde </td>
              <td className={styles.tableContent2}>Aumenta la fuerza </td>
              <td className={styles.tableContent2}>4-6 </td>
              <td className={styles.tableContent2}>14</td>
              <td className={styles.tableContent2}>60</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Poción Verde (Druida) </td>
              <td className={styles.tableContent2}>Aumenta más la fuerza </td>
              <td className={styles.tableContent2}>8-10 </td>
              <td className={styles.tableContent2}>300</td>
              <td className={styles.tableContent2}>70</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Poción Anti Ceguera</td>
              <td className={styles.tableContent2}>Devuelve la visión </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>2.000 </td>
              <td className={styles.tableContent2}>100 </td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Poción Anti Estupidez</td>
              <td className={styles.tableContent2}>Vuelve a la normalidad al personaje </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>2.000 </td>
              <td className={styles.tableContent2}>100 </td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Poción Anti Parálisis </td>
              <td className={styles.tableContent2}>Remueve la parálisis </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>4.000 </td>
              <td className={styles.tableContent2}>100 </td>
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

export default Alquimia;
