import React, { Component } from 'react';
import axios from 'axios';
import Title from '../../atoms/Title';
import MainTemplate from '../../templates/MainTemplate';
import CommonContent from '../../organisms/CommonContent';
import MenuLink from '../../atoms/MenuLink';

class MarvelPage extends Component {
  state = {
    loading: false,
    error: false,
    data: [],
  };

  componentDidMount() {
    setTimeout(() => {
      this.fetch();
    }, 1000);
  }

  fetch = () => {
    this.setState({
      loading: true,
      error: false,
      data: [],
    });
    axios
      .get('https://gateway.marvel.com/v1/public/characters', {
        params: {
          apikey: '5f9ed6e9a5e59cae437f518290e52570',
        },
      })
      .then((response) => {
        this.setState({
          loading: false,
          data: response.data.data.results,
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
          error: true,
        });
      });
  };

  render() {
    return (
      <MainTemplate>
        <CommonContent>
          <Title>
            Marvel characters
          </Title>
          {this.state.loading && 'Loading...'}
          {/* можно компонент написать */}
          {!this.state.loading && !this.state.error && this.state.data.length === 0 && 'Empty'}
          {this.state.error && (
            <div>
              <p>Loading error</p>
              <button type="button" onClick={this.fetch}>reload</button>
            </div>
          )}
          {this.state.data.map(character => (
            <div key={character.id}>
              <MenuLink href={`/marvel/${character.id}`} className="leftMenuLink">{character.name}</MenuLink>
            </div>
          ))}

        </CommonContent>
      </MainTemplate>
    );
  }
}

export default MarvelPage;
