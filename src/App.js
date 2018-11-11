import React, { Component } from 'react';
import NewsPage from './pages/NewsPage.js'
import HomePage from './pages/HomePage'
import InfoPage from './pages/InfoPage'
import ProfilePage from './pages/ProfilePage'
import ErrorPage from './pages/ErrorPage'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/news' component={NewsPage} exact/>
                <Route path='/info' component={InfoPage} exact/>
                <Route path='/profile' component={ProfilePage} exact/>
                <Route component={ErrorPage} exact/>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
