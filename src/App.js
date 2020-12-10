import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Container from './Components/Container';
import Searchbar from './Components/Searchbar';
import Button from './Components/Button';
import ImageGallery from './Components/ImageGallery';

class App extends Component {
  state = {
    searchQuery: '',
    searchPage: 1,
    loading: false,
  };

  getSearchQuery = query => {
    this.setState({ searchQuery: query });
  };

  updateSearchPage = () => {
    this.setState(prevState => ({ searchPage: prevState.searchPage + 1 }));
  };

  render() {
    const { searchQuery, searchPage } = this.state;

    return (
      <Container>
        <Searchbar getSearchQuery={this.getSearchQuery} />
        <ImageGallery searchQuery={searchQuery} page={searchPage} />
        <Button updateSearchPage={this.updateSearchPage} />
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}

export default App;
