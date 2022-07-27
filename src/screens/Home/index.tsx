import React from 'react';

import Navbar from 'screens/Navbar';
import Noticias from 'screens/Noticias';
import Panel from 'screens/Panel';
import Shortcut from 'screens/Shortcut/index,';

import styles from './styles.module.scss';

function Home() {
  return (
    <div>
      <Navbar />
      <Shortcut />
      <div className={styles.container}>
        <Noticias />
        <Panel />
      </div>
    </div>
  );
}

export default Home;
