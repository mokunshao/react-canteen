import React from 'react';
import styles from './index.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.background}>
        <h1>欢迎大家来到我的披萨小店</h1>
        <h2>这里有大家喜欢的披萨和小吃</h2>
      </div>
    </div>
  );
}
