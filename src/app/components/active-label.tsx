import React from 'react';
import styles from './active-label.module.css';

export interface ActiveLabelPrors {
  children: React.ReactNode;
}

export default function ActiveLabel({ children }: ActiveLabelPrors) {
  return <span className={styles.label}>{children}</span>;
}
