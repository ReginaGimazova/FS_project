import React, { Component } from 'react';
import axios from 'axios';
import Title from '../../atoms/Title';
import MainTemplate from '../../templates/MainTemplate';
import CommonContent from '../../organisms/CommonContent';

class MarvelCharacterPage extends Component {
  state = {
    loading: false,
    error: false,
    data: [],
  };

  id = this.props.match.params.id;

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
      .get('https://gateway.marvel.com/v1/public/characters/'.concat(this.id), {
        params: {
          apikey: '5f9ed6e9a5e59cae437f518290e52570',
        },
      })
      .then((response) => {
        this.setState({
          loading: false,
          eror: false,
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
          <Title>Marvel character</Title>
          {this.state.loading && 'loading'}
          {!this.state.loading && !this.state.error && this.state.data.length === 0 && 'Empty'}
          {this.state.eror && (
            <div>
              <p>error</p>
              <button type="button" onClick={this.fetch}>reload</button>
            </div>
          )}
          {this.state.data.map(character => (
            <div key={character.id}>
              <Title>{character.name}</Title>
              <p>{character.description}</p>
            </div>
          ))}
        </CommonContent>
      </MainTemplate>
    );
  }
}
export default MarvelCharacterPage;
