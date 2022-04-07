import React from 'react';
import { BlockIcon, WarningIcon } from '../../../../Icons';
import { EColors, Text } from '../../../../Text';
import styles from './menuitemslist.css';

export function MenuListItem() {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem}>
        <BlockIcon/>
        <Text size={12} color={EColors.gray99}>Скрыть</Text>
      </li>

      <div className={styles.divider}/>

      <li className={styles.menuItem}>
        <WarningIcon/>
        <Text size={12} color={EColors.gray99}>Пожаловаться</Text>
      </li>
    </ul>
  );
}
