import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import ProfilePage from './pages/ProfilePage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/AuthPage';
import MarvelPage from './pages/MarvelPage';
import MarvelMainPage from './pages/MarvelMainPage';
import RegistrationPage from './pages/RegistrationPage';
import MarvelCreatorsPage from './pages/MarvelCreatorsPage';
import MarvelCharacterPage from './pages/MarvelCharacterPage';
import MarvelEventsPage from './pages/MarvelEventsPage';
import MarvelEventPage from './pages/MarvelEventPage';
import MarvelCreatorPage from './pages/MarvelCreatorPage';
import MarvelStoryPage from './pages/MarvelStoryPage';
import MarvelStoriesPage from './pages/MarvelStoriesPage';

const App = () => (
  <BrowserRouter basename="/FS_project/">
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/news" component={NewsPage} exact />
      <Route path="/info" component={InfoPage} exact />
      <Route path="/profile" component={ProfilePage} exact />
      <Route path="/registration" component={RegistrationPage} exact />
      <Route path="/marvel" component={MarvelMainPage} exact />
      <Route path="/marvel/characters" component={MarvelPage} exact />
      <Route path="/marvel/creators" component={MarvelCreatorsPage} exact />
      <Route path="/marvel/events" component={MarvelEventsPage} exact />
      <Route path="/marvel/events/:id" component={MarvelEventPage} exact />
      <Route path="/marvel/characters/:id" component={MarvelCharacterPage} exact />
      <Route path="/marvel/creators/:id" component={MarvelCreatorPage} exact />
      <Route path="/marvel/stories" component={MarvelStoriesPage} exact />
      <Route path="/marvel/stories/:id" component={MarvelStoryPage} exact />
      <Route path="/authentication" component={LoginPage} />
      <Route component={ErrorPage} exact />
    </Switch>
  </BrowserRouter>
);

export default App;
