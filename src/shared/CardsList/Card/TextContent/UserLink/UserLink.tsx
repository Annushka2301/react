import React from 'react';
import styles from './userlink.css';

export function UserLink() {
  return (
    <div className={styles.userLink}>
      <img
        className={styles.avatar}
        src="https://cdn.dribbble.com/users/9492995/avatars/mini/c9cce1e0f0881cf3794335d829f30121.jpg?1634269978"
        alt="avatar"
      />
      <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
    </div>
  );
}
