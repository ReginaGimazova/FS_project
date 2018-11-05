import React from 'react';
import Card from '../molecues/Card';
import styles from './CardList.module.css';

const CardList = ({articles}) => (
    <div className={styles.cardList}>
        <h3>
            ARTICLES
        </h3>
        {articles.map(article => {
            return ( <Card {...article}/>)
            }
        )}

    </div>
);

export default CardList;