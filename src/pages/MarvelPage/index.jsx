import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import Title from '../../atoms/Title';
import MainTemplate from '../../templates/MainTemplate';
import MarvelGallery from '../../organisms/MarvelGallery';
import CommonContent from '../../organisms/CommonContent';
import PaginationComponent from '../../molecules/PaginationComponent';
import PaginationLink from '../../atoms/PaginationLnk';

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
          offset: (this.returnPage() - 1) * 20
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

  componentDidUpdate(prevProps, prevState){
    prevProps.location.search !== this.props.location.search ? this.fetch() : console.log("not update");
  }

  countOfPages() {
    return Math.ceil(this.state.total / 20);
  }

  returnPage(){
    let parseURL = qs.parse(this.props.location.search);
    return parseURL['?page'];
  }

  returnQueryString(page){
    return qs.stringify({page: page}, {addQueryPrefix: true})
  }

  render() {
    let lastPage = this.countOfPages();
    return (
      <MainTemplate>
        <CommonContent>
          <Title>Marvel Characters</Title>
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

          {!this.state.loading && !this.state.error
            && (
          <PaginationComponent>
            <PaginationLink href = {"/marvel/characters?page=1"}>1</PaginationLink>
            <PaginationLink href = {"/marvel/characters?page=2"}>2</PaginationLink>
            <PaginationLink href = {"/marvel/characters?page=3"}>3</PaginationLink>
          </PaginationComponent>
          )}
        </CommonContent>
      </MainTemplate>
    );
  }
}

export default MarvelPage;
