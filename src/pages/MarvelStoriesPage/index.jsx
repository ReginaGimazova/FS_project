/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import Title from '../../atoms/Title';
import MainTemplate from '../../templates/MainTemplate';
import MarvelStoriesGallery from '../../organisms/MarvelStoriesGallery';
import CommonContent from '../../organisms/CommonContent';
import PaginationComponent from '../../molecules/PaginationComponent';

class MarvelStoriesPage extends Component {
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
      .get(`${process.env.REACT_APP_MARVEL_PATH}/v1/public/stories`, {
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
    const parseURL = qs.parse(location.search);
    return parseInt(parseURL['?page'], 10);
  }

  validateURL() {
    if (/^[1-9]([0-9])*$/.test(this.returnPage())) {
      console.log('true');
    } else {
      console.log('false');
    }
  }

  returnPageArr() {
    const page = parseInt(this.returnPage(), 10);
    const lastPage = this.countOfPages();
    const pageArray = [];
    if (page >= 1 && page <= 4) {
      [2, 3, 4, 5].map(p => pageArray.push(p));
    }

    if (page > 4 && page <= lastPage - 4) {
      [page - 1, page, page + 1].map(p => pageArray.push(p));
    }
    if (page > (lastPage - 4) && [page <= lastPage]) {
      [lastPage - 4, lastPage - 3, lastPage - 2, lastPage - 1].map(p => pageArray.push(p));
    }
    return pageArray;
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
          <Title>Marvel stories</Title>
          <MarvelStoriesGallery>
            {data}
          </MarvelStoriesGallery>
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

export default MarvelStoriesPage;
