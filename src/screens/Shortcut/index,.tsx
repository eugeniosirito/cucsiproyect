import React from 'react';
import { useNavigate } from 'react-router-dom';

import axe from '../LogIn/assets/ico-5.png';
import monster from '../LogIn/assets/ico-6.png';
import map from '../LogIn/assets/ico-7.png';
import dungeon from '../LogIn/assets/ico-8.png';

import styles from './styles.module.scss';

function Shortcut() {
  const navigate = useNavigate();
  const redirect1 = () => {
    navigate('/home');
  };
  const redirect2 = () => {
    navigate('/manual/hechizos');
  };
  const redirect3 = () => {
    navigate('/manual/criaturas');
  };
  const redirect4 = () => {
    navigate('/manual/criaturas');
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.items}>
          <div className={styles.img1}>
            <p className={styles.contenido}>Items</p>
            <img className={styles.axe} src={axe} alt="Items" onClick={redirect1} />
          </div>
          <div className={styles.img2}>
            <p className={styles.contenido}>Hechizos</p>
            <img className={styles.dungeon} src={dungeon} alt="Items" onClick={redirect2} />
          </div>
          <div className={styles.img3}>
            <p className={styles.contenido}>Criaturas</p>
            <img className={styles.map} src={map} alt="Items" onClick={redirect3} />
          </div>
          <div className={styles.img4}>
            <p className={styles.contenido}>Dungeons</p>
            <img className={styles.monster} src={monster} alt="Items" onClick={redirect4} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shortcut;
