import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.scss';

export default class SearchForm extends Component {
  static propTypes = {
    defaultValue: PropTypes.string.isRequired,
    onInput: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };
  render() {
    const {defaultValue, onSubmit, onInput} = this.props;

    return (
      <form className={styles.search} onSubmit={onSubmit}>
        <input
          className={styles.searchText}
          type="text"
          defaultValue={defaultValue}
          onChange={(e) => onInput(e.target.value)}
        />
        <button className={styles.searchButton} type="submit" disabled={!defaultValue.length}>Search album</button>
      </form>
    );
  }
}
