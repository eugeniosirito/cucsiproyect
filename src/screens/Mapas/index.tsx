import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import mapa from '../LogIn/assets/mapa.jpg';

import styles from './styles.module.scss';

function Mapas() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.contenido}>
          <h1 className={styles.clases}>Mapa del Mundo </h1>
          <img className={styles.img} src={mapa} alt="" />
        </div>
        <div className={styles.contenido}>
          <h1 className={styles.clases}>Ciudades </h1>
        </div>
        <div className={styles.listaClases}>
          <Link className={styles.links} to="/manual/clases/asesino">
            Ullathorpe
          </Link>
          <Link className={styles.links} to="/manual/clases/bandido">
            Nix
          </Link>
          <Link className={styles.links} to="/manual/clases/bardo">
            Banderbill
          </Link>
          <Link className={styles.links} to="/manual/clases/cazador">
            Lindos
          </Link>
          <Link className={styles.links} to="/manual/clases/clerigo">
            Nueva Esperanza
          </Link>
          <Link className={styles.links} to="/manual/clases/druida">
            Arghal
          </Link>
          <Link className={styles.links} to="/manual/clases/guerrero">
            Terminus
          </Link>
          <Link className={styles.links} to="/manual/clases/ladron">
            Ladron
          </Link>
          <Link className={styles.links} to="/manual/clases/paladin">
            Noxon
          </Link>
          <Link className={styles.links} to="/manual/clases/pirata">
            Dhall
          </Link>
          <Link className={styles.links} to="/manual/clases/trabajador">
            Billinton
          </Link>
          <Link className={styles.links} to="/manual/clases/trabajador">
            Kodel
          </Link>
        </div>
        <div className={styles.contenido}>
          <h1 className={styles.clases}>Dungeons </h1>
        </div>
        <div className={styles.listaClases}>
          <Link className={styles.links} to="/manual/clases/asesino">
            Mausoleo
          </Link>
          <Link className={styles.links} to="/manual/clases/bandido">
            Marabel
          </Link>
          <Link className={styles.links} to="/manual/clases/bardo">
            Castillo
          </Link>
          <Link className={styles.links} to="/manual/clases/cazador">
            Inframundo
          </Link>
          <Link className={styles.links} to="/manual/clases/clerigo">
            Verill
          </Link>
          <Link className={styles.links} to="/manual/clases/druida">
            Dragón
          </Link>
        </div>
        <div className={styles.contenido}>
          <h1 className={styles.clases}>Materiales </h1>
        </div>
        <div className={styles.listaClases}>
          <Link className={styles.links} to="/manual/clases/asesino">
            Hierro
          </Link>
          <Link className={styles.links} to="/manual/clases/bandido">
            Plata
          </Link>
          <Link className={styles.links} to="/manual/clases/bandido">
            Oro
          </Link>
          <Link className={styles.links} to="/manual/clases/asesino">
            Ovejas
          </Link>
          <Link className={styles.links} to="/manual/clases/bandido">
            Cabras
          </Link>
          <Link className={styles.links} to="/manual/clases/bandido">
            Llamas
          </Link>
        </div>
        <div className={styles.contenido}>
          <h1 className={styles.clases}>Otros </h1>
        </div>
        <div className={styles.listaClases}>
          <Link className={styles.links} to="/manual/clases/asesino">
            Barco Pirata
          </Link>
          <Link className={styles.links} to="/manual/clases/bandido">
            Barco Abandonado
          </Link>
          <Link className={styles.links} to="/manual/clases/bardo">
            Cementerio
          </Link>
          <Link className={styles.links} to="/manual/clases/cazador">
            Sur Nueva esperanza
          </Link>
          <Link className={styles.links} to="/manual/clases/druida">
            Bosque Elfico Saqueado
          </Link>
          <Link className={styles.links} to="/manual/clases/druida">
            Piramide
          </Link>
          <Link className={styles.links} to="/manual/clases/druida">
            Polo
          </Link>
          <Link className={styles.links} to="/manual/clases/druida">
            Catacumbas
          </Link>
          <Link className={styles.links} to="/manual/clases/druida">
            Laberinto
          </Link>
          <Link className={styles.links} to="/manual/clases/druida">
            Museo
          </Link>
          <Link className={styles.links} to="/manual/clases/druida">
            Castillos
          </Link>
          <Link className={styles.links} to="/manual/clases/druida">
            Fortaleza
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Mapas;
