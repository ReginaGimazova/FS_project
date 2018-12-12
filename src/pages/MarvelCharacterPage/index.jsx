/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Title from '../../atoms/Title';
import Subtitle from '../../atoms/Subtitle';
import MainTemplate from '../../templates/MainTemplate';
import CommonContent from '../../organisms/CommonContent';

class MarvelCharacterPage extends Component {
  state = {
    loading: false,
    error: false,
    data: null,
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
      data: null,
    });

    const { match } = this.props;
    const { params } = match;
    axios
      .get(`${process.env.REACT_APP_MARVEL_PATH}/v1/public/characters/${params.id}`, {
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
    const { loading } = this.state;
    const { error } = this.state;
    const { data } = this.state;
    return (
      <MainTemplate>
        <CommonContent>
          <Title>Marvel character</Title>
          {loading && 'loading'}
          {!loading && !error && data === null && 'Empty'}
          {error && (
            <div>
              <p>error</p>
              <button type="button" onClick={this.fetch}>reload</button>
            </div>
          )}
          {data !== null
          && (
          <div key={data.id}>
            <Title>{data.name}</Title>
            <p>{data.description}</p>
            <Subtitle>Comics</Subtitle>
            {data.comics.items.map((c, i) => (
              <p key={i}>{c.name}</p>
            ))}
            <Subtitle>Stories</Subtitle>
            {data.stories.items.map((story, i) => (
              <p key={i}>{story.name}</p>
            ))}
            <Subtitle>Events</Subtitle>
            {data.events.items.map((event, i) => (
              <p key={i}>{event.name}</p>
            ))}
            <Subtitle>Series</Subtitle>
            {data.series.items.map((s, i) => (
              <p key={i}>{s.name}</p>
            ))}
          </div>
          )}
        </CommonContent>
      </MainTemplate>
    );
  }
}

MarvelCharacterPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      field1: PropTypes.number,
      filed2: PropTypes.string,
    }),
  }),
};

export default MarvelCharacterPage;
