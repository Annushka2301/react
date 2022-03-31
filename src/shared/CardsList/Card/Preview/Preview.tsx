import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview} >
      <img
      className={styles.previewImg}
      src="https://cdn.dribbble.com/users/4100772/screenshots/17880993/media/fe32815794159f0a77361a5bd6b8e802.jpg?compress=1&resize=400x300&vertical=top"
      alt="" />
    </div>
  );
}
