import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import s from './ImageGallery.module.css';
import imageAPI from '../../api/pixabay-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class ImageGallery extends Component {
  state = {
    images: null,
    page: 1,
    error: null,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;
    const page = this.state.page;

    if (prevQuery !== nextQuery) {
      this.setState({ status: Status.PENDING });

      imageAPI
        .fetchImages(nextQuery, page)
        .then(images => this.setState({ images, status: Status.RESOLVED }));
    }
  }
  render() {
    return (
      <ul className={s.gallery}>
        {this.state.images &&
          this.state.images.hits.map(image => {
            return <ImageGalleryItem image={image} key={image.id} />;
          })}
      </ul>
    );
  }
}

export default ImageGallery;
