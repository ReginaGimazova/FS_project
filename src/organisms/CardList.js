import React from 'react';
import Card from '../molecues/Card';
import styles from './CardList.module.css';

const CardList = ({children}) => (
    <div className={styles.cardList}>
        <h3>
            ARTICLES
        </h3>
        {children.map(cardContent => {
            return ( <Card {...cardContent}/>)
            }
        )}

    </div>
);

export default CardList;