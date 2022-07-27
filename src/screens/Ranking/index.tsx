import React from 'react';

import styles from './styles.module.scss';

function Ranking() {
  return (
    <div className={styles.container}>
      <h1 className={styles.rankingName}>RANKING</h1>
      <div className={styles.datosUsuario}>
        <div className={styles.evento}>
          <span className={styles.trofeos}>Trofeos de oro</span>
        </div>
        <div className={styles.evento}>
          <span className={styles.eventos}>Eventos ganados</span>
        </div>
        <div className={styles.evento}>
          <span className={styles.retos}>Retos ganados</span>
        </div>
        <div className={styles.evento}>
          <span className={styles.matados}>Usuarios matados</span>
        </div>
      </div>
      <div className={styles.datosTop}>
        <div className={styles.top}>
          <span className={styles.topUser}>Player1</span>
        </div>
        <div className={styles.top}>
          <span className={styles.topUser}>Player2</span>
        </div>
        <div className={styles.top}>
          <span className={styles.topUser}>Player3</span>
        </div>
        <div className={styles.top}>
          <span className={styles.topUser}>Player4</span>
        </div>
      </div>
      <div className={styles.levelTitle}>
        <h3 className={styles.userxlvl}>Usuarios por nivel</h3>
        <select className={styles.dropDown} name="clases" id="clases">
          <option value="mago">Mago</option>
          <option value="asesino">Asesino</option>
          <option value="clerigo">Clerigo</option>
          <option value="guerrero">Guerrero</option>
          <option value="paladin">Paladin</option>
          <option value="pirata">Pirata</option>
          <option value="bardo">Bardo</option>
          <option value="druida">Druida</option>
          <option value="cazador">Cazador</option>
        </select>
      </div>
      <div className={styles.listaUsuarios}>
        <table className={styles.tabla}>
          <tr>
            <th>Pos</th>
            <th className={styles.nombrexnombre}>Nombre</th>
            <th className={styles.nivel}>Nivel</th>
          </tr>
          <tr>
            <td>1</td>
            <td className={styles.nombre}>Player1</td>
            <td className={styles.nivel}>52</td>
          </tr>
          <tr>
            <td>2</td>
            <td className={styles.nombre}>Player2</td>
            <td className={styles.nivel}>52</td>
          </tr>
          <tr>
            <td>3</td>
            <td className={styles.nombre}>Player3</td>
            <td className={styles.nivel}>52</td>
          </tr>
          <tr>
            <td>4</td>
            <td className={styles.nombre}>Player4</td>
            <td className={styles.nivel}>52</td>
          </tr>
        </table>
      </div>
      <div className={styles.levelTitle2}>
        <div className={styles.levelTitle}>
          <h3 className={styles.userxlvl}>Clanes por puntos</h3>
          <select className={styles.dropDown} name="clases" id="clases">
            <option value="mago">Mago</option>
            <option value="asesino">Asesino</option>
            <option value="clerigo">Clerigo</option>
            <option value="guerrero">Guerrero</option>
            <option value="paladin">Paladin</option>
            <option value="pirata">Pirata</option>
            <option value="bardo">Bardo</option>
            <option value="druida">Druida</option>
            <option value="cazador">Cazador</option>
          </select>
        </div>
        <div className={styles.listaUsuarios}>
          <table className={styles.tabla}>
            <tr>
              <th>Pos</th>
              <th className={styles.nombrexnombre}>Nombre</th>
              <th className={styles.nivel}>Puntos</th>
            </tr>
            <tr>
              <td>1</td>
              <td className={styles.nombre}>Guild1</td>
              <td className={styles.nivel}>55</td>
            </tr>
            <tr>
              <td>2</td>
              <td className={styles.nombre}>Guild2</td>
              <td className={styles.nivel}>11</td>
            </tr>
            <tr>
              <td>3</td>
              <td className={styles.nombre}>Guild3</td>
              <td className={styles.nivel}>85</td>
            </tr>
            <tr>
              <td>4</td>
              <td className={styles.nombre}>Guild4</td>
              <td className={styles.nivel}>51</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Ranking;
