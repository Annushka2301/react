import React from 'react';
import { CommentButton } from './CommentButton/CommentButton';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter/KarmaCounter';
import { SaveButton } from './SaveButton';
import { ShareButton } from './ShareButton';

export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />
      <CommentButton />
      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  );
}
