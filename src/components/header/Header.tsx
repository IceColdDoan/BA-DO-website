import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
            BA-DO!
        </h1>
        <h2 className={styles.subTitle}>
          Time to Lock in 🔒
        </h2>
      </div>
    </>
  )
}
export default Header;
