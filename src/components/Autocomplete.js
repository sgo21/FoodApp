import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Autocomplete extends Component {
  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired
  };
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: ''
  };
  render() {
    const {
      onChange,
      onChange,
      onKeyDown,
      userInput,
      state: { activeOption, filteredOptions, showOptions, userInput }
    } = this;
    let optionList;
    return (
      <React.Fragment>
        <div className="search">
          <input
            type="text"
            className="search-form"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
          <input type="submit" value="" className="search-btn" />
          {optionList}
        </div>
      </React.Fragment>
    );
  }
}
export default Autocomplete;