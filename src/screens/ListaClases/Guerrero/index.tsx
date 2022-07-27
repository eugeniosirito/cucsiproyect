import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import guerrero from '../../LogIn/assets/guerrero.jpg';

import styles from './styles.module.scss';

function Guerrero() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.asesinoContenido}>
          <h1 className={styles.tituloAsesino}>Guerrero</h1>
          <p className={styles.parrafo1}>
            {' '}
            Los guerreros son expertos únicos en el combate cuerpo a cuerpo y a distancia, con una fuerza
            extraordinaria capaces de derribar a sus enemigos con pocos golpes. Su gran fuerza le permite
            cargar con pesadas armaduras y junto a su destacada vitalidad, ser una de las clases mas
            resistentes. Gracias a su gran entrenamiento en el arte de la guerra, también son hábiles
            arqueros, causan un gran daño a distancia y también pueden apuñalar. Esta clase no utiliza mana ni
            hechizos.
          </p>
          <img className={styles.img} src={guerrero} alt="" />
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
                <td>1</td>
                <td>0.79</td>
                <td>0.85</td>
                <td>0.95</td>
                <td>0.4</td>
                <td>0.6</td>
                <td>0.8</td>
                <td>0.85</td>
                <td>1%</td>
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
                <td>9 a 10</td>
                <td>9 a 11</td>
                <td>10 a 11</td>
                <td>10 a 12</td>
                <td>10 a 13</td>
                <td>11 a 13</td>
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
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
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

export default Guerrero;
