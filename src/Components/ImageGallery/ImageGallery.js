import React from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

function ImageGallery({ images, showBigImageInModal }) {
  return (
    <ul className={s.gallery}>
      {images &&
        images.map(image => {
          return (
            <ImageGalleryItem
              image={image}
              showBigImageInModal={showBigImageInModal}
              key={image.id}
            />
          );
        })}
    </ul>
  );
}

export default ImageGallery;
