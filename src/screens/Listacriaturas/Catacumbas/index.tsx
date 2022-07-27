import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'screens/Navbar';

import styles from './styles.module.scss';

function Catacumbas() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.criaturasContainer}>
          <h1 className={styles.criaturasTitle}>Catacumbas</h1>
          <p className={styles.criaturasContenido}>
            Las catacumbas son pasadizos subterráneos infestados de criaturas, aparte de ser un lugar de
            entrenamiento para niveles bajos proporciona la ventaja de conectar la ciudad de Ullathorpe con
            Nix en una corta distancia. El ingreso desde Ullathorpe (Mapa 1) se encuentra detrás de la casa de
            pociones, oculta al ojo mortal, en cambio en la ciudad de Nix (Mapa 13) se encuentra visiblemente
            por un arco de rocas situada cerca del viajero. Aquí encontraremos las siguientes criaturas:
          </p>
        </div>
        <div className={styles.tabla}>
          <table>
            <tr className={styles.tableStyle}>
              <th className={styles.tableContent}>Criatura</th>
              <th className={styles.tableContent}>Vida</th>
              <th className={styles.tableContent}>Daño</th>
              <th className={styles.tableContent}>Defensa</th>
              <th className={styles.tableContent}>Def.Mágica</th>
              <th className={styles.tableContent}>PoderAtk</th>
              <th className={styles.tableContent}>Evasión</th>
              <th className={styles.tableContent}>Mágia</th>
              <th className={styles.tableContent}>EXP</th>
              <th className={styles.tableContent}>ORO</th>
              <th className={styles.tableContent}>Drop</th>
              <th className={styles.tableContent}>Ubicación/Mapa</th>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Orco</td>
              <td className={styles.tableContent2}>350</td>
              <td className={styles.tableContent2}>5/35</td>
              <td className={styles.tableContent2}>30</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>100</td>
              <td className={styles.tableContent2}>75</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>1.750</td>
              <td className={styles.tableContent2}>90</td>
              <td className={styles.tableContent2}>70% - Hacha</td>
              <td className={styles.tableContent2}>9-28</td>
            </tr>
            <tr>
              <td className={styles.tableContent2}>Araña Gigante</td>
              <td className={styles.tableContent2}>1.100 </td>
              <td className={styles.tableContent2}>75/100 </td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>150</td>
              <td className={styles.tableContent2}>75</td>
              <td className={styles.tableContent2}>-</td>
              <td className={styles.tableContent2}>11.865 </td>
              <td className={styles.tableContent2}>440</td>
              <td className={styles.tableContent2}>
                {' '}
                5% - Martillo de Guerra, 5% - Armadura de Cuero, 5% - Armadura de Cuero (E/G)
              </td>
              <td className={styles.tableContent2}>8-9-20-21-23-24</td>
            </tr>
          </table>
        </div>
        <Link to="/manual/criaturas">
          <h1 className={styles.volver}>Volver</h1>
        </Link>
      </div>
    </div>
  );
}

export default Catacumbas;
