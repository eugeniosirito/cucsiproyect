import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import mago from '../../LogIn/assets/mago.jpg';

import styles from './styles.module.scss';

function Mago() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.asesinoContenido}>
          <h1 className={styles.tituloAsesino}>Mago</h1>
          <p className={styles.parrafo1}>
            {' '}
            Los magos son poderosos seres con un gran conocimiento en la hechicería. Su inteligencia única y
            característica les permite usar poderosos conjuros e invocar viles criaturas para acudir en su
            ayuda. Este atributo les permite lanzar el doble o incluso el triple de hechizo que el resto de
            las clases con un poder mágico tan devastador que excede con creces la capacidad de cualquiera.
            Así mismo son seres débiles al enfrentamiento cuerpo a cuerpo y torpes en el uso de armas, por lo
            que su posicionamiento en combate será exclusivamente el uso de hechizos evitando el
            enfrentamiento frontal.
          </p>
          <img className={styles.img} src={mago} alt="" />
        </div>
        <div className={styles.tablaModificadores}>
          <h1 className={styles.modificadoresH1}>Modificadores de clase</h1>
          <div className={styles.tabla}>
            <table>
              <tr>
                <th colSpan={2}>Acierto</th>
                <th colSpan={2}>Proyectiles</th>
                <th colSpan={2}>Sin armas</th>
                <th colSpan={3}>Defensa</th>
              </tr>
              <tr>
                <td>Acierto</td>
                <td>Daño</td>
                <td>Acierto</td>
                <td>Daño</td>
                <td>Acierto</td>
                <td>Daño</td>
                <td>Evasión</td>
                <td>Escudo</td>
                <td>Defensa mágica</td>
              </tr>
              <tr>
                <td>0.5</td>
                <td>0.4</td>
                <td>0.5</td>
                <td>0.5</td>
                <td>0.3</td>
                <td>0.4</td>
                <td>0.5</td>
                <td>0</td>
                <td>10%</td>
              </tr>
            </table>
          </div>
          <h1 className={styles.modificadoresH1}>Puntos ganados por nivel</h1>
          <div className={styles.tablaAtributos}>
            <table>
              <tr>
                <th>Punto\Raza</th>
                <th>Gnomo</th>
                <th>Elfo</th>
                <th>Elfo Oscuro</th>
                <th>Humano</th>
                <th>Enano</th>
                <th>Orco</th>
              </tr>
              <tr>
                <td>Vida</td>
                <td>4 a 8</td>
                <td>5 a 8</td>
                <td>5 a 9</td>
                <td>6 a 9</td>
                <td>6 a 10</td>
                <td>7 a 10</td>
              </tr>
              <tr>
                <td>Mana</td>
                <td>75</td>
                <td>69</td>
                <td>66</td>
                <td>57</td>
                <td>42</td>
                <td>39</td>
              </tr>
              <tr>
                <td>Golpe</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Stamina</td>
                <td>15</td>
                <td>15</td>
                <td>15</td>
                <td>15</td>
                <td>15</td>
                <td>15</td>
              </tr>
            </table>
            <div className={styles.parrafoContainer}>
              <p className={styles.parrafo1}>
                Aclaración: Los puntos de maná y vida representan los valores con los máximos dados (20). Cada
                personaje varia mucho segun su raza
              </p>
            </div>
          </div>
        </div>
        <Link to="/manual/clases">
          <h1 className={styles.volver}>Volver</h1>
        </Link>
      </div>
    </div>
  );
}

export default Mago;
