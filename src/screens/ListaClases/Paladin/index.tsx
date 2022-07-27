import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import paladin from '../../LogIn/assets/paladin.jpg';

import styles from './styles.module.scss';

function Paladin() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.asesinoContenido}>
          <h1 className={styles.tituloAsesino}>Paladín</h1>
          <p className={styles.parrafo1}>
            {' '}
            Los paladines poseen un amplio conocimiento en el combate, pueden utilizar una gran variedad de
            armas, armaduras, cascos y escudos. Su medida inteligencia es suficiente para aprender una gran
            mayoría de hechizos tanto ofensivos como defensivos, dándole al paladín una combinación entre
            golpes y hechizo. Está abocado al combate físico cuerpo a cuerpo, es una clase resistente, puede
            soportar gran cantidad de golpes pudiendo hacerle frente a cualquier amenaza.
          </p>
          <img className={styles.img} src={paladin} alt="" />
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
                <td>0.86</td>
                <td>0.66</td>
                <td>0.8</td>
                <td>0.85</td>
                <td>0.4</td>
                <td>0.4</td>
                <td>0.8</td>
                <td>0.9</td>
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
                <td>8 a 9</td>
                <td>8 a 10</td>
                <td>8 a 11</td>
                <td>9 a 11</td>
                <td>9 a 12</td>
                <td>10 a 12</td>
              </tr>
              <tr>
                <td>Mana</td>
                <td>25</td>
                <td>23</td>
                <td>22</td>
                <td>19</td>
                <td>14</td>
                <td>13</td>
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

export default Paladin;