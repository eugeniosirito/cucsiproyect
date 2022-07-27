import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import comun from '../../LogIn/assets/arbol_comun.jpg';
import elfico from '../../LogIn/assets/arbol_elfico.jpg';

import styles from './styles.module.scss';

function Tala() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.trabajoContainer}>
          <h1 className={styles.trabajoTitulo}>Tala</h1>
          <p className={styles.trabajoContenido}>
            El oficio de la tala consiste en la obtención de leños, una vez que tengas un hacha de leñador
            deberás equiparla con la tecla equipar (E), luego buscar un árbol, presionar la tecla Usar (U), se
            te activa el macro automatico del servidor) y hacer click sobre el árbol. Los trabajadores pueden
            extraer o construir de a uno o más recursos/objetos a la vez, dependiendo de su nivel. Mientras
            más nivel sea, más recursos obtendrá por vez y más objetos podrá construir por vez (ver
            Extracción).
          </p>
          <br />
          <p className={styles.trabajoContenido}>
            El Trabajador con el oficio en Talar puede extraer mas de un recurso a la vez dependiendo del
            nivel que sea, mientras que el resto de las clases sólo podrá obtener uno a la vez.
          </p>
          <br />
          <p className={styles.trabajoContenido}>
            Las leñas sirven para que puedas construir items de Carpinteria
          </p>
        </div>
        <div className={styles.listaItems}>
          <h1 className={styles.trabajoTitulo}>Items de Tala:</h1>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Item</th>
              <th className={styles.tableContent}>Descripción</th>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Hacha de Leñador</td>
              <td className={styles.tableContent2}>
                Item necesario para extraer materiales de los arboles, se vende en el NPC “Vendedor”
              </td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Hacha de Leña Elfica </td>
              <td className={styles.tableContent2}>
                Item necesario para extraer materiales de los arboles élficos, se vende en el NPC “Vendedor”
              </td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Leña</td>
              <td className={styles.tableContent2}>
                Item necesario para extraer materiales de los arboles élficos, se vende en el NPC “Vendedor”
              </td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Leña Élfica </td>
              <td className={styles.tableContent2}>Recurso extraido desde un Arbol Élfico </td>
            </tr>
          </table>
          <h1 className={styles.trabajoTitulo1}>Extracción de Leña</h1>
          <p className={styles.trabajoContenido}>
            Con nuestro trabajador y su herramienta de trabajo{' '}
            <span className={styles.bonificacion}>Hacha de Leñador</span>o{' '}
            <span className={styles.bonificacion}> Hacha de Leña Élfica </span>, dependiendo del tipo de
            recurso que deseamos extraer, nos dirigiremos a zona insegura para empezar nuestra tala.
          </p>
        </div>
        <div className={styles.trabajoContainer}>
          <h1 className={styles.trabajoTitulo}>Cálculo de Extración </h1>
          <p className={styles.trabajoContenido}>
            Para saber cuantos leña extraermos influiran los siguientes factores:
          </p>
          <ul className={styles.lista}>
            <li>Nivel 1 a 12: extraemos entre 2 a 5 de Leña sin importar tu nivel.</li>
            <li>Nivel 13 o Mas: extraermos (Minimo: TuNivel -10 / Maximo: TuNivel -5) *2.</li>
            <li>Osea si somos Nivel 20 extraermos entre 20 y 30 Leña.</li>
            <li>[ Nivel20 -10 (Resultado: 10) / Nivel20 -5 (Resultado: 15) ] * 2 = 20/30</li>
          </ul>
          <p className={styles.trabajoContenido}>
            <span className={styles.bonificacion}>IMPORTANTE:</span> Mientras más nivel tenga nuestro
            trabajador más recursos extraerá. Un Trabajador podrá navegar a partir de Nivel 13 y tener 60
            skills en navegación para usar la Barca, 68 skills en navegación para usar la Galera, 75 skills
            para usar el Galeón.
          </p>
          <h1 className={styles.trabajoTitulo}>
            La Leña podremos extraerla de cualquier árbol de las tierras:{' '}
          </h1>
          <p className={styles.madera}>Tala de Leña</p>
          <img className={styles.img} src={comun} alt="" />
          <p className={styles.trabajoContenido}>
            En cambio para poder extraer Leña Élfica deberemos de dirigirnos al Bosque Élfico situado al
            Sureste de la ciudad de Nix ubicado en el Mapa 145, ya que es el único lugar de las tierras donde
            podremos hacernos de ella pero para llegar a dicho lugar deberemos de navegar.
          </p>
          <p className={styles.madera}>Tala de Leña Élfica</p>
          <img className={styles.img} src={elfico} alt="" />
          <Link to="/manual/trabajos">
            <h1 className={styles.volver}>Volver</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Tala;
