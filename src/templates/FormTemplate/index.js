import React from 'react';
import styles from './FormTemplate.module.css';

const FormTemplate = ({children}) =>(
    <div className={styles.form}>
        {children}
    </div>
);
export default FormTemplate
