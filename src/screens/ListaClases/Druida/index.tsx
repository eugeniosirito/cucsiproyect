import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import druida from '../../LogIn/assets/druida.jpg';

import styles from './styles.module.scss';

function Druida() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.asesinoContenido}>
          <h1 className={styles.tituloAsesino}>Druida</h1>
          <p className={styles.parrafo1}>
            {' '}
            Los druidas son seres sumamente sabios, poseen una gran conexión con la naturaleza permitiéndole
            invocar criaturas que acudan en su ayuda. Gracias a su gran conocimiento son expertos en el uso de
            hechizos con un buen poder y resistencia mágica, aunque se ha visto a algunos con un arma en su
            mano. Son tambien expertos en la doma de criaturas.
          </p>
          <p className={styles.parrafo1}>
            {' '}
            <span className={styles.underline}>Bonidifación Ahorro de Mana:</span> Utilizando el arma Espada
            Vikinga y Espada Vikinga +1 tendremos chances de acertar golpes críticos.
          </p>
          <p className={styles.parrafo1}>
            {' '}
            <span className={styles.underline}>Bonidifación Domar Animales:</span> Utilizando el ítem Flauta
            Mágica tendrás 20% más de poder de domación.
          </p>
          <p className={styles.parrafo1}>
            {' '}
            <span className={styles.underline}>Habilidad Única:</span> Extracción de raíces para la creación
            de pociones.
          </p>
          <img className={styles.img} src={druida} alt="" />
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
                <td>0.7</td>
                <td>0.57</td>
                <td>0.8</td>
                <td>0.8</td>
                <td>0.4</td>
                <td>0.4</td>
                <td>0.6</td>
                <td>0.6</td>
                <td>8%</td>
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
                <td>5 a 8</td>
                <td>5 a 9</td>
                <td>6 a 9</td>
                <td>7 a 9</td>
                <td>7 a 11</td>
                <td>8 a 11</td>
              </tr>
              <tr>
                <td>Mana</td>
                <td>62</td>
                <td>58</td>
                <td>55</td>
                <td>48</td>
                <td>35</td>
                <td>32</td>
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
            <div className={styles.parrafoContainer}>
              <h1 className={styles.modificadoresH1}>Domar</h1>
              <p className={styles.parrafo1}>
                El Druida se caracteriza por poseer la habilidad de domar poderosas criaturas que otras clases
                no podrán.
              </p>
            </div>
            <div className={styles.parrafoContainer}>
              <h1 className={styles.modificadoresH1}>Botánica y Alquimia</h1>
              <p className={styles.parrafo1}>
                El Druida también se caracteriza por poseer la habilidad de crear pociones con caracteristicas
                especiales que ninguna otra clase podrá:
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

export default Druida;
