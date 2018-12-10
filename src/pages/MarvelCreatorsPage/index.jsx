import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import styles from './MarvelCreatorsPage.module.css';
import Title from '../../atoms/Title';
import MainTemplate from '../../templates/MainTemplate';
import MarvelGallery from '../../organisms/MarvelGallery';
import CommonContent from '../../organisms/CommonContent';
import PaginationComponent from '../../molecules/PaginationComponent';
import PaginationLink from '../../atoms/PaginationLnk';
import PaginationEllipsis from '../../atoms/PaginationEllipsis';
import PaginationPrev from '../../atoms/PaginationPrev';
import PaginationNext from '../../atoms/PaginationNext';

class MarvelCreatorsPage extends Component {
  state = {
    loading: false,
    error: false,
    data: [],
    total: 0,
  };

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    this.setState({
      loading: true,
      error: false,
    });
    axios
      .get(`${process.env.REACT_APP_MARVEL_PATH}/v1/public/creators`, {
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

  componentDidUpdate(prevProps, prevState) {
    prevProps.location.search !== this.props.location.search ? this.fetch() : console.log('not update');
  }

  countOfPages() {
    return Math.ceil(this.state.total / 20);
  }

  returnPage() {
    const parseURL = qs.parse(this.props.location.search);
    return parseURL['?page'];
  }

  returnQueryString(page) {
    return qs.stringify({ page }, { addQueryPrefix: true });
  }

  returnPageArr() {
    const page = parseInt(this.returnPage());
    const lastPage = parseInt(this.countOfPages());
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
    const lastPage = parseInt(this.countOfPages());
    const currentPage = parseInt(this.returnPage());
    const pages = [];
    const pg = this.returnPageArr();
    for (let i = 1; i < lastPage; i++) {
      pages.push(i);
    }

    return (
      <MainTemplate>
        <CommonContent>
          <Title>Marvel Creators</Title>
          <MarvelGallery>
            {this.state.data}
          </MarvelGallery>
          {this.state.loading && 'Loading...'}
          {!this.state.loading && !this.state.error && this.state.data.length === 0 && 'Empty'}
          {this.state.error && (
            <div>
              <p>Loading error</p>
              <button type="button" onClick={this.fetch}>reload</button>
            </div>
          )}

          {!this.state.error && !this.state.loading && (
            <PaginationComponent>
              <PaginationPrev href={`${this.props.match.url}?page=${currentPage - 1}`} />
              <PaginationLink href={`${this.props.match.url}?page=1`}>1</PaginationLink>
              {this.returnPage() > 4 && (
                <PaginationEllipsis />
              )}
              <ul className={styles.subPagination}>
              {pg.map(page => <PaginationLink href={`${this.props.match.url}?page=${page}`}>{page}</PaginationLink>)}
              </ul>
              {this.returnPage() < (lastPage - 4) && (
                <PaginationEllipsis />
              )}
              <PaginationLink href={`${this.props.match.url}?page=${lastPage}`}>{lastPage}</PaginationLink>
              <PaginationNext href={`${this.props.match.url}?page=${currentPage + 1}`} />
            </PaginationComponent>

          )}
        </CommonContent>
      </MainTemplate>
    );
  }
}

export default MarvelCreatorsPage;
