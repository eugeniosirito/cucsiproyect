import React from 'react';

import { Slideshow, Slide } from 'screens/Slide';
import Navbar from 'screens/Navbar';
import RadarPala from 'screens/RadarPala';
import RadarWarrior from 'screens/RadarWarrior';
import RadarAse from 'screens/RadarAse';
import RadarMago from 'screens/RadarMago';
import RadarDruida from 'screens/RadarDruida';
import RadarBardo from 'screens/RadarBardo';
import RadarKza from 'screens/RadarKza';
import RadarPirata from 'screens/RadarPirata';
import RadarClero from 'screens/RadarClero';

import pala3 from '../LogIn/assets/paladin3.png';
import warrior from '../LogIn/assets/enanowarrior.png';
import rogue from '../LogIn/assets/rogue.png';
import wizard from '../LogIn/assets/wizard.png';
import druid from '../LogIn/assets/druid.png';
import bard from '../LogIn/assets/bard.png';
import archer from '../LogIn/assets/archer2.png';
import pirata from '../LogIn/assets/pirata.png';
import trabajador from '../LogIn/assets/trabajador.png';
import cleric from '../LogIn/assets/cleric.png';

import styles from './styles.module.scss';

function Test() {
  return (
    <div>
      <Navbar />
      <div className={styles.background}>
        <Slideshow controles>
          <Slide>
            <div className={styles.imgContainer}>
              <h1 className={styles.className}>Paladin</h1>
              <img src={pala3} alt="" className={styles.img} />
              <RadarPala />
            </div>
          </Slide>
          <Slide>
            <div className={styles.imgContainer}>
              <h1 className={styles.className10}>Clérigo</h1>
              <img src={cleric} alt="" className={styles.img10} />
              <RadarClero />
            </div>
          </Slide>
          <Slide>
            <div className={styles.imgContainer}>
              <h1 className={styles.className2}>Guerrero</h1>
              <img src={warrior} alt="" className={styles.img2} />
              <RadarWarrior />
            </div>
          </Slide>
          <Slide>
            <div className={styles.imgContainer}>
              <h1 className={styles.className3}>Asesino</h1>
              <img src={rogue} alt="" className={styles.img3} />
              <RadarAse />
            </div>
          </Slide>
          <Slide>
            <div className={styles.imgContainer}>
              <h1 className={styles.className4}>Mago</h1>
              <img src={wizard} alt="" className={styles.img4} />
              <RadarMago />
            </div>
          </Slide>
          <Slide>
            <div className={styles.imgContainer}>
              <h1 className={styles.className5}>Druida</h1>
              <img src={druid} alt="" className={styles.img5} />
              <RadarDruida />
            </div>
          </Slide>
          <Slide>
            <div className={styles.imgContainer}>
              <h1 className={styles.className6}>Bardo</h1>
              <img src={bard} alt="" className={styles.img6} />
              <RadarBardo />
            </div>
          </Slide>
          <Slide>
            <div className={styles.imgContainer}>
              <h1 className={styles.className7}>Cazador</h1>
              <img src={archer} alt="" className={styles.img7} />
              <RadarKza />
            </div>
          </Slide>
          <Slide>
            <div className={styles.imgContainer}>
              <h1 className={styles.className8}>Pirata</h1>
              <img src={pirata} alt="" className={styles.img8} />
              <RadarPirata />
            </div>
          </Slide>
          <Slide>
            <div className={styles.imgContainer}>
              <h1 className={styles.className9}>Trabajador</h1>
              <img src={trabajador} alt="" className={styles.img9} />
              <RadarWarrior />
            </div>
          </Slide>
        </Slideshow>
      </div>
    </div>
  );
}

export default Test;
