import React from 'react';
import styles from './CommonContent.module.css';

const CommonContent = ({children}) => (
    <section className={styles.contentSection}>
        {children}
    </section>
);

export default CommonContent
