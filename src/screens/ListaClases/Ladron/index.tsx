import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import ladron from '../../LogIn/assets/ladron.jpg';

import styles from './styles.module.scss';

function Ladron() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.asesinoContenido}>
          <h1 className={styles.tituloAsesino}>Ladron</h1>
          <p className={styles.parrafo1}>
            {' '}
            Los ladrones son astutos rivales, pueden robar gran cantidad de objetos y oro al enemigo casi sin
            ser detectado. Dominan el arte del sigilo, al igual que los bandidos pueden caminar oculto entre
            las sombras sin ser detectado. No tienen conocimientos en la magia, por lo que no usan hechizos ni
            mana. Su daño está abocado al golpe físico cuerpo a cuerpo utilizando guantes, arcos y cuchillas.
          </p>
          <p className={styles.parrafo1}>
            {' '}
            <span className={styles.underline}>Bonificación Guantes de Lucha:</span> Utilizando el objeto
            Guantes de Lucha y sin arma equipada, cuando acertemos un golpe, tendremos una chance de paralizar
            al objetivo.
          </p>
          <img className={styles.img} src={ladron} alt="" />
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
                <td>0.75</td>
                <td>0.8</td>
                <td>0.72</td>
                <td>0.9</td>
                <td>0.75</td>
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
                <td>7 a 8</td>
                <td>8 a 10</td>
                <td>8 a 11</td>
                <td>9 a 11</td>
                <td>9 a 12</td>
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
                <td>18</td>
                <td>18</td>
                <td>18</td>
                <td>18</td>
                <td>18</td>
                <td>18</td>
              </tr>
            </table>
            <div className={styles.parrafoContainer}>
              <p className={styles.parrafo1}>
                Aclaración: Los puntos de maná y vida representan los valores con los máximos dados (20). Cada
                personaje varia mucho segun su raza
              </p>
            </div>
            <div className={styles.parrafoContainer}>
              <h1 className={styles.modificadoresH1}>Robar</h1>
              <p className={styles.parrafo1}>
                La habilidad especial del Ladrón, es el robo. Presionando *R + Click* (por defecto), podrás
                robarle a una víctima, pero ten cuidado, que te convertirás en criminal si lo haces.
              </p>
              <p className={styles.parrafo1}>
                {' '}
                <span className={styles.underline}>Chances de Robo:</span> 67% ORO, 33% ITEMS.
              </p>
            </div>
            <div className={styles.parrafoContainer}>
              <h1 className={styles.modificadoresH1}>Robar Oro</h1>
              <p className={styles.parrafo1}>
                Cuando robes oro, tendrás cierto porcentaje de acierto al robar, por ejemplo, con 100 skills,
                el porcentaje de acierto en robo es 60%. Si logras robar oro, la formula que determina la
                cantidad de monedas a robar es la siguiente:
              </p>
              <p className={styles.parrafo1}>
                {' '}
                <span className={styles.underline}>Oro Robado:</span> Minimo a Robar (Nivel del Ladrón x25) y
                Maximo a Robar (Nivel del Ladrón x50)
              </p>
              <p className={styles.parrafo1}>
                {' '}
                <span className={styles.underline}>Ejemplo:</span> Si tu Ladrón es Nivel 24, robará entre 600
                a 1.200 monedas de oro.
              </p>
              <p className={styles.parrafo1}>
                {' '}
                <span className={styles.underline}>Bonificación:</span> Si utilizamos Guantes de Hurto
                robaremos el doble de monedas de oro. (x2)
              </p>
            </div>
            <div className={styles.parrafoContainer}>
              <h1 className={styles.modificadoresH1}>Robar Items</h1>
              <p className={styles.parrafo1}>
                Cuando robes al usuario, tendrás cierto porcentaje de acierto al robar objetos:
              </p>
              <p className={styles.parrafo1}> 30% de chances de robar un objeto.</p>
              <p className={styles.parrafo1}> 1% a 8% de cantidad robada por objeto.</p>
            </div>
            <div className={styles.parrafoContainer}>
              <h1 className={styles.modificadoresH1}>Ocultarse</h1>
              <p className={styles.parrafo1}>
                Pueden optar por el combate sin armas, dando fuertes golpes si se usa guante de lucha y guante
                de hurto, que le brindarán un mayor daño. También podrá paralizar a su rival atacando con
                Wrestling (combate sin armas) y equipado el ítem Guantes de Hurto. Mientras más skilles posea
                en Wrestling mayor será el porcentaje de paralizarlo. (No deberá de poseer arma equipada para
                poder paralizar al rival)
              </p>
            </div>
            <div className={styles.parrafoContainer}>
              <h1 className={styles.modificadoresH1}>Cuchillas</h1>
              <p className={styles.parrafo1}>
                Las Cuchicllas poseen las siguientes habilidades especiales en nuestra clase Ladrón:{' '}
              </p>
              <p className={styles.parrafo1}>
                {' '}
                Desarmar le des-equipa el arma al personaje enemigo dándole al Ladrón la oportunidad de
                robársela para neutralizarlo. La posibilidad de desarmar aumenta a medida que subimos de nivel
                y su efecto es independiente de si se acierta o no el golpe.
              </p>
              <p className={styles.parrafo1}>
                {' '}
                Con Guantes de Hurto tenemos una chance de paralizar al enemigo, este efecto funciona solo
                para usuarios. Cuando el efecto es contra personajes la duración del mismo es de unos pocos
                segundos, pero cuando el efecto es contra criaturas su duración es prolongada. A diferencia
                del desarme, para poder logar inmovilizar al oponente el golpe debe pegarle al objetivo.
              </p>
              <p className={styles.parrafo1}>
                {' '}
                Acuchillar nos permite lograr un daño superior al normal. Cuando un Ladrón acierta un golpe
                con cuchillas estas tienen un 20% de posibilidad de hacer un 20% de daño aumentado.
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

export default Ladron;
