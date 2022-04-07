import React from 'react';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
}

// const NOOP = () => {};

export function Dropdown({ button, children, isOpen = false }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

  const handleOpen = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className={styles.container}>
      <div onClick={() => handleOpen()}>
        { button }
      </div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(isOpen)}>
            { children }
          </div>
        </div>
      )}
    </div>
  );
}
