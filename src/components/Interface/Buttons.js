import React from 'react';
import Link from 'next/link';
import styles from './css/Buttons.module.css';

function Buttons( { label, mode, href } ) {

  const validHref = href || '/'; 
  return (
    <div className={`d-flex align-items-center ${styles.authButtons}`}>
      <Link 
        href={validHref}
        className={`d-block ${mode === 'primary' ? styles.buttonPrimary : styles.buttonSecondary}`}
      >
        {label}
      </Link>
    </div>
  );
};

export default Buttons;