import React from 'react';
import MainTemplate from '../../templates/MainTemplate/index';
import CommonContent from '../../organisms/CommonContent/index';
import MenuLink from '../../atoms/CommonLink/index';

const MarvelMainPage = () => (
  <MainTemplate>
    <CommonContent>
      <MenuLink href="/marvel/characters" className="blackLink">Marvel characters</MenuLink>
      <MenuLink href="/marvel/creators" className="blackLink">Marvel creators</MenuLink>
      <MenuLink href="/marvel/stories" className="blackLink">Marvel stories</MenuLink>
      <MenuLink href="/marvel/comics" className="blackLink">Marvel comics</MenuLink>
      <MenuLink href="/marvel/events" className="blackLink">Marvel events</MenuLink>
    </CommonContent>
  </MainTemplate>
);

export default MarvelMainPage;
