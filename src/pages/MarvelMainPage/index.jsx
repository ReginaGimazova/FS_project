import React from 'react';
import MainTemplate from '../../templates/MainTemplate/index';
import CommonContent from '../../organisms/CommonContent/index';
import CommonLink from '../../atoms/CommonLink/index';

const MarvelMainPage = () => (
  <MainTemplate>
    <CommonContent>
      <CommonLink href="/marvel/characters" className="blackLink">Marvel characters</CommonLink>
      <CommonLink href="/marvel/creators" className="blackLink">Marvel creators</CommonLink>
      <CommonLink href="/marvel/stories" className="blackLink">Marvel stories</CommonLink>
      <CommonLink href="/marvel/events" className="blackLink">Marvel events</CommonLink>
    </CommonContent>
  </MainTemplate>
);

export default MarvelMainPage;
