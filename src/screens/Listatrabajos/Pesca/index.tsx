import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Pesca() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.trabajoContainer}>
          <h1 className={styles.trabajoTitulo}>Pesca</h1>
          <p className={styles.trabajoContenido}>
            El oficio de la pesca consiste en la obtención de peces. Para esto el personaje debe tener
            seleccionada y equipada una caña de pescar o una red de pesca (ésta última es solo equipable por
            el trabajador), luego buscar agua ya sea un lago, río, etc. y presionar la tecla U (por defecto o
            doble click sobre la herramienta) y hacer click sobre el agua.
          </p>
          <br />
          <p className={styles.trabajoContenido}>
            El Trabajador con el oficio en Pescar puede extraer mas de un recurso a la vez dependiendo del
            nivel que sea, mientras que el resto de las clases sólo podrá obtener uno a la vez.
          </p>
          <br />
          <p className={styles.trabajoContenido}>
            <span className={styles.bonificacion}>BONIFICACIÓN: </span>con Red de Pesca en Zona Insegura
            extraermos más recursos por nivel.
          </p>
        </div>
        <div className={styles.listaItems}>
          <h1 className={styles.trabajoTitulo}>Items de Pesca</h1>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Item</th>
              <th className={styles.tableContent}>Descripción</th>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}>Caña de Pescar</td>
              <td className={styles.tableContent2}>
                Item necesario para la extración de peces, se vende en el NPC “Vendedor”
              </td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Red de Pesca </td>
              <td className={styles.tableContent2}>
                Item necesario para la extración de variedad de peces, se vende en el NPC “Vendedor” (SE CAE)
              </td>
            </tr>
          </table>
          <h1 className={styles.trabajoTitulo1}>Tipos de Peces y Precios</h1>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Nombre</th>
              <th className={styles.tableContent}>Precio</th>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Pez Dorado </td>
              <td className={styles.tableContent2}>6 monedas de oro. Requiere red de pesca</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Pez Espada </td>
              <td className={styles.tableContent2}>5 monedas de oro. Requiere red de pesca</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Merluza </td>
              <td className={styles.tableContent2}>4 monedas de oro. Requiere red de pesca</td>
            </tr>
            <tr className={styles.tableStyle}>
              <td className={styles.tableContent2}> Pescado </td>
              <td className={styles.tableContent2}>2 monedas de oro </td>
            </tr>
          </table>
        </div>
        <div className={styles.trabajoContainer}>
          <h1 className={styles.trabajoTitulo}>Extración de Peces</h1>
          <p className={styles.trabajoContenido}>
            A la hora de Pescar con nuestro trabajador lo podremos realizar en Zona Segura o en Zona Insegura.
            El beneficio de pescas en Zona Insegura es que recibiremos una bonificación de extración de una
            mayor cantidad de recursos pero SOLO será con nuestra Red de Pesca. Para poder utilizar la Red de
            Pesca deberemos de estar embarcados y el tipo de embarquee es indistinto ya sea Barca, Galera o
            Galeón dado a que la bonificación solo se aplica para la zona segura o insegura. Con Caña de
            Pescar extraeremos la misma cantidad de recursos estando en tierra o navegando.
          </p>
          <h1 className={styles.trabajoTitulo}>Cálculo de Extración</h1>
          <p className={styles.trabajoContenido}>
            Para saber cuantos peces recojeremos con nuestro trabajador influiran los siguientes factores:
          </p>
          <ul className={styles.lista}>
            <li>Zona Segura:</li>
            <li>Caña de Pesca: extraemos SIEMPRE entre 1 a 5 peces sin importar nuestro nivel.</li>
            <li>Red de Pesca: extraermos SIEMPRE entre 1 a 10 peces sin importar nuestro nivel.</li>
            <br />
            <li>Zona Insegura:</li>
            <li>
              <span className={styles.bonificacion}>Caña de Pesca: </span> (Minimo: TuNivel -10 / Maximo:
              TuNivel -7) *2.{' '}
            </li>
            <li>Osea si somos Nivel 20 extraermos entre 20 y 26 peces.</li>
            <li>[ Nivel20 - 10 (Resultado: 10) / Nivel20 -7 (Resultado: 13) ] * 2 = 20/26 </li>
            <li>
              <span className={styles.bonificacion}>Red de Pesca: </span>(Minimo: TuNivel -10 / Maximo:
              TuNivel -5) *2.{' '}
            </li>
            <li>Osea si somos Nivel 20 extraermos entre 20 y 30 peces .</li>
            <li>[ Nivel20 -10 (Resultado: 10) / Nivel20 -5 (Resultado: 15) ] * 2 = 20/30</li>
          </ul>
          <p className={styles.trabajoContenido}>
            IMPORTANTE: Los PECES SE CAEN si morimos en AGUA. La RED DE PESCA se cae como cualquier otro items
            de trabajador.
          </p>
        </div>
        <Link to="/manual/trabajos">
          <h1 className={styles.volver}>Volver</h1>
        </Link>
      </div>
    </div>
  );
}

export default Pesca;
