import React from 'react';
import styles from './layout.css';

interface ILayoutPtops {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutPtops) {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}
