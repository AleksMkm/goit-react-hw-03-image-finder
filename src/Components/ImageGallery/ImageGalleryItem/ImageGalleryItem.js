import React from 'react';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ image }) {
  return (
    <li className={s.item}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        data-image={image.largeImageURL}
        className={s.image}
      />
    </li>
  );
}

export default ImageGalleryItem;
