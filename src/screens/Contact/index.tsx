import React from 'react';

import Navbar from 'screens/Navbar';
import Shortcut from 'screens/Shortcut/index,';

import styles from './styles.module.scss';

function Contact() {
  return (
    <div>
      <Navbar />
      <Shortcut />
      <div className={styles.container}>
        <div className={styles.discord}>
          <img
            className={styles.img}
            src="https://play-lh.googleusercontent.com/s-2O9IP9uO25JhGp2GfxKJKEs9G7CFcAzgheFeatXAQFCiyGy5-M8uJOpdBLwYM8t4zL"
            alt=""
          />
        </div>
        <div className={styles.facebook}>
          <img
            className={styles.img}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png"
            alt=""
          />
        </div>
        <div className={styles.instragram}>
          <img
            className={styles.img}
            src="https://img.utdstc.com/icon/fe0/ab6/fe0ab67fa0de2b2681602db5708a076f50dd21106e0c2d38b9661875a37e235e:200"
            alt=""
          />
        </div>
      </div>
      <div className={styles.nuestrasRedes}>
        <h1 className={styles.redes}>Nuestras redes</h1>
      </div>
    </div>
  );
}

export default Contact;
