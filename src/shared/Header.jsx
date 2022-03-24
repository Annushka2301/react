import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import styles from './header.css';

function HeaderComponent() {
  console.log(styles.example)
  return(
    <header>
      <h1 class={styles.example}>Hello, React</h1>
    </header>
  );
};

export const Header = hot(HeaderComponent);
