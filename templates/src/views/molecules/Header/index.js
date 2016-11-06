import React from 'react';
import styles from './styles.css';

export default () => (
  <div className={`${styles.noSpace} ${styles.black} ${styles.flex}`}>
    <h1 className={`${styles.h1} ${styles.flexLeft}`}>
      {{name}}
    </h1>
    <h1 className={`${styles.h1} ${styles.flexRight}`}>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        Rule <i className="fa fa-link" aria-hidden="true" />
      </a>
    </h1>
    <h1 className={`${styles.h1} ${styles.flexRight}`}>
      <a
        href="https://github.com/airtoxin/{{name}}"
        target="_blank"
        className={styles.link}
        rel="noopener noreferrer"
      >
        <i className="fa fa-github" aria-hidden="true" />
      </a>
    </h1>
  </div>
);
