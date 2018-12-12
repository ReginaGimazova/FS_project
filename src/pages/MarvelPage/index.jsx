/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import qs from 'qs';
import Title from '../../atoms/Title';
import MainTemplate from '../../templates/MainTemplate';
import MarvelGallery from '../../organisms/MarvelGallery';
import CommonContent from '../../organisms/CommonContent';
import PaginationComponent from '../../molecules/PaginationComponent';
import PaginationLink from '../../atoms/PaginationLnk';
import PaginationEllipsis from '../../atoms/PaginationEllipsis';
import PaginationPrev from '../../atoms/PaginationPrev';
import PaginationNext from '../../atoms/PaginationNext';
import styles from './MarvelPage.module.css';

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

  // disable next and prev links

  render() {
    const lastPage = this.countOfPages();
    const currentPage = this.returnPage();
    const pg = this.returnPageArr();

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
          <PaginationComponent>
            <PaginationPrev currentPage={currentPage} href={`${match.url}?page=${currentPage - 1}`} />
            <PaginationLink href={`${match.url}?page=1`}>1</PaginationLink>
            {this.returnPage() > 4 && (
              <PaginationEllipsis />
            )}
            <ul className={styles.subPagination}>
              {pg.map(page => <PaginationLink href={`${match.url}?page=${page}`}>{page}</PaginationLink>)}
            </ul>
            {this.returnPage() < (lastPage - 4) && (
              <PaginationEllipsis />
            )}
            <PaginationLink href={`${match.url}?page=${lastPage}`}>{lastPage}</PaginationLink>
            <PaginationNext currentPage={currentPage} href={`${match.url}?page=${currentPage + 1}`} />
          </PaginationComponent>

          )}
        </CommonContent>
      </MainTemplate>
    );
  }
}

MarvelPage.propTypes = {
  location: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      field1: PropTypes.number.isRequired,
      filed2: PropTypes.string,
    }),
  }),
};

export default MarvelPage;
