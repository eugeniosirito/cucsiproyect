import React from 'react';

import Navbar from 'screens/Navbar';
import Panel from 'screens/Panel';
import Ranking from 'screens/Ranking';
import Shortcut from 'screens/Shortcut/index,';

import styles from './styles.module.scss';

function RankingPage() {
  return (
    <div>
      <Navbar />
      <Shortcut />
      <div className={styles.container}>
        <Ranking />
        <Panel />
      </div>
    </div>
  );
}

export default RankingPage;
