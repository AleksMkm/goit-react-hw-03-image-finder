import React, { Component } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGalleryItem from './ImageGalleryItem';
import s from './ImageGallery.module.css';
import imageAPI from '../../services/pixabay-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

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

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;
    const prevPage = prevProps.page;
    const nextPage = this.props.page;

    if (prevQuery !== nextQuery) {
      this.setState({ status: Status.PENDING });

      imageAPI.fetchImages(nextQuery, nextPage).then(images => {
        console.log(images);
        this.setState({
          images: images.hits,
          totalSearchResults: images.totalHits,
          status: Status.RESOLVED,
        });
      });
    }

    if (prevPage !== nextPage) {
      this.setState({ status: Status.PENDING });

      imageAPI
        .fetchImages(nextQuery, nextPage)
        .then(images => {
          this.setState({
            images: [...prevState.images, ...images.hits],
            status: Status.RESOLVED,
          });
        })
        .finally(data => {
          const elements = this.gallery.current.children;
          elements[Math.ceil(elements.length / 12) * 12 - 11].scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        });
    }
  }
  render() {
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

export default ImageGallery;
