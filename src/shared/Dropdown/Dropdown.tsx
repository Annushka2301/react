import React, { useState, useEffect } from 'react';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  // isOpen?: boolean;
  // onOpen?: () => void;
  // onClose?: () => void;
}

const NOOP = () => {};
// isOpen, onClose = NOOP, onOpen = NOOP
export function Dropdown({ button, children,  }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  // React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  // React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

  // const handleOpen = () => {
  //   if (isOpen === undefined) {
  //     setIsDropdownOpen(!isDropdownOpen)
  //   }
  // }

  return (
    <div className={styles.container}>
      <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        { button }
      </div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            { children }
          </div>
        </div>
      )}
    </div>
  );
}
