import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ image }) {
  return (
    <li className={s.item}>
      <ProgressiveImage src={image.webformatURL} placeholder={image.previewURL}>
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
    </li>
  );
}

export default ImageGalleryItem;
