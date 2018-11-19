import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import ProfilePage from './pages/ProfilePage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import MarvelPage from './pages/MarvelPage';
import RegistrationPage from './pages/RegistrationPage';
import MarvelCharacterPage from './pages/MarvelCharacterPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/news" component={NewsPage} exact />
      <Route path="/info" component={InfoPage} exact />
      <Route path="/profile" component={ProfilePage} exact />
      <Route path="/registration" component={RegistrationPage} exact />
      <Route path="/marvel" component={MarvelPage} exact />
      <Route path="/marvel/:id" component={MarvelCharacterPage} />
      <Route path="/login" component={LoginPage} />
      <Route component={ErrorPage} exact />
    </Switch>
  </BrowserRouter>
);

export default App;
