import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import hierro from '../../LogIn/assets/hierro.jpg';
import plata from '../../LogIn/assets/plata.jpg';
import oro from '../../LogIn/assets/oro.jpg';

import styles from './styles.module.scss';

function Mineria() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.trabajoContainer}>
          <h1 className={styles.trabajoTitulo}>Minería</h1>
          <p className={styles.trabajoContenido}>
            La minería es una de las profesiones mejor pagas de Argentum Online debido a su alto riesgo. La
            extracción de minerales implica salir de la ciudad y entrar a una peligrosa mina en busca de
            yacimientos y hasta poderosos Dungeons. Estos deben ser trabajados con un piquete de minero,
            deberás equiparlo con la tecla equipar (E), presionar la tecla Usar (U o doble click) y clickear
            sobre el yacimiento.
          </p>
          <br />
          <p className={styles.trabajoContenido}>
            Con la mineria obtendremos la extracción de minerales de hierro, plata y oro materia prima para la
            fundición de Lingotes y con ellos crear poderosos objetos con un Herrero.
          </p>
          <p className={styles.trabajoContenido}>
            El Trabajador con el oficio de Minería puede extraer mas de un recurso a la vez dependiendo del
            nivel que sea, mientras que el resto de las clases sólo podrá obtener uno a la vez.
          </p>
        </div>
        <div className={styles.listaItems}>
          <h1 className={styles.trabajoTitulo}>Items de Minería</h1>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Item</th>
              <th className={styles.tableContent}>Descripción</th>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Piquete de Minero </td>
              <td className={styles.tableContent2}>
                Item necesario para extraer materiales de los yacimientos, se vende en el NPC “Vendedor”
              </td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Mineral de Hierro </td>
              <td className={styles.tableContent2}>Recurso extraido desde un Yacimiento de Hierro </td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Mineral de Plata </td>
              <td className={styles.tableContent2}>Recurso extraido desde un Yacimiento de Plata </td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Mineral de Oro </td>
              <td className={styles.tableContent2}>Recurso extraido desde un Yacimiento de Oro </td>
            </tr>
          </table>
          <h1 className={styles.trabajoTitulo1}>Extracción de Minerales</h1>
          <p className={styles.trabajoContenido}>
            Con nuestro Trabajador y su herramienta de trabajo Piquete de Minero nos dirigiremos a zona
            insegura para empezar nuestra extracción de minerales las cuales se hayan en lo profundo de las
            catacumbas o dungeons.
          </p>
          <h1 className={styles.trabajoTitulo1}>Cálculo de Extración </h1>
          <p className={styles.trabajoContenido}>
            Para saber cuantos minerales extraermos influiran los siguientes factores:
          </p>
          <ul className={styles.lista}>
            <li>
              <span className={styles.bonificacion}>Nivel 1 a 12:</span> extraemos entre 5 a 10 Minerales sin
              importar tu nivel.
            </li>
            <li>
              <span className={styles.bonificacion}>Nivel 13 o Mas:</span> extraermos (Minimo: TuNivel-10 /
              Maximo: TuNivel-5) *2.
            </li>
            <li>Osea si somos Nivel 20 extraermos entre 20 y 30 Minerales .</li>
            <li>[ Nivel20 -10 (Resultado: 10) / Nivel20 -5 (Resultado: 15) ] * 2 = 20/30</li>
          </ul>
          <p className={styles.trabajoContenido}>
            <span className={styles.bonificacion}>IMPORTANTE:</span> Mientras más nivel tenga nuestro
            trabajador más recursos extraerá. Un Trabajador podrá navegar a partir de Nivel 13 y tener 60
            skills en navegación para usar la Barca, 68 skills en navegación para usar la Galera, 75 skills
            para usar el Galeón.
          </p>
          <div className={styles.creacion}>
            <div className={styles.imagenContainer}>
              <p className={styles.trabajoContenido}>
                Las minas de hierro se encuentran cerca de la ciudad Blilinton.
              </p>
              <img className={styles.img} src={hierro} alt="" />
            </div>
            <div className={styles.imagenContainer}>
              <p className={styles.trabajoContenido}>
                Las minas de plata se encuentran cerca de la ciudad Dahl.
              </p>
              <img className={styles.img} src={plata} alt="" />
            </div>
            <div className={styles.imagenContainer}>
              <p className={styles.trabajoContenido}>
                Las minas de Oro, se encuentran dentro del Dungeon Veril.
              </p>
              <img className={styles.img} src={oro} alt="" />
            </div>
          </div>
        </div>
        <Link to="/manual/trabajos">
          <h1 className={styles.volver}>Volver</h1>
        </Link>
      </div>
    </div>
  );
}

export default Mineria;
