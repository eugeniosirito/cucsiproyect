import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import esq1 from '../../LogIn/assets/esq1.jpg';
import esq2 from '../../LogIn/assets/esq2.jpg';
import esq3 from '../../LogIn/assets/esq3.jpg';

import styles from './styles.module.scss';

function Esquila() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.trabajoContainer}>
          <h1 className={styles.trabajoTitulo}>Esquila</h1>
          <p className={styles.trabajoContenido}>
            Cypher vio que los lobos y osos que el tanto quería, estaban siendo masacrados solo por sus pieles
            y decidió prohibir la caza indiscriminada. Por esto, todos los sastres entraron en huelga, y por
            muchos días la gente anduvo desnuda en señal de protesta. En consecuencia, el Dios Cypher autorizó
            la esquila de animales y trajo unos pastores especializados en el tema, que llegaron desde lejos
            con sus tijeras y algunas simpáticas criaturas, así y de pronto, los sastres aprendieron a
            esquilar y a hilar la lana obtenida, y con esta pudieron crear las ropas que tan bien vestían.
            Estos Trabajadores con unas Tijeras de Esquilar, deberás equiparlo con la tecla equipar (E),
            presionar la tecla Usar (U o doble click) y clickear sobre el animal.
          </p>
          <br />
          <p className={styles.trabajoContenido}>
            Con la Esquila obtendremos la extracción de Lanas de Oveja, Cabra y Llama materia prima la cual
            Hilaremos y con los ovillos creados podremos realizar poderosas Vestimentas y Túnicas con un
            Sastre.
          </p>
          <p className={styles.trabajoContenido}>
            El Trabajador con el oficio en Esquilar puede extraer mas de un recurso a la vez dependiendo del
            nivel que sea, mientras que el resto de las clases sólo podrá obtener uno a la vez.
          </p>
        </div>
        <div className={styles.listaItems}>
          <h1 className={styles.trabajoTitulo}>Items de Esquila</h1>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Item</th>
              <th className={styles.tableContent}>Descripción</th>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Tijeras de Esquila </td>
              <td className={styles.tableContent2}>
                Item necesario para extraer Lana de los animales, se vende en el NPC “Vendedor”
              </td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Lana de Oveja </td>
              <td className={styles.tableContent2}>Recurso extraido de una Oveja</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Lana de Cabra </td>
              <td className={styles.tableContent2}>Recurso extraido de una Cabra</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Lana de Llama </td>
              <td className={styles.tableContent2}>Recurso extraido de una Llama</td>
            </tr>
          </table>
          <h1 className={styles.trabajoTitulo1}>Extracción de Minerales</h1>
          <p className={styles.trabajoContenido}>
            Con nuestro Trabajador y su herramienta de trabajo Tijeras de Esquilar nos dirigiremos a zona
            insegura para empezar nuestra extracción de lanas:
          </p>
          <h1 className={styles.trabajoTitulo1}>Cálculo de Extración </h1>
          <p className={styles.trabajoContenido}>
            Para saber cuantas lanas extraermos influiran los siguientes factores:
          </p>
          <ul className={styles.lista}>
            <li>
              <span className={styles.bonificacion}>Nivel 1 a 12:</span> extraemos entre 5 a 10 Lanas sin
              importar tu nivel.
            </li>
            <li>
              <span className={styles.bonificacion}>Nivel 13 o Mas:</span> extraermos (Minimo: TuNivel-10 /
              Maximo: TuNivel-5) *2.
            </li>
            <li>Osea si somos Nivel 20 extraermos entre 20 y 30 Lanas.</li>
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
              <p className={styles.trabajoContenido}>Las Ovejas se encuentran úbicadas en el Mapa 29.</p>
              <img className={styles.img} src={esq1} alt="" />
            </div>
            <div className={styles.imagenContainer}>
              <p className={styles.trabajoContenido}>Las Cabras se encuentran úbicadas en el Mapa 4.</p>
              <img className={styles.img} src={esq2} alt="" />
            </div>
            <div className={styles.imagenContainer}>
              <p className={styles.trabajoContenido}>Las Llamas se encuentran úbicadas en el Mapa 23.</p>
              <img className={styles.img} src={esq3} alt="" />
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

export default Esquila;
