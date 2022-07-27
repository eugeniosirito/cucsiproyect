import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import dados from '../LogIn/assets/atributos.jpg';

import styles from './styles.module.scss';

function Atributos() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.atributos}>
          <div className={styles.atributos1}>
            <h1 className={styles.atributosNombre}>Atributos</h1>
          </div>
          <p className={styles.contenidoAtributos}>
            Los atributos son características de los personajes que afectan sus aptitudes para diversas
            acciones dentro del juego, como por ejemplo: su capacidad para lanzar hechizos, su vida, su
            destreza en combate físico, etc. Durante la creación de un personaje, el usuario “tirará los dados
            de su destino” que determinarán los valores para cada atributo (entre 19 y 20) y a su vez estos se
            verán afectados por la raza del personaje elegida. Los atributos de un personaje pueden conocerse
            al emplear el comando /est o bien con el botón de estadísticas.
          </p>
          <img src={dados} className={styles.imagenDados} />
        </div>
        <div className={styles.tipoAtributos}>
          <div className={styles.atributos1}>
            <h1 className={styles.atributosNombre}>Tipos de Atributos</h1>
          </div>
          <p className={styles.contenidoAtributos}>Cada personaje tiene 5 tipos de atributos que son:</p>
          <ul>
            <li className={styles.lista}>Fuerza</li>
            <li className={styles.lista}>Agilidad</li>
            <li className={styles.lista}>Inteligencia</li>
            <li className={styles.lista}>Carisma</li>
            <li className={styles.lista}>Constitución</li>
          </ul>
        </div>
        <div className={styles.descripcion}>
          <div className={styles.atributos1}>
            <h1 className={styles.atributosNombre}>Fuerza</h1>
          </div>
          <p className={styles.contenidoAtributos}>
            La fuerza de un personaje influye en el daño que es capaz de infligir con sus ataques físicos.
            Cuanta más fuerza tenga un personaje, mayor será el daño causado con armas cuerpo a cuerpo, a
            distancia o sin armas por lo que es un atributo de suma importancia para las clases que combatan
            con esta modalidad. Este atributo puede incrementarse temporalmente, al igual que la agilidad.
          </p>
        </div>
        <div className={styles.descripcion}>
          <div className={styles.atributos1}>
            <h1 className={styles.atributosNombre}>Agilidad</h1>
          </div>
          <p className={styles.contenidoAtributos}>
            La agilidad es el atributo que afecta a la capacidad evasiva y la puntería de un personaje. En un
            atributo ofensivamente útil para las clases de combate físico y defensivamente favorable para
            todos los personajes. Este atributo puede incrementarse temporalmente, al igual que la fuerza.
          </p>
        </div>
        <div className={styles.descripcion}>
          <div className={styles.atributos1}>
            <h1 className={styles.atributosNombre}>Inteligencia</h1>
          </div>
          <p className={styles.contenidoAtributos}>
            La inteligencia afecta en forma directa la cantidad de maná que ganará un personaje al subir de
            nivel, dependiendo también de la clase. Es un atributo muy importante para todas las clases que
            necesiten utilizar hechizos, marcando muchas veces el límite en la capacidad mágica de un
            personaje.
          </p>
        </div>
        <div className={styles.descripcion}>
          <div className={styles.atributos1}>
            <h1 className={styles.atributosNombre}>Carisma</h1>
          </div>
          <p className={styles.contenidoAtributos}>
            El carisma afecta las capacidades de un personaje para la creación de una party así como su
            facilidad para la doma de criaturas. Cuanto mayor sea el valor de este atributo, más poderosas
            serán las criaturas que podrá domar un personaje.
          </p>
        </div>
        <div className={styles.descripcion}>
          <div className={styles.atributos1}>
            <h1 className={styles.atributosNombre}>Constitución</h1>
          </div>
          <p className={styles.contenidoAtributos}>
            Los puntos de vida de un personaje dependen directamente de su constitución y clase. Un valor más
            elevado en este atributo aumenta los puntos de vida iniciales y ganados por nivel de un personaje.
            Sin duda es un valor importante para todos los personajes.
          </p>
        </div>
        <Link to="/manual">
          <h1 className={styles.volver}>Volver</h1>
        </Link>
      </div>
    </div>
  );
}

export default Atributos;
