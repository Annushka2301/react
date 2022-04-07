import React from "react";
import styles from './menu.css';

interface IItem {
  id: string;
  text: string;
  onClick: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  icon?: HTMLElement;
}

interface IGenericListProps {
  list: IItem[];
}

export function MenuList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = 'li', text, onClick, className, id, icon}) => (
        <As key={id} className={className} onClick={() => onClick(id)}>
          <button  className={styles.dropdownButton} >
            {icon}
            {text}
          </button>
        </As>
      ))}
    </>
  )
}
