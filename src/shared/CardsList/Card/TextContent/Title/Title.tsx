import React from 'react';
import styles from './title.css';

export function Title() {
  return (
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink}>
        Реплицированные с зарубежных источников возможности
      </a>
    </h2>
  );
}
