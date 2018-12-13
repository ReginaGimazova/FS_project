/* eslint-disable react/require-default-props,react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import qs from 'qs';
import Title from '../../atoms/Title';
import MainTemplate from '../../templates/MainTemplate';
import MarvelGallery from '../../organisms/MarvelGallery';
import CommonContent from '../../organisms/CommonContent';
import PaginationComponent from '../../molecules/PaginationComponent';

class MarvelPage extends Component {
  state = {
    loading: false,
    error: false,
    data: [],
    total: 0,
  };

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (prevProps.location.search !== location.search) {
      this.fetch();
    }
  }

  fetch = () => {
    this.setState({
      loading: true,
      error: false,
    });
    axios
      .get(`${process.env.REACT_APP_MARVEL_PATH}/v1/public/characters`, {
        params: {
          apikey: process.env.REACT_APP_MARVEL_API_KEY,
          limit: 20,
          offset: (this.returnPage() - 1) * 20,
        },
      })
      .then((response) => {
        this.setState({
          loading: false,
          data: [...response.data.data.results],
          total: response.data.data.total,
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
          error: true,
        });
      });
  };


  countOfPages() {
    const { total } = this.state;
    return Math.ceil(total / 20);
  }

  returnPage() {
    const { location } = this.props;
    const parseURL = qs.parse(location.search, { ignoreQueryPrefix: true });
    return parseInt(parseURL.page, 10);
  }

  validateURL() {
    if (/^[1-9]([0-9])*$/.test(this.returnPage())) {
      console.log('true');
    } else {
      console.log('false');
    }
  }

  render() {
    const lastPage = this.countOfPages();
    const currentPage = this.returnPage();

    const { data } = this.state;
    const { loading } = this.state;
    const { error } = this.state;
    const { match } = this.props;
    return (
      <MainTemplate>
        <CommonContent>
          <Title>Marvel characters</Title>
          <MarvelGallery>
            {data}
          </MarvelGallery>
          {loading && 'Loading...'}
          {!loading && !error && data.length === 0 && 'Empty'}
          {error && (
          <div>
            <p>Loading error</p>
            <button type="button" onClick={this.fetch}>reload</button>
          </div>
          )}

          {!error && !loading && (
            <PaginationComponent
              total={lastPage}
              location={match.url}
              currentPage={currentPage}
            />
          )}
        </CommonContent>
      </MainTemplate>
    );
  }
}

MarvelPage.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      field1: PropTypes.number,
      filed2: PropTypes.string,
    }),
  }),
};

export default MarvelPage;
