import React, { Component } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IconContext } from 'react-icons';

import s from './Searchbar.module.css';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.btn = React.createRef();
  }

  state = {
    value: '',
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form}>
          <button type="submit" className={s.btn} ref={this.btn}>
            <IconContext.Provider value={{ size: '16px' }}>
              <FiSearch />
            </IconContext.Provider>
          </button>

          <input
            className={s.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
