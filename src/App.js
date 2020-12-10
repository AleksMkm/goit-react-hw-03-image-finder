import React, { Component } from 'react';
import Container from './Components/Container';
import Searchbar from './Components/Searchbar';
import Button from './Components/Button';
import ImageGallery from './Components/ImageGallery';

class App extends Component {
  state = {
    searchQuery: '',
    loading: false,
  };

  loadMoreData = () => {};

  getSearchQuery = query => {
    this.setState({ searchQuery: query });
  };

  render() {
    return (
      <Container>
        <Searchbar getSearchQuery={this.getSearchQuery} />
        <ImageGallery searchQuery={this.state.searchQuery} />
        <Button loadMoreData={this.loadMoreData} />
      </Container>
    );
  }
}

export default App;
