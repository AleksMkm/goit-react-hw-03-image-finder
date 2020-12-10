import React from 'react';
import s from './Button.module.css';

function Button({ updateSearchPage }) {
  return (
    <button className={s.btn} onClick={updateSearchPage}>
      Load more
    </button>
  );
}

export default Button;
