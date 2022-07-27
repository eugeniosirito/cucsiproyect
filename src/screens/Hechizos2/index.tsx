import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function hechizos2() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.hechizosContainer}>
          <h1 className={styles.hechizosTitle}>Hechizos</h1>
          <p className={styles.contenido}>
            Los hechizos son objetos consumibles por los personajes. Al consumir el objeto de un hechizo,
            nuestro personaje aprenderá ese conjuro y el mismo no podrá ser removido ni se podrá consumir
            nuevamente otro objeto del mismo hechizo. Para su lanzamiento poseen requisitos de nivel, maná,
            energía y en algunos casos de clase o equipo.
          </p>
          <p className={styles.contenido}>
            Algunos hechizos precisan armas con poder mágico equipadas para poder ser lanzados, por ej. si
            dice “Bastón Nudoso o más poderoso” significa que puede ser lanzado con cualquier arma que tenga
            un ataque mágico más poderoso que el Bastón Nudoso.
          </p>
          <p className={styles.contenido}>
            Cuanto más nivel tengas, más daño/cura hará el personaje. Cabe destacar que los valores de
            daño/cura de cada hechizo no están mal, sino que es el daño/cura base que haría un personaje nivel
            1 sin ningún arma con poder mágico equipada, la razón de eso es por la fórmula del daño que se
            incrementa según el porcentaje de ataque mágico.
          </p>
          <h1 className={styles.hechizosTitle}>Ubicacion de los Comerciantes</h1>
          <p className={styles.contenido}>
            En las vastas tierras de CucsiAo se encuentran varios comerciantes de magias únicas. Dependiendo
            de la ciudad en donde te encuentres podremos comprar las siguientes magias:
          </p>
        </div>
        <div className={styles.hechizosLista}>
          <Link className={styles.links} to="/manual/hechizos/arghal">
            Arghal
          </Link>
          <Link className={styles.links} to="/manual/hechizos/banderbill">
            Banderbill
          </Link>
          <Link className={styles.links} to="/manual/hechizos/lindos">
            Lindos
          </Link>
          <Link className={styles.links} to="/manual/hechizos/nix">
            Nix
          </Link>
          <Link className={styles.links} to="/manual/hechizos/nuevaesperanza">
            Nueva Esperanza
          </Link>
          <Link className={styles.links} to="/manual/hechizos/terminus">
            Terminus
          </Link>
          <Link className={styles.links} to="/manual/hechizos/ullathorpe">
            Ullathorpe
          </Link>
          <Link className={styles.links} to="/manual/hechizos/unicos">
            Unicos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default hechizos2;
