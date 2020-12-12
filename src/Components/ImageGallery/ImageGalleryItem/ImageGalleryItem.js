import React from 'react';
import LazyLoad from 'react-lazy-load';
import ProgressiveImage from 'react-progressive-image';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ image }) {
  return (
    <li className={s.item}>
      <LazyLoad height={260}>
        <ProgressiveImage
          src={image.webformatURL}
          placeholder={image.previewURL}
        >
          {(src, loading) => (
            <img
              style={{ opacity: loading ? 0.5 : 1 }}
              src={src}
              alt={image.tags}
              data-image={image.largeImageURL}
              className={s.image}
            />
          )}
        </ProgressiveImage>
      </LazyLoad>
    </li>
  );
}

export default ImageGalleryItem;
