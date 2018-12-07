import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../molecules/Card';
import Title from '../../atoms/Title';
import styles from './CardList.module.css';

const CardList = ({ children }) => (
  <div className={styles.cardList}>
    <Title>
            ARTICLES
    </Title>
    {children.map(cardContent => (<Card {...cardContent} />))}
  </div>
);

CardList.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CardList;
