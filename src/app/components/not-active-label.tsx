import React from 'react';
import styles from './not-active-label.module.css';

export interface NotActiveLabelPrors {
  children: React.ReactNode;
}

export default function NotActiveLabel({ children }: NotActiveLabelPrors) {
  return <span className={styles.label}>{children}</span>;
}
