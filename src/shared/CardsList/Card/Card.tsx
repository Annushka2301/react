import React from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

export function Card() {
  return (
    <li className={styles.card}>
      {/* разбила карточку на 4 основных компонента,
      затем в каждом из них выделила элементы,
      которые можно в дальнейшем переиспользовать */}
      <TextContent />
      <Preview />
      <Menu />
      <Controls />
    </li>
  );
}
