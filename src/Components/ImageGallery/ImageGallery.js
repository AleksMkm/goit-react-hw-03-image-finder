import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { css } from '@emotion/core';
import HashLoader from 'react-spinners/HashLoader';
import ImageGalleryItem from './ImageGalleryItem';
import s from './ImageGallery.module.css';
import imageAPI from '../../services/pixabay-api';
import initialScreenPlaceholder from '../../images/initialScreenPlaceholder.jpg';
import errorPlaceholder from '../../images/errorPlaceholder.jpg';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const override = css`
  margin-top: 80px;
`;

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.gallery = React.createRef();
  }

  state = {
    images: null,
    totalSearchResults: null,
    error: null,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;
    const prevPage = prevProps.page;
    const nextPage = this.props.page;

    if (prevQuery !== nextQuery) {
      this.renderNewSearchQuery(nextQuery, nextPage);
    }

    if (prevPage !== nextPage && prevPage < nextPage) {
      this.renderMorePages(nextQuery, nextPage);
    }
  }

  updateImageAvialability = () => {
    if (this.state.images) {
      const result =
        this.state.totalSearchResults > this.state.images.length ? true : false;
      this.props.updateImageAvialability(result);
    }
  };

  renderNewSearchQuery = (nextQuery, nextPage) => {
    this.props.resetSearchPage();
    this.props.updateImageAvialability(false);
    this.setState({ status: Status.PENDING });

    imageAPI
      .fetchImages(nextQuery, nextPage)
      .then(images => {
        console.log(images);
        if (images.totalHits === 0) {
          toast.error(`No images for ${nextQuery}. Please try another query.`);
          this.setState({
            status: Status.REJECTED,
          });
          return;
        }
        this.setState({
          images: images.hits,
          totalSearchResults: images.totalHits,
          status: Status.RESOLVED,
        });
      })
      .catch(error => this.setState({ error, status: Status.REJECTED }))
      .finally(data => {
        this.updateImageAvialability();
      });
  };

  renderMorePages = (nextQuery, nextPage) => {
    imageAPI
      .fetchImages(nextQuery, nextPage)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
        }));
      })
      .catch(error => this.setState({ error, status: Status.REJECTED }))
      .finally(data => {
        const elements = this.gallery.current.children;
        elements[Math.ceil(elements.length / 12) * 12 - 11].scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
        this.updateImageAvialability();
      });
  };

  render() {
    const { status } = this.state;

    if (status === Status.IDLE) {
      return (
        <div>
          <img src={initialScreenPlaceholder} alt="please enter a query" />
        </div>
      );
    }

    if (status === Status.PENDING) {
      return (
        <HashLoader css={override} size={250} color={'orange'} loading={true} />
      );
    }

    if (status === Status.REJECTED) {
      return (
        <div>
          <img src={errorPlaceholder} alt="error" />
        </div>
      );
    }

    if (status === Status.RESOLVED) {
      return (
        <ul className={s.gallery} ref={this.gallery}>
          {this.state.images &&
            this.state.images.map(image => {
              return <ImageGalleryItem image={image} key={image.id} />;
            })}
        </ul>
      );
    }
  }
}

export default ImageGallery;
