import React from 'react';
import styles from './styles.css';

export default function Button({ children, onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>{children}</button>
  );
}
