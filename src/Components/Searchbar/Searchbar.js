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
    value: 'corgi',
  };

  handleInput = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getSearchQuery(this.state.value.toLowerCase().trim());
    this.setState({ value: '' });
    this.btn.current.blur();
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.btn} ref={this.btn}>
            <IconContext.Provider value={{ size: '16px' }}>
              <FiSearch />
            </IconContext.Provider>
          </button>

          <input
            className={s.input}
            type="text"
            value={this.state.value}
            placeholder="Search images and photos"
            onChange={this.handleInput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
