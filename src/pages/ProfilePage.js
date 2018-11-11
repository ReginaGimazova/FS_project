import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import PageContent from '../organisms/PageContent';

const ProfilePage = () => (
    <MainTemplate>
        <PageContent typeOfContent = 'commonContent' content = 'profile'/>
    </MainTemplate>
);

export default ProfilePage
