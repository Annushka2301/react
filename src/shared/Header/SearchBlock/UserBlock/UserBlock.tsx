import React from 'react';
import { Break } from '../../../Break';
import { EColors, Text } from '../../../Text';
import { IconAnon } from '../../../Icons';
import styles from './userblock.css';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
    <a href='https://www.reddit.com/api/v1/authorize?client_id=t9rRy-t79ciMqgB8LkDaYA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=identity read submit'
    className={styles.userBox}>
      <div className={styles.avatarBox}>
        {avatarSrc
        ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
        : <IconAnon />
      }
      </div>

      <div className={styles.username}>
        <Break size={12}/>
        <Text size={20} color={username ? EColors.black : EColors.gray99}>{username || 'Аноним'}</Text>
      </div>
    </a>
  );
}
