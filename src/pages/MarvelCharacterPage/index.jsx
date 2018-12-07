import React, { Component } from 'react';
import axios from 'axios';
import Title from '../../atoms/Title';
import MainTemplate from '../../templates/MainTemplate';
import CommonContent from '../../organisms/CommonContent';

class MarvelCharacterPage extends Component {
  state = {
    loading: false,
    error: false,
    data: null,
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
      data: null,
    });
    axios
      .get(`${process.env.REACT_APP_MARVEL_PATH}/v1/public/characters/${this.id}`, {
        params: {
          apikey: process.env.REACT_APP_MARVEL_API_KEY,
        },
      })
      .then((response) => {
        this.setState({
          loading: false,
          error: false,
          data: response.data.data.results[0],
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
          {!this.state.loading && !this.state.error && this.state.data === null && 'Empty'}
          {this.state.error && (
            <div>
              <p>error</p>
              <button type="button" onClick={this.fetch}>reload</button>
            </div>
          )}
          {this.state.data !== null
          && (
          <div key={this.state.data.id}>
            <Title>{this.state.data.name}</Title>
            <p>{this.state.data.description}</p>
          </div>
          )
          }
        </CommonContent>
      </MainTemplate>
    );
  }
}
export default MarvelCharacterPage;
