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
import MarvelCharacterPage from './pages/MarvelCharacterPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/news" component={NewsPage} exact />
      <Route path="/info" component={InfoPage} exact />
      <Route path="/profile" component={ProfilePage} exact />
      <Route path="/registration" component={RegistrationPage} exact />
      <Route path="/marvel" component={MarvelMainPage} exact/>
      <Route path="/marvel/characters" component={MarvelPage}/>
      <Route path="/marvel/characters/:id" component={MarvelCharacterPage} exact />
      <Route path="/authentication" component={LoginPage} />
      <Route component={ErrorPage} exact />
    </Switch>
  </BrowserRouter>
);

export default App;
