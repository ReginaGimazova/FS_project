import React from 'react';
import MainTemplate from '../../templates/MainTemplate';
import CardList from '../../organisms/CardList';
import articles from '../../data/articles';

const NewsPage = () => (
    <MainTemplate>
        <CardList>{articles}</CardList>
    </MainTemplate>
);

export default NewsPage;
