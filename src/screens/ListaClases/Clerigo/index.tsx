import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import clerigo from '../../LogIn/assets/clerig.jpg';

import styles from './styles.module.scss';

function Clerigo() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.asesinoContenido}>
          <h1 className={styles.tituloAsesino}>Clérigo</h1>
          <p className={styles.parrafo1}>
            {' '}
            Gracias a su inspiradora fe, sea a un Dios malévolo o benévolo, el Clérigo puede combinar ataques
            de daño decente con hechizos de una variedad y poder mágico muy interesantes. Tal vez sea una de
            las Clases más versátiles del todo el juego, donde la destreza será necesaria para hacer relucir
            sus atributos. Ésta particularidad los convierte en una clase elegida por cualquier raza aunque
            tienden a abundar humanos y elfos oscuros cuyas habilidades innatas se encuentran en sintonía con
            el modo de combate de los clérigos.
          </p>
          <img className={styles.img} src={clerigo} alt="" />
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
                <td>0.75</td>
                <td>0.63</td>
                <td>0.7</td>
                <td>0.7</td>
                <td>0.4</td>
                <td>0.4</td>
                <td>0.7</td>
                <td>0.72</td>
                <td>6%</td>
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
                <td>50</td>
                <td>46</td>
                <td>44</td>
                <td>38</td>
                <td>28</td>
                <td>26</td>
              </tr>
              <tr>
                <td>Golpe</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
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

export default Clerigo;
