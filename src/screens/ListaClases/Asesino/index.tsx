import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import asesino from '../../LogIn/assets/asesino.jpg';

import styles from './styles.module.scss';

function Asesino() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.asesinoContenido}>
          <h1 className={styles.tituloAsesino}>Asesino</h1>
          <p className={styles.parrafo1}>
            {' '}
            Las clase asesino son capaces de encontrar el punto débil a todos sus oponentes convirtiéndose en
            la clase más habilidosa al momento de apuñalar a sus enemigos. Sus golpes pueden parecer débiles
            pero cuidado, pueden derribar a los más resistentes y derrotar adversarios de un solo golpe.
          </p>
          <p className={styles.parrafo1}>
            {' '}
            Esta clase posee una excelente preparación para el combate físico resultando en una gran evasión y
            muy buen manejo de armas cuerpo a cuerpo. Puede utilizar conjuros mágicos como complemento a sus
            tácticas ofensivas y defensivas con precaución de su limitada cantidad de maná.
          </p>
          <img className={styles.img} src={asesino} alt="" />
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
                <td>0.85</td>
                <td>0.66</td>
                <td>0.75</td>
                <td>0.8</td>
                <td>0.4</td>
                <td>0.4</td>
                <td>0.9</td>
                <td>1</td>
                <td>5%</td>
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
                <td>6 a 8</td>
                <td>6 a 9</td>
                <td>7 a 9</td>
                <td>7 a 10</td>
                <td>8 a 11</td>
                <td>9 a 11</td>
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
            <div className={styles.parrafoContainer}>
              <h1 className={styles.modificadoresH1}>Ocultarse</h1>
              <p className={styles.parrafo1}>
                El Asesino podrá ocultarse y caminar entre las sombras sin ser visto. Este efecto es cancelado
                si el personaje ataca cuerpo a cuerpo (con o sin arma) o habla. La chance de éxito dependerá
                de los puntos de habilidad que tengas en ocultar.
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

export default Asesino;
