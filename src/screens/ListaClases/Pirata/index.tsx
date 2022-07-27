import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import pirata from '../../LogIn/assets/pirata.jpg';

import styles from './styles.module.scss';

function Pirata() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.asesinoContenido}>
          <h1 className={styles.tituloAsesino}>Pirata</h1>
          <p className={styles.parrafo1}>
            {' '}
            Los piratas son expertos navegantes, desde muy temprano aprenden a recorrer los mares y usar los
            navíos más sofisticados.
          </p>
          <p className={styles.parrafo1}>
            {' '}
            <span className={styles.underline}>Habilidad Especial:</span> onificación en skills para navegar,
            requiere: Barca: 40, Galera: 45 y Galeón: 50
          </p>
          <p className={styles.parrafo1}> Puede acceder a cualquier Dungeon sin requerimientos de nivel.</p>
          <img className={styles.img} src={pirata} alt="" />
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
                <td>0.8</td>
                <td>0.69</td>
                <td>0.8</td>
                <td>0.8</td>
                <td>0.5</td>
                <td>0.4</td>
                <td>0.9</td>
                <td>0.6</td>
                <td>2%</td>
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
                <td>6 a 9</td>
                <td>7 a 9</td>
                <td>7 a 10</td>
                <td>8 a 10</td>
                <td>8 a 11</td>
                <td>9 a 11</td>
              </tr>
              <tr>
                <td>Mana</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Golpe</td>
                <td>3</td>
                <td>3</td>
                <td>3</td>
                <td>3</td>
                <td>3</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Stamina</td>
                <td>20</td>
                <td>20</td>
                <td>20</td>
                <td>20</td>
                <td>20</td>
                <td>20</td>
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

export default Pirata;
