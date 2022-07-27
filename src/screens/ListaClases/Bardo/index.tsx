import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import bardo from '../../LogIn/assets/bardo.jpg';

import styles from './styles.module.scss';

function Bardo() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.asesinoContenido}>
          <h1 className={styles.tituloAsesino}>Bardo</h1>
          <p className={styles.parrafo1}>
            {' '}
            Los Bardos son capaces de desconcertar al oponente con sus melodías induciéndolos a lanzar una
            ofensiva imprecisa, facilitándole la predicción del mismo y esquivarlos sin dificultad, por eso es
            la clase con mas evasión. Sus místicos instrumentos le otorgan gran concentración permitiéndole
            lanzar hechizos mas precisos, provocando gran daño mágico. Tienen un leve entrenamiento en combate
            físico, concediéndole el uso de algunas armas, escudos y cascos.
          </p>
          <img className={styles.img} src={bardo} alt="" />
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
                <td>0.72</td>
                <td>0.61</td>
                <td>0.7</td>
                <td>0.7</td>
                <td>0.4</td>
                <td>0.4</td>
                <td>1.02</td>
                <td>0.7</td>
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
                <td>7 a 11</td>
                <td>8 a 11</td>
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

export default Bardo;
