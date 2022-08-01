import React from 'react';

import Navbar from 'screens/Navbar';

import clan from '../LogIn/assets/clan.jpg';

import styles from './styles.module.scss';

function Clanes() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.hechizosTitle}>Clanes </h1>
        <p className={styles.contenido}>
          En las tierras de CucsiAO, los clanes juegan un rol muy importante. El objetivo de los mismos, es
          fomentar el juego en equipo y la confianza entre los diferentes personajes y amigos, así como
          también generar un sentido de pertenencia a un grupo con un objetivo común.
        </p>
        <p className={styles.contenido}>
          Para poder fundar un clan deberemos de tipear /fundarclan y, en CucsiAO, existen 3 tipos de clanes:
        </p>
        <table>
          <tr className={styles.tableStyle}>
            <th className={styles.tableContent}>Tipo de clan </th>
            <th className={styles.tableContent}>Descripción</th>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Neutral </td>
            <td className={styles.tableContent2}>
              Se permiten ciudadanos y criminales, pero no miembros de la Armada Real ni la Legión Oscura
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Ciudadano </td>
            <td className={styles.tableContent2}>Se permiten ciudadanos y miembros de la Armada Real</td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>Criminal </td>
            <td className={styles.tableContent2}>Se permiten criminales y miembros de la Legión Oscura</td>
          </tr>
        </table>
        <p className={styles.contenido}>
          Además, existe un sistema de Niveles de clan, en el que aumentar uno de ellos dependerá del esfuerzo
          colectivo de todos los miembros, y cada nivel dará una ventaja significativa respecto al anterior
          que hará que todos luchen para lograrlo. A continuación detallamos los diferentes niveles que
          existen y las ventajas de cada uno:{' '}
        </p>
        <table>
          <tr className={styles.tableStyle}>
            <th className={styles.tableContent}>Nivel </th>
            <th className={styles.tableContent}>Requisitos</th>
            <th className={styles.tableContent}>Ventajas</th>
          </tr>
          <tr>
            <td className={styles.tableContent2}>1 </td>
            <td className={styles.tableContent2}>
              Ser nivel 30, 100 skills en Liderazgo, 1 Gema de Clan, 1.500.000 monedas de oro{' '}
            </td>
            <td className={styles.tableContent2}>
              Poder tener hasta 8 (ocho) miembros en un clan, Poder ver invisible a los miembros de tu clan,
              Poder hablar por consola con los miembros de tu clan, Poder ingresar a los castillos. Tu clan
              ganará 20 puntos de usuario (que serán repartidos entre los miembros conectados) cada 30 minutos
              por castillo conquistado.{' '}
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>2 </td>
            <td className={styles.tableContent2}>
              Ser dueño de los 4 castillos, 500 puntos de usuario, 3 Gema de Clan, 3.000.000 de monedas de oro
            </td>
            <td className={styles.tableContent2}>
              Poder tener hasta 12 (doce) miembros en un clan, Poder enviar señales de tu posición actual en
              el mini-mapa a los miembros de tu clan. Poder jugar guerras de clanes.
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>3 </td>
            <td className={styles.tableContent2}>
              600 puntos de usuario, 10 Gema de Clan, 5.000.000 de monedas de oro.
            </td>
            <td className={styles.tableContent2}>
              Poder tener hasta 15 (quince) miembros en un clan, Poder teletransportarte automáticamente a los
              castillos usando el comando /IRCASTILLO. Poder trabajar en las catacumbas del castillo. El rey
              de tu castillo invocará un clérigo defensor para que lo cure cuando esté por morir.
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>4 </td>
            <td className={styles.tableContent2}>
              720 puntos de usuario, 10 Gema de Clan, 10.000.000 de monedas de oro. 2 Guerras de Clan ganadas
              mas que perdidas.
            </td>
            <td className={styles.tableContent2}>
              Poder teletransportarte automaticamente a la fortaleza de clan teniendo los 4 castillos y
              tipeando /FORTALEZA. El rey de tu castillo invocará unos Magos defensores cuando se sienta
              atacado
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>5 </td>
            <td className={styles.tableContent2}>
              900 puntos de usuario, 15 Gema de Clan, 15.000.000 de monedas de oro. 5 Guerras de Clan ganadas
              mas que perdidas.
            </td>
            <td className={styles.tableContent2}>
              Poder tener hasta 17 (deicisiete) miembros en un clan, Mantener un castillo reparte 30 puntos de
              usuario. El rey de tu castillo invocará unos arqueros defensores cuando se sienta atacado
            </td>
          </tr>
          <tr>
            <td className={styles.tableContent2}>6 </td>
            <td className={styles.tableContent2}>
              1.700 puntos de usuario, 20 Gema de Clan, 10.000 lingotes de hierro, 10.000 lingotes de plata,
              10.000 lingotes de oro, 10.000 ovillos de Lana de Oveja, 10.000 ovillos de lana de cabra, 10.000
              ovillos de lana de llama, 10.000 maderas, 10.000 chalas, Sacrificio al Dios Cypher en el
              cementerio, 10 Guerras de Clan ganadas mas que perdidas.
            </td>
            <td className={styles.tableContent2}>
              Poder tener hasta 18 (dieciocho) miembros en un clan. Poder elegir una meditación especial para
              los miembros del clan de nivel mayor a 50. La experiencia y extraccion de recursos (leña,
              minerales, peces, etc) se multiplica para todos los miembros del clan dependiendo la cantidad de
              castillos que posean: 1 Castillo, exp y recursos x 1.1, 2 Castillos, exp y recursos x 1.2, 3
              Castillos, exp y recursos x 1.3, 4 Castillos, exp y recursos x 1.5.
            </td>
          </tr>
        </table>
        <h1 className={styles.hechizosTitle}>Subir de nivel mi clan </h1>
        <p className={styles.contenido}>
          Para subir el clan de nivel tenes que acceder a Clanes y dentro de la ventana de clanes tenes el
          siguiente boton.
        </p>
        <div className={styles.imgDiv}>
          <img className={styles.imagen} src={clan} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Clanes;
