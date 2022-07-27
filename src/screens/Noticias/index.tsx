import React from 'react';

import imagen from '../LogIn/assets/calendario.jpeg';

import styles from './styles.module.scss';

function Noticias() {
  return (
    <div className={styles.container}>
      <div className={styles.texto}>
        <h1 className={styles.apertura}>Apertura de la versión 5.0</h1>
        <p className={styles.contenidoTexto}>
          La apertura se realizara el viernes 15 de Julio del 2022 a las 20hs. Estamos realizando un sorteo
          para la apertura, el cual tiene los siguientes premios:
        </p>
        <ul className={styles.premios}>
          <li className={styles.lista}>1er premio: Carrito de materiales</li>
          <li className={styles.lista}>2do premio: Ropa de Cypher y cabeza a elección</li>
          <li className={styles.lista}>3er premio: Ropa de Cypher</li>
        </ul>
        <p className={styles.contenidoTexto}>
          Para participar al sorteo de apertura, dirigíte a esta publicación de Facebook o esta publicación de
          Instagram y etiquetá a 2 amigos.
        </p>
        <img src={imagen} className={styles.imagen} />
      </div>
    </div>
  );
}

export default Noticias;
