import React, { useEffect, useState } from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import axios from 'axios';
import { useUserData } from '../../../hooks/useUserData';

interface ISearchBlockProps {
  token: string;
}

// interface IUserData {
//   name?:string;
//   iconImg?: string;
// }

export function SearchBlock() {
  // const [data, setData] = useState<IUserData>({});

  // useEffect(() => {
  //   axios.get('https://oauth.reddit.com/api/v1/me', {
  //     headers: { Authorization: `bearer ${token}` }
  //   })
  //     .then((resp) => {
  //       const userData = resp.data;
  //       setData({ name: userData.name, iconImg: userData.icon_img })
  //     })
  //     .catch(console.log)
  // }, [token])

  // const [data] = useUserData(token);

  return (
    <div className={styles.searchBlock}>
      <UserBlock />
    </div>
  );
}
