import React from 'react';
import MainTemplate from '../templates/MainTemplate'
import PageContent from '../organisms/PageContent'
import articles from '../data/articles'


const NewsPage = () => (
    <MainTemplate>
        <PageContent content = {articles} typeOfContent = 'cardList'/>
    </MainTemplate>
);

export default NewsPage;
