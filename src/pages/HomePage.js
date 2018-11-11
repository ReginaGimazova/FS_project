import React from 'react'
import MainTemplate from '../templates/MainTemplate'
import PageContent from '../organisms/PageContent'

const HomePage = () => (
    <MainTemplate>
        <PageContent typeOfContent = 'commonContent' content = 'home'/>
    </MainTemplate>
);

export default HomePage
