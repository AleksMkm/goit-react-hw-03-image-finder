import React from 'react';
import s from './Button.module.css';

function Button({ loadMoreData }) {
  return (
    <button className={s.btn} onClick={loadMoreData}>
      Load more
    </button>
  );
}

export default Button;
