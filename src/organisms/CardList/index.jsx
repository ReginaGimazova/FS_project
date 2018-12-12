/* eslint-disable react/forbid-prop-types,react/no-array-index-key */
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
    {children.map((cardContent, i) => (<Card key={i} {...cardContent} />))}
  </div>
);

CardList.propTypes = {
  children: PropTypes.array.isRequired,
};

export default CardList;
