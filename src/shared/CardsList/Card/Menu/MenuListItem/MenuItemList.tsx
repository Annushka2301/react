import React from 'react';
import { BlockIcon, WarningIcon } from '../../../../Icons';
import { EIcons, Icon } from '../../../../Icons/Icon';
import { EColors, Text } from '../../../../Text';
import styles from './menuitemslist.css';
import ClassNames from 'classnames';

interface IMenuItemsListProps {
  postId: string;
}

export function MenuListItem({ postId }: IMenuItemsListProps) {

  const liClass = ClassNames ({
    main: styles.menuItem,
    'desktop': styles.hide,
    'tablet': styles.hide,
    'mobile': styles.hide,
  });
  // console.log(liClass)

  return (
    <ul className={styles.menuItemsList} onClick={() => console.log(postId)}>
      <li className={[styles.menuItem, styles.hideMobile].join(' ')}>
        <Icon size={16} name={EIcons.comment} />
        <Text size={12} color={EColors.gray99} >Комментарии</Text>
      </li>

      <div className={[styles.divider, styles.hideMobile].join(' ')}/>

      <li className={[styles.menuItem, styles.hideMobile].join(' ')}>
        <Icon size={16} name={EIcons.share} />
        <Text size={12} color={EColors.gray99} >Поделиться</Text>
      </li>

      <div className={[styles.divider, styles.hideMobile].join(' ')}/>

      <li className={[styles.menuItem].join('')}>
        <Icon size={16} name={EIcons.block} />
        <Text size={12} color={EColors.gray99} >Скрыть</Text>
      </li>

      <div className={styles.divider}/>

      <li className={[styles.menuItem, styles.hideMobile].join(' ')}>
      <Icon size={16} name={EIcons.save} />
        <Text size={12} color={EColors.gray99}>Сохранить</Text>
      </li>

      <div className={[styles.divider, styles.hideMobile].join(' ')}/>

      <li className={styles.menuItem}>
      <Icon size={16} name={EIcons.warning} />
        <Text size={12} color={EColors.gray99}>Пожаловаться</Text>
      </li>
    </ul>
  );
}
